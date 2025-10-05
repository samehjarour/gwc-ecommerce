import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const quotes = pgTable("quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company").notNull(),
  shipFrom: jsonb("ship_from").notNull(), // Array of origin countries
  shipTo: jsonb("ship_to").notNull(), // Array of destination countries
  platforms: jsonb("platforms").notNull(), // Array of platform integrations
  products: jsonb("products").notNull(), // Array of product categories
  additionalInfo: text("additional_info"),
  status: text("status").notNull().default("new"), // new, contacted, closed
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const analyticsEvents = pgTable("analytics_events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull(),
  userId: text("user_id"), // Optional user ID for logged-in users
  page: text("page").notNull(), // /eu-sme-gcc, /tech, etc.
  segment: text("segment").notNull(), // eu-sme, tech, uae-regional
  variant: text("variant").notNull(), // A, B for A/B testing
  event: text("event").notNull(), // view, cta_click, form_submit, scroll_depth
  meta: jsonb("meta"), // Additional data like CTA ID, scroll percentage
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertQuoteSchema = createInsertSchema(quotes).omit({
  id: true,
  status: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  shipFrom: z.array(z.string()).min(1, "Please select at least one origin country"),
  shipTo: z.array(z.string()).min(1, "Please select at least one destination"),
  platforms: z.array(z.string()).min(1, "Please select at least one platform"),
  products: z.array(z.string()).min(1, "Please select at least one product category"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
});

export const insertAnalyticsEventSchema = createInsertSchema(analyticsEvents).omit({
  id: true,
  timestamp: true,
}).extend({
  sessionId: z.string().min(1, "Session ID is required"),
  page: z.string().min(1, "Page is required"),
  segment: z.enum(["eu-sme", "tech", "uae-regional", "gcc-to-eu", "enterprise", "homepage", "home_dynamic"]),
  variant: z.enum(["A", "B", "C"]),
  event: z.enum(["view", "cta_click", "form_submit", "scroll_depth", "pricing_view"]),
  meta: z.record(z.any()).optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertQuote = z.infer<typeof insertQuoteSchema>;
export type Quote = typeof quotes.$inferSelect;
export type InsertAnalyticsEvent = z.infer<typeof insertAnalyticsEventSchema>;
export type AnalyticsEvent = typeof analyticsEvents.$inferSelect;
