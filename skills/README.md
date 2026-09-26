# Pariksha Setu — exam skills & knowledge base

This folder holds the **domain knowledge** that powers the platform's guides, mocks
and study plans — one "skill" per exam, plus a national catalog. It mirrors (and is
the source for) the typed data in `src/lib/exams/`.

## Golden rules (read before editing any skill)
1. **Facts come from the reference blueprint, not memory.** Each exam's pattern,
   eligibility, syllabus and dates live in its `exam-blueprint.md`.
2. **Never fabricate.** No invented vacancy counts, cut-offs or dates; never present
   generated practice questions as official Previous Year Questions (PYQs).
3. **The official notification is the single source of truth.** Every aspirant-facing
   figure must link to the official portal and carry a "verify" note. Portals
   contradict each other and change silently.
4. **Label by cycle/year.** Patterns change between recruitment cycles.

## Contents
- `catalog.md` — every government teaching exam we track (body, portal, posts, status).
- `up-super-tet/` — UP UPESSC Assistant Teacher (Super TET) — the current priority.
- KVS lives in the standalone `kvs-exam-prep.skill` at the project root (packaged),
  and its data in `src/lib/exam-data.ts`.

## Adding a new exam
1. Create `skills/<exam>/exam-blueprint.md` from **official + credible sourced** research.
2. Add a `SKILL.md` describing how to generate mocks / plans / mentorship for it.
3. Encode the data in `src/lib/exams/<exam>.ts` and register it in `registry.ts`.
4. Add live openings to `src/data/notifications.ts`.
