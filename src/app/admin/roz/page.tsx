import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { pageSeo } from "@/lib/seo";
import { requireAdmin } from "@/lib/auth-server";
import { rozReady, rozStats } from "@/lib/roz-server";
import { istDate } from "@/lib/roz";
import { paperLabel } from "@/lib/challenge-server";

export const metadata: Metadata = pageSeo({
  title: "Roz ka 10 & Sunday Sprint Stats",
  description: "Private admin statistics for daily Roz ka 10 and Sunday Sprint attempts.",
  path: "/admin/roz",
  keywords: ["admin roz stats"],
  noIndex: true,
});
export const dynamic = "force-dynamic";

export default async function AdminRozPage() {
  if (!(await requireAdmin())) redirect("/login");
  const n = 14;
  const days = Array.from({ length: n }, (_, i) => istDate(Date.now() - i * 86400_000));
  const rows = await rozStats(days);
  const byDay = days.map((d) => {
    const r = rows.filter((x) => x.date === d);
    const attempts = r.reduce((s, x) => s + x.attempts, 0);
    const named = r.reduce((s, x) => s + x.named, 0);
    return { d, attempts, named };
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink-900">Roz ka 10 · Sunday Sprint</h1>
        <p className="mt-1 text-sm text-ink-500">Last {n} days. Finished attempts only; public boards show abbreviated names.</p>
      </div>
      {!rozReady() && <p className="rounded-xl bg-rose-50 p-3 text-sm text-rose-900 ring-1 ring-rose-200">Roz storage is not configured. Set DATABASE_URL and JWT_SECRET.</p>}
      <div className="overflow-x-auto rounded-2xl bg-white ring-1 ring-ink-200">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="bg-ink-50 text-ink-700"><tr>{["Date", "Finished", "Saved name", "Conversion"].map((h) => <th key={h} className="px-3 py-2 font-semibold">{h}</th>)}</tr></thead>
          <tbody>
            {byDay.map((x) => (
              <tr key={x.d} className="border-t border-ink-100">
                <td className="px-3 py-2 font-semibold">{x.d}</td>
                <td className="px-3 py-2">{x.attempts}</td>
                <td className="px-3 py-2">{x.named}</td>
                <td className="px-3 py-2">{x.attempts ? `${Math.round((x.named / x.attempts) * 100)}%` : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto rounded-2xl bg-white ring-1 ring-ink-200">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-ink-50 text-ink-700"><tr>{["Date", "Format", "Paper", "Finished", "Saved name", "Avg score"].map((h) => <th key={h} className="px-3 py-2 font-semibold">{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={`${r.date}-${r.kind}-${r.paper}`} className="border-t border-ink-100">
                <td className="px-3 py-2">{r.date}</td>
                <td className="px-3 py-2">{r.kind === "roz" ? "Roz ka 10" : "Sunday Sprint"}</td>
                <td className="px-3 py-2">{paperLabel(r.paper)}</td>
                <td className="px-3 py-2">{r.attempts}</td>
                <td className="px-3 py-2">{r.named}</td>
                <td className="px-3 py-2">{r.avg}</td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={6} className="px-3 py-10 text-center text-ink-500">No Roz attempts yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
