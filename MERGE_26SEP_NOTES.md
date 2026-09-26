# 26 Sep merged build

This source merges the latest 26 Sep Merit Marg content/brand branch into the production backend branch without removing the previously built operational systems.

## Preserved production systems
- Prisma/PostgreSQL users, attempts, bookings, plan access and activity events
- ADMIN_ID / ADMIN_EMAIL + ADMIN_PASSWORD seed and /admin dashboard
- Email/password auth and Google OAuth with return-to-intended-page flow
- Razorpay order creation + signature verification
- Account-bound ₹99 Prep Pass entitlement and subscription display
- Exactly two free mocks; remaining mocks/plans require paid account access
- Server-side question withholding for paid mocks
- User activity/session/page-view logging, request metadata, coarse location/IP/user-agent where supplied by the proxy
- Admin user/payment/attempt/activity statistics
- Existing individual mentor profiles, booking routes and paid mentor-session flow
- Render blueprint, Prisma migration/seed workflow

## Brought forward from the 26 Sep content branch
- Updated SUPER TET / BPSC TRE 4.0 content and latest question banks
- Merit Marg branding, logo assets and intro video assets
- Updated mock library UX and progress presentation
- Prep Pass naming, centralized pricing and pass statistics
- Future ₹199 Prep + Mentorship offer/₹100 upgrade concept while retaining current individual mentor booking
- WhatsApp help/helpline UI
- Updated pricing, exam, result, notification and legal content
- Purchase restore endpoint, now requiring login and binding restored access to the current user account
- Vercel ignore file retained alongside Render deployment support

## Payment/access architecture
Postgres PlanAccess is authoritative. A signed mm_pass cookie may be issued only as a compatibility/display hint; it is not sufficient to unlock paid questions. Paid mock pages check the authenticated user and database entitlement on the server.
