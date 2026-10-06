import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { Card, Badge } from "@/components/ui";
import { formatIndiaDateTime } from "@/lib/time";
import { AdminRoleQuickAction } from "@/components/admin/AdminRoleQuickAction";
import { safeAdminQuery } from "@/lib/admin-safe";

export const metadata = pageSeo({
  title: "Admin Users",
  description: "Private Merit Marg user management: account details, plans, activity, exam choice and administrator controls.",
  path: "/admin/users",
  keywords: ["Merit Marg user management"],
  noIndex: true,
});

export const dynamic = "force-dynamic";

export default async function AdminUsersPage({
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
    ? { OR: [{ email: { contains: q, mode: "insensitive" as const } }, { name: { contains: q, mode: "insensitive" as const } }] }
    : {};

  const [users, total] = await Promise.all([
    safeAdminQuery("users-list", () => prisma.user.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        examChoice: true,
        createdAt: true,
        lastSeenAt: true,
        _count: { select: { attempts: true, bookings: true, planAccess: true } },
        events: { where: { type: { in: ["login", "page_view"] } }, orderBy: { createdAt: "desc" }, take: 1, select: { meta: true } },
        planAccess: { orderBy: { createdAt: "desc" }, take: 1, select: { plan: true, source: true, amount: true, createdAt: true } },
      },
    }), []),
    safeAdminQuery("users-total", () => prisma.user.count({ where }), 0),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900">Users</h1>
          <p className="mt-1 text-sm text-ink-500">{total} total</p>
        </div>
        <form className="flex items-center gap-2">
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Search name or email…"
            className="rounded-lg border border-ink-300 px-3 py-2 text-sm"
          />
        </form>
      </div>

      <Card className="overflow-x-auto p-0">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-ink-200 bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Exam</th>
              <th className="px-4 py-3">Attempts</th>
              <th className="px-4 py-3">Bookings</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Joined</th>
              <th className="px-4 py-3">Last seen</th>
              <th className="px-4 py-3">Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-ink-100 last:border-0 hover:bg-ink-50">
                <td className="px-4 py-3">
                  <Link href={`/admin/users/${u.id}`} className="font-medium text-brand-700 hover:underline">
                    {u.name}
                  </Link>
                  {u.role === "ADMIN" && <Badge tone="amber" className="ml-2">admin</Badge>}
                </td>
                <td className="px-4 py-3 text-ink-600">{u.email}</td>
                <td className="px-4 py-3 text-ink-600">{u.examChoice ?? "—"}</td>
                <td className="px-4 py-3">{u._count.attempts}</td>
                <td className="px-4 py-3">{u._count.bookings}</td>
                <td className="px-4 py-3">{u.planAccess[0] ? <div><Badge tone="green">{u.planAccess[0].plan === "mentor" ? "mentor" : "prep"}</Badge><span className="ml-1 text-xs text-ink-400">{u.planAccess[0].source}</span></div> : "free"}</td>
                <td className="px-4 py-3 text-ink-500">{(() => { const m = u.events[0]?.meta as Record<string, unknown> | null; return [m?.city, m?.region, m?.country].filter(Boolean).join(", ") || String(m?.ip ?? "—"); })()}</td>
                <td className="px-4 py-3 text-ink-500">{formatIndiaDateTime(u.createdAt)}</td>
                <td className="px-4 py-3 text-ink-500">{formatIndiaDateTime(u.lastSeenAt)} IST</td>
                <td className="px-4 py-3"><AdminRoleQuickAction userId={u.id} isAdmin={u.role === "ADMIN"} /></td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={10} className="px-4 py-8 text-center text-ink-500">
                  No users found.
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
              href={`/admin/users?q=${encodeURIComponent(q)}&page=${p}`}
              className={`rounded-lg px-3 py-1.5 ${p === page ? "bg-brand-600 text-white" : "border border-ink-300 text-ink-600 hover:bg-ink-100"}`}
            >
              {p}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
