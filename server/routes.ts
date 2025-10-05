import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteSchema, insertAnalyticsEventSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { createHubSpotContact } from "./hubspot";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote submission endpoint
  app.post("/api/quotes", async (req, res) => {
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

      // Create the quote
      const quote = await storage.createQuote(validationResult.data);
      
      // Send to HubSpot
      try {
        const hubspotContact = await createHubSpotContact(validationResult.data);
        console.log("HubSpot contact created:", hubspotContact.id);
      } catch (hubspotError) {
        // Log error but don't fail the quote submission
        console.error("Failed to create HubSpot contact:", hubspotError);
      }
      
      console.log("New quote submitted:", {
        id: quote.id,
        company: quote.company,
        email: quote.email,
        name: `${quote.firstName} ${quote.lastName}`,
      });

      // Return success response
      res.status(201).json({
        success: true,
        quoteId: quote.id,
        message: "Quote request submitted successfully",
      });
    } catch (error) {
      console.error("Error creating quote:", error);
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to submit quote request",
      });
    }
  });

  // Analytics events endpoint
  app.post("/api/analytics/events", async (req, res) => {
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

      // Create the analytics event
      const event = await storage.createAnalyticsEvent(validationResult.data);
      
      // Return success response
      res.status(201).json({
        success: true,
        eventId: event.id,
      });
    } catch (error) {
      console.error("Error creating analytics event:", error);
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to create analytics event",
      });
    }
  });

  // Analytics data endpoint (for dashboard/analysis)
  app.get("/api/analytics/events", async (req, res) => {
    try {
      const { segment, page, variant } = req.query;
      
      const filters: { segment?: string; page?: string; variant?: string } = {};
      if (typeof segment === 'string') filters.segment = segment;
      if (typeof page === 'string') filters.page = page;
      if (typeof variant === 'string') filters.variant = variant;

      const events = await storage.getAnalyticsEvents(filters);
      
      res.json({ events });
    } catch (error) {
      console.error("Error getting analytics events:", error);
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
