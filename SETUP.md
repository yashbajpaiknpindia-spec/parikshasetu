# Setup & Deploy

> **Current production architecture:** PostgreSQL + Prisma on Render is the primary backend for accounts, attempts, bookings, paid access, challenge data, Roz ka 10 and the admin dashboard. Supabase is optional legacy support for exam-result/progress integrations. Challenge and paid-access signing use **only `JWT_SECRET`**.

The site works with **zero configuration** (demo mode). For the current production setup, use **Render + PostgreSQL**. Add the optional payment, email and Google keys only when you need those integrations.

---

## 1. Environment variables

Copy `.env.example` to `.env.local` and fill in what you need. Nothing is required
for the site to run.

| Variable | What it enables | Where to get it |
|---|---|---|
| `DATABASE_URL` | PostgreSQL database for the production backend | Render Postgres / your PostgreSQL provider |
| `JWT_SECRET` | Auth sessions, challenge and paid-access signing | generate a long random secret |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_NAME` | Initial admin account | choose your admin credentials |
| `NEXT_PUBLIC_SITE_URL` | Canonical/reset URLs | your live site URL |
| `NEXT_PUBLIC_SUPABASE_URL` | Optional legacy results/progress integrations | Supabase project settings |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional legacy results/progress integrations | same page |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Live checkout (public key) | razorpay.com → Settings → API Keys |
| `RAZORPAY_KEY_ID` | Server order creation | same |
| `RAZORPAY_KEY_SECRET` | Server signature verify (secret!) | same |
| `RESULTS_FEED_URL` | Optional external exam-results feed | your JSON results endpoint |
| `RESEND_API_KEY`, `EMAIL_FROM` | Password-reset email delivery | Resend + verified sender |

> Never commit `.env.local`. Keep `RAZORPAY_KEY_SECRET` server-side only.

### Supabase (optional legacy results/progress integrations)
1. Create a free project at https://supabase.com.
2. Copy the Project URL and anon key into `.env.local`.
3. Supabase is **not** the primary authentication/database system in the current production app. PostgreSQL + Prisma handles accounts and application data.
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

## 2. Deploy to Render

Render reads `render.yaml` for the recommended production deployment. The existing build/start scripts are already wired for PostgreSQL migrations and verification.

### Option A — Render Blueprint (recommended)
Follow `RENDER_DEPLOY.md` for the complete Render + PostgreSQL deployment. The build command can remain `npm install && npm run build`; migrations, schema repair, verification and admin seeding are handled by the project scripts.

---

## 3. After going live
- Set your real domain in `src/lib/config.ts` (`siteConfig.url`).
- Replace the **sample** mentor profiles in `src/data/mentors.ts` with real, consented
  profiles of verified KV teachers. Do not add anyone's personal data without consent.
- Reconcile the 2025–26 pattern figures in `src/lib/exam-data.ts` against the official
  CBSE/KVS notification PDF before a candidate relies on them.
- Have the legal templates (`src/app/legal/*`) reviewed by a qualified professional.
