import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { 
  policyApplicationFormSchema, 
  contactFormSchema,
  type PolicyApplicationFormData,
  type ContactFormData 
} from "../shared/schema";
import { v4 as uuidv4 } from "uuid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Policy routes
  app.get('/api/policies', async (req, res) => {
    try {
      const policies = await storage.getAllPolicies();
      res.json(policies);
    } catch (error) {
      console.error("Error fetching policies:", error);
      res.status(500).json({ message: "Failed to fetch policies" });
    }
  });

  app.get('/api/policies/:id', async (req, res) => {
    try {
      const policy = await storage.getPolicyById(req.params.id);
      if (!policy) {
        return res.status(404).json({ message: "Policy not found" });
      }
      res.json(policy);
    } catch (error) {
      console.error("Error fetching policy:", error);
      res.status(500).json({ message: "Failed to fetch policy" });
    }
  });

  // Weather risk routes
  app.get('/api/weather-risks', async (req, res) => {
    try {
      const { state } = req.query;
      let weatherRisks;
      
      if (state && typeof state === 'string') {
        weatherRisks = await storage.getWeatherRisksByState(state);
      } else {
        weatherRisks = await storage.getAllWeatherRisks();
      }
      
      res.json(weatherRisks);
    } catch (error) {
      console.error("Error fetching weather risks:", error);
      res.status(500).json({ message: "Failed to fetch weather risks" });
    }
  });

  // Policy application routes
  app.post('/api/policy-applications', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const validatedData = policyApplicationFormSchema.parse(req.body);
      
      // Calculate premium based on coverage amount and risk factors
      // This is a simplified calculation - in real world, this would be more complex
      const basePremiumRate = 0.05; // 5% of coverage amount
      const calculatedPremium = validatedData.coverageAmount * basePremiumRate;
      
      const application = await storage.createPolicyApplication({
        id: uuidv4(),
        userId,
        policyId: validatedData.policyId,
        applicationData: validatedData,
        calculatedPremium: calculatedPremium.toString(),
      });
      
      res.status(201).json(application);
    } catch (error) {
      console.error("Error creating policy application:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ message: "Invalid form data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create policy application" });
    }
  });

  app.get('/api/policy-applications', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const applications = await storage.getUserPolicyApplications(userId);
      res.json(applications);
    } catch (error) {
      console.error("Error fetching policy applications:", error);
      res.status(500).json({ message: "Failed to fetch policy applications" });
    }
  });

  // Contact form route
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      const inquiry = await storage.createContactInquiry({
        id: uuidv4(),
        ...validatedData,
      });
      
      res.status(201).json({ message: "Contact inquiry submitted successfully", inquiry });
    } catch (error) {
      console.error("Error creating contact inquiry:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ message: "Invalid form data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to submit contact inquiry" });
    }
  });

  // Premium calculation endpoint
  app.post('/api/calculate-premium', async (req, res) => {
    try {
      const { coverageAmount, state, coverageType, propertyValue, farmSize } = req.body;
      
      if (!coverageAmount || !state || !coverageType) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Get weather risk data for the state
      const weatherRisks = await storage.getWeatherRisksByState(state);
      const averageRisk = weatherRisks.length > 0 
        ? weatherRisks.reduce((acc, risk) => {
            const riskScore = risk.riskLevel === 'low' ? 1 : 
                            risk.riskLevel === 'medium' ? 2 : 
                            risk.riskLevel === 'high' ? 3 : 4;
            return acc + riskScore;
          }, 0) / weatherRisks.length
        : 2; // Default medium risk
      
      // Base premium calculation
      let basePremiumRate = 0.03; // 3% base rate
      
      // Adjust for coverage type
      const typeMultipliers = {
        crop: 1.2,
        property: 1.0,
        livestock: 1.5,
      };
      
      basePremiumRate *= typeMultipliers[coverageType as keyof typeof typeMultipliers] || 1.0;
      
      // Adjust for risk level
      const riskMultiplier = 0.5 + (averageRisk * 0.25); // 0.75x to 1.5x based on risk
      basePremiumRate *= riskMultiplier;
      
      const calculatedPremium = coverageAmount * basePremiumRate;
      
      res.json({
        coverageAmount,
        calculatedPremium: Math.round(calculatedPremium),
        basePremiumRate: (basePremiumRate * 100).toFixed(2),
        riskLevel: averageRisk <= 1.5 ? 'low' : averageRisk <= 2.5 ? 'medium' : averageRisk <= 3.5 ? 'high' : 'very_high',
        breakdown: {
          baseRate: '3.00%',
          typeAdjustment: `${((typeMultipliers[coverageType as keyof typeof typeMultipliers] || 1.0) * 100).toFixed(0)}%`,
          riskAdjustment: `${(riskMultiplier * 100).toFixed(0)}%`,
        }
      });
    } catch (error) {
      console.error("Error calculating premium:", error);
      res.status(500).json({ message: "Failed to calculate premium" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}