# Merit Marg · मेरिट मार्ग

**Your bridge to a Kendriya Vidyalaya teaching career.**

A one-stop platform for KVS PRT / TGT / PGT aspirants: 1-on-1 mentorship from
serving KV teachers, blueprint-accurate mock tests, and a verified, cycle-labelled
exam roadmap — including the demo-teaching & interview round that decides selection.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4**.

---

## The idea in one line

Everyone sells KVS test series. Almost nobody coaches the interview + demo lesson —
the round that actually decides selection, and the one thing a serving KV teacher
can coach better than anyone. That is the moat.

### Revenue model
1. **1-on-1 mentorship marketplace** — book a verified KV mentor; platform takes a commission. *High margin, defensible.*
2. **Prep subscription** — mock-test library, weak-spot analytics, study plans. *Recurring.*
3. **Demo-teaching & interview bootcamp** — premium, the real differentiator.

Funnel: free exam hub + diagnostic mock → paid subscription → high-value mentorship.

---

## Features

- **Marketing site** — landing, about, pricing, legal (terms / privacy / refund).
- **Exam-info hub** (`/exam`) — overview, eligibility, **dual-cycle pattern** (2022–23 vs 2025–26), syllabus, strategy, how-to-apply. Every aspirant-facing figure links to the official notification; content is labelled by cycle.
- **Live mock-test engine** (`/mock-tests`) — exam-style player with timer, question palette, mark-for-review, the correct marking per cycle (incl. negative marking), and an instant **part-wise weak-spot report**. Runs entirely client-side — no backend needed.
- **Mentor marketplace** (`/mentors`) — filterable directory, rich profiles, and a booking widget with a Razorpay checkout path.
- **Auth + dashboard** — accounts, mock history, bookings, and a personal focus-area list.

### Demo mode vs live mode
The app runs fully in **demo mode with no keys** (local auth, local attempt/booking
history, no real payment). It lights up **live** the moment you add:
- **Supabase** → real accounts + database
- **Razorpay** → real payments

See [`SETUP.md`](./SETUP.md).

---

## Project structure

```
src/
  app/                 # routes (App Router)
    exam/              # exam-info hub (overview, eligibility, pattern, syllabus, strategy, apply)
    mock-tests/[id]/   # live test player
    mentors/[slug]/    # marketplace + profile + booking
    dashboard/         # student dashboard
    login/ signup/     # auth
    api/razorpay/      # order + verify (server-side, env-gated)
    legal/             # terms, privacy, refund
  components/          # ui/, site/, auth/, mentors/, mock/
  lib/                 # config, exam-data (source of truth), mock-engine, supabase, razorpay-client
  data/                # mentors (sample), questions (practice bank)
```

**Single source of truth for exam facts:** [`src/lib/exam-data.ts`](./src/lib/exam-data.ts).
When a new KVS notification drops, update that file first.

---

## Accuracy & ethics stance

- Facts are grounded in the project exam-blueprint and labelled **by cycle** (2022–23 vs 2025–26). Coaching portals disagree on 2025–26 Tier-2 details — those are flagged as provisional and must be reconciled against the official CBSE/KVS notification PDF.
- Practice questions are **original, modelled on the pattern** — never passed off as official past papers (PYQs).
- The platform never guarantees selection and is **not affiliated** with KVS, NVS, CBSE or the Government of India.

---

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Deploy

See [`SETUP.md`](./SETUP.md) for the Vercel deploy steps and environment variables.
