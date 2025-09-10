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

  // Get all quotes (for admin/sales team)
  app.get("/api/quotes", async (req, res) => {
    try {
      const quotes = await storage.getQuotes();
      res.json(quotes);
    } catch (error) {
      console.error("Error fetching quotes:", error);
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to fetch quotes",
      });
    }
  });

  // Get specific quote
  app.get("/api/quotes/:id", async (req, res) => {
    try {
      const quote = await storage.getQuote(req.params.id);
      if (!quote) {
        return res.status(404).json({
          error: "Quote not found",
        });
      }
      res.json(quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to fetch quote",
      });
    }
  });

  // Update quote status
  app.patch("/api/quotes/:id/status", async (req, res) => {
    try {
      const { status } = req.body;
      if (!status || typeof status !== "string") {
        return res.status(400).json({
          error: "Invalid status",
        });
      }

      const quote = await storage.updateQuoteStatus(req.params.id, status);
      if (!quote) {
        return res.status(404).json({
          error: "Quote not found",
        });
      }

      res.json(quote);
    } catch (error) {
      console.error("Error updating quote status:", error);
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to update quote status",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
