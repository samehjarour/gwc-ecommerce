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

### Security Architecture (October 2025)
Comprehensive security hardening implemented to meet production security standards and pass penetration testing:

#### HTTP Security Headers (Helmet)
- **Content Security Policy (CSP)**: Strict in production (no unsafe-inline/unsafe-eval), relaxed only in development for Vite HMR
  - **mediaSrc**: Configured to allow video playback from same origin ('self') for landing page videos
- **HSTS**: 1-year max-age with includeSubDomains and preload
- **X-Frame-Options**: DENY to prevent clickjacking
- **X-Content-Type-Options**: nosniff to prevent MIME sniffing
- **XSS Protection**: Enabled for legacy browsers

#### CORS Configuration
- **Development**: Permissive for Vite HMR and local development
- **Production**: Restricted to allowed origins with proper subdomain matching (prevents suffix spoofing)
- **Origin Validation**: Exact match or dot-delimited subdomain check, supports ALLOWED_ORIGINS and REPLIT_DOMAINS env vars

#### Rate Limiting
- **Quote Submissions**: 5 requests per 15 minutes per IP
- **Analytics Events**: 100 requests per minute per IP
- **Trust Proxy**: Enabled for accurate IP detection behind Replit proxy

#### Input Sanitization
- **XSS Prevention**: DOMPurify sanitizes all user text inputs (quotes, analytics data)
- **Array Sanitization**: Applied to platforms, products, origins, destinations
- **Nullish Coalescing**: Uses ?? instead of || to prevent malicious payload fallback

#### Error Handling & Logging
- **Production Error Messages**: Generic messages, no stack trace exposure
- **Development Debugging**: Full error details for debugging
- **PII Protection**: Logs contain no personally identifiable information or sensitive data
- **HubSpot Integration**: Minimal logging (IDs only, no contact details)

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

### Security Packages
- **Helmet**: HTTP security headers middleware (CSP, HSTS, X-Frame-Options, etc.)
- **express-rate-limit**: Rate limiting middleware for API endpoints
- **isomorphic-dompurify**: XSS prevention via HTML sanitization
- **CORS**: Cross-Origin Resource Sharing configuration

### Form and Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation for TypeScript with runtime checking
- **TanStack Query**: Server state management with caching and synchronization

### Assets and Media
- **Static Assets**: Professional truck/van imagery, client logos (Logotipo, Spyra, NEOH, Tractive, and partner brands)
- **Font Integration**: Google Fonts integration for typography consistency
- **Image Optimization**: Responsive image handling with proper alt text and loading strategies

## Landing Pages Strategy

### Pain Point-Focused Pages (October 2025)
Created four location-specific landing pages addressing key customer pain points identified from competitor analysis:

#### UAE Market Pages
- **/uae-transparent-pricing** - Addresses opaque pricing structures, hidden fees, and lengthy sales processes common in the market
- **/uae-reliable-service** - Focuses on reliable delivery (99% on-time) and responsive customer support (vs. 7% competitor response rates)

#### Qatar Market Pages
- **/qatar-transparent-pricing** - Qatar-specific transparent pricing with instant quotes and all-inclusive rates
- **/qatar-reliable-service** - Dependable Qatar delivery (98% on-time) with local support team (90-min avg response)

#### Key Pain Points Addressed
1. **Opaque Pricing Structures** - Competitors use "solution-based proposals" making budgeting difficult, hidden fees, unclear contracts
2. **Lack of Customer Service** - Industry has extremely low complaint response rates (Quiqup: 7%), no visible resolution
3. **Broken Technology Promises** - Buggy tracking systems, unreliable automation claims that don't deliver value
4. **Unreliable Deliveries** - Chronic delays and failed deliveries despite "speed" promises, unmet customer expectations

#### Design Features
- Location-specific messaging (UAE/Qatar)
- Comparison cards showing competitor problems vs. GWC solutions
- Data-driven trust signals (on-time rates, response times)
- Direct quote form integration for instant pricing
- Client logos featuring Logotipo, Spyra, NEOH, Tractive brands

## Arabic Localization (October 2025)

### Typography and Font System
- **Primary Arabic Font**: Cairo (matching https://www.gwclogistics.com/ar/home-ar/ standards)
- **Font Stack**: "Cairo", "Tajawal", "Amiri", "IBM Plex Sans Arabic", "Noto Sans Arabic", sans-serif
- **CSS Implementation**: Custom `.arabic-font` utility class for Arabic content
- **Font Loading**: Google Fonts CDN integration in index.html

### RTL (Right-to-Left) Support
- **Document-level RTL**: Applied via `document.documentElement.dir = 'rtl'` in useEffect
- **Page-level RTL**: Additional `dir="rtl"` attribute on page root container
- **Layout Adaptation**: All components designed to work correctly in RTL mode

### Arabic Component Architecture
Created dedicated Arabic component versions for complete localization:

#### Core Layout Components
- **HeaderAr**: Fully translated navigation, CTA buttons, and menu items
- **FooterAr**: Arabic footer with contact information, links, and legal text
- **CTASectionAr**: Localized call-to-action sections with Arabic copy

#### Content Sections
- **SocialProofSectionAr**: Arabic headings for client logos and trust indicators
- **TestimonialsSectionAr**: Professionally translated testimonials from Huawei, Carrefour, IKEA
- **IntegrationsSectionAr**: Arabic descriptions of Quivo partnership and platform integrations
- **MapStatsSectionAr**: Translated statistics labels (clients, warehouses, employees)

### Arabic Landing Pages
- **/qatar-video-ar**: Complete Arabic version of Qatar video landing page with professional translations
  - All marketing copy, headings, and CTAs in Arabic
  - Maintains analytics tracking and A/B testing functionality
  - Preserves brand names (Shopify, Amazon, etc.) while localizing descriptions
- **/quote2-ar**: Arabic version of 2-step quote form
  - Platform names kept in English (Amazon, Shopify, WooCommerce, Zid, Salla)
  - Form labels and instructions in Arabic
  - Direct HubSpot CRM integration with Arabic data

### Translation Standards
- **Professional Quality**: Native-level Arabic translations for all marketing content
- **Brand Preservation**: International brand names kept in English (Huawei, IKEA, Shopify)
- **SEO Optimization**: Arabic meta tags, titles, and descriptions for search visibility
- **Cultural Adaptation**: Messaging adapted for Arabic-speaking MENA market

### Arabic Navigation and URLs
- **Internal Quote Links**: All Arabic landing pages (HeaderAr, CTASectionAr) link to /quote2-ar (internal route)
- **Design Pattern**: Arabic components use wouter `<Link>` for SPA navigation to Arabic quote form
- **Consistency**: Ensures all Arabic CTAs direct to the internal Arabic quote form (Quote2PageAr)

## Landing Pages Management (October 2025)

### Overview Dashboard
- **/landing-pages**: Central overview page displaying all landing pages with links, descriptions, and testing status
- **Automatic Registration**: All new landing pages must be added to LandingPagesOverview.tsx by default
- **Total Pages**: 26 registered pages including English and Arabic versions

### Quote Form Variants
- **/quote2**: Simplified 2-step quote form (Platform & Products → Contact Information)
  - Skips origin/destination step for faster conversions
  - HubSpot integration for lead capture
- **/quote2-ar**: Arabic version of 2-step quote form (Quote2PageAr component)
  - Platform names in English, form labels in Arabic
  - Internal SPA route for Arabic users