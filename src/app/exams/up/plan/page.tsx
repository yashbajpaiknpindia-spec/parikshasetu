import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, ClipboardCheck, ListChecks, Languages } from "lucide-react";
import { Container, Badge, Callout } from "@/components/ui";
import { StudyPlan } from "@/components/exams/StudyPlan";
import { TRACKS } from "@/lib/exams/tracks";
import { getLang } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Day-by-Day Study Plan: SUPER TET & BPSC TRE 4.0",
  description:
    "Day-by-day plans for SUPER TET (UP Assistant Teacher, classes 1–5) and the BPSC TRE 4.0 (classes 1–5 and 6–8): one topic a day, a moderate and a tough set per topic, week tests on each week's topics, full papers in the real pattern, every question in Hindi and English. 2 mocks free; the full plan with every full and section-wise mock is ₹99, one time.",
};

export default async function UpPlanPage() {
  const hi = (await getLang()) === "hi";
  return (
    <>
      <section className="hero-gradient">
        <Container className="py-14">
          <Link href="/exams/up" className="text-sm text-ink-500 hover:text-brand-700">← {hi ? "UP परीक्षा गाइड" : "UP exam guide"}</Link>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge tone="saffron">{hi ? "पूरी योजना ₹99 में · एक बार" : "Full plan for ₹99 · one time"}</Badge>
            <Badge tone="brand"><CalendarDays className="h-3.5 w-3.5" /> SUPER TET · BPSC TRE 4.0 (1–5) · BPSC TRE 4.0 (6–8)</Badge>
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-ink-900 sm:text-5xl">
            {hi ? "आपकी परीक्षा के लिए दिन-प्रतिदिन योजना" : "Your day-by-day plan, for your exam"}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-600">
            {hi
              ? "पूरा पाठ्यक्रम हफ़्तों में बँटा है, रोज़ एक टॉपिक। हर टॉपिक पर दो सेट: पहले मध्यम, फिर कठिन। कोई आसान प्रश्न नहीं। हर हफ़्ते के बाद केवल उसी हफ़्ते के टॉपिक पर दो टेस्ट; असली पैटर्न वाले पूर्ण पेपर रिवीज़न सप्ताहों में।"
              : "The whole syllabus split into weeks, one topic a day. Each topic has two sets: Moderate, then Tough. No easy questions. After each week, two tests on only that week's topics; full papers in the real pattern come in the revision weeks."}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink-600">
            <span className="inline-flex items-center gap-1.5"><ListChecks className="h-4 w-4 text-brand-600" /> {hi ? "मध्यम + कठिन, हर दिन" : "Moderate + Tough every day"}</span>
            <span className="inline-flex items-center gap-1.5"><ClipboardCheck className="h-4 w-4 text-brand-600" /> {hi ? "असली अंकन (UP +3/−1 · बिहार +1/−⅓)" : "Real marking (UP +3/−1 · Bihar +1/−⅓)"}</span>
            <span className="inline-flex items-center gap-1.5"><Languages className="h-4 w-4 text-brand-600" /> {hi ? "हिंदी + अंग्रेज़ी" : "Hindi + English"}</span>
          </div>
        </Container>
      </section>

      <Container className="pt-8">
        <Callout tone="amber" title={hi ? "आधिकारिक विज्ञापन से मिलाएँ" : "Check against the official advertisement"}>
          {hi ? "UP: " : "UP: "}
          <a href="https://upessc.up.gov.in/Home/Advertisment" target="_blank" rel="noopener noreferrer" className="underline">UPESSC Advt 05/2026</a>
          {" · "}{hi ? "बिहार: " : "Bihar: "}
          <a href="https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Advertisement-152026-TRE-4.0_BPSC-20260922-dbsf04.pdf" target="_blank" rel="noopener noreferrer" className="underline">BPSC Advt 15/2026</a>.{" "}
          {hi
            ? "अभ्यास प्रश्न पिछले वर्षों के पैटर्न पर बने मूल प्रश्न हैं, आधिकारिक प्रश्न-पत्र नहीं।"
            : "Practice questions are original, modelled on previous papers, not official past papers."}
        </Callout>
      </Container>

      <StudyPlan tracks={TRACKS} defaultTrack="up-prt" />
    </>
  );
}
