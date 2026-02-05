# VidMaxx - AI Video Generator

VidMaxx is an AI-powered application that allows users to generate high-quality videos using advanced artificial intelligence models.

## Features

- **AI Video Generation**: Create stunning videos from text prompts.
- **Secure Authentication**: User authentication and management powered by Clerk.
- **Robust User Sync**: Real-time synchronization between Clerk and Supabase via webhooks.
- **Scalable Database**: Data persistence handled by Supabase.
- **Enhanced Authentication UI**: Seamless Sign Up and Sign In experience with Clerk modals.
- **User Dashboard**: Dedicated dashboard access with smart routing based on authentication state.
- **Modern UI**: Built with Next.js, featuring a refined Hero section and responsive Header.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Authentication**: Clerk
- **Database**: Supabase
- **Styling**: CSS Modules / Tailwind (if applicable)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Make sure to set up your `.env.local` file with the necessary keys for Clerk and Supabase:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
WEBHOOK_SECRET=...
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
