# Merit Marg / Pariksha Setu — 05 Oct update merged and reviewed (06 Oct 2026)

This build takes the uploaded `complete-source_ekdumfinal_05oct` as the latest product/content baseline and preserves the prior production fixes.

## Product updates from the 05 Oct source

- Roz ka 10: daily 10-question / 10-minute practice with one shared paper per exam/subject, server-side scoring, real rank, streaks and post-result identity claiming.
- Sunday Sprint: 30 questions / 30 minutes, available Sundays, with shared-paper ranking.
- Spaced revision: wrong questions return after 1 / 3 / 7 days and leave the revision queue after three successful revision answers.
- New Roz homepage hero, dedicated practice and revision pages, daily/sprint result flow, streak display and admin Roz statistics.
- Social follow component and Instagram/Facebook links.
- Challenge navigation now points users to Roz ka 10 after the October Round 1 event; closed-round messaging is preserved.
- WhatsApp help is hidden inside Roz to avoid distracting candidates during a timed paper.
- Round 1 SUPER TET reviewed question replacements/wording patches are restored and applied only to the Round 1 generated paper.

## Production fixes retained / merged

- PostgreSQL + Prisma is the primary production backend for accounts, attempts, bookings, paid access, challenge data, Roz data and admin operations.
- Challenge and paid-access signing use `JWT_SECRET` only. The obsolete secondary signing secret is removed.
- Challenge Round 1 server gate is 4:00 PM IST on 4 Oct 2026; starts close at 11:59 PM IST.
- Passage/poem rendering is present in regular mock, challenge player and review flows.
- Submission confirmation, retry delay, synchronous saved-answer restoration and second-tab result recovery are retained.
- Admin access to paid content and admin challenge preview remain server-authenticated.
- Registration can merge additional rounds; closed registration is rejected server-side.
- Free-mock model is 2 free 20-question mini mocks + 1 free full mock per exam; remaining mini mocks stay unlisted/paid for backwards compatibility.
- Senior/Bihar legacy demo papers are pinned to their actual 35-question output so displayed count/time matches the deterministic paper.

## Database resilience and data portability

- All Prisma models are represented by production migrations, including `PricingConfig`, `GuestVisit`, `ActivityEvent`, `RozAttempt` and `RozUserDay`.
- `npm run build` performs migration, idempotent repair, schema verification, admin seed and then `next build`.
- `npm run start` performs idempotent repair and schema verification before starting Next.
- `prisma db execute` uses the explicit Prisma schema path required with `prisma.config.ts`.
- Admin database backup/export downloads the full PostgreSQL dataset as JSON.
- Admin import supports validated merge or deliberate replace-all restore, including Roz data.

## Security / build cleanup

- Next.js 16.3.8, React 19.2.8, bcryptjs 3.0.3 and PostCSS 8.5.28 are pinned in the production dependency set.
- The old ESLint/minimatch runtime tree was removed from the deploy dependency graph.
- Obsolete Vercel Blob storage and URL-shared challenge-admin authorization are removed.
- Prisma 7 config deprecation is handled with `prisma.config.ts` while Prisma 6.19.3 remains the compatible ORM version in this build.

## Verification performed

- 326 TypeScript/TSX files parsed with zero parser errors.
- Zero missing local `@/` imports.
- Zero duplicate object-literal property names in source/script files.
- 11,087 question records checked for duplicate IDs / invalid option indexes.
- 52 referenced passage IDs checked; all passage texts resolve.
- All 39 challenge paper keys generate exact full length with unique question IDs.
- Round 1 SUPER TET paper generates 120 questions and includes the expected passage-based questions.
- All 39 Roz papers generate 10 questions; all 39 Sunday Sprint papers generate 30 questions.
- 919 mock/section/legacy tests checked; generated count matches displayed count for every test.
- Free mini sample counts are 2 for UP and Bihar Paper 1, with the senior/Bihar variants filtered to their intended two free minis.
- Offline package-lock audit reports zero vulnerabilities.

A fresh registry-backed `npm install` / production `next build` was attempted in the sandbox but could not complete because the environment timed out while reaching the npm registry. Source parsing, deterministic paper generation, dependency-lock inspection and the application-level content checks above completed successfully.
