-- Merit Marg — exam results table.
-- Columns match the ExamResult type in src/data/results.ts one-to-one, so rows
-- can be read by src/lib/results-source.ts without any mapping.
-- Run this in the Supabase SQL editor.

create table if not exists public.exam_results (
  id               uuid primary key default gen_random_uuid(),
  slug             text not null unique check (slug ~ '^[a-z0-9-]+$'),
  exam_name        text not null,
  organisation     text not null,
  state            text not null default 'All India',
  exam_year        int,                                   -- null when the official notice does not state it
  exam_date        date,
  result_date      date,
  result_status    text not null check (result_status in ('Declared','Provisional','Final','Released','Revised')),
  category         text not null check (category in ('result','admit-card','answer-key','cut-off','merit-list')),
  qualification    text,
  description      text not null default '',
  important_dates  jsonb not null default '[]'::jsonb,   -- [{ "label": "...", "date": "YYYY-MM-DD" }]
  result_url       text not null,
  scorecard_url    text,
  cutoff_url       text,
  merit_list_url   text,
  official_website text not null,
  exam_slug        text,                                  -- optional link to a Merit Marg exam hub
  published        boolean not null default true,         -- unpublish without deleting
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index if not exists exam_results_category_date on public.exam_results (category, result_date desc);

-- Keep updated_at current on every edit.
create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
drop trigger if exists exam_results_touch on public.exam_results;
create trigger exam_results_touch before update on public.exam_results
  for each row execute function public.touch_updated_at();

-- Public can READ published rows; only the service role (your admin tools) can write.
alter table public.exam_results enable row level security;
drop policy if exists "read published results" on public.exam_results;
create policy "read published results" on public.exam_results
  for select using (published = true);
