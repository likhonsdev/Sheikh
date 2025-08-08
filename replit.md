# Sheikh AI Suite - AI-Native Development Platform

## Overview

Sheikh AI Suite is a comprehensive AI development ecosystem designed to treat artificial intelligence as a first-class engineering discipline. The platform consists of three core pillars: the Sheikh API (high-performance language models), the TypeScript SDK (@ai-sdk-likhon/sheikh), and GenAI Script automation for workspace-aware development. The application serves as a marketing and documentation website showcasing the suite's capabilities, featuring API documentation, code examples, and comprehensive guides for developers building AI-native applications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based architecture with TypeScript for type safety. The frontend is built with Vite as the build tool and uses React Router (wouter) for client-side routing. The UI is constructed using shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable interface elements. Tailwind CSS handles styling with a comprehensive design system including custom color schemes and responsive utilities.

### Component Structure
The application follows a modular component architecture with clear separation of concerns:
- **Page Components**: Home, Docs, API Docs, and 404 pages
- **Section Components**: Hero, Three Pillars, API Section, Examples, GenAI automation, and Documentation sections
- **UI Components**: Reusable components from shadcn/ui library
- **Layout Components**: Navigation and Footer for consistent site structure

### State Management
The application uses TanStack React Query for server state management, providing caching, synchronization, and error handling for API interactions. A custom query client is configured with specific error handling and authentication behaviors.

### Backend Architecture
The server is built with Express.js and TypeScript, using ES modules for modern JavaScript support. The backend follows a layered architecture with:
- **Route Registration**: Centralized route management in `server/routes.ts`
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **API Endpoints**: RESTful endpoints following OpenAPI specifications
- **Development Server**: Vite integration for hot module replacement during development

### Data Storage Solutions
The application is configured to use PostgreSQL with Drizzle ORM for database operations. The schema defines several key entities:
- **Users**: User accounts with authentication and API key management
- **API Keys**: Per-user API key management with permissions and usage tracking
- **API Usage**: Request logging and analytics
- **Models**: Available AI model configurations
- **Code Analysis**: Storage for code analysis results and automation data

The database configuration uses Neon Database as the PostgreSQL provider, with environment-based connection management.

### Authentication and Authorization
The system implements a comprehensive authentication strategy with:
- User registration and login functionality
- API key generation and management per user
- Tiered access control (free, pro, enterprise)
- Session management and request tracking
- Permission-based API access control

### Development and Build Process
The application uses a sophisticated build process:
- **Development**: Vite dev server with hot reloading and error overlays
- **Production Build**: Vite for frontend bundling, esbuild for server compilation
- **Type Checking**: TypeScript strict mode with comprehensive type definitions
- **Database Operations**: Drizzle Kit for schema management and migrations

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL provider for production data storage
- **Drizzle ORM**: Type-safe database toolkit for schema management and queries

### UI and Styling Framework
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **shadcn/ui**: Pre-built component library built on Radix UI

### Development Tools
- **Vite**: Build tool and development server with fast hot module replacement
- **TypeScript**: Static type checking and enhanced developer experience
- **TanStack React Query**: Server state management and caching

### Font and Asset Services
- **Google Fonts**: Web font loading for Inter and JetBrains Mono typefaces
- **Replit Integration**: Development environment integration and deployment

### Authentication Libraries
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation and type inference

The architecture emphasizes type safety, developer experience, and scalable deployment while maintaining flexibility for both development and production environments.