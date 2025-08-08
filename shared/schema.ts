import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  apiKey: text("api_key").unique(),
  tier: text("tier").notNull().default("free"), // free, pro, enterprise
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
  updatedAt: timestamp("updated_at").notNull().default(sql`now()`)
});

export const apiKeys = pgTable("api_keys", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: text("user_id").notNull().references(() => users.id),
  keyName: text("key_name").notNull(),
  keyValue: text("key_value").notNull().unique(),
  permissions: jsonb("permissions").$type<string[]>().default([]),
  isActive: boolean("is_active").notNull().default(true),
  lastUsed: timestamp("last_used"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`)
});

export const apiUsage = pgTable("api_usage", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: text("user_id").notNull().references(() => users.id),
  apiKeyId: text("api_key_id").references(() => apiKeys.id),
  endpoint: text("endpoint").notNull(),
  model: text("model"),
  tokensUsed: integer("tokens_used").notNull().default(0),
  requestCount: integer("request_count").notNull().default(1),
  timestamp: timestamp("timestamp").notNull().default(sql`now()`)
});

export const models = pgTable("models", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  capabilities: jsonb("capabilities").$type<string[]>().default([]),
  contextWindow: integer("context_window").notNull(),
  maxOutput: integer("max_output").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  tier: text("tier").notNull().default("free") // free, pro, enterprise
});

export const codeAnalysis = pgTable("code_analysis", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: text("user_id").notNull().references(() => users.id),
  language: text("language").notNull(),
  code: text("code").notNull(),
  analysisType: jsonb("analysis_type").$type<string[]>().default([]),
  results: jsonb("results").$type<Record<string, any>>(),
  createdAt: timestamp("created_at").notNull().default(sql`now()`)
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const insertApiKeySchema = createInsertSchema(apiKeys).omit({
  id: true,
  createdAt: true
});

export const insertApiUsageSchema = createInsertSchema(apiUsage).omit({
  id: true,
  timestamp: true
});

export const insertModelSchema = createInsertSchema(models);

export const insertCodeAnalysisSchema = createInsertSchema(codeAnalysis).omit({
  id: true,
  createdAt: true
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertApiKey = z.infer<typeof insertApiKeySchema>;
export type ApiKey = typeof apiKeys.$inferSelect;

export type InsertApiUsage = z.infer<typeof insertApiUsageSchema>;
export type ApiUsage = typeof apiUsage.$inferSelect;

export type InsertModel = z.infer<typeof insertModelSchema>;
export type Model = typeof models.$inferSelect;

export type InsertCodeAnalysis = z.infer<typeof insertCodeAnalysisSchema>;
export type CodeAnalysis = typeof codeAnalysis.$inferSelect;
