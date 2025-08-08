# REST Express

This is a full-stack application with a React frontend and an Express backend. It uses Vite for the frontend build, Drizzle ORM for database access, and TypeScript for both the client and server.

## Technologies Used

- **Frontend:**
  - React
  - Vite
  - TypeScript
  - Wouter (for routing)
  - Tailwind CSS
  - Radix UI (for UI components)
  - TanStack Query (for data fetching)
- **Backend:**
  - Express
  - TypeScript
  - Drizzle ORM
  - PostgreSQL
  - Clerk (for authentication)
- **AI Features:**
  - Anthropic AI SDK
  - OpenAI SDK

## Local Development

To run this project locally, you'll need to have Node.js and npm installed.

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   Create a `.env` file in the root of the project and add the following variables:

   ```
   DATABASE_URL=your_postgres_database_url
   CLERK_SECRET_KEY=your_clerk_secret_key
   ANTHROPIC_API_KEY=your_anthropic_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

3. **Run database migrations:**

   ```bash
   npm run db:push
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the Express server and the Vite development server with hot-reloading.

## Building for Production

To build the application for production, run the following command:

```bash
npm run build
```

This will create a `dist` directory with the compiled server code and the static frontend assets.

## Running in Production

To run the application in production, use the following command:

```bash
npm run start
```

This will start the Express server and serve the static frontend assets from the `dist/public` directory.

## Deployment on Railway

This project is configured for deployment on Railway. The `railway.json` file defines the build and deploy commands. Railway will automatically set the `PORT` and `DATABASE_URL` environment variables. You will need to add the other required environment variables in your Railway project settings.
