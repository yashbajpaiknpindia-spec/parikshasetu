import { pageSeo } from "@/lib/seo";
import { redirect } from "next/navigation";
import Link from "next/link";
import { CalendarDays, Download, Trophy, Users, ClipboardCheck, Clock3 } from "lucide-react";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { Card, Badge } from "@/components/ui";
import { formatIndiaDateTime } from "@/lib/time";
import { CHALLENGE, isRoundNo } from "@/lib/challenge";
import { listSubmissions, rankSubmissions } from "@/lib/challenge-store";
import { paperLabel } from "@/lib/challenge-server";
import { safeAdminQuery } from "@/lib/admin-safe";

export const metadata = pageSeo({
  title: "Free Mock Challenge Admin",
  description: "Merit Marg challenge registrations, submissions, rankings and exports.",
  path: "/admin/challenge",
  keywords: ["Merit Marg challenge admin"],
  noIndex: true,
});

export const dynamic = "force-dynamic";

export default async function AdminChallengePage({ searchParams }: PageProps<"/admin/challenge">) {
  if (!isDbConfigured) redirect("/admin");
  const admin = await requireAdmin();
  if (!admin) redirect("/login");
  const sp = await searchParams;
  const rawRound = Number(sp.round ?? 1);
  const round = isRoundNo(rawRound) ? rawRound : 1;

  const [total, byExam, rounds, registrations, submissions] = await Promise.all([
    safeAdminQuery("challenge-total", () => prisma.challengeRegistration.count(), 0),
    safeAdminQuery("challenge-by-exam", () => prisma.challengeRegistration.groupBy({ by: ["exam"], _count: { _all: true }, orderBy: { _count: { exam: "desc" } } }), []),
    safeAdminQuery("challenge-rounds", () => prisma.$queryRaw<{ round: number; count: bigint }[]>`
      SELECT round, COUNT(*)::bigint AS count
      FROM "ChallengeRegistration"
      CROSS JOIN LATERAL unnest("rounds") AS u(round)
      GROUP BY round
      ORDER BY round ASC`, []),
    safeAdminQuery("challenge-registrations", () => prisma.challengeRegistration.findMany({ orderBy: { createdAt: "desc" }, take: 150 }), []),
    safeAdminQuery(`challenge-submissions-r${round}`, () => listSubmissions(round), []),
  ]);

  const grouped = new Map<string, typeof submissions>();
  for (const s of submissions) grouped.set(s.paper, [...(grouped.get(s.paper) ?? []), s]);
  const groups = [...grouped.entries()].map(([paper, rows]) => {
    const ranked = rankSubmissions(rows);
    const winners = Math.max(1, Math.ceil((ranked.length * CHALLENGE.topPct) / 100));
    return { paper, label: paperLabel(paper), rows: ranked, winners };
  }).sort((a, b) => b.rows.length - a.rows.length);

  const roundSelections = rounds.reduce((sum, r) => sum + Number(r.count), 0);
  const csvHref = `/api/challenge/export?round=${round}`;

  return (
    <div className="space-y-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Competition & acquisition</p>
          <h1 className="mt-1 text-2xl font-bold text-ink-900">Free Mock Challenge</h1>
          <p className="mt-1 text-sm text-ink-500">Round {round} · server-scored submissions · all admin times IST</p>
        </div>
        <a href={csvHref} className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"><Download className="h-4 w-4" /> Export round CSV</a>
      </div>

      <div className="flex flex-wrap gap-2">
        {CHALLENGE.rounds.map((r) => (
          <Link key={r.n} href={`/admin/challenge?round=${r.n}`} className={`rounded-xl px-3 py-2 text-sm font-semibold ring-1 ${r.n === round ? "bg-brand-600 text-white ring-brand-600" : "bg-white text-ink-700 ring-ink-200 hover:bg-ink-50"}`}>Round {r.n} · {r.label.en}</Link>
        ))}
        <Link href="/challenge" className="rounded-xl px-3 py-2 text-sm font-semibold text-ink-700 ring-1 ring-ink-200 hover:bg-ink-50">Open challenge page</Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Card className="p-5"><Users className="h-5 w-5 text-brand-600" /><p className="mt-3 text-3xl font-extrabold text-ink-900">{total}</p><p className="mt-1 text-sm text-ink-500">Registrations</p></Card>
        <Card className="p-5"><CalendarDays className="h-5 w-5 text-teal-600" /><p className="mt-3 text-3xl font-extrabold text-ink-900">{rounds.find((r) => Number(r.round) === round) ? Number(rounds.find((r) => Number(r.round) === round)?.count) : 0}</p><p className="mt-1 text-sm text-ink-500">Round {round} selections</p></Card>
        <Card className="p-5"><ClipboardCheck className="h-5 w-5 text-saffron-600" /><p className="mt-3 text-3xl font-extrabold text-ink-900">{submissions.length}</p><p className="mt-1 text-sm text-ink-500">Submissions</p></Card>
        <Card className="p-5"><Trophy className="h-5 w-5 text-saffron-600" /><p className="mt-3 text-3xl font-extrabold text-ink-900">{groups.length}</p><p className="mt-1 text-sm text-ink-500">Papers represented</p></Card>
        <Card className="p-5"><Clock3 className="h-5 w-5 text-brand-600" /><p className="mt-3 text-3xl font-extrabold text-ink-900">{roundSelections}</p><p className="mt-1 text-sm text-ink-500">All round selections</p></Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="p-5">
          <h2 className="font-semibold text-ink-900">Exam interest</h2>
          <div className="mt-4 space-y-3">
            {byExam.map((x) => <div key={x.exam} className="flex items-center justify-between rounded-xl bg-ink-50 px-3 py-2.5"><span className="text-sm text-ink-700">{x.exam}</span><Badge tone="brand">{x._count._all}</Badge></div>)}
            {!byExam.length && <p className="text-sm text-ink-500">No registrations yet.</p>}
          </div>
        </Card>
        <Card className="overflow-x-auto p-0">
          <div className="border-b border-ink-200 p-5"><h2 className="font-semibold text-ink-900">Latest registrations</h2><p className="mt-1 text-xs text-ink-500">Newest first · phone numbers visible only to admins</p></div>
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500"><tr><th className="px-4 py-3">Reg</th><th className="px-4 py-3">Participant</th><th className="px-4 py-3">Exam / subject</th><th className="px-4 py-3">Rounds</th><th className="px-4 py-3">Source</th><th className="px-4 py-3">Time</th></tr></thead>
            <tbody>
              {registrations.map((r) => <tr key={r.id} className="border-t border-ink-100"><td className="px-4 py-3 font-mono text-xs font-semibold">{r.regNo}</td><td className="px-4 py-3"><div className="font-medium text-ink-900">{r.name}</div><div className="text-xs text-ink-500">+91 {r.mobile}{r.district ? ` · ${r.district}` : ""}</div></td><td className="px-4 py-3 text-ink-600">{r.exam}{r.subject ? ` · ${r.subject}` : ""}</td><td className="px-4 py-3">{r.rounds.map((n) => `R${n}`).join(" · ")}</td><td className="px-4 py-3 text-ink-500">{r.source}</td><td className="px-4 py-3 text-xs text-ink-500">{formatIndiaDateTime(r.createdAt)}</td></tr>)}
            </tbody>
          </table>
        </Card>
      </div>

      <div className="space-y-6">
        {groups.map(({ paper, label, rows, winners }) => (
          <Card key={paper} className="overflow-x-auto p-0">
            <div className="border-b border-ink-200 p-5"><h2 className="font-semibold text-ink-900">{label}</h2><p className="mt-1 text-xs text-ink-500">{rows.length} submissions · top {CHALLENGE.topPct}% = {winners} winner{winners === 1 ? "" : "s"} · tie-break: score, time, submission time</p></div>
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500"><tr>{["Rank","Name","Mobile","Score","Right","Wrong","Skipped","Time","Submitted","Status"].map((h) => <th key={h} className="px-4 py-3">{h}</th>)}</tr></thead>
              <tbody>{rows.map((r, i) => <tr key={r.mobile} className={`border-t border-ink-100 ${i < winners ? "bg-saffron-50" : ""}`}><td className="px-4 py-3 font-bold">{i + 1}{i < winners ? " 🏆" : ""}</td><td className="px-4 py-3 font-medium text-ink-900">{r.name}</td><td className="px-4 py-3 tabular-nums">{r.mobile}</td><td className="px-4 py-3 font-semibold">{r.score} / {r.max}</td><td className="px-4 py-3">{r.correct}</td><td className="px-4 py-3">{r.wrong}</td><td className="px-4 py-3">{r.unattempted}</td><td className="px-4 py-3">{Math.floor(r.durationSec / 60)}m {String(r.durationSec % 60).padStart(2, "0")}s</td><td className="px-4 py-3 text-xs">{formatIndiaDateTime(r.submittedAt)}</td><td className={`px-4 py-3 text-xs font-semibold ${r.late ? "text-rose-700" : "text-teal-700"}`}>{r.late ? "Late" : "On time"}</td></tr>)}</tbody>
            </table>
          </Card>
        ))}
        {!groups.length && <Card className="p-8 text-center text-sm text-ink-500">No submissions for this round yet.</Card>}
      </div>

      <Link href="/admin" className="text-sm font-semibold text-brand-700 hover:underline">← Back to admin overview</Link>
    </div>
  );
}
