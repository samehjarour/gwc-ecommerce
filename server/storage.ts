import { type User, type InsertUser, type Quote, type InsertQuote, type AnalyticsEvent, type InsertAnalyticsEvent } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createQuote(quote: InsertQuote): Promise<Quote>;
  getQuote(id: string): Promise<Quote | undefined>;
  getQuotes(): Promise<Quote[]>;
  updateQuoteStatus(id: string, status: string): Promise<Quote | undefined>;
  createAnalyticsEvent(event: InsertAnalyticsEvent): Promise<AnalyticsEvent>;
  getAnalyticsEvents(filters?: { segment?: string; page?: string; variant?: string }): Promise<AnalyticsEvent[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private quotes: Map<string, Quote>;
  private analyticsEvents: Map<string, AnalyticsEvent>;

  constructor() {
    this.users = new Map();
    this.quotes = new Map();
    this.analyticsEvents = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const id = randomUUID();
    const now = new Date();
    const quote: Quote = { 
      ...insertQuote, 
      id, 
      status: "new",
      createdAt: now,
      updatedAt: now,
      additionalInfo: insertQuote.additionalInfo || null
    };
    this.quotes.set(id, quote);
    return quote;
  }

  async getQuote(id: string): Promise<Quote | undefined> {
    return this.quotes.get(id);
  }

  async getQuotes(): Promise<Quote[]> {
    return Array.from(this.quotes.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async updateQuoteStatus(id: string, status: string): Promise<Quote | undefined> {
    const quote = this.quotes.get(id);
    if (quote) {
      const updatedQuote = { ...quote, status, updatedAt: new Date() };
      this.quotes.set(id, updatedQuote);
      return updatedQuote;
    }
    return undefined;
  }

  async createAnalyticsEvent(insertEvent: InsertAnalyticsEvent): Promise<AnalyticsEvent> {
    const id = randomUUID();
    const event: AnalyticsEvent = { 
      ...insertEvent, 
      id, 
      timestamp: new Date(),
      userId: insertEvent.userId || null,
      meta: insertEvent.meta || null
    };
    this.analyticsEvents.set(id, event);
    return event;
  }

  async getAnalyticsEvents(filters?: { segment?: string; page?: string; variant?: string }): Promise<AnalyticsEvent[]> {
    let events = Array.from(this.analyticsEvents.values());
    
    if (filters) {
      if (filters.segment) {
        events = events.filter(e => e.segment === filters.segment);
      }
      if (filters.page) {
        events = events.filter(e => e.page === filters.page);
      }
      if (filters.variant) {
        events = events.filter(e => e.variant === filters.variant);
      }
    }

    return events.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }
}

export const storage = new MemStorage();
