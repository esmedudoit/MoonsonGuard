# Replit.md

## Overview

A comprehensive web platform for browsing and purchasing parametric monsoon insurance policies in India. The platform features user authentication through Replit Auth, policy comparison tools, premium calculators, weather risk information, and a complete application flow for purchasing monsoon insurance coverage.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI**: Tailwind CSS with custom monsoon-themed design system
- **State Management**: TanStack Query for server state
- **Authentication**: Replit OpenID Connect integration

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js with OpenID Connect
- **API Design**: RESTful endpoints with proper error handling

### Database Schema
- **Users**: Authentication and profile information
- **Policies**: Insurance policy definitions and terms
- **Policy Applications**: User application submissions
- **Weather Risks**: Regional climate risk data
- **Contact Inquiries**: Customer support requests

## Key Features

### Authentication System
- Replit OpenID Connect integration
- Session management with PostgreSQL storage
- Protected routes and API endpoints
- User profile management

### Insurance Platform
- **Policy Browsing**: Browse available monsoon insurance policies
- **Premium Calculator**: Calculate premiums based on location and coverage
- **Policy Applications**: Complete application flow with form validation
- **Weather Risk Data**: Display regional weather risks and historical data
- **Contact Forms**: Customer support and inquiry handling

### Real-World Data
- Based on authentic Indian parametric insurance implementations
- Nagaland State DRTPS success story integration
- SEWA women workers insurance program reference
- Realistic policy terms and coverage amounts
- Authentic regional weather risk data for Indian states

## Data Sources & Authenticity

### Insurance Policies
- Parametric Monsoon Protection Plus (₹5,00,000 coverage)
- Property Flood Shield (₹10,00,000 coverage)
- Livestock Monsoon Care (₹3,00,000 coverage)
- Micro Monsoon Shield (₹50,000 coverage)
- Nagaland State Disaster Protection (₹20,00,000 coverage)

### Weather Risk Database
- 16 major Indian states and districts covered
- Risk levels: Low, Medium, High, Very High
- Rainfall data, flood risk, drought risk, and cyclone risk ratings
- Based on authentic meteorological patterns

## Technical Implementation

### Database Models
- Users table with Replit Auth integration
- Policies table with comprehensive insurance details
- Policy applications with JSON storage for form data
- Weather risks with numerical risk scoring
- Contact inquiries for customer support

### API Endpoints
- `/api/auth/user` - User authentication status
- `/api/policies` - Policy browsing and details
- `/api/policy-applications` - Application submission
- `/api/weather-risks` - Regional weather data
- `/api/calculate-premium` - Premium calculation
- `/api/contact` - Contact form submission

### Security Features
- Protected API routes requiring authentication
- Form validation using Zod schemas
- SQL injection prevention through parameterized queries
- Session-based authentication with secure cookies

## Deployment Configuration

- **Database**: PostgreSQL with automatic schema migration
- **Environment**: Replit-optimized with proper CORS and proxy setup
- **Scripts**: Automated startup script for development environment
- **Assets**: Optimized for Replit's static file serving

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### July 02, 2025 - Monsoon Insurance Platform Implementation
✅ Complete full-stack monsoon insurance platform built
✅ Authentic Indian parametric insurance data integrated
✅ Replit Auth with PostgreSQL session storage
✅ Responsive UI with monsoon-themed design system
✅ Premium calculation engine with risk-based pricing
✅ Weather risk database for all major Indian states
✅ Policy application workflow with form validation
✅ Database seeded with real-world insurance examples
✅ Contact forms and customer support integration
✅ Development environment configuration completed

### Architecture Decisions
- Chose parametric insurance model based on Nagaland DRTPS success
- Implemented risk-based premium calculation
- Used authentic Indian state weather data
- Integrated SEWA women workers insurance program insights
- Applied "Insurance for All by 2047" initiative principles