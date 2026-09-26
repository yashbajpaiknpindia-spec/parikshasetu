import { NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";

export const runtime = "nodejs";

function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(0, 0, 0, 0);
  return d;
}

export async function GET() {
  if (!isDbConfigured) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "forbidden" }, { status: 403 });

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
    signupSeries,
    attemptSeries,
    topExams,
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
      FROM "User" WHERE "createdAt" >= ${since30}
      GROUP BY day ORDER BY day ASC`,
    prisma.$queryRaw<{ day: string; count: bigint }[]>`
      SELECT to_char("takenAt", 'YYYY-MM-DD') AS day, COUNT(*)::bigint AS count
      FROM "Attempt" WHERE "takenAt" >= ${since30}
      GROUP BY day ORDER BY day ASC`,
    prisma.attempt.groupBy({
      by: ["examSlug"],
      _count: { _all: true },
      orderBy: { _count: { examSlug: "desc" } },
      take: 8,
    }),
  ]);

  const avgScorePct =
    attemptsAgg._avg.score && attemptsAgg._avg.maxScore
      ? Math.round((attemptsAgg._avg.score / attemptsAgg._avg.maxScore) * 100)
      : 0;

  return NextResponse.json({
    totalUsers,
    newUsers7d,
    activeToday,
    activeThisWeek,
    totalAttempts,
    avgScorePct,
    totalBookings,
    paidBookings,
    totalPlanAccess,
    revenue: {
      plan: planRevenueAgg._sum.amount ?? 0,
      bookings: bookingRevenueAgg._sum.price ?? 0,
    },
    signupSeries: signupSeries.map((r) => ({ day: r.day, count: Number(r.count) })),
    attemptSeries: attemptSeries.map((r) => ({ day: r.day, count: Number(r.count) })),
    topExams: topExams.map((e) => ({ examSlug: e.examSlug ?? "unknown", count: e._count._all })),
  });
}
