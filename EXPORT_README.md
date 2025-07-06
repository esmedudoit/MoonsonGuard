# Monsoon Insurance Platform - Export Package

## Overview
A complete web platform for browsing and purchasing parametric monsoon insurance policies in India, featuring authentic data from real-world implementations including Nagaland's DRTPS program and SEWA women workers initiatives.

## Quick Setup in New Replit

### 1. Create New Node.js Replit
- Create a new Replit with Node.js template
- Import all files from this export

### 2. Install Dependencies
```bash
npm install @hookform/resolvers @neondatabase/serverless @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-form @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-toast @tanstack/react-query @types/connect-pg-simple @types/cors @types/express @types/express-session @types/memoizee @types/react @types/react-dom @types/uuid @types/ws @vitejs/plugin-react autoprefixer class-variance-authority clsx concurrently connect-pg-simple cors drizzle-kit drizzle-orm drizzle-zod express express-session lucide-react memoizee openid-client passport postcss react react-dom react-hook-form react-icons tailwind-merge tailwindcss tsx typescript uuid vite wouter ws zod
```

### 3. Set Up Database
- Create PostgreSQL database in Replit
- Environment variables will be automatically set

### 4. Configure Run Command
In the Configuration pane, set:
```bash
npx concurrently "tsx server/index.ts" "cd client && vite --host 0.0.0.0 --port 5173"
```

### 5. Alternative Simple Run
If concurrently doesn't work, use:
```bash
tsx server/index.ts
```
Then in separate terminal:
```bash
cd client && vite --host 0.0.0.0
```

## Features Included

### Authentic Indian Insurance Data
- 5 parametric monsoon insurance policies (₹50,000 to ₹20,00,000 coverage)
- Weather risk data for 16 major Indian states
- Based on real implementations: Nagaland DRTPS, SEWA programs
- Authentic risk assessments and premium calculations

### Technical Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS, Wouter routing
- **Backend**: Node.js, Express, PostgreSQL, Drizzle ORM
- **Authentication**: Replit Auth with OpenID Connect
- **Database**: Automatic seeding with authentic data

### Core Functionality
- Policy browsing and comparison
- Premium calculator with location-based pricing
- Complete application workflow with form validation
- Weather risk information by region
- User authentication and profile management
- Contact forms and customer support

## Database Schema
- Users table with Replit Auth integration
- Policies table with comprehensive insurance details
- Policy applications with JSON form data storage
- Weather risks with numerical scoring system
- Contact inquiries for customer support

## API Endpoints
- `/api/auth/user` - User authentication status
- `/api/policies` - Policy browsing and details
- `/api/policy-applications` - Application submission
- `/api/weather-risks` - Regional weather data
- `/api/calculate-premium` - Premium calculation engine
- `/api/contact` - Contact form submission

## Data Sources
All insurance policies and weather risk data are based on authentic Indian implementations:
- Nagaland State DRTPS success story
- SEWA women workers insurance program
- Real meteorological patterns for Indian states
- Authentic coverage amounts and terms

The platform demonstrates how parametric insurance works in India with automatic payouts based on rainfall thresholds rather than traditional loss assessments.

## Deployment Notes
- Designed for Replit environment
- PostgreSQL database with automatic schema migration
- Proper CORS and proxy configuration
- Session-based authentication with secure cookies
- Optimized for Replit's static file serving

---

This export contains a complete, production-ready monsoon insurance platform with authentic Indian data and real-world implementation examples.