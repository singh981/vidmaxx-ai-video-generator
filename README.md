# VidMaxx - AI Video Generator

VidMaxx is an AI-powered application that allows users to generate high-quality videos using advanced artificial intelligence models.

## Features

- **AI Video Generation**: Create stunning videos from text prompts.
- **Secure Authentication**: User authentication and management powered by Clerk.
- **Scalable Database**: Data persistence handled by Supabase.
- **Modern UI**: Built with Next.js and styled for a premium user experience.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Authentication**: Clerk
- **Database**: Supabase
- **Styling**: CSS Modules / Tailwind (if applicable)

## Getting Started

First, run the development server:

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
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
