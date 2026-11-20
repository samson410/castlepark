CastlePark
CastlePark is a full-stack React application for a children’s recreation or educational center. It includes public information pages, program and enrollment content, contact details, and an administrative interface.

Built with TanStack Start and designed for deployment on Cloudflare Workers.

Features
Public homepage
About, programs, enrollment, and contact pages
Administrative dashboard
Responsive layouts
Branded server-side error pages
Firebase integration
Radix UI components
Tailwind CSS styling
TanStack Router and React Query
Cloudflare Workers deployment support
Tech Stack
React 19
TypeScript
TanStack Start
TanStack Router
TanStack React Query
Vite
Tailwind CSS
Radix UI
Firebase
Cloudflare Workers
Bun
Getting Started
Prerequisites
Bun 1.0 or newer
A Firebase project, if Firebase-backed features are required
A Cloudflare account, if deploying to Workers
Installation
bash
git clone https://github.com/samson410/castlepark.git
cd castlepark
bun install
Development
bash
bun run dev
The development server will start using Vite.

Available Scripts
Command	Description
bun run dev	Start the local development server
bun run build	Create a production build
bun run build:dev	Create a development-mode build
bun run preview	Preview the production build
bun run lint	Run ESLint
bun run format	Format the project with Prettier
Project Structure
Text
src/
├── assets/          # Static assets
├── components/
│   ├── site/        # Application-specific components
│   └── ui/          # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Shared utilities and error handling
├── routes/          # TanStack file-based routes
├── router.tsx       # Router configuration
├── server.ts        # Cloudflare server entry and error handling
├── start.ts         # TanStack Start middleware
└── styles.css       # Global styles
Routes
/ — Home
/about — About CastlePark
/programs — Programs
/enroll — Enrollment
/contact — Contact
/admin — Administrative interface
Production Build
bash
bun run build
The generated application can be deployed using Wrangler or another Cloudflare Workers-compatible workflow.

Deployment
This project includes wrangler.jsonc for Cloudflare Workers configuration.

Before deployment:

Configure any required environment variables.
Confirm the Worker name and compatibility settings.
Run a production build.
Deploy through your preferred Cloudflare deployment workflow.
Development Guidelines
Keep reusable components in src/components/ui.
Place application-specific components in src/components/site.
Add file-based routes beneath src/routes.
Keep shared logic in src/lib.
Run formatting and lint checks before submitting changes:
bash
bun run format
bun run lint
