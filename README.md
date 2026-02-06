# VidMaxx - AI Video Generator

VidMaxx is an AI-powered application that allows users to generate high-quality videos using advanced artificial intelligence models.

## Features

- **AI Video Generation**: Create stunning videos from text prompts.
- **Create Series Wizard**: Step-by-step wizard for creating video series with topic selection, language, voice, music, video style, captions, and scheduling.
- **Dashboard Layout**: Persistent sidebar and header that remain consistent across all dashboard pages.
- **Collapsible Sidebar**: Responsive sidebar with logo that stays visible (larger when collapsed).
- **Secure Authentication**: User authentication and management powered by Clerk.
- **Robust User Sync**: Real-time synchronization between Clerk and Supabase via webhooks.
- **Scalable Database**: Data persistence handled by Supabase.
- **Enhanced Authentication UI**: Seamless Sign Up and Sign In experience with Clerk modals.
- **Modern UI**: Built with Next.js and Shadcn UI components.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Authentication**: Clerk
- **Database**: Supabase
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file with the following keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
WEBHOOK_SECRET=...
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

## Project Structure

```
app/
├── dashboard/           # Dashboard pages with shared layout
│   ├── layout.tsx       # Dashboard layout with sidebar
│   ├── page.tsx         # Main dashboard page
│   ├── create-series/   # Create series wizard
│   ├── series/          # Series management
│   └── ...
components/
├── dashboard/           # Dashboard-specific components
│   ├── dashboard-sidebar.tsx
│   └── create-series/   # Wizard step components
└── ui/                  # Shadcn UI components
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
