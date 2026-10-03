import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { Card, Badge } from "@/components/ui";
import { ArrowLeft } from "lucide-react";
import { formatIndiaDateTime } from "@/lib/time";
import { AdminUserControls } from "@/components/admin/AdminUserControls";

export const metadata = pageSeo({
  title: "Admin User Detail",
  description: "Private full user record including account activity, mock attempts, plans, bookings, events and administrator controls.",
  path: "/admin/users",
  keywords: ["Merit Marg user detail"],
  noIndex: true,
});

export const dynamic = "force-dynamic";

export default async function AdminUserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  if (!isDbConfigured) redirect("/admin");
  const admin = await requireAdmin();
  if (!admin) redirect("/login");

  const { id } = await params;
  let user;
  try {
    user = await prisma.user.findUnique({
      where: { id },
      include: {
        attempts: { orderBy: { takenAt: "desc" } },
        bookings: { orderBy: { createdAt: "desc" } },
        planAccess: true,
        events: { orderBy: { createdAt: "desc" } },
      },
    });
  } catch (error) {
    console.error("[admin] user-detail query failed", error);
    return (
      <Card className="p-8 text-center">
        <h1 className="text-lg font-bold text-ink-900">User details could not be loaded</h1>
        <p className="mt-2 text-sm text-ink-500">The account is safe. A database operation failed while loading this record. Use the Users page to retry.</p>
        <Link href="/admin/users" className="mt-5 inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white">Back to users</Link>
      </Card>
    );
  }
  if (!user) notFound();

  const latestEventMeta = (user.events[0]?.meta ?? {}) as Record<string, unknown>;
  const authMethod = user.googleId ? "Google + account" : user.passwordHash ? "Email + password" : "Email / external auth";
  const totalPaid = user.planAccess.filter((p) => p.source === "payment").reduce((sum, p) => sum + p.amount, 0);
  const totalBookingValue = user.bookings.filter((b) => b.paid).reduce((sum, b) => sum + b.price, 0);

  return (
    <div className="space-y-6">
      <Link href="/admin/users" className="flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-800">
        <ArrowLeft className="h-4 w-4" /> All users
      </Link>

      <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold text-ink-900">{user.name}</h1>
              {user.role === "ADMIN" && <Badge tone="amber">admin</Badge>}
              {user.planAccess.length > 0 && <Badge tone="green">paid access</Badge>}
            </div>
            <p className="mt-1 text-sm text-ink-600">{user.email}</p>
            <p className="mt-1 text-xs text-ink-400">User ID: <span className="font-mono">{user.id}</span></p>
          </div>
          <div className="text-right text-xs text-ink-500">
            <p>Joined {formatIndiaDateTime(user.createdAt)} IST</p>
            <p>Updated {formatIndiaDateTime(user.updatedAt)} IST</p>
            <p>Last seen {formatIndiaDateTime(user.lastSeenAt)} IST</p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-ink-50 p-4"><p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Exam</p><p className="mt-1 font-semibold text-ink-900">{user.examChoice ?? "Not chosen"}</p></div>
          <div className="rounded-xl bg-ink-50 p-4"><p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Sign-in</p><p className="mt-1 font-semibold text-ink-900">{authMethod}</p></div>
          <div className="rounded-xl bg-ink-50 p-4"><p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Activity</p><p className="mt-1 font-semibold text-ink-900">{user.events.length} events · {user.attempts.length} attempts · {user.bookings.length} bookings</p></div>
          <div className="rounded-xl bg-ink-50 p-4"><p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Verified value</p><p className="mt-1 font-semibold text-ink-900">₹{(totalPaid + totalBookingValue).toLocaleString("en-IN")}</p><p className="text-xs text-ink-500">payment-backed transactions</p></div>
        </div>
        <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
          <div><span className="font-semibold text-ink-700">Latest location:</span> <span className="text-ink-500">{[latestEventMeta.city, latestEventMeta.region, latestEventMeta.country].filter(Boolean).join(", ") || "—"}</span></div>
          <div><span className="font-semibold text-ink-700">Latest IP:</span> <span className="font-mono text-xs text-ink-500">{String(latestEventMeta.ip ?? "—")}</span></div>
          <div className="truncate"><span className="font-semibold text-ink-700">User agent:</span> <span className="text-xs text-ink-500" title={String(latestEventMeta.userAgent ?? "")}>{String(latestEventMeta.userAgent ?? "—")}</span></div>
        </div>
      </div>

      <AdminUserControls userId={user.id} role={user.role} initialPlan={user.planAccess.find((p) => p.plan === "mentor")?.plan ?? user.planAccess.find((p) => p.plan === "prep" || p.plan === "full-access-99" || p.plan === "day-by-day-99")?.plan ?? null} />

      <Card className="overflow-x-auto p-0">
        <div className="border-b border-ink-200 px-4 py-3 text-sm font-semibold text-ink-900">
          Plan access ({user.planAccess.length})
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
            <tr><th className="px-4 py-2">Plan</th><th className="px-4 py-2">Amount</th><th className="px-4 py-2">Source</th><th className="px-4 py-2">Granted</th><th className="px-4 py-2">Payment</th></tr>
          </thead>
          <tbody>
            {user.planAccess.map((p) => (
              <tr key={p.id} className="border-t border-ink-100">
                <td className="px-4 py-2"><Badge tone="green">{p.plan}</Badge></td>
                <td className="px-4 py-2">₹{p.amount}</td>
                <td className="px-4 py-2 text-ink-500">{p.source}{p.assignedByAdminId ? ` · admin ${p.assignedByAdminId.slice(-6)}` : ""}</td>
                <td className="px-4 py-2 text-ink-500">{formatIndiaDateTime(p.createdAt)} IST</td>
                <td className="px-4 py-2 text-ink-500">{p.paymentId ?? "—"}</td>
              </tr>
            ))}
            {user.planAccess.length === 0 && <tr><td colSpan={5} className="px-4 py-6 text-center text-ink-500">No paid plan access.</td></tr>}
          </tbody>
        </table>
      </Card>

      <Card className="overflow-x-auto p-0">
        <div className="border-b border-ink-200 px-4 py-3 text-sm font-semibold text-ink-900">
          Mock attempts ({user.attempts.length})
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
            <tr>
              <th className="px-4 py-2">Test</th>
              <th className="px-4 py-2">Score</th>
              <th className="px-4 py-2">Correct / Wrong / Skipped</th>
              <th className="px-4 py-2">Marked for review</th>
              <th className="px-4 py-2">Taken</th>
            </tr>
          </thead>
          <tbody>
            {user.attempts.map((a) => (
              <tr key={a.id} className="border-t border-ink-100">
                <td className="px-4 py-2">{a.testTitle}</td>
                <td className="px-4 py-2">
                  {a.score}/{a.maxScore}
                </td>
                <td className="px-4 py-2 text-ink-500">
                  {a.correct} / {a.wrong} / {a.unattempted}
                </td>
                <td className="px-4 py-2">
                  {(a.markedForReview ?? []).length ? (
                    <details>
                      <summary className="cursor-pointer text-brand-700">{(a.markedForReview ?? []).length} question{(a.markedForReview ?? []).length === 1 ? "" : "s"}</summary>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {(a.markedForReview ?? []).map((id) => (
                          <span key={id} className="rounded-md bg-amber-50 px-1.5 py-0.5 font-mono text-[11px] text-amber-800">{id}</span>
                        ))}
                      </div>
                    </details>
                  ) : <span className="text-ink-400">—</span>}
                </td>
                <td className="px-4 py-2 text-ink-500">{formatIndiaDateTime(a.takenAt)} IST</td>
              </tr>
            ))}
            {user.attempts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-ink-500">
                  No attempts yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>

      <Card className="overflow-x-auto p-0">
        <div className="border-b border-ink-200 px-4 py-3 text-sm font-semibold text-ink-900">
          Bookings ({user.bookings.length})
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
            <tr>
              <th className="px-4 py-2">Mentor</th>
              <th className="px-4 py-2">Slot</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Paid</th>
              <th className="px-4 py-2">Booked</th>
            </tr>
          </thead>
          <tbody>
            {user.bookings.map((b) => (
              <tr key={b.id} className="border-t border-ink-100">
                <td className="px-4 py-2">{b.mentorName}</td>
                <td className="px-4 py-2 text-ink-500">{b.date} · {b.time}</td>
                <td className="px-4 py-2">₹{b.price}</td>
                <td className="px-4 py-2">{b.paid ? <Badge tone="green">paid</Badge> : <Badge tone="slate">unpaid</Badge>}</td>
                <td className="px-4 py-2 text-ink-500">{formatIndiaDateTime(b.createdAt)} IST</td>
              </tr>
            ))}
            {user.bookings.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-ink-500">
                  No bookings yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>

      <Card className="overflow-x-auto p-0">
        <div className="border-b border-ink-200 px-4 py-3 text-sm font-semibold text-ink-900">
          Activity log ({user.events.length})
        </div>
        <ul className="divide-y divide-ink-100 text-sm">
          {user.events.map((e) => (
            <li key={e.id} className="flex items-center justify-between px-4 py-2">
              <span className="text-ink-700">
                {e.type.replace(/_/g, " ")}
                {e.meta && <span className="ml-2 text-xs text-ink-400">{(() => { const m = e.meta as Record<string, unknown>; return [m.city, m.region, m.country].filter(Boolean).join(", ") || String(m.ip ?? ""); })()}</span>}
              </span>
              <span className="text-xs text-ink-400">{formatIndiaDateTime(e.createdAt)} IST</span>
            </li>
          ))}
          {user.events.length === 0 && <li className="px-4 py-6 text-center text-ink-500">No activity yet.</li>}
        </ul>
      </Card>
    </div>
  );
}
