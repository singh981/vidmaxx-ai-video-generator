create table if not exists public.users (
  id uuid references auth.users on delete cascade not null primary key,
  email text,
  full_name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS)
alter table public.users enable row level security;

-- 3. Create policies (Example: Users can view their own data)
create policy "Users can view their own data" on public.users
  for select using (auth.uid() = id);

create policy "Users can update their own data" on public.users
  for update using (auth.uid() = id);

-- 4. Create a function to handle new user headers
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email, full_name)
  values (
    new.id, 
    new.email, 
    -- 'raw_user_meta_data' is where Supabase Auth stores extra data like 'full_name'
    new.raw_user_meta_data->>'full_name' 
  );
  return new;
end;
$$ language plpgsql security definer;

-- 5. Create the trigger automatically
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
