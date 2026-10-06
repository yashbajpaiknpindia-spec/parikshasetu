import type { Metadata } from "next";
import { cookies } from "next/headers";
import { RozApp } from "@/components/roz/RozApp";
import { getLang } from "@/lib/i18n-server";
import { getExamChoice } from "@/lib/exam-choice-server";
import { isExamChoice } from "@/lib/exam-choice";
import { subjectOptions } from "@/lib/challenge-server";
import { CH_LOGIN, verifyUser } from "@/lib/challenge-token";
import { isSundayIST, type RozKind } from "@/lib/roz";

export const metadata: Metadata = {
  title: "Roz ka 10: today's free 10-minute mock",
  description: "10 questions, 10 minutes, in your exam's real pattern (SUPER TET, BPSC TRE 4.0). Right or wrong after every tap, today's real rank and a daily streak. Free, no sign-up.",
  openGraph: {
    title: "Roz ka 10 · रोज़ का 10",
    description: "आज का 10 मिनट का फ़्री मॉक · 10 questions, 10 minutes, no sign-up. Can you beat my score?",
  },
};
export const dynamic = "force-dynamic";

const serverTime = () => Date.now();

/** Roz ka 10 (daily) and, with ?k=sprint, the Sunday Sprint. ?e=<exam>&s=<subject> preselects
 *  the exam (WhatsApp and share links); ?ref=share shows the "your friend took it" line. */
export default async function RozPage({ searchParams }: PageProps<"/roz">) {
  const sp = await searchParams;
  const hi = (await getLang()) === "hi";
  const now = serverTime();
  const kind: RozKind = sp.k === "sprint" ? "sprint" : "roz";
  const fromLink = typeof sp.e === "string" && isExamChoice(sp.e) ? sp.e : null;
  const exam = fromLink ?? (await getExamChoice());
  const user = verifyUser((await cookies()).get(CH_LOGIN)?.value);
  const subjects = Object.fromEntries(["bihar-6-8", "bihar-9-10", "bihar-11-12"].map((e) => [e, subjectOptions(e)]));
  const subject = typeof sp.s === "string" && exam && subjects[exam]?.some((x) => x.key === sp.s) ? sp.s : user?.subject;

  return (
    <RozApp
      hi={hi}
      kind={kind}
      sunday={isSundayIST(now)}
      serverNow={now}
      initialExam={exam}
      initialSubject={subject}
      subjects={subjects}
      user={user ? { name: user.name } : null}
      fromShare={sp.ref === "share"}
      autoStart={sp.go === "1"}
    />
  );
}
