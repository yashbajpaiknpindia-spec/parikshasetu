# Deploying to Render (real backend + admin dashboard)

The app still boots with **zero config** (demo mode, per-browser local
storage) — but with a Postgres database attached it runs on a **real
backend**: signed accounts, mock-attempt/booking history in the database,
cross-device plan access, and a working `/admin` dashboard with live
statistics on every user, attempt, booking and payment.

## Option A — Blueprint (fastest)

1. Push this repo to GitHub/GitLab.
2. Render dashboard → **New** → **Blueprint** → select the repo. Render reads
   `render.yaml` and provisions:
   - a free Postgres database (`pariksha-setu-db`)
   - a Node web service (`pariksha-setu`) wired to it, with `JWT_SECRET`
     auto-generated
3. Render will prompt for the `sync: false` variables — fill in at least
   `ADMIN_EMAIL` and `ADMIN_PASSWORD` (this becomes your first admin login).
   Leave Razorpay/notification-feed vars blank to keep those features in
   demo mode until you have real keys.
4. Deploy. The build runs migrations automatically
   (`prisma migrate deploy`) and the admin account is created on the first
   request to `/api/auth/me` the moment you seed it — see step 5.
5. Seed the admin account once, from the Render **Shell** tab on the web
   service (or locally with the same `DATABASE_URL`):
   ```bash
   npm run db:seed
   ```
6. Log in at `/login` with `ADMIN_EMAIL` / `ADMIN_PASSWORD`, then open
   `/admin`.

## Option B — Manual setup

1. **New → PostgreSQL** on Render. Copy the **Internal Connection String**
   once it's provisioned (use the internal URL, not external, for lower
   latency from the web service in the same region).
2. **New → Web Service** → connect the repo.
   - Runtime: **Node**
   - Build command: `npm install && npx prisma generate && npx prisma migrate deploy && npm run db:seed && npm run build`
   - Start command: `npm run start`
3. Environment variables on the web service:
   | Key | Value |
   |---|---|
   | `DATABASE_URL` | the Postgres internal connection string from step 1 |
   | `JWT_SECRET` | `openssl rand -base64 32` |
   | `ADMIN_EMAIL` | the email you'll log in with |
   | `ADMIN_PASSWORD` | its password (min 6 chars) |
   | `NEXT_PUBLIC_SITE_URL` | your Render URL, e.g. `https://pariksha-setu.onrender.com` |
   | `NEXT_PUBLIC_RAZORPAY_KEY_ID`, `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` | optional — live payments |
   | `NOTIFICATIONS_FEED_URL` | optional — live notifications feed |
4. Deploy. The build seeds or refreshes the admin account automatically from the current env credentials.

## Google sign-in (optional)

Users can log in with email/password out of the box. To also offer "Continue
with Google":

1. In [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials),
   create an **OAuth client ID** (Application type: **Web application**).
2. Under **Authorized redirect URIs**, add exactly:
   `https://<your-render-service>.onrender.com/api/auth/google/callback`
3. On the Render web service, set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
   to the values from that client, then redeploy.

Leave both blank and the login/signup pages simply don't show the Google
button — email/password keeps working as before. Google sign-in also
requires `DATABASE_URL` (it needs the real backend, not demo mode). A user
who signs up with Google and later tries the same email with a password
gets a clear "this account uses Google sign-in" message rather than a
generic failure; a user who already has a password account and then signs
in with Google on the same email gets the two linked automatically.

## What "real backend" wires up

| Area | Demo mode (no `DATABASE_URL`) | Real backend (Render Postgres) |
|---|---|---|
| Accounts | per-browser, `localStorage` | Postgres `User` table, bcrypt-hashed passwords, httpOnly JWT session cookie |
| Mock attempts | `localStorage` only | synced to `Attempt` table (also kept in `localStorage` for instant UX) |
| Mentor bookings | `localStorage` only | synced to `Booking` table; paid bookings recorded straight from the verified Razorpay webhook |
| ₹99 plan access | this browser only | `PlanAccess` table — follows the signed-in user to any device |
| `/admin` | redirects to `/login`, then shows a "needs a real backend" notice | full dashboard: totals, 30-day signup/attempt charts, revenue, per-user drill-down, activity log |

Every write to the database also logs a row in `ActivityEvent`
(`signup`, `login`, `attempt_submitted`, `booking_created`,
`plan_purchased`) — that's what powers `/admin/activity`.

## Local development against the real backend

```bash
# 1. Postgres running locally, or point at your Render database
echo 'DATABASE_URL="postgresql://user:pass@localhost:5432/pariksha_setu"' >> .env.local
echo 'JWT_SECRET="dev-only-secret-change-me"' >> .env.local

npx prisma migrate dev   # creates tables
npm run db:seed          # needs ADMIN_EMAIL/ADMIN_PASSWORD in .env.local too
npm run dev
```

Without `DATABASE_URL` set, `npm run dev` still works exactly as before —
demo mode, no Postgres required.
