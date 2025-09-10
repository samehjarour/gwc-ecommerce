import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

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
      
      // TODO: Send email notification to sales team
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
