import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Card, Badge } from "@/components/ui";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { formatIndiaDateTime, indiaStartOfDay } from "@/lib/time";
import { ArrowLeft } from "lucide-react";
import { safeAdminQuery } from "@/lib/admin-safe";

export const metadata = pageSeo({
  title: "Admin Guest Visitors",
  description: "Private Merit Marg guest-visitor analytics with visit counts, timestamps, pages, approximate location and anonymous visitor identifiers.",
  path: "/admin/visitors",
  keywords: ["Merit Marg visitor analytics"],
  noIndex: true,
});

export const dynamic = "force-dynamic";

export default async function AdminVisitorsPage() {
  if (!isDbConfigured) redirect("/admin");
  if (!(await requireAdmin())) redirect("/login");

  const since = indiaStartOfDay(30);
  const [visits, totalViews, distinctVisitors] = await Promise.all([
    safeAdminQuery(
      "guest-visits-list",
      () => prisma.guestVisit.findMany({
        where: { createdAt: { gte: since } },
        orderBy: { createdAt: "desc" },
        take: 1000,
      }),
      [],
    ),
    safeAdminQuery("guest-views-total", () => prisma.guestVisit.count({ where: { createdAt: { gte: since } } }), 0),
    safeAdminQuery("guest-unique-visitors", () => prisma.guestVisit.groupBy({ by: ["visitorId"], where: { createdAt: { gte: since } } }), []),
  ]);

  const groups = new Map<string, typeof visits>();
  for (const visit of visits) {
    const list = groups.get(visit.visitorId) ?? [];
    list.push(visit);
    groups.set(visit.visitorId, list);
  }

  const guests = [...groups.entries()].sort((a, b) => b[1][0].createdAt.getTime() - a[1][0].createdAt.getTime());

  return (
    <div className="space-y-6">
      <Link href="/admin" className="flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-800"><ArrowLeft className="h-4 w-4" /> Overview</Link>
      <div>
        <h1 className="text-2xl font-bold text-ink-900">Guest visitors</h1>
        <p className="mt-1 text-sm text-ink-500">Anonymous visitors captured by the site activity tracker · last 30 days · timestamps shown in IST.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card><div className="text-xs font-semibold uppercase tracking-wide text-ink-500">Unique visitors</div><div className="mt-2 text-3xl font-bold text-ink-900">{distinctVisitors.length}</div></Card>
        <Card><div className="text-xs font-semibold uppercase tracking-wide text-ink-500">Guest page views</div><div className="mt-2 text-3xl font-bold text-ink-900">{totalViews}</div></Card>
        <Card><div className="text-xs font-semibold uppercase tracking-wide text-ink-500">Average views / visitor</div><div className="mt-2 text-3xl font-bold text-ink-900">{distinctVisitors.length ? (totalViews / distinctVisitors.length).toFixed(1) : "0.0"}</div></Card>
      </div>

      <p className="text-xs text-ink-500">The table shows the latest 1,000 guest visit events; summary totals above cover the full 30-day window.</p>

      <Card className="overflow-x-auto p-0">
        <table className="w-full min-w-[950px] text-left text-sm">
          <thead className="border-b border-ink-200 bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
            <tr><th className="px-4 py-3">Visitor</th><th className="px-4 py-3">Views</th><th className="px-4 py-3">Last visit</th><th className="px-4 py-3">First visit in window</th><th className="px-4 py-3">Location</th><th className="px-4 py-3">IP</th><th className="px-4 py-3">Latest page</th></tr>
          </thead>
          <tbody>
            {guests.map(([visitorId, list]) => {
              const latest = list[0];
              const first = list[list.length - 1];
              const location = [latest.city, latest.region, latest.country].filter(Boolean).join(", ") || "—";
              return (
                <tr key={visitorId} className="border-b border-ink-100 last:border-0 hover:bg-ink-50">
                  <td className="px-4 py-3"><Badge tone="slate">guest</Badge><span className="ml-2 font-mono text-xs text-ink-500">{visitorId.slice(0, 12)}…</span></td>
                  <td className="px-4 py-3 font-semibold">{list.length}</td>
                  <td className="px-4 py-3 text-ink-500">{formatIndiaDateTime(latest.createdAt)} IST</td>
                  <td className="px-4 py-3 text-ink-500">{formatIndiaDateTime(first.createdAt)} IST</td>
                  <td className="px-4 py-3 text-ink-500">{location}</td>
                  <td className="px-4 py-3 font-mono text-xs text-ink-500">{latest.ip ?? "—"}</td>
                  <td className="max-w-xs truncate px-4 py-3 text-ink-500" title={latest.path}>{latest.path}</td>
                </tr>
              );
            })}
            {guests.length === 0 && <tr><td colSpan={7} className="px-4 py-8 text-center text-ink-500">No anonymous visits recorded in the last 30 days.</td></tr>}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
