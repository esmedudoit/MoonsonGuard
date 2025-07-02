import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  decimal,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table for authentication
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table for authentication
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  phoneNumber: varchar("phone_number"),
  address: text("address"),
  city: varchar("city"),
  state: varchar("state"),
  pincode: varchar("pincode"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Insurance policies table
export const policies = pgTable("policies", {
  id: varchar("id").primaryKey().notNull(),
  name: varchar("name").notNull(),
  description: text("description").notNull(),
  coverageAmount: decimal("coverage_amount", { precision: 12, scale: 2 }).notNull(),
  basePremium: decimal("base_premium", { precision: 10, scale: 2 }).notNull(),
  coverageType: varchar("coverage_type").notNull(), // "crop", "property", "livestock"
  features: text("features").array().notNull(),
  eligibilityCriteria: text("eligibility_criteria").array().notNull(),
  exclusions: text("exclusions").array().notNull(),
  claimProcess: text("claim_process").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Policy purchases/applications table
export const policyApplications = pgTable("policy_applications", {
  id: varchar("id").primaryKey().notNull(),
  userId: varchar("user_id").notNull().references(() => users.id),
  policyId: varchar("policy_id").notNull().references(() => policies.id),
  applicationData: jsonb("application_data").notNull(),
  calculatedPremium: decimal("calculated_premium", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status").notNull().default("pending"), // "pending", "approved", "rejected"
  applicationDate: timestamp("application_date").defaultNow(),
  approvalDate: timestamp("approval_date"),
});

// Weather risk data by region
export const weatherRisks = pgTable("weather_risks", {
  id: varchar("id").primaryKey().notNull(),
  state: varchar("state").notNull(),
  district: varchar("district"),
  riskLevel: varchar("risk_level").notNull(), // "low", "medium", "high", "very_high"
  averageRainfall: decimal("average_rainfall", { precision: 8, scale: 2 }),
  floodRisk: integer("flood_risk"), // 1-10 scale
  droughtRisk: integer("drought_risk"), // 1-10 scale
  cycloneRisk: integer("cyclone_risk"), // 1-10 scale
  lastUpdated: timestamp("last_updated").defaultNow(),
});

// Contact inquiries table
export const contactInquiries = pgTable("contact_inquiries", {
  id: varchar("id").primaryKey().notNull(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  phoneNumber: varchar("phone_number"),
  subject: varchar("subject").notNull(),
  message: text("message").notNull(),
  status: varchar("status").default("new"), // "new", "in_progress", "resolved"
  createdAt: timestamp("created_at").defaultNow(),
});

// Type definitions
export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

export type Policy = typeof policies.$inferSelect;
export type InsertPolicy = typeof policies.$inferInsert;

export type PolicyApplication = typeof policyApplications.$inferSelect;
export type InsertPolicyApplication = typeof policyApplications.$inferInsert;

export type WeatherRisk = typeof weatherRisks.$inferSelect;
export type InsertWeatherRisk = typeof weatherRisks.$inferInsert;

export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertContactInquiry = typeof contactInquiries.$inferInsert;

// Zod schemas for validation
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertPolicySchema = createInsertSchema(policies).omit({
  id: true,
  createdAt: true,
});

export const insertPolicyApplicationSchema = createInsertSchema(policyApplications).omit({
  id: true,
  applicationDate: true,
  approvalDate: true,
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  createdAt: true,
  status: true,
});

// Form validation schemas
export const policyApplicationFormSchema = z.object({
  policyId: z.string().min(1, "Please select a policy"),
  applicantName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Please provide a complete address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().min(6, "Please enter a valid pincode"),
  propertyType: z.string().optional(),
  propertyValue: z.number().min(1000, "Property value must be at least ₹1,000").optional(),
  cropType: z.string().optional(),
  farmSize: z.number().min(0.1, "Farm size must be at least 0.1 acres").optional(),
  coverageAmount: z.number().min(1000, "Coverage amount must be at least ₹1,000"),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type PolicyApplicationFormData = z.infer<typeof policyApplicationFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;