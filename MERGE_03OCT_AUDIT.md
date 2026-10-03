# Pariksha Setu — 03 Oct Donor Merge Audit

## Merge policy
The 03 Oct donor ZIP was treated as a content/feature source only. The existing production application's PostgreSQL/Prisma, Razorpay/payment, persistent entitlement, admin, authentication, password reset, SEO, visitor analytics and other infrastructure were preserved.

## Donor content checked
- Donor `src/data` and existing app `src/data` both contain 120 question-bank files.
- Both contain 10,511 explicit `id:` entries across `question-*.ts` files.
- All common donor data files are byte-for-byte identical in the final app.
- Challenge question/content files were retained from the donor.
- Bihar TRE plan retains the expanded live subject structure: 6 classes 6–8 subjects, 9 classes 9–10 subjects, and 22 classes 11–12 subjects.

## Relevant donor changes retained
- Free Mock Challenge content and registration UI.
- Challenge rounds/test-room content and challenge question bank.
- Challenge server paper-generation logic.
- PostgreSQL-backed challenge registration/submission storage adapted to the existing Prisma backend.
- Challenge start/login/submit/export API flow.
- Authenticated Admin Challenge dashboard integrated into the existing admin console.
- Homepage challenge presentation and two approved full free mocks section.

## Donor changes intentionally NOT copied
These would regress existing production functionality or the current product rules:
- Donor Supabase-only challenge storage/sync.
- Donor public `CHALLENGE_ADMIN_KEY` authorization model.
- Donor Vercel live-domain configuration.
- Donor removal of SEO helper metadata.
- Donor dashboard replacement that discarded the server/client split.
- Donor auth form that removed Google login, password visibility, and reset links.
- Donor plan/mock access that used cookie-only entitlement checks.
- Donor booking/mentor flow regressions.
- Donor mini-mock/free-count model; product rule remains exactly two approved free full mocks.
- Donor static pricing and any UI that bypasses database-controlled pricing.
- Donor unverified social handles component.

## Existing production protections preserved
- PostgreSQL + Prisma remains the source of truth.
- Razorpay order creation, verification and restore remain intact.
- Paid access continues to be server-backed.
- Admin role and user/plan administration remain intact.
- Admin user details, attempts, marked-for-review records, payments, guests, activity, settings and challenge dashboard remain intact.
- Login password visibility and forgot/reset-password flow remain intact.
- IST admin timestamps and guest visit reporting remain intact.
- SEO metadata, sitemap and robots remain intact.

## Safety/consistency checks
- 46 page route templates present.
- 29 API route templates present.
- All static internal `href` routes resolve to an existing page template or dynamic route.
- Local/alias imports checked for all changed challenge/content files; no missing imports found.
- No `pariksha-setu.vercel.app` live URL references.
- No `@vercel/blob` imports in application source/package configuration.
- No `CHALLENGE_ADMIN_KEY` references in application source.
- No Supabase challenge-store usage in the challenge API/store.
- No `FREE_MINI_MOCKS` runtime configuration used by the final mock-access UI; the only remaining text reference is legacy prose elsewhere, with the mock page's section label corrected to the two approved free full mocks.
- Five Prisma migrations are present, including the PostgreSQL ChallengeSubmission migration.

## Validation limitation
A full `next build` was not executed in this sandbox because dependency installation could not complete within the available container runtime. Source parsing, import resolution, route auditing, content comparison, schema/migration inspection and archive integrity checks were performed instead.
