import { NextRequest, NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { CHALLENGE, isExamKey, isRoundNo } from "@/lib/challenge";
import { requestMeta } from "@/lib/request-meta";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_IP = 20;
const hits = new Map<string, { at: number; count: number }>();

function normaliseMobile(value: unknown) {
  const digits = String(value ?? "").replace(/\D/g, "");
  return digits.replace(/^(91|0)(?=\d{10}$)/, "");
}

function limit(ip: string) {
  const now = Date.now();
  const old = hits.get(ip);
  if (!old || now - old.at > WINDOW_MS) {
    hits.set(ip, { at: now, count: 1 });
    return false;
  }
  old.count += 1;
  return old.count > MAX_PER_IP;
}

function nextRegNo() {
  return `MM-${new Date().getUTCFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export async function POST(req: NextRequest) {
  if (!isDbConfigured) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  const meta = requestMeta(req);
  if (limit(meta.ip ?? "unknown")) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "invalid_json" }, { status: 400 }); }

  // Honeypot: quietly accept spam without creating a registration.
  if (String(body.website ?? "").trim()) return NextResponse.json({ ok: true, regNo: "" });

  const name = String(body.name ?? "").trim().slice(0, 60);
  const mobile = normaliseMobile(body.mobile);
  const exam = String(body.exam ?? "");
  const district = String(body.district ?? "").trim().slice(0, 40) || null;
  const consent = body.consent === true;
  const offers = body.offers === true;
  const rawRounds = Array.isArray(body.rounds) ? body.rounds.map(Number).filter((n) => Number.isFinite(n)) : [];
  const rounds = [...new Set(rawRounds)].filter(isRoundNo).sort((a, b) => a - b);
  const source = String(body.source ?? "challenge").slice(0, 60) || "challenge";

  const fields: string[] = [];
  if (name.length < 2) fields.push("name");
  if (!/^\d{10}$/.test(mobile) || !/^[6-9]\d{9}$/.test(mobile)) fields.push("mobile");
  if (!isExamKey(exam)) fields.push("exam");
  if (!rounds.length) fields.push("rounds");
  if (!consent) fields.push("consent");
  if (fields.length) return NextResponse.json({ error: "validation", fields }, { status: 422 });

  try {
    const existing = await prisma.challengeRegistration.findUnique({ where: { mobile }, select: { regNo: true, name: true, rounds: true } });
    if (existing) return NextResponse.json({ ok: true, regNo: existing.regNo, existing: true, rounds: existing.rounds });

    let regNo = nextRegNo();
    for (let i = 0; i < 5; i += 1) {
      try {
        const saved = await prisma.challengeRegistration.create({
          data: { regNo, name, mobile, exam, district, rounds, consent: true, offers, source },
          select: { regNo: true, name: true, rounds: true },
        });
        await prisma.activityEvent.create({ data: { type: "challenge_registered", meta: { regNo: saved.regNo, exam, rounds, source, ip: meta.ip, country: meta.country, region: meta.region, city: meta.city } } });
        return NextResponse.json({ ok: true, regNo: saved.regNo, rounds: saved.rounds });
      } catch (e: unknown) {
        const code = (e as { code?: string })?.code;
        if (code !== "P2002") throw e;
        regNo = nextRegNo();
      }
    }
    return NextResponse.json({ error: "could_not_create" }, { status: 503 });
  } catch {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
