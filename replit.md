# GWC Logistics Website

## Overview

This is a modern e-commerce fulfillment platform for GWC, a MENA-based logistics company trusted by 100+ brands for order fulfillment across the Middle East. The application is a full-stack React/Express website featuring a comprehensive quote request system, professional design inspired by logistics leaders like FedEx and DHL, and integration-ready architecture for e-commerce platforms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design system following logistics industry best practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful endpoints with structured error handling and request logging
- **Data Validation**: Zod schemas for runtime type checking and validation
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Development Setup**: Hot reload with Vite integration for seamless development experience

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL (configured via Neon Database serverless)
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Development Storage**: In-memory storage implementation for rapid prototyping

### Component Architecture
- **Design System**: Consistent spacing (4, 8, 12, 16, 24 units), color palette (Brand Blue #220 85% 25%, supporting grays, accent orange)
- **Typography**: Inter/Roboto fonts with clear hierarchy (Bold 700 for headings, Regular 400/Medium 500 for body)
- **Layout System**: Responsive grid layouts with mobile-first approach
- **Interactive Elements**: Smooth animations, parallax effects, carousel components with auto-scroll

### Quote System
- **Multi-step Form**: Progressive disclosure with 3-step process (Shipping Details, Platform & Products, Contact Information)
- **Data Collection**: Comprehensive quote request capturing shipping origins/destinations, platform integrations, product categories
- **Validation**: Client and server-side validation with real-time feedback
- **Processing**: Quote submission with email notification system (configured for future implementation)

## External Dependencies

### UI and Styling
- **Radix UI**: Complete set of accessible, unstyled UI primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Consistent icon library for UI elements
- **Class Variance Authority**: Type-safe component variant management

### Development and Build
- **Vite**: Fast build tool with HMR and optimized production builds
- **TypeScript**: Static type checking with strict configuration
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment optimization plugins

### Backend Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connect PG Simple**: PostgreSQL session store for Express
- **Date-fns**: Date manipulation and formatting utilities

### Form and Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation for TypeScript with runtime checking
- **TanStack Query**: Server state management with caching and synchronization

### Assets and Media
- **Static Assets**: Professional truck/van imagery, brand logos (Sony, IKEA, Zara, Adidas, H&M)
- **Font Integration**: Google Fonts integration for typography consistency
- **Image Optimization**: Responsive image handling with proper alt text and loading strategies