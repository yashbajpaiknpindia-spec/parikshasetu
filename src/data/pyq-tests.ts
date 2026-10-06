import type { MockTest } from "@/lib/mock-engine";

/**
 * Previous-year papers you can TAKE online (right/wrong on every question, the
 * explanation, and the full topic-wise analysis). Part of the ₹99 Prep Pass.
 *
 * This file only describes the tests and is safe in the browser. The questions
 * live in src/data/pyq-questions/ (server only) and are sent by the test page only
 * when the signed pass cookie verifies. To add a paper: generate its questions file,
 * register it in src/lib/pyq-server.ts, and add an entry here.
 */
export const PYQ_TESTS: (MockTest & { pyqSlug: string })[] = [
  {
    id: "pyq-atr-2019",
    pyq: "atr-2019",
    pyqSlug: "super-tet-2019-dec-22",
    examSlug: "up",
    examName: "SUPER TET (UP Assistant Teacher)",
    title: "ATR-2019: Assistant Teacher Recruitment Exam (previous-year paper)",
    covers: "The real 6 January 2019 paper (69000 recruitment): all 150 questions, 150 minutes, with the official answer key",
    description:
      "The actual Assistant Teacher Recruitment Exam of 6 January 2019 (Booklet Series A), exactly as asked: 150 questions in 150 minutes, 1 mark each, no negative marking. After you submit: right/wrong on every question, the explanation, and the full topic-wise analysis.",
    post: "Assistant Teacher (PRT)",
    cycle: "2019",
    tier: "Previous-year paper",
    category: "full",
    free: true,
    durationMin: 150,
    markPerCorrect: 1,
    negativeMark: 0,
    blueprint: [],
    fixedCount: 150,
    cutoffPct: 0.65,
    examLevel: "l1",
    listed: false, // shown in the previous-year papers sections, not with the mocks
    keyNote: {
      en: "Answers follow the official answer key of 08.01.2019 (Series A). A revised final key was issued on 08.05.2020; where our explanation found a problem with a keyed answer (for example Q81), it says so.",
      hi: "उत्तर 08.01.2019 की आधिकारिक उत्तर-कुंजी (सीरीज़ A) के अनुसार हैं। 08.05.2020 को संशोधित अंतिम कुंजी जारी हुई थी; जहाँ हमारी व्याख्या में किसी उत्तर पर आपत्ति मिली (जैसे प्रश्न 81), वहाँ यह लिखा है।",
    },
  },
];

export const getPyqTest = (id: string) => PYQ_TESTS.find((t) => t.id === id);
