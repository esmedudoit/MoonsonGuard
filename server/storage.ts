import {
  users,
  policies,
  policyApplications,
  weatherRisks,
  contactInquiries,
  type User,
  type UpsertUser,
  type Policy,
  type InsertPolicy,
  type PolicyApplication,
  type InsertPolicyApplication,
  type WeatherRisk,
  type InsertWeatherRisk,
  type ContactInquiry,
  type InsertContactInquiry,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations (mandatory for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Policy operations
  getAllPolicies(): Promise<Policy[]>;
  getPolicyById(id: string): Promise<Policy | undefined>;
  createPolicy(policy: InsertPolicy): Promise<Policy>;
  
  // Policy application operations
  createPolicyApplication(application: InsertPolicyApplication): Promise<PolicyApplication>;
  getUserPolicyApplications(userId: string): Promise<PolicyApplication[]>;
  getPolicyApplicationById(id: string): Promise<PolicyApplication | undefined>;
  
  // Weather risk operations
  getWeatherRisksByState(state: string): Promise<WeatherRisk[]>;
  getAllWeatherRisks(): Promise<WeatherRisk[]>;
  
  // Contact inquiry operations
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Policy operations
  async getAllPolicies(): Promise<Policy[]> {
    return await db.select().from(policies).where(eq(policies.isActive, true));
  }

  async getPolicyById(id: string): Promise<Policy | undefined> {
    const [policy] = await db.select().from(policies).where(eq(policies.id, id));
    return policy;
  }

  async createPolicy(policyData: InsertPolicy): Promise<Policy> {
    const [policy] = await db.insert(policies).values(policyData).returning();
    return policy;
  }

  // Policy application operations
  async createPolicyApplication(applicationData: InsertPolicyApplication): Promise<PolicyApplication> {
    const [application] = await db
      .insert(policyApplications)
      .values(applicationData)
      .returning();
    return application;
  }

  async getUserPolicyApplications(userId: string): Promise<PolicyApplication[]> {
    return await db
      .select()
      .from(policyApplications)
      .where(eq(policyApplications.userId, userId))
      .orderBy(desc(policyApplications.applicationDate));
  }

  async getPolicyApplicationById(id: string): Promise<PolicyApplication | undefined> {
    const [application] = await db
      .select()
      .from(policyApplications)
      .where(eq(policyApplications.id, id));
    return application;
  }

  // Weather risk operations
  async getWeatherRisksByState(state: string): Promise<WeatherRisk[]> {
    return await db
      .select()
      .from(weatherRisks)
      .where(eq(weatherRisks.state, state));
  }

  async getAllWeatherRisks(): Promise<WeatherRisk[]> {
    return await db.select().from(weatherRisks);
  }

  // Contact inquiry operations
  async createContactInquiry(inquiryData: InsertContactInquiry): Promise<ContactInquiry> {
    const [inquiry] = await db
      .insert(contactInquiries)
      .values(inquiryData)
      .returning();
    return inquiry;
  }
}

export const storage = new DatabaseStorage();