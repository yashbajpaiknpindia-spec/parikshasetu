/**
 * The Merit Marg Free Mock Challenge: the single source of truth for its dates,
 * prize, rules and form options (home banner, home form, /challenge page, API).
 *
 * Three Sunday rounds. Registration stays open throughout. A round's paper opens at
 * `opensAt` (enforced on the server) on /challenge/test, after login with name + mobile;
 * candidates may start until `entryClosesAt`, and each gets `durationMin` from their start.
 * TODO(owner): confirm the round start time, the challenge paper's pattern and
 * the rules below before the Meta campaign runs.
 */
type Bi = { en: string; hi: string };

export interface ChallengeRound {
  n: number;
  /** YYYY-MM-DD, India time. */
  date: string;
  label: Bi;
  /** e.g. "4:00 PM"; null until announced. */
  startTime: string | null;
  /** When the paper actually opens (ISO, India time), enforced by the server. */
  opensAt?: string;
  /** The opening time we ANNOUNCE (countdowns, "Paper opens 4:00 PM"). Can be later than
   *  `opensAt`, so a candidate who logs in early on the day can still take the paper. */
  announcedAt?: string;
  /** Last moment a candidate can START the paper; each one then gets the full time. */
  entryClosesAt?: string;
  /** Minutes allowed once started. */
  durationMin?: number;
}

export const CHALLENGE = {
  name: { en: "Merit Marg Free Mock Challenge", hi: "मेरिट मार्ग फ़्री मॉक चैलेंज" },
  short: { en: "Free Mock Challenge", hi: "फ़्री मॉक चैलेंज" },
  prize: { en: "Lifetime FREE access to Merit Marg", hi: "मेरिट मार्ग का लाइफ़टाइम फ़्री एक्सेस" },
  topPct: 1,
  // Closed 5 Oct 2026: the full-length rounds of 11 and 18 Oct are replaced by the weekly
  // Sunday Sprint (30 questions, 30 minutes) and the daily Roz ka 10, see src/lib/roz.ts.
  registrationOpen: false,
  rounds: [
    {
      n: 1, date: "2026-10-04", label: { en: "Sun, 4 Oct", hi: "रवि, 4 अक्टूबर" }, startTime: "4:00 PM",
      // Opens at 4:00 PM IST and accepts new starts until 11:59 PM; each gets the full time from their own start.
      opensAt: "2026-10-04T16:00:00+05:30", announcedAt: "2026-10-04T16:00:00+05:30",
      entryClosesAt: "2026-10-04T23:59:59+05:30", durationMin: 120,
    },
  ] as ChallengeRound[],
  exams: [
    { key: "up-prt", en: "SUPER TET (UP Assistant Teacher)", hi: "सुपर टेट (UP सहायक अध्यापक)" },
    { key: "bihar-1-5", en: "BPSC TRE 4.0 · Classes 1–5", hi: "BPSC TRE 4.0 · कक्षा 1–5" },
    { key: "bihar-6-8", en: "BPSC TRE 4.0 · Classes 6–8", hi: "BPSC TRE 4.0 · कक्षा 6–8" },
    { key: "bihar-9-10", en: "BPSC TRE 4.0 · Classes 9–10", hi: "BPSC TRE 4.0 · कक्षा 9–10" },
    { key: "bihar-11-12", en: "BPSC TRE 4.0 · Classes 11–12", hi: "BPSC TRE 4.0 · कक्षा 11–12" },
  ],
  rules: [
    { en: "Free to enter. Register once with your own mobile number; one registration per number.", hi: "प्रवेश मुफ़्त। अपने मोबाइल नंबर से एक बार पंजीकरण करें; एक नंबर पर एक ही पंजीकरण।" },
    { en: "Round 1 was held on Sunday 4 October 2026: a full-length mock in the real exam pattern. The rounds planned for 11 and 18 October are replaced by the weekly Sunday Sprint (30 questions, 30 minutes, real rank) and the daily Roz ka 10.", hi: "राउंड 1 रविवार 4 अक्टूबर 2026 को हुआ: असली परीक्षा पैटर्न का पूर्ण मॉक। 11 और 18 अक्टूबर के राउंड की जगह अब हर हफ़्ते संडे स्प्रिंट (30 प्रश्न, 30 मिनट, असली रैंक) और रोज़ का 10 है।" },
    { en: "One attempt per registered number per round. Ranks go by score; a tie goes to less time taken, then the earlier submission.", hi: "हर राउंड में एक नंबर से एक ही प्रयास। रैंक अंकों से; बराबरी पर कम समय, फिर पहले जमा करने वाला आगे।" },
    { en: "The top 1% of each round (at least one winner per round) get lifetime free access to Merit Marg: every mock, previous-year paper and the full plan.", hi: "हर राउंड के टॉप 1% (हर राउंड में कम से कम एक विजेता) को मेरिट मार्ग का लाइफ़टाइम फ़्री एक्सेस: हर मॉक, पिछले प्रश्न-पत्र और पूरी योजना।" },
    { en: "Winners are announced on this site and on WhatsApp within 3 days of each round, and their access is switched on for the registered number.", hi: "हर राउंड के 3 दिन के भीतर विजेताओं की घोषणा इस साइट और WhatsApp पर होगी, और पंजीकृत नंबर पर एक्सेस चालू कर दिया जाएगा।" },
    { en: "Multiple registrations, shared accounts or unfair means lead to disqualification. Merit Marg's decision on results is final.", hi: "कई पंजीकरण, साझा खाते या अनुचित साधन अपनाने पर अयोग्य घोषित किया जाएगा। परिणामों पर मेरिट मार्ग का निर्णय अंतिम होगा।" },
  ] as Bi[],
};

/** When a round opens (its `opensAt`, else the start of its day in India), as a timestamp. */
export const roundStart = (r: ChallengeRound) => Date.parse(r.announcedAt ?? r.opensAt ?? `${r.date}T00:00:00+05:30`);
/** End of a round's day in India. */
export const roundEnd = (r: ChallengeRound) => Date.parse(`${r.date}T23:59:59+05:30`);

/** The round that is today or next, or null once all rounds are over. */
export function nextRound(now = Date.now()): ChallengeRound | null {
  return CHALLENGE.rounds.find((r) => roundEnd(r) >= now) ?? null;
}

export const isExamKey = (v: unknown): v is string => CHALLENGE.exams.some((e) => e.key === v);
export const isRoundNo = (v: unknown): v is number => CHALLENGE.rounds.some((r) => r.n === v);

/** Round state at `now`: before it opens, open for entry, or closed for new starts. */
export function roundStatus(r: ChallengeRound, now = Date.now()): "unscheduled" | "upcoming" | "open" | "closed" {
  if (!r.opensAt || !r.entryClosesAt) return "unscheduled";
  // Local testing only: CHALLENGE_DEV_OPEN=1 opens a scheduled round early (never in production).
  if (process.env.NODE_ENV !== "production" && process.env.CHALLENGE_DEV_OPEN === "1" && now <= Date.parse(r.entryClosesAt)) return "open";
  if (now < Date.parse(r.opensAt)) return "upcoming";
  if (now <= Date.parse(r.entryClosesAt)) return "open";
  return "closed";
}

/** The round the test room is for: the first scheduled round that isn't closed yet,
 *  else the last scheduled one. */
export function currentTestRound(now = Date.now()): ChallengeRound | null {
  const sched = CHALLENGE.rounds.filter((r) => r.opensAt);
  return sched.find((r) => roundStatus(r, now) !== "closed") ?? sched[sched.length - 1] ?? null;
}

/** "4:00 PM, Sun 4 Oct" style label. */
export const roundWhen = (r: ChallengeRound, hi: boolean) =>
  `${r.startTime ?? ""}${r.startTime ? ", " : ""}${hi ? r.label.hi : r.label.en}`;

/** The public link of the test room (sent on WhatsApp). */
export const TEST_ROOM_PATH = "/challenge/test";
