# Overview

This is a full-stack web application for a Costa Rican transportation service company called "TransporteCR". The application features a modern single-page landing page showcasing airport transfers, corporate transportation, and private tours. Built with React on the frontend and Express.js on the backend, it uses a PostgreSQL database with Drizzle ORM for data management. The application is designed as a professional business website with contact functionality via WhatsApp integration.

## Recent Changes (January 2025)

The landing page has been redesigned to match the exact layout and styling from the provided reference image:

- **Hero Section**: Updated with airport terminal background and improved text layout
- **Services Section**: Three main services with custom icons (airport transfers, corporate transport, private tours)
- **Geographic Coverage**: Costa Rica map visualization with location markers for San José, Alajuela, and Heredia
- **Layout Optimization**: Testimonials and gallery positioned side-by-side for better space utilization
- **Contact Section**: Simplified design with prominent WhatsApp number (+506 1234 5678) and 24/7 availability
- **Color Scheme**: Applied consistent navy blue (#1e2238), red (#d63031), and gray branding
- **Responsive Design**: Mobile-first approach matching the single-column layout from reference image

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server.

**UI Framework**: Utilizes shadcn/ui component library built on top of Radix UI primitives for accessible, customizable components. Styled with Tailwind CSS for utility-first styling with custom CSS variables for theming.

**Routing**: Uses Wouter for lightweight client-side routing with a simple switch-based route structure.

**State Management**: Employs TanStack Query (React Query) for server state management, caching, and data fetching with custom query client configuration.

**Component Structure**: Organized into reusable UI components (Navigation, Hero, Services, Coverage, Testimonials, Contact, Footer) with a single-page application layout for the home page.

## Backend Architecture

**Framework**: Express.js server with TypeScript running on Node.js, configured for both development and production environments.

**Build System**: Uses esbuild for fast server-side bundling and tsx for development execution.

**Development Integration**: Configured with Vite middleware for hot module replacement and development tooling, including Replit-specific plugins for enhanced development experience.

**Storage Layer**: Implements a storage interface pattern with both in-memory storage (MemStorage) for development and PostgreSQL database integration for production.

## Data Storage Solutions

**Database**: PostgreSQL with Neon database provider for serverless database hosting.

**ORM**: Drizzle ORM for type-safe database queries and schema management with automatic TypeScript type generation.

**Schema Design**: Currently includes a basic user schema with username/password fields, prepared for authentication implementation.

**Migrations**: Drizzle Kit handles database migrations and schema changes with configuration for PostgreSQL dialect.

## Authentication and Authorization

**Current State**: Basic user schema defined but authentication middleware not yet implemented.

**Prepared Structure**: User model with unique username constraints and password fields ready for authentication system implementation.

**Session Management**: Dependencies installed for connect-pg-simple for PostgreSQL-based session storage.

## External Dependencies

**UI Components**: Extensive Radix UI ecosystem for accessible component primitives (dialogs, dropdowns, navigation, forms, etc.).

**Styling**: Tailwind CSS with PostCSS for processing, class-variance-authority for component variants, and clsx for conditional styling.

**Database**: Neon serverless PostgreSQL with Drizzle ORM for type-safe database operations.

**Form Handling**: React Hook Form with Hookform resolvers and Zod for form validation and schema validation.

**Development Tools**: Vite with React plugin, TypeScript compiler, and Replit-specific development plugins for enhanced coding experience.

**Communication**: WhatsApp integration for direct customer contact functionality.

**Date Handling**: date-fns library for date manipulation and formatting.

**Icons**: Lucide React for consistent iconography throughout the application.