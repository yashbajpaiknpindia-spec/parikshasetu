import { NextResponse } from "next/server";
import { listSubmissions, rankSubmissions } from "@/lib/challenge-store";
import { requireAdmin } from "@/lib/auth-server";
import { isRoundNo } from "@/lib/challenge";

export const runtime = "nodejs";

/** Main admin export. Authentication is the same server-side admin check used by
 * every other admin screen; no separate public export key or query-string secret. */
export async function GET(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return new NextResponse("Unauthorized", { status: 401 });

  const u = new URL(req.url);
  const raw = Number(u.searchParams.get("round") ?? 1);
  const round = isRoundNo(raw) ? raw : 1;
  const all = await listSubmissions(round);
  const papers = [...new Set(all.map((r) => r.paper || "up-prt"))];
  const rows = papers.flatMap((paper) =>
    rankSubmissions(all.filter((r) => (r.paper || "up-prt") === paper)).map((r, i) => ({ ...r, paperRank: i + 1 })),
  );
  const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const head = ["paper", "rank_in_paper", "name", "mobile", "exam", "score", "max", "correct", "wrong", "unattempted", "duration_sec", "started_at_utc", "submitted_at_utc", "late"];
  const lines = rows.map((r) => [r.paper, r.paperRank, r.name, r.mobile, r.exam, r.score, r.max, r.correct, r.wrong, r.unattempted, r.durationSec, r.startedAt, r.submittedAt, r.late].map(esc).join(","));
  return new NextResponse("\ufeff" + [head.join(","), ...lines].join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="challenge-round-${round}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
