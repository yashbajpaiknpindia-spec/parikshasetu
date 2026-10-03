create table public.attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  test_id text, test_title text, post text, cycle text,
  score int, max_score int, correct int, wrong int, unattempted int, total int,
  weak_topics text[],
  taken_at timestamptz default now()
);
alter table public.attempts enable row level security;
create policy "own attempts" on public.attempts
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
