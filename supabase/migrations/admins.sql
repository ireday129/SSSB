-- Enable the profiles table to extend auth.users
create table if not exists public.profiles (
  id uuid references auth.users not null primary key,
  email text,
  role text default 'user'
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, role)
  values (new.id, new.email, 'user');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger the function every time a user is created
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Update roles for specific admins (Run this manually or via dashboard SQL editor)
-- Note: This requires the users to exist in auth.users first.
-- You can manually insert them into profiles directly if they already exist in auth but not profiles.

-- Example update query (Run this in Supabase SQL Editor):
-- UPDATE public.profiles SET role = 'admin' WHERE email IN ('irene@hannahfinancial.com', 'leighsagibson81@gmail.com');
