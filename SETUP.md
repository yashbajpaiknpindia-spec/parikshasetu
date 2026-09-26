# Setup & Deploy

The site works with **zero configuration** (demo mode). Add keys only when you want
real accounts and payments. Then deploy to Vercel.

---

## 1. Environment variables

Copy `.env.example` to `.env.local` and fill in what you need. Nothing is required
for the site to run.

| Variable | What it enables | Where to get it |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Real login + database | supabase.com → Project → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Real login + database | same page |
| `RAZORPAY_KEY_ID` + `RAZORPAY_KEY_SECRET` | Live checkout | razorpay.com → Settings → API Keys |
| `RAZORPAY_KEY_ID` | Server order creation | same |
| `RAZORPAY_KEY_SECRET` | Server signature verify (secret!) | same |

> Never commit `.env.local`. Keep `RAZORPAY_KEY_SECRET` server-side only.

### Supabase (auth + data)
1. Create a free project at https://supabase.com.
2. Copy the Project URL and anon key into `.env.local`.
3. Auth (email/password) works immediately once the URL + anon key are set.
4. **Cross-device progress sync** is already wired (`src/lib/supabase/sync.ts`): when
   Supabase is configured and a user is signed in, each mock attempt is written to an
   `attempts` table and the dashboard merges the cloud history. Create the table + RLS
   in the Supabase SQL editor:

```sql
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
```

Until keys are added, everything falls back to per-browser local storage automatically —
so streaks, badges and history still work on a single device.

### Live notifications feed (optional)
The `/notifications` page and its exam calendar are **dynamic**. Set
`NOTIFICATIONS_FEED_URL` to a JSON endpoint and the page fetches it and revalidates
hourly — so openings, dates and news update **without a redeploy**. If it's unset,
invalid or unreachable, the page safely falls back to the built-in seed data in
`src/data/notifications.ts` (so it never breaks and never shows fabricated records).

- JSON shape: `{ "lastUpdated": "2026-09-21", "notifications": [ … ], "newsUpdates": [ … ] }`
- Match the `JobNotification` / `NewsUpdate` shapes in `src/data/notifications.ts`.
- Easiest live sources: a JSON file in a GitHub repo (raw URL), a published Google
  Sheet exported as JSON, or a Supabase/edge function. A scheduled job can regenerate
  it. Always keep the official-portal URL as each record's canonical source.

### Razorpay (payments — India)
1. Create an account at https://razorpay.com and get **test** API keys first.
2. Add the keys to `.env.local`. The booking flow will then create an order
   (`/api/razorpay/order`), open Razorpay checkout, and verify the signature
   (`/api/razorpay/verify`) — all server-side; the secret never reaches the browser.

---

## 2. Deploy to Vercel

Next.js is Vercel-native — no config needed. Pick one path.

### Option A — Vercel CLI (fastest; you log in once)
From this folder (`pariksha-setu`), in **your own terminal**:

```bash
npx vercel login
npx vercel --prod
```

- `login` opens your browser to authenticate **your** Vercel account (Claude never
  sees your credentials).
- `--prod` uploads the project; Vercel builds and returns a live URL.
- Accept the defaults when prompted (scope = your team, project name = `pariksha-setu`).

### Option B — GitHub + Vercel dashboard
1. Push this folder to a new GitHub repo.
2. On vercel.com → **Add New → Project → Import** the repo.
3. Framework auto-detects as **Next.js**. Click **Deploy**.

### Add environment variables on Vercel
After the first deploy, in the Vercel dashboard:
**Project → Settings → Environment Variables** → add the same keys from `.env.local`
(for Production, and Preview if you want), then redeploy. The site stays in demo mode
until you do this — which is fine for launch.

---

## 3. After going live
- Set your real domain in `src/lib/config.ts` (`siteConfig.url`).
- Replace the **sample** mentor profiles in `src/data/mentors.ts` with real, consented
  profiles of verified KV teachers. Do not add anyone's personal data without consent.
- Reconcile the 2025–26 pattern figures in `src/lib/exam-data.ts` against the official
  CBSE/KVS notification PDF before a candidate relies on them.
- Have the legal templates (`src/app/legal/*`) reviewed by a qualified professional.
