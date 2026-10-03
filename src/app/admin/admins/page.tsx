import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Card, Badge } from "@/components/ui";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { formatIndiaDateTime } from "@/lib/time";
import { AdminCreateForm } from "@/components/admin/AdminCreateForm";
import { ArrowLeft } from "lucide-react";
import { safeAdminQuery } from "@/lib/admin-safe";

export const metadata = pageSeo({
  title: "Admin Administrators",
  description: "Private Merit Marg administrator management for creating admins, reviewing admin accounts and assigning plans.",
  path: "/admin/admins",
  keywords: ["Merit Marg administrators"],
  noIndex: true,
});

export const dynamic = "force-dynamic";

export default async function AdminAdminsPage() {
  if (!isDbConfigured) redirect("/admin");
  if (!(await requireAdmin())) redirect("/login");
  const admins = await safeAdminQuery(
    "admin-users-list",
    () => prisma.user.findMany({
      where: { role: "ADMIN" }, orderBy: { createdAt: "asc" },
      select: { id: true, name: true, email: true, createdAt: true, lastSeenAt: true, planAccess: { orderBy: { createdAt: "desc" }, take: 1, select: { plan: true, source: true, amount: true } } },
    }),
    [],
  );
  return (
    <div className="space-y-6">
      <Link href="/admin/users" className="flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-800"><ArrowLeft className="h-4 w-4" /> Users</Link>
      <div><h1 className="text-2xl font-bold text-ink-900">Administrators</h1><p className="mt-1 text-sm text-ink-500">Create additional admins and see current admin accounts.</p></div>
      <AdminCreateForm />
      <Card className="overflow-x-auto p-0">
        <table className="w-full text-left text-sm"><thead className="border-b border-ink-200 bg-ink-50 text-xs uppercase tracking-wide text-ink-500"><tr><th className="px-4 py-3">Name</th><th className="px-4 py-3">Email</th><th className="px-4 py-3">Plan</th><th className="px-4 py-3">Joined</th><th className="px-4 py-3">Last seen</th></tr></thead>
          <tbody>{admins.map((a) => <tr key={a.id} className="border-b border-ink-100 last:border-0"><td className="px-4 py-3 font-medium">{a.name}<Badge tone="amber" className="ml-2">admin</Badge></td><td className="px-4 py-3 text-ink-600">{a.email}</td><td className="px-4 py-3">{a.planAccess[0] ? <Badge tone="green">{a.planAccess[0].plan}</Badge> : <span className="text-ink-400">free</span>}</td><td className="px-4 py-3 text-ink-500">{formatIndiaDateTime(a.createdAt)}</td><td className="px-4 py-3 text-ink-500">{formatIndiaDateTime(a.lastSeenAt)} IST</td></tr>)}</tbody>
        </table>
      </Card>
    </div>
  );
}
