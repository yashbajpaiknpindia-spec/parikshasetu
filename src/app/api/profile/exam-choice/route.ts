import { NextResponse } from "next/server";
import { getCurrentUser, logEvent } from "@/lib/auth-server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { isExamChoice } from "@/lib/exam-choice";
import { requestMeta } from "@/lib/request-meta";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!isDbConfigured) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  let value: unknown;
  try {
    const body = await req.json();
    value = body.examChoice;
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  if (!isExamChoice(value)) {
    return NextResponse.json({ error: "invalid_exam_choice" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { examChoice: value },
  });
  await logEvent("exam_choice_updated", user.id, { examChoice: value, ...requestMeta(req) });

  return NextResponse.json({ ok: true, examChoice: value });
}
