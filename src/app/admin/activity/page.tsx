import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { Card, Badge } from "@/components/ui";
import Link from "next/link";

export const dynamic = "force-dynamic";

const TYPES = ["signup", "login", "page_view", "attempt_submitted", "booking_created", "plan_purchased"];

const toneFor = (type: string) =>
  type === "plan_purchased" || type === "booking_created"
    ? ("green" as const)
    : type === "signup"
      ? ("brand" as const)
      : ("slate" as const);

export default async function AdminActivityPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  if (!isDbConfigured) redirect("/admin");
  const admin = await requireAdmin();
  if (!admin) redirect("/login");

  const sp = await searchParams;
  const type = sp.type;

  const events = await prisma.activityEvent.findMany({
    where: type ? { type } : {},
    orderBy: { createdAt: "desc" },
    take: 150,
    include: { user: { select: { id: true, name: true, email: true } } },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink-900">Activity</h1>
        <p className="mt-1 text-sm text-ink-500">Every signup, login/session, page view, mock attempt, booking and plan purchase — newest first.</p>
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        <Link href="/admin/activity" className={`rounded-full px-3 py-1.5 ${!type ? "bg-brand-600 text-white" : "border border-ink-300 text-ink-600"}`}>
          All
        </Link>
        {TYPES.map((t) => (
          <Link
            key={t}
            href={`/admin/activity?type=${t}`}
            className={`rounded-full px-3 py-1.5 ${type === t ? "bg-brand-600 text-white" : "border border-ink-300 text-ink-600"}`}
          >
            {t.replace(/_/g, " ")}
          </Link>
        ))}
      </div>

      <Card className="overflow-x-auto p-0">
        <ul className="divide-y divide-ink-100 text-sm">
          {events.map((e) => (
            <li key={e.id} className="flex items-center justify-between gap-4 px-4 py-3">
              <div className="flex items-center gap-3">
                <Badge tone={toneFor(e.type)}>{e.type.replace(/_/g, " ")}</Badge>
                {e.user ? (
                  <Link href={`/admin/users/${e.user.id}`} className="font-medium text-brand-700 hover:underline">
                    {e.user.name}
                  </Link>
                ) : (
                  <span className="text-ink-400">system</span>
                )}
                <span className="text-ink-500">{e.user?.email}</span>
                {e.meta && (
                  <span className="text-xs text-ink-400">
                    {(() => {
                      const m = e.meta as Record<string, unknown>;
                      const location = [m.city, m.region, m.country].filter(Boolean).join(", ") || String(m.ip ?? "");
                      const detail = String(m.path ?? m.testTitle ?? m.mentorName ?? "");
                      return [detail, location].filter(Boolean).join(" · ");
                    })()}
                  </span>
                )}
              </div>
              <span className="shrink-0 text-xs text-ink-400">{new Date(e.createdAt).toLocaleString("en-IN")}</span>
            </li>
          ))}
          {events.length === 0 && <li className="px-4 py-8 text-center text-ink-500">No activity yet.</li>}
        </ul>
      </Card>
    </div>
  );
}
