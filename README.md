# Monsoon Parametric Insurance Platform - India

A comprehensive web application for browsing and purchasing monsoon insurance policies in India. Built with authentic Indian parametric insurance data and implementing proven models from successful programs.

## Features

- **Insurance Policy Browsing**: 5 authentic policy types with coverage from ₹50K to ₹20L
- **Premium Calculator**: State-based risk assessment with real-time calculations
- **Weather Risk Visualization**: Data for 16 major Indian states
- **Policy Application**: Complete form with validation
- **Parametric Insurance Education**: Information about automatic payouts based on rainfall thresholds

## Technology Stack

- **Frontend**: Vanilla HTML5 with Alpine.js for interactivity
- **Backend**: Node.js Express server with health check endpoints
- **Styling**: Tailwind CSS
- **Data**: Authentic Indian weather risk data embedded in application
- **Deployment**: Cloud-ready with proper health checks

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the server**:
   ```bash
   npm start
   ```

3. **Access the application**:
   - Main application: http://localhost:3000
   - Health check: http://localhost:3000/health

## Deployment

The application is configured for cloud deployment with:
- Express.js server with compression and CORS
- Health check endpoint at `/health`
- Environment variable support for port configuration
- Graceful shutdown handling

## Data Sources

- Authentic weather risk data for major Indian states
- Real-world policy structures from successful programs like Nagaland's DRTPS
- Proven parametric insurance implementation models

## Architecture

The application uses a parametric insurance model with:
- Automatic payouts based on rainfall thresholds
- State-based risk assessment
- Mobile-responsive design
- Professional UI with comprehensive policy information

## License

ISC