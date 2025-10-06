import type { Express } from "express";
import { createServer, type Server } from "http";
import rateLimit from "express-rate-limit";
import DOMPurify from "isomorphic-dompurify";
import { storage } from "./storage";
import { insertQuoteSchema, insertAnalyticsEventSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { createHubSpotContact } from "./hubspot";

// Security: Rate limiter for quote submissions
const quoteRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 quote submissions per 15 minutes
  message: { 
    error: "Too many quote submissions", 
    message: "Please try again later" 
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Security: Rate limiter for analytics events
const analyticsRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // Limit each IP to 100 analytics events per minute
  message: { 
    error: "Too many requests", 
    message: "Please slow down" 
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Security: Sanitize user input to prevent XSS
function sanitizeInput(text: string | null | undefined): string | null {
  if (!text) return null;
  return DOMPurify.sanitize(text, { 
    ALLOWED_TAGS: [], // Strip all HTML tags
    ALLOWED_ATTR: [] // Strip all attributes
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote submission endpoint with rate limiting
  app.post("/api/quotes", quoteRateLimiter, async (req, res) => {
    try {
      // Validate the request body
      const validationResult = insertQuoteSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({
          error: "Validation failed",
          details: validationError.message,
        });
      }

      // Security: Sanitize all text inputs including arrays
      // Note: Never use || fallback with sanitized values - empty string means malicious content was removed
      const sanitizedData = {
        ...validationResult.data,
        firstName: sanitizeInput(validationResult.data.firstName) ?? '',
        lastName: sanitizeInput(validationResult.data.lastName) ?? '',
        email: sanitizeInput(validationResult.data.email) ?? '',
        phone: sanitizeInput(validationResult.data.phone) ?? '',
        company: sanitizeInput(validationResult.data.company) ?? '',
        additionalInfo: sanitizeInput(validationResult.data.additionalInfo),
        shipFrom: validationResult.data.shipFrom.map(s => sanitizeInput(s) ?? ''),
        shipTo: validationResult.data.shipTo.map(s => sanitizeInput(s) ?? ''),
        platforms: validationResult.data.platforms.map(p => sanitizeInput(p) ?? ''),
        products: validationResult.data.products.map(p => sanitizeInput(p) ?? ''),
      };

      // Create the quote
      const quote = await storage.createQuote(sanitizedData);
      
      // Send to HubSpot
      try {
        const hubspotContact = await createHubSpotContact(sanitizedData);
        console.log("HubSpot contact synced:", hubspotContact.id);
      } catch (hubspotError) {
        // Log error but don't fail the quote submission
        console.error("Failed to sync HubSpot contact");
      }
      
      console.log("Quote submitted:", quote.id);

      // Return success response
      res.status(201).json({
        success: true,
        quoteId: quote.id,
        message: "Quote request submitted successfully",
      });
    } catch (error) {
      console.error("Error creating quote");
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to submit quote request",
      });
    }
  });

  // Analytics events endpoint with rate limiting
  app.post("/api/analytics/events", analyticsRateLimiter, async (req, res) => {
    try {
      // Validate the request body
      const validationResult = insertAnalyticsEventSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({
          error: "Validation failed",
          details: validationError.message,
        });
      }

      // Security: Sanitize free-form text fields (page is the only user-controlled text)
      // Note: Use ?? instead of || to ensure empty string from sanitization is preserved
      const sanitizedData = {
        ...validationResult.data,
        page: sanitizeInput(validationResult.data.page) ?? '',
      };

      // Create the analytics event
      const event = await storage.createAnalyticsEvent(sanitizedData);
      
      // Return success response
      res.status(201).json({
        success: true,
        eventId: event.id,
      });
    } catch (error) {
      console.error("Error creating analytics event");
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to create analytics event",
      });
    }
  });

  // Analytics data endpoint (for dashboard/analysis)
  // Note: This endpoint should be protected with authentication in production
  app.get("/api/analytics/events", async (req, res) => {
    try {
      const { segment, page, variant } = req.query;
      
      const filters: { segment?: string; page?: string; variant?: string } = {};
      if (typeof segment === 'string') filters.segment = sanitizeInput(segment) ?? '';
      if (typeof page === 'string') filters.page = sanitizeInput(page) ?? '';
      if (typeof variant === 'string') filters.variant = sanitizeInput(variant) ?? '';

      const events = await storage.getAnalyticsEvents(filters);
      
      res.json({ events });
    } catch (error) {
      console.error("Error getting analytics events");
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to retrieve analytics events",
      });
    }
  });

  // Admin endpoints are disabled for security
  // TODO: Implement authentication/authorization before enabling these endpoints
  // These endpoints contain PII and should only be accessible to authorized sales team members
  
  // Temporarily disabled admin endpoints:
  // GET /api/quotes - List all quotes (contains PII)
  // GET /api/quotes/:id - Get specific quote (contains PII) 
  // PATCH /api/quotes/:id/status - Update quote status (business logic)

  const httpServer = createServer(app);

  return httpServer;
}
