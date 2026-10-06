import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CalendarCheck2,
  CreditCard,
  Eye,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { Card } from "@/components/ui";
import { StatCard } from "@/components/admin/StatCard";
import { BarSeries } from "@/components/admin/BarSeries";
import { formatIndiaDateTime, indiaDateKey, indiaStartOfDay } from "@/lib/time";
import { pageSeo } from "@/lib/seo";
import { safeAdminQuery } from "@/lib/admin-safe";

export const metadata = pageSeo({
  title: "Admin Command Centre",
  description: "Private Merit Marg administration dashboard for users, payments, mock attempts, guest traffic, pricing and operations.",
  path: "/admin",
  keywords: ["Merit Marg admin"],
  noIndex: true,
});

export const dynamic = "force-dynamic";

const since = (days: number) => indiaStartOfDay(days);

function fill30(series: { day: string; count: number }[]) {
  const map = new Map(series.map((s) => [s.day, s.count]));
  return Array.from({ length: 30 }, (_, i) => {
    const d = since(29 - i);
    const day = indiaDateKey(d);
    return { day, count: map.get(day) ?? 0 };
  });
}

type Transaction = { id: string; kind: "plan" | "booking"; buyer: string; email: string; label: string; amount: number; createdAt: Date };

export default async function AdminOverviewPage() {
  if (!isDbConfigured) {
    return <Card className="p-8 text-center"><h1 className="text-lg font-bold text-ink-900">Admin dashboard needs a real backend</h1><p className="mt-2 text-sm text-ink-600">Set DATABASE_URL and JWT_SECRET to enable live administration.</p></Card>;
  }
  const admin = await safeAdminQuery("auth guard", () => requireAdmin(), null);
  if (!admin) redirect("/login");

  const d30 = since(30);
  const d7 = since(7);
  const today = since(0);
  const last24h = new Date(Date.now() - 24 * 60 * 60 * 1000);

  const [
    totalUsers,
    newUsers7d,
    activeToday,
    activeWeek,
    totalAttempts,
    attemptsAgg,
    totalBookings,
    paidBookings,
    totalAdmins,
    paymentPlans,
    paymentPlanRevenue,
    signupRaw,
    attemptRaw,
    topExams,
    recentEvents,
    guestViews30,
    guestViews24,
    guestVisitorsGroups,
    recentPlanPurchases,
    recentPaidBookings,
    recentAttempts,
    recentUsers,
    prepUsers,
    mentorUsers,
    paidUserCount,
  ] = await Promise.all([
    safeAdminQuery("total-users", () => prisma.user.count(), 0),
    safeAdminQuery("new-users-7d", () => prisma.user.count({ where: { createdAt: { gte: d7 } } }), 0),
    safeAdminQuery("active-today", () => prisma.user.count({ where: { lastSeenAt: { gte: today } } }), 0),
    safeAdminQuery("active-week", () => prisma.user.count({ where: { lastSeenAt: { gte: d7 } } }), 0),
    safeAdminQuery("total-attempts", () => prisma.attempt.count(), 0),
    safeAdminQuery("attempt-average", () => prisma.attempt.aggregate({ _avg: { score: true, maxScore: true } }), { _avg: { score: null, maxScore: null } }),
    safeAdminQuery("total-bookings", () => prisma.booking.count(), 0),
    safeAdminQuery("paid-bookings", () => prisma.booking.count({ where: { paid: true } }), 0),
    safeAdminQuery("total-admins", () => prisma.user.count({ where: { role: "ADMIN" } }), 0),
    safeAdminQuery("payment-plan-access", () => prisma.planAccess.count({ where: { source: "payment" } }), 0),
    safeAdminQuery("plan-revenue", () => prisma.planAccess.aggregate({ where: { source: "payment" }, _sum: { amount: true } }), { _sum: { amount: null } }),
    safeAdminQuery(
      "signup-series",
      () => prisma.$queryRaw<{ day: string; count: bigint }[]>`
        SELECT to_char(("createdAt" AT TIME ZONE 'UTC') AT TIME ZONE 'Asia/Kolkata', 'YYYY-MM-DD') AS day, COUNT(*)::bigint AS count
        FROM "User" WHERE "createdAt" >= ${d30} GROUP BY day ORDER BY day ASC`,
      [],
    ),
    safeAdminQuery(
      "attempt-series",
      () => prisma.$queryRaw<{ day: string; count: bigint }[]>`
        SELECT to_char(("takenAt" AT TIME ZONE 'UTC') AT TIME ZONE 'Asia/Kolkata', 'YYYY-MM-DD') AS day, COUNT(*)::bigint AS count
        FROM "Attempt" WHERE "takenAt" >= ${d30} GROUP BY day ORDER BY day ASC`,
      [],
    ),
    safeAdminQuery(
      "attempts-by-exam",
      async () => {
        const rows = await prisma.$queryRaw<{ examSlug: string | null; count: bigint }[]>`
          SELECT "examSlug", COUNT(*)::bigint AS count
          FROM "Attempt"
          GROUP BY "examSlug"
          ORDER BY COUNT(*) DESC
          LIMIT 8`;
        return rows.map((row) => ({ examSlug: row.examSlug, _count: { _all: Number(row.count) } }));
      },
      [],
    ),
    safeAdminQuery("recent-events", () => prisma.activityEvent.findMany({ orderBy: { createdAt: "desc" }, take: 8, include: { user: { select: { id: true, name: true, email: true } } } }), []),
    safeAdminQuery("guest-views-30d", () => prisma.guestVisit.count({ where: { createdAt: { gte: d30 } } }), 0),
    safeAdminQuery("guest-views-24h", () => prisma.guestVisit.count({ where: { createdAt: { gte: last24h } } }), 0),
    safeAdminQuery(
      "guest-unique-30d",
      async () => {
        const rows = await prisma.$queryRaw<{ count: bigint }[]>`
          SELECT COUNT(DISTINCT "visitorId")::bigint AS count
          FROM "GuestVisit"
          WHERE "createdAt" >= ${d30}`;
        return Number(rows[0]?.count ?? 0);
      },
      0,
    ),
    safeAdminQuery("recent-plan-purchases", () => prisma.planAccess.findMany({ where: { source: "payment", paymentId: { not: null } }, orderBy: { createdAt: "desc" }, take: 5, include: { user: { select: { name: true, email: true } } } }), []),
    safeAdminQuery("recent-paid-bookings", () => prisma.booking.findMany({ where: { paid: true, paymentId: { not: null } }, orderBy: { createdAt: "desc" }, take: 5, include: { user: { select: { name: true, email: true } } } }), []),
    safeAdminQuery("recent-attempts", () => prisma.attempt.findMany({ orderBy: { takenAt: "desc" }, take: 6, include: { user: { select: { id: true, name: true, email: true } } } }), []),
    safeAdminQuery("recent-users", () => prisma.user.findMany({ orderBy: { createdAt: "desc" }, take: 6, select: { id: true, name: true, email: true, examChoice: true, createdAt: true, lastSeenAt: true } }), []),
    safeAdminQuery(
      "paid-prep-users",
      async () => {
        const rows = await prisma.$queryRaw<{ count: bigint }[]>`
          SELECT COUNT(DISTINCT "userId")::bigint AS count
          FROM "PlanAccess"
          WHERE "source" = 'payment' AND "plan" IN ('prep', 'full-access-99', 'day-by-day-99')`;
        return Number(rows[0]?.count ?? 0);
      },
      0,
    ),
    safeAdminQuery(
      "paid-mentor-users",
      async () => {
        const rows = await prisma.$queryRaw<{ count: bigint }[]>`
          SELECT COUNT(DISTINCT "userId")::bigint AS count
          FROM "PlanAccess"
          WHERE "source" = 'payment' AND "plan" = 'mentor'`;
        return Number(rows[0]?.count ?? 0);
      },
      0,
    ),
    safeAdminQuery(
      "paid-users-total",
      async () => {
        const rows = await prisma.$queryRaw<{ count: bigint }[]>`
          SELECT COUNT(DISTINCT "userId")::bigint AS count
          FROM "PlanAccess"
          WHERE "source" = 'payment' AND "plan" IN ('prep', 'full-access-99', 'day-by-day-99', 'mentor')`;
        return Number(rows[0]?.count ?? 0);
      },
      0,
    ),
  ]);

  const avgScorePct = attemptsAgg._avg.score && attemptsAgg._avg.maxScore ? Math.round((attemptsAgg._avg.score / attemptsAgg._avg.maxScore) * 100) : 0;
  const signupSeries = fill30(signupRaw.map((r) => ({ day: r.day, count: Number(r.count) })));
  const attemptSeries = fill30(attemptRaw.map((r) => ({ day: r.day, count: Number(r.count) })));
  const uniqueGuest30 = guestVisitorsGroups;
  const prepUserCount = prepUsers as number;
  const mentorUserCount = mentorUsers as number;
  const combinedPaidUserCount = paidUserCount as number;
  const paidConversion = totalUsers ? Math.round((combinedPaidUserCount / totalUsers) * 100) : 0;
  const planRevenue = paymentPlanRevenue._sum.amount ?? 0;
  const bookingRevenue = paidBookings
    ? (await safeAdminQuery(
        "booking-revenue",
        () => prisma.booking.aggregate({ where: { paid: true }, _sum: { price: true } }),
        { _sum: { price: null } },
      ))._sum.price ?? 0
    : 0;
  const revenue = planRevenue + bookingRevenue;
  const maxExam = Math.max(1, ...topExams.map((x) => x._count._all));
  const transactions: Transaction[] = [
    ...recentPlanPurchases.map((p) => ({ id: `plan-${p.id}`, kind: "plan" as const, buyer: p.user.name, email: p.user.email, label: `${p.plan} plan`, amount: p.amount, createdAt: p.createdAt })),
    ...recentPaidBookings.map((b) => ({ id: `booking-${b.id}`, kind: "booking" as const, buyer: b.user.name, email: b.user.email, label: `Mentor · ${b.mentorName}`, amount: b.price, createdAt: b.createdAt })),
  ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 8);

  const quickLinks = [
    ["Users", "/admin/users", Users], ["Attempts", "/admin/attempts", BarChart3], ["Payments", "/admin/payments", CreditCard], ["Guests", "/admin/visitors", Eye], ["Challenge", "/admin/challenge", Trophy], ["Admins", "/admin/admins", ShieldCheck], ["Settings", "/admin/settings", Sparkles],
  ] as const;

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-ink-950 via-brand-900 to-teal-800 px-6 py-7 text-white sm:px-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/15"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Live operations · IST</p>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Command centre</h1>
              <p className="mt-2 max-w-2xl text-sm text-white/75">Users, revenue, engagement, mock performance and anonymous traffic in one operating view.</p>
            </div>
            <div className="text-right text-xs text-white/70"><p className="font-semibold text-white">{admin.email}</p><p className="mt-1">All timestamps use Asia/Kolkata</p></div>
          </div>
        </div>
        <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-6">
          {quickLinks.map(([label, href, Icon]) => <Link key={href} href={href} className="group flex items-center justify-between rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm font-semibold text-ink-700 hover:border-brand-300 hover:bg-white"><span className="flex items-center gap-2"><Icon className="h-4 w-4 text-brand-600" />{label}</span><ArrowUpRight className="h-4 w-4 text-ink-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>)}
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
        <StatCard label="Users" value={totalUsers} sub={`+${newUsers7d} / 7d`} />
        <StatCard label="Active today" value={activeToday} sub={`${activeWeek} active / 7d`} />
        <StatCard label="Attempts" value={totalAttempts} sub={`avg ${avgScorePct}%`} />
        <StatCard label="Paid users" value={combinedPaidUserCount} sub={`${paidConversion}% of users`} />
        <StatCard label="Revenue" value={`₹${revenue.toLocaleString("en-IN")}`} sub="verified transactions" />
        <StatCard label="Bookings" value={totalBookings} sub={`${paidBookings} paid`} />
        <StatCard label="Guests" value={uniqueGuest30} sub={`${guestViews30} views / 30d`} />
        <StatCard label="Admins" value={totalAdmins} sub={`${paymentPlans} paid plan purchases`} />
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_1.2fr_0.8fr]">
        <Card className="p-5"><div className="flex items-center justify-between"><div><h2 className="font-semibold text-ink-900">Signup momentum</h2><p className="mt-1 text-xs text-ink-500">30-day window · India calendar days</p></div><CalendarCheck2 className="h-5 w-5 text-brand-600" /></div><div className="mt-4"><BarSeries data={signupSeries} color="#2563eb" /></div></Card>
        <Card className="p-5"><div className="flex items-center justify-between"><div><h2 className="font-semibold text-ink-900">Mock activity</h2><p className="mt-1 text-xs text-ink-500">30-day submitted attempts</p></div><Activity className="h-5 w-5 text-teal-600" /></div><div className="mt-4"><BarSeries data={attemptSeries} color="#0f766e" /></div></Card>
        <Card className="p-5"><h2 className="font-semibold text-ink-900">Plan mix</h2><div className="mt-4 space-y-4"><div><div className="flex justify-between text-sm"><span>Prep</span><b>{prepUserCount}</b></div><div className="mt-1.5 h-2 rounded-full bg-ink-100"><div className="h-2 rounded-full bg-brand-600" style={{ width: `${combinedPaidUserCount > 0 ? (prepUserCount / combinedPaidUserCount) * 100 : 0}%` }} /></div></div><div><div className="flex justify-between text-sm"><span>Mentor</span><b>{mentorUserCount}</b></div><div className="mt-1.5 h-2 rounded-full bg-ink-100"><div className="h-2 rounded-full bg-teal-600" style={{ width: `${combinedPaidUserCount > 0 ? (mentorUserCount / combinedPaidUserCount) * 100 : 0}%` }} /></div></div><p className="text-xs text-ink-500">Payment-backed access only.</p></div></Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5"><div className="flex items-center justify-between"><h2 className="font-semibold text-ink-900">Attempts by exam</h2><Link href="/admin/attempts" className="text-xs font-semibold text-brand-700">Open attempts →</Link></div><div className="mt-4 space-y-3">{topExams.length ? topExams.map((e) => <div key={e.examSlug ?? "unknown"} className="flex items-center gap-3 text-sm"><span className="w-28 truncate font-medium text-ink-700">{e.examSlug ?? "Unknown"}</span><div className="h-2 flex-1 rounded-full bg-ink-100"><div className="h-2 rounded-full bg-brand-600" style={{ width: `${(e._count._all / maxExam) * 100}%` }} /></div><span className="w-8 text-right font-semibold text-ink-500">{e._count._all}</span></div>) : <p className="text-sm text-ink-500">No attempts yet.</p>}</div></Card>
        <Card className="p-5"><div className="flex items-center justify-between"><h2 className="font-semibold text-ink-900">Guest traffic pulse</h2><Link href="/admin/visitors" className="text-xs font-semibold text-brand-700">View guests →</Link></div><div className="mt-5 grid grid-cols-3 gap-3"><div className="rounded-xl bg-ink-50 p-4"><p className="text-xs text-ink-500">Unique · 30d</p><p className="mt-1 text-2xl font-bold text-ink-900">{uniqueGuest30}</p></div><div className="rounded-xl bg-ink-50 p-4"><p className="text-xs text-ink-500">Views · 30d</p><p className="mt-1 text-2xl font-bold text-ink-900">{guestViews30}</p></div><div className="rounded-xl bg-ink-50 p-4"><p className="text-xs text-ink-500">Views · 24h</p><p className="mt-1 text-2xl font-bold text-ink-900">{guestViews24}</p></div></div><p className="mt-4 text-xs text-ink-500">Guest timestamps are rendered in IST; visitors remain anonymous in the visitor identifier.</p></Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card className="overflow-hidden p-0"><div className="flex items-center justify-between border-b border-ink-200 px-5 py-4"><div><h2 className="font-semibold text-ink-900">Recent transactions</h2><p className="mt-1 text-xs text-ink-500">Payment-backed plan purchases and paid mentor bookings.</p></div><IndianRupee className="h-5 w-5 text-teal-600" /></div><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500"><tr><th className="px-5 py-3">Buyer</th><th className="px-5 py-3">Item</th><th className="px-5 py-3">Amount</th><th className="px-5 py-3">When</th></tr></thead><tbody>{transactions.map((t) => <tr key={t.id} className="border-t border-ink-100"><td className="px-5 py-3"><p className="font-medium text-ink-900">{t.buyer}</p><p className="text-xs text-ink-500">{t.email}</p></td><td className="px-5 py-3 text-ink-700">{t.label}</td><td className="px-5 py-3 font-semibold">₹{t.amount}</td><td className="px-5 py-3 text-xs text-ink-500">{formatIndiaDateTime(t.createdAt)} IST</td></tr>)}{transactions.length === 0 && <tr><td colSpan={4} className="px-5 py-8 text-center text-ink-500">No verified transactions yet.</td></tr>}</tbody></table></div></Card>
        <Card className="overflow-hidden p-0"><div className="flex items-center justify-between border-b border-ink-200 px-5 py-4"><div><h2 className="font-semibold text-ink-900">Recent mock activity</h2><p className="mt-1 text-xs text-ink-500">Newest submitted tests, linked directly to the full user record.</p></div><BarChart3 className="h-5 w-5 text-brand-600" /></div><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500"><tr><th className="px-5 py-3">User</th><th className="px-5 py-3">Test</th><th className="px-5 py-3">Score</th><th className="px-5 py-3">Taken</th></tr></thead><tbody>{recentAttempts.map((a) => <tr key={a.id} className="border-t border-ink-100"><td className="px-5 py-3"><Link href={`/admin/users/${a.user.id}`} className="font-medium text-brand-700 hover:underline">{a.user.name}</Link></td><td className="max-w-xs truncate px-5 py-3 text-ink-700" title={a.testTitle}>{a.testTitle}</td><td className="px-5 py-3 font-semibold">{a.score}/{a.maxScore}</td><td className="px-5 py-3 text-xs text-ink-500">{formatIndiaDateTime(a.takenAt)} IST</td></tr>)}{recentAttempts.length === 0 && <tr><td colSpan={4} className="px-5 py-8 text-center text-ink-500">No attempts yet.</td></tr>}</tbody></table></div></Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5"><div className="flex items-center justify-between"><div><h2 className="font-semibold text-ink-900">Latest users</h2><p className="mt-1 text-xs text-ink-500">New accounts, exam choice and last activity.</p></div><Link href="/admin/users" className="text-xs font-semibold text-brand-700">All users →</Link></div><div className="mt-4 space-y-3">{recentUsers.map((u) => <div key={u.id} className="flex items-center justify-between gap-4 rounded-xl bg-ink-50 px-4 py-3"><div className="min-w-0"><Link href={`/admin/users/${u.id}`} className="font-semibold text-brand-700 hover:underline">{u.name}</Link><p className="truncate text-xs text-ink-500">{u.email} · {u.examChoice ?? "exam not chosen"}</p></div><div className="shrink-0 text-right text-xs text-ink-400">{formatIndiaDateTime(u.createdAt)}<br />last seen {formatIndiaDateTime(u.lastSeenAt)}</div></div>)}{recentUsers.length === 0 && <p className="text-sm text-ink-500">No users yet.</p>}</div></Card>
        <Card className="p-5"><div className="flex items-center justify-between"><div><h2 className="font-semibold text-ink-900">Recent system activity</h2><p className="mt-1 text-xs text-ink-500">Signups, logins, attempts, purchases and admin changes.</p></div><Link href="/admin/activity" className="text-xs font-semibold text-brand-700">Activity log →</Link></div><div className="mt-4 space-y-3">{recentEvents.map((e) => <div key={e.id} className="flex items-center justify-between gap-4 border-b border-ink-100 pb-3 last:border-0 last:pb-0"><div className="min-w-0"><p className="font-medium text-ink-800">{e.user?.name ?? "Guest / system"}</p><p className="text-xs text-ink-500">{e.type.replace(/_/g, " ")}</p></div><div className="shrink-0 text-right text-xs text-ink-400">{formatIndiaDateTime(e.createdAt)} IST</div></div>)}{recentEvents.length === 0 && <p className="text-sm text-ink-500">No activity yet.</p>}</div></Card>
      </div>

      <Card className="p-5"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-semibold text-ink-900">Admin controls at a glance</h2><p className="mt-1 text-sm text-ink-500">Manage an existing account directly from Users, or create a separate admin account from Administrators. Pricing changes affect future purchases; existing paid access remains active.</p></div><div className="flex flex-wrap gap-2"><Link href="/admin/users" className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700">Manage userbase</Link><Link href="/admin/admins" className="rounded-lg border border-ink-300 px-3 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-50">Manage admins</Link><Link href="/admin/settings" className="rounded-lg border border-ink-300 px-3 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-50">Edit pricing</Link></div></div></Card>
    </div>
  );
}
