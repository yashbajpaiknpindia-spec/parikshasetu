import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ChallengeRoom, type RoomState } from "@/components/challenge/ChallengeRoom";
import { currentTestRound, roundStatus } from "@/lib/challenge";
import { getSubmission, rankOf } from "@/lib/challenge-store";
import { allPaperKeys, challengeTest, paperLabel, subjectOptions, userPaper } from "@/lib/challenge-server";
import { markLabel, questionCount } from "@/lib/mock-engine";
import type { PaperInfo } from "@/components/challenge/ChallengeRoom";
import { CH_LOGIN, chDone, chStart, verifyDone, verifyStart, verifyUser } from "@/lib/challenge-token";
import { getLang } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Free Mock Challenge: Test room",
  description: "Log in with your name and mobile and take the Free Mock Challenge round when it opens. Top 1% win lifetime free access to Merit Marg.",
  robots: { index: false },
};
export const dynamic = "force-dynamic";

/** Request time on the server (this page is rendered per request). */
const serverTime = () => Date.now();

/** The test room. What it shows is decided here, on the server, from the clock and the
 *  signed cookies; the paper itself only comes from /api/challenge/start. */
export default async function ChallengeTestPage() {
  const hi = (await getLang()) === "hi";
  const now = serverTime();
  const round = currentTestRound(now);
  if (!round) {
    return <ChallengeRoom hi={hi} round={{ n: 0, date: "", label: { en: "", hi: "" }, startTime: null }} state="unscheduled" user={null} serverNow={now} subjects={{}} />;
  }
  const jar = await cookies();
  const user = verifyUser(jar.get(CH_LOGIN)?.value);
  const done = verifyDone(jar.get(chDone(round.n))?.value);
  const start = verifyStart(jar.get(chStart(round.n))?.value);
  const status = roundStatus(round, now);
  const subjects = Object.fromEntries(["bihar-6-8", "bihar-9-10", "bihar-11-12"].map((e) => [e, subjectOptions(e)]));
  const key = user ? userPaper(user) : null;
  const t = key && allPaperKeys().includes(key) ? challengeTest(round.n, key) : null;
  const paper: PaperInfo | null = t && key
    ? { label: paperLabel(key), questions: questionCount(t), minutes: t.durationMin, marking: markLabel(t), optionE: !!t.optionE }
    : null;
  let rank: { rank: number; total: number } | null = null;

  let state: RoomState;
  let doneScore: { score: number; max: number } | null = null;
  // An older login without a subject (or an unknown paper) logs in again to pick it.
  if (!user || !key) state = "login";
  else if (done && done.mobile === user.mobile) {
    state = "done"; doneScore = { score: done.score, max: done.max };
    const sub = await getSubmission(round.n, user.mobile);
    if (sub) rank = await rankOf({ ...sub, paper: sub.paper ?? key }).catch(() => null);
  }
  else {
    const sub = status === "upcoming" ? null : await getSubmission(round.n, user.mobile);
    if (sub) { state = "done"; doneScore = { score: sub.score, max: sub.max }; rank = await rankOf({ ...sub, paper: sub.paper ?? key }).catch(() => null); }
    else if (start && start.mobile === user.mobile) state = "started";
    else state = status === "unscheduled" ? "unscheduled" : status;
  }

  return (
    <ChallengeRoom
      hi={hi}
      round={round}
      state={state}
      user={user ? { name: user.name, mobile: user.mobile } : null}
      serverNow={now}
      doneScore={doneScore}
      paper={paper}
      subjects={subjects}
      rank={rank}
    />
  );
}
