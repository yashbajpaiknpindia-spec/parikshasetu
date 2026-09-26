import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { StatCard } from "@/components/admin/StatCard";
import { BarSeries } from "@/components/admin/BarSeries";
import { Card } from "@/components/ui";

export const dynamic = "force-dynamic";

function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Fills any missing days in a 30-day window with 0 so the bar chart has no gaps. */
function fill30(series: { day: string; count: number }[]) {
  const map = new Map(series.map((s) => [s.day, s.count]));
  const out: { day: string; count: number }[] = [];
  for (let i = 29; i >= 0; i--) {
    const d = daysAgo(i);
    const key = d.toISOString().slice(0, 10);
    out.push({ day: key, count: map.get(key) ?? 0 });
  }
  return out;
}

export default async function AdminOverviewPage() {
  if (!isDbConfigured) {
    return (
      <Card className="p-8 text-center">
        <h1 className="text-lg font-bold text-ink-900">Admin dashboard needs a real backend</h1>
        <p className="mt-2 text-sm text-ink-600">
          Set <code className="rounded bg-ink-100 px-1.5 py-0.5">DATABASE_URL</code> (and{" "}
          <code className="rounded bg-ink-100 px-1.5 py-0.5">JWT_SECRET</code>) to switch the app out of
          demo mode. See <code className="rounded bg-ink-100 px-1.5 py-0.5">RENDER_DEPLOY.md</code>.
        </p>
      </Card>
    );
  }

  const admin = await requireAdmin();
  if (!admin) redirect("/login");

  const since30 = daysAgo(30);
  const since7 = daysAgo(7);
  const today = daysAgo(0);

  const [
    totalUsers,
    newUsers7d,
    activeToday,
    activeThisWeek,
    totalAttempts,
    attemptsAgg,
    totalBookings,
    paidBookings,
    totalPlanAccess,
    planRevenueAgg,
    bookingRevenueAgg,
    signupSeriesRaw,
    attemptSeriesRaw,
    topExams,
    recentEvents,
    loginEvents7d,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { createdAt: { gte: since7 } } }),
    prisma.user.count({ where: { lastSeenAt: { gte: today } } }),
    prisma.user.count({ where: { lastSeenAt: { gte: since7 } } }),
    prisma.attempt.count(),
    prisma.attempt.aggregate({ _avg: { score: true, maxScore: true } }),
    prisma.booking.count(),
    prisma.booking.count({ where: { paid: true } }),
    prisma.planAccess.count(),
    prisma.planAccess.aggregate({ _sum: { amount: true } }),
    prisma.booking.aggregate({ where: { paid: true }, _sum: { price: true } }),
    prisma.$queryRaw<{ day: string; count: bigint }[]>`
      SELECT to_char("createdAt", 'YYYY-MM-DD') AS day, COUNT(*)::bigint AS count
      FROM "User" WHERE "createdAt" >= ${since30} GROUP BY day ORDER BY day ASC`,
    prisma.$queryRaw<{ day: string; count: bigint }[]>`
      SELECT to_char("takenAt", 'YYYY-MM-DD') AS day, COUNT(*)::bigint AS count
      FROM "Attempt" WHERE "takenAt" >= ${since30} GROUP BY day ORDER BY day ASC`,
    prisma.attempt.groupBy({
      by: ["examSlug"],
      _count: { _all: true },
      orderBy: { _count: { examSlug: "desc" } },
      take: 8,
    }),
    prisma.activityEvent.findMany({
      orderBy: { createdAt: "desc" }, take: 8, include: { user: { select: { name: true, email: true } } },
    }),
    prisma.activityEvent.count({ where: { type: "login", createdAt: { gte: since7 } } }),
  ]);

  const avgScorePct =
    attemptsAgg._avg.score && attemptsAgg._avg.maxScore
      ? Math.round((attemptsAgg._avg.score / attemptsAgg._avg.maxScore) * 100)
      : 0;
  const revenue = (planRevenueAgg._sum.amount ?? 0) + (bookingRevenueAgg._sum.price ?? 0);
  const signupSeries = fill30(signupSeriesRaw.map((r) => ({ day: r.day, count: Number(r.count) })));
  const attemptSeries = fill30(attemptSeriesRaw.map((r) => ({ day: r.day, count: Number(r.count) })));
  const maxExam = Math.max(1, ...topExams.map((e) => e._count._all));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-ink-900">Overview</h1>
        <p className="mt-1 text-sm text-ink-500">Live stats across every user, mock test, booking and plan purchase.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total users" value={totalUsers} sub={`+${newUsers7d} in the last 7 days`} />
        <StatCard label="Active today" value={activeToday} sub={`${activeThisWeek} active this week · ${loginEvents7d} login sessions / 7d`} />
        <StatCard label="Mock attempts" value={totalAttempts} sub={`avg score ${avgScorePct}%`} />
        <StatCard label="Revenue" value={`₹${revenue.toLocaleString("en-IN")}`} sub={`${totalPlanAccess} plans · ${paidBookings}/${totalBookings} paid bookings`} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-sm font-semibold text-ink-900">New signups — last 30 days</h2>
          <div className="mt-4">
            <BarSeries data={signupSeries} color="#2563eb" />
          </div>
        </Card>
        <Card className="p-5">
          <h2 className="text-sm font-semibold text-ink-900">Mock attempts — last 30 days</h2>
          <div className="mt-4">
            <BarSeries data={attemptSeries} color="#16a34a" />
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-sm font-semibold text-ink-900">Attempts by exam</h2>
          <div className="mt-4 space-y-2.5">
            {topExams.length === 0 && <p className="text-sm text-ink-500">No attempts yet.</p>}
            {topExams.map((e) => (
              <div key={e.examSlug ?? "unknown"} className="flex items-center gap-3 text-sm">
                <span className="w-24 shrink-0 truncate font-medium text-ink-700">{e.examSlug ?? "unknown"}</span>
                <div className="h-2 flex-1 rounded-full bg-ink-100">
                  <div
                    className="h-2 rounded-full bg-brand-600"
                    style={{ width: `${(e._count._all / maxExam) * 100}%` }}
                  />
                </div>
                <span className="w-8 text-right text-ink-500">{e._count._all}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="text-sm font-semibold text-ink-900">Recent activity</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {recentEvents.length === 0 && <li className="text-ink-500">No activity yet.</li>}
            {recentEvents.map((e) => (
              <li key={e.id} className="flex items-center justify-between gap-3 border-b border-ink-100 pb-2 last:border-0 last:pb-0">
                <span className="text-ink-700">
                  <span className="font-medium">{e.user?.name ?? "Someone"}</span>{" "}
                  <span className="text-ink-500">{e.type.replace(/_/g, " ")}</span>
                </span>
                <span className="shrink-0 text-right text-xs text-ink-400">
                  <span className="block">{new Date(e.createdAt).toLocaleString("en-IN")}</span>
                  <span className="block">{(() => { const m = e.meta as Record<string, unknown> | null; return [m?.city, m?.region, m?.country].filter(Boolean).join(", ") || String(m?.ip ?? ""); })()}</span>
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
