import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes";
import { seedDatabase } from "./seed";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
  try {
    // Register routes and set up authentication
    const server = await registerRoutes(app);
    
    // Seed database with initial data
    try {
      await seedDatabase();
    } catch (seedError) {
      console.log("Database seeding skipped (data may already exist):", seedError.message);
    }
    
    server.listen(Number(PORT), '0.0.0.0', () => {
      console.log(`🌧️ Monsoon Insurance Platform running on port ${PORT}`);
      console.log(`📊 Database connected and seeded with policy data`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();