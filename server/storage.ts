import { type User, type InsertUser, type Quote, type InsertQuote } from "@shared/schema";
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
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private quotes: Map<string, Quote>;

  constructor() {
    this.users = new Map();
    this.quotes = new Map();
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
}

export const storage = new MemStorage();
