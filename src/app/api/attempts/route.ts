import { NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { getCurrentUser, logEvent } from "@/lib/auth-server";
import { requestMeta } from "@/lib/request-meta";

export const runtime = "nodejs";

export async function GET() {
  if (!isDbConfigured) return NextResponse.json({ attempts: [] });
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ attempts: [] });
  const attempts = await prisma.attempt.findMany({
    where: { userId: user.id },
    orderBy: { takenAt: "desc" },
    take: 100,
  });
  return NextResponse.json({ attempts });
}

export async function POST(req: Request) {
  if (!isDbConfigured) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const attempt = await prisma.attempt.create({
    data: {
      userId: user.id,
      testId: String(body.testId ?? ""),
      testTitle: String(body.testTitle ?? ""),
      examSlug: body.examSlug ? String(body.examSlug) : null,
      post: body.post ? String(body.post) : null,
      cycle: body.cycle ? String(body.cycle) : null,
      score: Number(body.score ?? 0),
      maxScore: Number(body.maxScore ?? 0),
      correct: Number(body.correct ?? 0),
      wrong: Number(body.wrong ?? 0),
      unattempted: Number(body.unattempted ?? 0),
      total: Number(body.total ?? 0),
      weakTopics: Array.isArray(body.weakTopics) ? (body.weakTopics as string[]) : [],
      answers: (body.answers as Prisma.InputJsonValue) ?? undefined,
    },
  });

  await logEvent("attempt_submitted", user.id, {
    testId: attempt.testId,
    testTitle: attempt.testTitle,
    score: attempt.score,
    maxScore: attempt.maxScore,
    ...requestMeta(req),
  });

  return NextResponse.json({ attempt });
}
