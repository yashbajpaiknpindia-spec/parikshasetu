-- Free Mock Challenge registrations (src/app/api/challenge/register/route.ts).
-- Run once in Supabase → SQL editor. Visitors can only INSERT; nobody can read the
-- list through the public API. Read it in the Supabase dashboard (Table editor) or
-- export it as CSV.
create table public.challenge_registrations (
  id uuid primary key default gen_random_uuid(),
  reg_no text not null,
  name text not null,
  mobile text not null unique,
  exam text not null,
  district text,
  rounds int[] not null,
  consent_updates boolean not null default true,
  consent_offers boolean not null default false,
  source text,
  created_at timestamptz not null default now()
);
alter table public.challenge_registrations enable row level security;
create policy "anyone can register" on public.challenge_registrations
  for insert to anon, authenticated with check (true);
