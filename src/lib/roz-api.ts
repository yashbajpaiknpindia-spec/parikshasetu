import { cookies } from "next/headers";
import type { NextResponse } from "next/server";
import { CH_LOGIN, verifyUser } from "@/lib/challenge-token";
import { DEV_COOKIE, doneCookie, verifyRoz, whoOf, rozPaper, type RozDone } from "@/lib/roz-server";
import type { RozKind } from "@/lib/roz";
import { markLabel } from "@/lib/mock-engine";
import { paperLabel } from "@/lib/challenge-server";

/** SERVER ONLY. Helpers shared by the /api/roz/* routes. */

/** Who is playing: the logged-in person (name + mobile cookie), else this device's guest id. */
export async function whoami() {
  const jar = await cookies();
  const user = verifyUser(jar.get(CH_LOGIN)?.value);
  const dev = jar.get(DEV_COOKIE)?.value ?? null;
  return { jar, user, dev, who: whoOf(user?.mobile, dev) };
}

export const readDone = (jar: Awaited<ReturnType<typeof cookies>>, k: RozKind) => verifyRoz<RozDone>(jar.get(doneCookie(k))?.value);

export function setCookie(res: NextResponse, name: string, value: string, maxAge: number) {
  res.cookies.set(name, value, { path: "/", maxAge, sameSite: "lax", httpOnly: true, secure: process.env.NODE_ENV === "production" });
}

export interface RozPaperInfo { label: string; questions: number; minutes: number; marking: string; plus: number; minus: number }

/** What the browser needs to know about the paper (no answers). */
export function paperInfo(k: RozKind, d: string, p: string): RozPaperInfo | null {
  const paper = rozPaper(k, d, p);
  if (!paper) return null;
  const t = paper.test;
  return { label: paperLabel(p), questions: paper.questions.length, minutes: t.durationMin, marking: markLabel(t), plus: t.markPerCorrect, minus: t.negativeMark };
}

/** "bihar-6-8:ms" → { exam: "bihar-6-8", subject: "ms" } */
export function splitPaper(p: string) {
  const [exam, subject] = p.split(":");
  return { exam, subject: subject || undefined };
}
