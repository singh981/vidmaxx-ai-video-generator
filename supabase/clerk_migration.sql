-- 1. Drop existing policies/views to ensure clean slate
drop policy if exists "Users can view their own data" on public.users;
drop policy if exists "Users can update their own data" on public.users;
drop policy if exists "Service role can manage all users" on public.users;
drop policy if exists "Public can read users" on public.users;
drop view if exists public.users_public;

-- 2. Drop the existing foreign key constraint (users -> auth.users)
alter table public.users
drop constraint if exists users_id_fkey;

-- 3. Change the id column type from UUID to Text (Clerk IDs are strings)
-- We cast existing UUIDs to text to preserve data if any
alter table public.users
alter column id type text;

-- 4. Re-enable RLS and add new policies compatible with Clerk
alter table public.users enable row level security;

-- STRICT: Allow ONLY the Service Role to Insert/Update/Delete (used by Webhook)
create policy "Service role can manage all users"
on public.users
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

-- 5. Create a SECURE VIEW for public access (hides email/sensitive columns)
-- This is better than a policy on the main table because it physically prevents selecting email.
create or replace view public.users_public as
select
  id,
  full_name,
  created_at
from public.users;

-- Grant access to the view for everyone (anon)
grant select on public.users_public to anon, authenticated, service_role;

-- Revoke direct access to the users table for anon/authenticated (except via policies)
-- (Supabase default is RLS enabled, so they can't see anything unless we add a policy)
-- We add NO public policy on `users` table, forcing frontend to use `users_public` for reading lists.
