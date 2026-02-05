-- 1. Drop existing policies that depend on the column or conflicts
-- We need to drop them because we can't alter the column type while it's referenced in a policy expression.
drop policy if exists "Users can view their own data" on public.users;
drop policy if exists "Users can update their own data" on public.users;
drop policy if exists "Service role can manage all users" on public.users;
drop policy if exists "Public can read users" on public.users;

-- 2. Drop the existing foreign key constraint (users -> auth.users)
alter table public.users
drop constraint if exists users_id_fkey;

-- 3. Change the id column type from UUID to Text (Clerk IDs are strings)
-- We cast existing UUIDs to text to preserve data if any
-- Note: If this step already ran successfully, it will just change text to text (no-op) or throw no error if compatible.
alter table public.users
alter column id type text;

-- 4. Re-enable RLS and add new policies compatible with Clerk
alter table public.users enable row level security;

-- Allow the Service Role (used by our Webhook) to manage users
create policy "Service role can manage all users"
on public.users
using (true)
with check (true);

-- Example: Allow anyone to read user names (common for public profiles)
create policy "Public can read users"
on public.users
for select
using (true);
