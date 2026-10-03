import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { Card, Badge } from "@/components/ui";
import { StatCard } from "@/components/admin/StatCard";
import { formatIndiaDateTime } from "@/lib/time";
import { safeAdminQuery } from "@/lib/admin-safe";

export const metadata = pageSeo({
  title: "Admin Mock Attempts",
  description: "Private Merit Marg mock-attempt monitoring with scores, review marks, users, tests and timestamps.",
  path: "/admin/attempts",
  keywords: ["Merit Marg attempt analytics"],
  noIndex: true,
});

export const dynamic = "force-dynamic";

export default async function AdminAttemptsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  if (!isDbConfigured) redirect("/admin");
  const admin = await requireAdmin();
  if (!admin) redirect("/login");

  const sp = await searchParams;
  const q = (sp.q ?? "").trim();
  const page = Math.max(1, Number(sp.page ?? "1"));
  const pageSize = 25;

  const where = q
    ? {
        OR: [
          { testTitle: { contains: q, mode: "insensitive" as const } },
          { examSlug: { contains: q, mode: "insensitive" as const } },
          { user: { email: { contains: q, mode: "insensitive" as const } } },
          { user: { name: { contains: q, mode: "insensitive" as const } } },
        ],
      }
    : {};

  const [attempts, total, agg] = await Promise.all([
    safeAdminQuery(
      "attempts-list",
      () => prisma.attempt.findMany({
        where,
        orderBy: { takenAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: { user: { select: { id: true, name: true, email: true } } },
      }),
      [],
    ),
    safeAdminQuery("attempts-total", () => prisma.attempt.count({ where }), 0),
    safeAdminQuery(
      "attempts-average",
      () => prisma.attempt.aggregate({ where, _avg: { score: true, maxScore: true } }),
      { _avg: { score: null, maxScore: null } },
    ),
  ]);

  const avgScorePct =
    agg._avg.score && agg._avg.maxScore ? Math.round((agg._avg.score / agg._avg.maxScore) * 100) : 0;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900">Test attempts</h1>
          <p className="mt-1 text-sm text-ink-500">{total} total · avg score {avgScorePct}%</p>
        </div>
        <form className="flex items-center gap-2">
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Search user, email, test or exam…"
            className="rounded-lg border border-ink-300 px-3 py-2 text-sm"
          />
        </form>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Attempts" value={total} />
        <StatCard label="Average score" value={`${avgScorePct}%`} />
        <StatCard label="Showing" value={`${attempts.length} of ${total}`} />
      </div>

      <p className="text-xs text-ink-500">
        Only attempts by signed-in users are synced here — local-only (not signed in) attempts stay on that
        person&apos;s device.
      </p>

      <Card className="overflow-x-auto p-0">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-ink-200 bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
            <tr>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Test</th>
              <th className="px-4 py-3">Exam</th>
              <th className="px-4 py-3">Score</th>
              <th className="px-4 py-3">Correct / Wrong / Skipped</th>
              <th className="px-4 py-3">Review marks</th>
              <th className="px-4 py-3">Taken</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((a) => (
              <tr key={a.id} className="border-b border-ink-100 last:border-0 hover:bg-ink-50">
                <td className="px-4 py-3">
                  {a.user ? (
                    <Link href={`/admin/users/${a.user.id}`} className="font-medium text-brand-700 hover:underline">
                      {a.user.name}
                    </Link>
                  ) : (
                    <span className="text-ink-500">deleted user</span>
                  )}
                  <div className="text-xs text-ink-500">{a.user?.email}</div>
                </td>
                <td className="px-4 py-3 text-ink-700">{a.testTitle}</td>
                <td className="px-4 py-3 text-ink-600">
                  {a.examSlug ?? "—"}
                  {a.post && <div className="text-xs text-ink-400">{a.post}</div>}
                </td>
                <td className="px-4 py-3 text-ink-700">
                  {a.score}/{a.maxScore}
                  {a.maxScore > 0 && (
                    <Badge tone={a.score / a.maxScore >= 0.5 ? "green" : "amber"} className="ml-2">
                      {Math.round((a.score / a.maxScore) * 100)}%
                    </Badge>
                  )}
                </td>
                <td className="px-4 py-3 text-ink-600">
                  {a.correct} / {a.wrong} / {a.unattempted}
                </td>
                <td className="px-4 py-3">
                  {(a.markedForReview ?? []).length > 0 ? (
                    <details className="max-w-xs">
                      <summary className="cursor-pointer text-brand-700">{(a.markedForReview ?? []).length} marked</summary>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {(a.markedForReview ?? []).map((id) => (
                          <span key={id} className="rounded-md bg-amber-50 px-1.5 py-0.5 font-mono text-[11px] text-amber-800">{id}</span>
                        ))}
                      </div>
                    </details>
                  ) : <span className="text-ink-400">—</span>}
                </td>
                <td className="px-4 py-3 text-ink-500">{formatIndiaDateTime(a.takenAt)} IST</td>
              </tr>
            ))}
            {attempts.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-ink-500">
                  No attempts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 text-sm">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={`/admin/attempts?q=${encodeURIComponent(q)}&page=${p}`}
              className={`rounded-lg px-3 py-1.5 ${
                p === page ? "bg-brand-600 text-white" : "border border-ink-300 text-ink-600 hover:bg-ink-100"
              }`}
            >
              {p}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
