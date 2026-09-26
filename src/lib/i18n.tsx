"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";

export type Lang = "en" | "hi";

type Dict = Record<string, { en: string; hi: string }>;

/** UI strings for the operating surfaces (player, plan, dashboard, nav). */
const D: Dict = {
  // nav
  exams: { en: "Exams", hi: "परीक्षाएँ" },
  notifications: { en: "Notifications", hi: "सूचनाएँ" },
  results: { en: "Results", hi: "रिज़ल्ट" },
  mockTests: { en: "Mock Tests", hi: "मॉक टेस्ट" },
  pricing: { en: "Pricing", hi: "मूल्य" },
  about: { en: "About", hi: "हमारे बारे में" },
  login: { en: "Log in", hi: "लॉग इन" },
  signOut: { en: "Sign out", hi: "साइन आउट" },
  dashboard: { en: "Dashboard", hi: "डैशबोर्ड" },
  findYourExam: { en: "Find your exam", hi: "अपनी परीक्षा चुनें" },
  todaysTopic: { en: "Today's topic", hi: "आज का टॉपिक" },
  // player
  startTest: { en: "Start test", hi: "टेस्ट शुरू करें" },
  instructions: { en: "Instructions", hi: "निर्देश" },
  question: { en: "Question", hi: "प्रश्न" },
  submit: { en: "Submit", hi: "जमा करें" },
  previous: { en: "Previous", hi: "पिछला" },
  markForReview: { en: "Mark for review", hi: "समीक्षा हेतु चिह्नित करें" },
  marked: { en: "Marked", hi: "चिह्नित" },
  saveNext: { en: "Save & Next", hi: "सहेजें और अगला" },
  finishSubmit: { en: "Finish & submit", hi: "समाप्त करें और जमा करें" },
  answered: { en: "answered", hi: "उत्तर दिए" },
  of: { en: "of", hi: "में से" },
  questionsWord: { en: "Questions", hi: "प्रश्न" },
  yourScore: { en: "Your score", hi: "आपका स्कोर" },
  correct: { en: "Correct", hi: "सही" },
  wrong: { en: "Wrong", hi: "गलत" },
  skipped: { en: "Skipped", hi: "छोड़े गए" },
  retake: { en: "Retake", hi: "फिर से दें" },
  moreTests: { en: "More mock tests", hi: "और मॉक टेस्ट" },
  viewDashboard: { en: "View dashboard", hi: "डैशबोर्ड देखें" },
  reviewAnswers: { en: "Review answers", hi: "उत्तर समीक्षा" },
  partAccuracy: { en: "Part-wise accuracy", hi: "खंडवार सटीकता" },
  focusHere: { en: "Focus your next study session here", hi: "अगली पढ़ाई इन पर केंद्रित करें" },
  why: { en: "Why", hi: "कारण" },
  targetLine: { en: "Target line", hi: "लक्ष्य रेखा" },
  targetNote: { en: "a self-assessment goal, not an official cut-off.", hi: "स्व-मूल्यांकन लक्ष्य है, आधिकारिक कट-ऑफ नहीं।" },
  crossed: { en: "You crossed the exam-ready target of", hi: "आपने परीक्षा-तैयारी लक्ष्य पार कर लिया:" },
  keepMomentum: { en: "Keep this momentum going.", hi: "यही गति बनाए रखें।" },
  shortOf: { en: "short of the", hi: "कम, लक्ष्य" },
  target: { en: "exam-ready target: fix the weak areas below and retake. You've got this!", hi: "परीक्षा-तैयारी लक्ष्य से: नीचे दिए कमज़ोर भाग सुधारें और फिर दें। आप कर सकते हैं!" },
  noNegative: { en: "There is no negative marking. Attempt everything.", hi: "कोई ऋणात्मक अंकन नहीं: सभी प्रश्न हल करें।" },
  negativeWarn: { en: "Wrong answers lose marks: skip if unsure.", hi: "गलत उत्तर पर अंक कटेंगे: अनिश्चित हो तो छोड़ें।" },
  timerNote: { en: "The timer auto-submits at zero.", hi: "समय शून्य होने पर टेस्ट स्वतः जमा हो जाएगा।" },
  // plan
  daysToExam: { en: "days to the exam", hi: "दिन परीक्षा में शेष" },
  testsWord: { en: "tests", hi: "टेस्ट" },
  topicsStudied: { en: "topics marked studied", hi: "विषय पढ़े चिह्नित" },
  studied: { en: "Studied", hi: "पढ़ लिया" },
  markStudied: { en: "Mark studied", hi: "पढ़ा चिह्नित करें" },
  day: { en: "Day", hi: "दिन" },
  session: { en: "Session", hi: "सत्र" },
  week: { en: "Week", hi: "सप्ताह" },
  revision: { en: "Revision", hi: "पुनरावृत्ति" },
  chunkDone: { en: "Chunk complete: take the 2 big tests (full exam pattern)", hi: "खंड पूर्ण: 2 बड़े टेस्ट दें (पूर्ण परीक्षा पैटर्न)" },
  // dashboard
  welcomeBack: { en: "Welcome back,", hi: "पुनः स्वागत है," },
  mocksTaken: { en: "Mocks taken", hi: "दिए गए मॉक" },
  avgScore: { en: "Average score", hi: "औसत स्कोर" },
  sessionsBooked: { en: "Sessions booked", hi: "बुक किए सत्र" },
  streakBadges: { en: "Your streak & badges", hi: "आपकी स्ट्रीक और बैज" },
  currentStreak: { en: "Current streak: keep it alive!", hi: "मौजूदा स्ट्रीक: जारी रखें!" },
  startStreak: { en: "Take a test today to start a streak", hi: "स्ट्रीक शुरू करने हेतु आज एक टेस्ट दें" },
  level: { en: "Level", hi: "स्तर" },
  xpToLevel: { en: "XP to level", hi: "XP अगले स्तर तक" },
  badgesEarned: { en: "badges earned", hi: "बैज अर्जित" },
  takeMock: { en: "Take a mock", hi: "मॉक दें" },
  // common
  langName: { en: "English", hi: "हिंदी" },
};

interface LangState {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof D) => string;
}

const LangContext = createContext<LangState | null>(null);
const KEY = "ps_lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const router = useRouter();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY) as Lang | null;
      if (saved === "hi" || saved === "en") {
        setLangState(saved);
        // Keep the cookie in sync so SERVER-rendered pages match the saved language.
        const cookieHasLang = document.cookie.includes(`${KEY}=${saved}`);
        if (!cookieHasLang) {
          document.cookie = `${KEY}=${saved};path=/;max-age=31536000;samesite=lax`;
          if (saved === "hi") router.refresh(); // server default is English
        }
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
      document.cookie = `${KEY}=${l};path=/;max-age=31536000;samesite=lax`;
    } catch {}
    // Re-render server components (content pages) in the chosen language.
    router.refresh();
  };

  const t = (key: keyof typeof D) => D[key]?.[lang] ?? D[key]?.en ?? String(key);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  // Safe default if used outside provider (SSR of server-only trees)
  if (!ctx) return { lang: "en" as Lang, setLang: () => {}, t: (k: keyof typeof D) => D[k]?.en ?? String(k) };
  return ctx;
}
