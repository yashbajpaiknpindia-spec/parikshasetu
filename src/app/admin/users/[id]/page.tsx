import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { Card, Badge } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminUserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  if (!isDbConfigured) redirect("/admin");
  const admin = await requireAdmin();
  if (!admin) redirect("/login");

  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      attempts: { orderBy: { takenAt: "desc" }, take: 25 },
      bookings: { orderBy: { createdAt: "desc" }, take: 25 },
      planAccess: true,
      events: { orderBy: { createdAt: "desc" }, take: 25 },
    },
  });
  if (!user) notFound();

  return (
    <div className="space-y-6">
      <Link href="/admin/users" className="flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-800">
        <ArrowLeft className="h-4 w-4" /> All users
      </Link>

      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-ink-900">{user.name}</h1>
        {user.role === "ADMIN" && <Badge tone="amber">admin</Badge>}
        {user.planAccess.length > 0 && <Badge tone="green">plan unlocked</Badge>}
      </div>
      <p className="text-sm text-ink-500">
        {user.email} · joined {new Date(user.createdAt).toLocaleDateString("en-IN")} · last seen{" "}
        {new Date(user.lastSeenAt).toLocaleString("en-IN")} · exam: {user.examChoice ?? "not chosen"}
      </p>

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
                <td className="px-4 py-2 text-ink-500">{new Date(a.takenAt).toLocaleString("en-IN")}</td>
              </tr>
            ))}
            {user.attempts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-ink-500">
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
                <td className="px-4 py-2 text-ink-500">{new Date(b.createdAt).toLocaleString("en-IN")}</td>
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
              <span className="text-xs text-ink-400">{new Date(e.createdAt).toLocaleString("en-IN")}</span>
            </li>
          ))}
          {user.events.length === 0 && <li className="px-4 py-6 text-center text-ink-500">No activity yet.</li>}
        </ul>
      </Card>
    </div>
  );
}
