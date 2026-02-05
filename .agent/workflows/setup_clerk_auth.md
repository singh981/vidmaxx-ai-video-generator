---
description: Setup guide for Clerk Authentication and Supabase Data Sync
---

# Clerk & Supabase Integration Setup

This workflow outlines the steps to configure Authentication using Clerk and ensure user data is synchronized to Supabase.

## 1. Prerequisites
- **Clerk Account**: Create an application at [dashboard.clerk.com](https://dashboard.clerk.com).
- **Supabase Project**: Create a project at [supabase.com](https://supabase.com).

## 2. Environment Variables
Ensure your `.env.local` contains the following keys:

```bash
# Clerk Keys (from Clerk Dashboard -> API Keys)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk Webhook Secret (from Clerk Dashboard -> Webhooks -> Signing Secret)
WEBHOOK_SECRET=whsec_...

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key  # Required for bypassing RLS in Webhook
```

## 3. Database Migration
The `public.users` table must be compatible with Clerk IDs (Text) and have appropriate RLS policies.

1.  Open **Supabase Dashboard** -> **SQL Editor**.
2.  Copy the content of [clerk_migration.sql](../../supabase/clerk_migration.sql).
3.  **Run** the script.
    *   *Effect*: Changes `id` to Text, creates `users_public` view, and restricts `users` table to Service Role only.

## 4. Webhook Configuration
To sync users from Clerk to Supabase:

1.  Go to **Clerk Dashboard** -> **Webhooks**.
2.  Add Endpoint: `https://your-domain.com/api/webhooks/clerk` (use `ngrok` for local dev).
3.  Subscribe to event: `user.created`.
4.  Copy the **Signing Secret** to `WEBHOOK_SECRET` in `.env.local`.

## 5. Development
Start the server and test the flow:

```bash
# turbo
npm run dev
```

## 6. Verification
1.  Sign up via `/sign-up`.
2.  Check Supabase `public.users` table for the new user.
3.  Check Terminal logs for `Received Clerk user.created event`.
