import { db } from "./db";
import { policies, weatherRisks } from "../shared/schema";
import { v4 as uuidv4 } from "uuid";

export async function seedDatabase() {
  console.log("Seeding database with monsoon insurance data...");

  // Seed realistic monsoon insurance policies based on Indian market
  const insurancePolicies = [
    {
      id: uuidv4(),
      name: "Parametric Monsoon Protection Plus",
      description: "Advanced parametric insurance providing pre-defined payouts based on rainfall data. Payouts are triggered automatically when rainfall exceeds predetermined thresholds, eliminating lengthy claim assessments.",
      coverageAmount: "500000.00",
      basePremium: "15000.00",
      coverageType: "crop",
      features: [
        "Automatic payout triggers based on rainfall data",
        "No individual loss assessment required",
        "Faster claim processing (within 7 days)",
        "Coverage for excess rainfall and flooding",
        "Satellite-based rainfall monitoring",
        "SMS alerts for weather warnings"
      ],
      eligibilityCriteria: [
        "Farmers with land ownership documents",
        "Minimum 1 acre farmland",
        "Crops must be monsoon-dependent",
        "Previous year's cultivation proof required"
      ],
      exclusions: [
        "War and nuclear risks",
        "Intentional damage to crops",
        "Pest attacks not related to weather",
        "Poor farming practices"
      ],
      claimProcess: "Automatic payout when rainfall exceeds 150% of normal levels or falls below 50% for 15 consecutive days during monsoon season.",
      isActive: true
    },
    {
      id: uuidv4(),
      name: "Property Flood Shield",
      description: "Comprehensive protection against monsoon-related property damage including flooding, waterlogging, and structural damage caused by excessive rainfall.",
      coverageAmount: "1000000.00",
      basePremium: "35000.00",
      coverageType: "property",
      features: [
        "24/7 emergency response team",
        "Temporary accommodation coverage",
        "Electronic appliance protection",
        "Foundation and structural damage coverage",
        "Alternative living expense reimbursement",
        "Professional cleaning and restoration"
      ],
      eligibilityCriteria: [
        "Property ownership or long-term lease",
        "Property age less than 30 years",
        "Located in flood-prone areas",
        "Basic flood prevention measures implemented"
      ],
      exclusions: [
        "Pre-existing structural damage",
        "Properties in declared high-risk zones",
        "Negligent maintenance",
        "Damage from poor construction"
      ],
      claimProcess: "Submit claim within 48 hours of damage with photos and rainfall data verification. Assessment completed within 5 working days.",
      isActive: true
    },
    {
      id: uuidv4(),
      name: "Livestock Monsoon Care",
      description: "Specialized insurance for livestock protection during monsoon season, covering disease outbreaks, feed shortage, and animal loss due to flooding.",
      coverageAmount: "300000.00",
      basePremium: "18000.00",
      coverageType: "livestock",
      features: [
        "Veterinary emergency services",
        "Feed shortage compensation",
        "Vaccination and treatment coverage",
        "Shelter reconstruction support",
        "Disease outbreak protection",
        "Transportation to safe zones"
      ],
      eligibilityCriteria: [
        "Registered livestock ownership",
        "Minimum 10 animals",
        "Veterinary health certificates",
        "Proper shelter facilities"
      ],
      exclusions: [
        "Pre-existing diseases",
        "Animals over 8 years old",
        "Negligent animal care",
        "Non-monsoon related deaths"
      ],
      claimProcess: "Immediate veterinary assessment required. Claims processed within 3 days for emergency medical treatment.",
      isActive: true
    },
    {
      id: uuidv4(),
      name: "Micro Monsoon Shield",
      description: "Affordable parametric insurance for small farmers and informal workers, inspired by SEWA's success in protecting women workers from extreme weather impacts.",
      coverageAmount: "50000.00",
      basePremium: "2500.00",
      coverageType: "crop",
      features: [
        "Low premium affordable coverage",
        "Mobile-based claim reporting",
        "Community group discounts",
        "Flexible payment options",
        "Local language support",
        "Financial literacy training"
      ],
      eligibilityCriteria: [
        "Small and marginal farmers",
        "Annual income below ₹2 lakhs",
        "Valid identity documents",
        "Group enrollment preferred"
      ],
      exclusions: [
        "Commercial farming operations",
        "High-value crops without declaration",
        "Land disputes",
        "Illegal cultivation"
      ],
      claimProcess: "Simplified process with community verification. Payouts through digital wallets or bank transfers within 5 days.",
      isActive: true
    },
    {
      id: uuidv4(),
      name: "Nagaland State Disaster Protection",
      description: "State-sponsored parametric insurance solution similar to Nagaland's DRTPS, providing comprehensive protection against monsoon disasters for communities.",
      coverageAmount: "2000000.00",
      basePremium: "60000.00",
      coverageType: "property",
      features: [
        "State government backing",
        "Community-wide coverage",
        "Disaster management integration",
        "Early warning systems",
        "Rehabilitation support",
        "Infrastructure protection"
      ],
      eligibilityCriteria: [
        "Residents of participating districts",
        "Community enrollment required",
        "Government identity verification",
        "Disaster management training completed"
      ],
      exclusions: [
        "Areas with pending land disputes",
        "Unauthorized constructions",
        "Non-compliance with building codes",
        "Previously declared unsafe zones"
      ],
      claimProcess: "State disaster management authority coordinates assessment. Community payouts processed within 10 days of disaster declaration.",
      isActive: true
    }
  ];

  // Seed weather risk data for major Indian states
  const weatherRiskData = [
    // Nagaland - Pioneer in parametric insurance
    {
      id: uuidv4(),
      state: "Nagaland",
      district: "Kohima",
      riskLevel: "high",
      averageRainfall: "1800.00",
      floodRisk: 8,
      droughtRisk: 3,
      cycloneRisk: 2,
    },
    {
      id: uuidv4(),
      state: "Nagaland",
      district: "Dimapur",
      riskLevel: "very_high",
      averageRainfall: "2200.00",
      floodRisk: 9,
      droughtRisk: 2,
      cycloneRisk: 1,
    },
    // Kerala - High monsoon activity
    {
      id: uuidv4(),
      state: "Kerala",
      district: "Idukki",
      riskLevel: "very_high",
      averageRainfall: "3000.00",
      floodRisk: 10,
      droughtRisk: 1,
      cycloneRisk: 4,
    },
    {
      id: uuidv4(),
      state: "Kerala",
      district: "Wayanad",
      riskLevel: "high",
      averageRainfall: "2800.00",
      floodRisk: 9,
      droughtRisk: 2,
      cycloneRisk: 3,
    },
    // Maharashtra - Mixed risk levels
    {
      id: uuidv4(),
      state: "Maharashtra",
      district: "Mumbai",
      riskLevel: "high",
      averageRainfall: "2200.00",
      floodRisk: 8,
      droughtRisk: 4,
      cycloneRisk: 6,
    },
    {
      id: uuidv4(),
      state: "Maharashtra",
      district: "Pune",
      riskLevel: "medium",
      averageRainfall: "600.00",
      floodRisk: 5,
      droughtRisk: 6,
      cycloneRisk: 3,
    },
    // West Bengal - Cyclone prone
    {
      id: uuidv4(),
      state: "West Bengal",
      district: "Kolkata",
      riskLevel: "high",
      averageRainfall: "1600.00",
      floodRisk: 7,
      droughtRisk: 3,
      cycloneRisk: 9,
    },
    {
      id: uuidv4(),
      state: "West Bengal",
      district: "North 24 Parganas",
      riskLevel: "very_high",
      averageRainfall: "1800.00",
      floodRisk: 9,
      droughtRisk: 2,
      cycloneRisk: 10,
    },
    // Assam - Flood prone
    {
      id: uuidv4(),
      state: "Assam",
      district: "Guwahati",
      riskLevel: "very_high",
      averageRainfall: "2500.00",
      floodRisk: 10,
      droughtRisk: 2,
      cycloneRisk: 1,
    },
    {
      id: uuidv4(),
      state: "Assam",
      district: "Silchar",
      riskLevel: "high",
      averageRainfall: "2200.00",
      floodRisk: 9,
      droughtRisk: 3,
      cycloneRisk: 2,
    },
    // Rajasthan - Drought prone
    {
      id: uuidv4(),
      state: "Rajasthan",
      district: "Jaipur",
      riskLevel: "medium",
      averageRainfall: "400.00",
      floodRisk: 2,
      droughtRisk: 9,
      cycloneRisk: 1,
    },
    {
      id: uuidv4(),
      state: "Rajasthan",
      district: "Jodhpur",
      riskLevel: "low",
      averageRainfall: "300.00",
      floodRisk: 1,
      droughtRisk: 10,
      cycloneRisk: 1,
    },
    // Tamil Nadu - Cyclone and drought risk
    {
      id: uuidv4(),
      state: "Tamil Nadu",
      district: "Chennai",
      riskLevel: "high",
      averageRainfall: "1200.00",
      floodRisk: 7,
      droughtRisk: 5,
      cycloneRisk: 8,
    },
    {
      id: uuidv4(),
      state: "Tamil Nadu",
      district: "Coimbatore",
      riskLevel: "medium",
      averageRainfall: "800.00",
      floodRisk: 4,
      droughtRisk: 6,
      cycloneRisk: 3,
    },
    // Odisha - Cyclone prone
    {
      id: uuidv4(),
      state: "Odisha",
      district: "Bhubaneswar",
      riskLevel: "high",
      averageRainfall: "1500.00",
      floodRisk: 8,
      droughtRisk: 4,
      cycloneRisk: 9,
    },
    {
      id: uuidv4(),
      state: "Odisha",
      district: "Cuttack",
      riskLevel: "very_high",
      averageRainfall: "1700.00",
      floodRisk: 9,
      droughtRisk: 3,
      cycloneRisk: 10,
    }
  ];

  try {
    // Insert policies
    console.log("Inserting insurance policies...");
    await db.insert(policies).values(insurancePolicies);
    
    // Insert weather risk data
    console.log("Inserting weather risk data...");
    await db.insert(weatherRisks).values(weatherRiskData);
    
    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}