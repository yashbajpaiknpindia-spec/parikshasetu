/**
 * "Which exam are you preparing for?", the first thing the site asks. The choice
 * is remembered (localStorage + a cookie the server can read) and drives the
 * home hook, the navbar's "Today's topic" link and the Mock Tests default tab.
 */
export type ExamChoice = "up-prt" | "bihar-1-5" | "bihar-6-8" | "bihar-9-10" | "bihar-11-12";

type Bi = { en: string; hi: string };
export interface ExamChoiceMeta {
  key: ExamChoice;
  title: Bi;        // "SUPER TET"
  exam: Bi;         // "UP Assistant Teacher (UPESSC)"
  classes: Bi;
  posts: Bi;
  status: Bi;       // shown on the card
  examDateISO: string | null;
  planHref: string;
  mocksHref: string;
  guideHref: string;
}

export const EXAM_CHOICES: ExamChoiceMeta[] = [
  {
    key: "up-prt",
    title: { en: "SUPER TET", hi: "SUPER TET" },
    exam: { en: "UP Assistant Teacher (UPESSC)", hi: "UP सहायक अध्यापक (UPESSC)" },
    classes: { en: "Assistant Teacher · classes 1–5", hi: "सहायक अध्यापक · कक्षा 1–5" },
    posts: { en: "~12,405 posts", hi: "~12,405 पद" },
    status: { en: "Written exam 3–4 Dec 2026", hi: "लिखित परीक्षा 3–4 दिसंबर 2026" },
    examDateISO: "2026-12-03",
    planHref: "/exams/up/plan",
    mocksHref: "/mock-tests?exam=up-prt",
    guideHref: "/exams/up",
  },
  {
    key: "bihar-1-5",
    title: { en: "BPSC TRE 4.0 (1–5)", hi: "BPSC TRE 4.0 (1–5)" },
    exam: { en: "Bihar School Teacher", hi: "बिहार विद्यालय अध्यापक" },
    classes: { en: "School Teacher · classes 1–5", hi: "विद्यालय अध्यापक · कक्षा 1–5" },
    posts: { en: "3,847 posts", hi: "3,847 पद" },
    status: { en: "Apply by 26 Oct 2026", hi: "आवेदन 26 अक्टूबर 2026 तक" },
    examDateISO: null,
    planHref: "/exams/bihar-tre/plan",
    mocksHref: "/mock-tests?exam=bihar-1-5",
    guideHref: "/exams/bihar-tre",
  },
  {
    key: "bihar-6-8",
    title: { en: "BPSC TRE 4.0 (6–8)", hi: "BPSC TRE 4.0 (6–8)" },
    exam: { en: "Bihar School Teacher", hi: "बिहार विद्यालय अध्यापक" },
    classes: { en: "School Teacher · classes 6–8", hi: "विद्यालय अध्यापक · कक्षा 6–8" },
    posts: { en: "8,563 posts", hi: "8,563 पद" },
    status: { en: "Apply by 26 Oct 2026", hi: "आवेदन 26 अक्टूबर 2026 तक" },
    examDateISO: null,
    planHref: "/exams/bihar-tre/plan?track=bihar-6-8",
    mocksHref: "/mock-tests?exam=bihar-6-8",
    guideHref: "/exams/bihar-tre",
  },  {
    key: "bihar-9-10",
    title: { en: "BPSC TRE 4.0 (9–10)", hi: "BPSC TRE 4.0 (9–10)" },
    exam: { en: "Bihar School Teacher", hi: "बिहार विद्यालय अध्यापक" },
    classes: { en: "School Teacher · classes 9–10", hi: "विद्यालय अध्यापक · कक्षा 9–10" },
    posts: { en: "3,877 posts", hi: "3,877 पद" },
    status: { en: "Apply by 26 Oct 2026", hi: "आवेदन 26 अक्टूबर 2026 तक" },
    examDateISO: null,
    planHref: "/exams/bihar-tre/plan?track=bihar-9-10",
    mocksHref: "/mock-tests?exam=bihar-9-10",
    guideHref: "/exams/bihar-tre",
  },
  {
    key: "bihar-11-12",
    title: { en: "BPSC TRE 4.0 (11–12)", hi: "BPSC TRE 4.0 (11–12)" },
    exam: { en: "Bihar School Teacher", hi: "बिहार विद्यालय अध्यापक" },
    classes: { en: "School Teacher · classes 11–12", hi: "विद्यालय अध्यापक · कक्षा 11–12" },
    posts: { en: "16,101 posts", hi: "16,101 पद" },
    status: { en: "Apply by 26 Oct 2026", hi: "आवेदन 26 अक्टूबर 2026 तक" },
    examDateISO: null,
    planHref: "/exams/bihar-tre/plan?track=bihar-11-12",
    mocksHref: "/mock-tests?exam=bihar-11-12",
    guideHref: "/exams/bihar-tre",
  },
];

export const EXAM_COOKIE = "ps_exam";

export function isExamChoice(v: unknown): v is ExamChoice {
  return v === "up-prt" || v === "bihar-1-5" || v === "bihar-6-8" || v === "bihar-9-10" || v === "bihar-11-12";
}

export function examMeta(key: ExamChoice) {
  return EXAM_CHOICES.find((e) => e.key === key)!;
}

/** Client: read the saved choice (null if none / storage blocked). */
export function readExamChoice(): ExamChoice | null {
  try {
    const v = localStorage.getItem(EXAM_COOKIE);
    return isExamChoice(v) ? v : null;
  } catch {
    return null;
  }
}

/** Client: remember the choice (storage + cookie for server pages). */
export function saveExamChoice(key: ExamChoice) {
  try { localStorage.setItem(EXAM_COOKIE, key); } catch {}
  try { document.cookie = `${EXAM_COOKIE}=${key};path=/;max-age=31536000;samesite=lax`; } catch {}
  try { window.dispatchEvent(new CustomEvent("ps-exam-change", { detail: key })); } catch {}

  // Keep the signed-in user's preference in PostgreSQL as well. The API is
  // deliberately optional here: anonymous visitors still get the same
  // localStorage/cookie experience, while admins can see the current choice
  // on the user's record once the visitor is authenticated.
  try {
    void fetch("/api/profile/exam-choice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      keepalive: true,
      body: JSON.stringify({ examChoice: key }),
    }).catch(() => {});
  } catch {}
}
