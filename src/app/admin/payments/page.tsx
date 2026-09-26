import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { Card, Badge } from "@/components/ui";
import { StatCard } from "@/components/admin/StatCard";

export const dynamic = "force-dynamic";

type PaymentRow = {
  id: string;
  buyerName: string;
  buyerEmail: string;
  product: string;
  amount: number;
  paymentId: string | null;
  orderId: string | null;
  createdAt: Date;
};

export default async function AdminPaymentsPage() {
  if (!isDbConfigured) redirect("/admin");
  const admin = await requireAdmin();
  if (!admin) redirect("/login");

  const [planAccess, paidBookings] = await Promise.all([
    prisma.planAccess.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: { select: { name: true, email: true } } },
    }),
    prisma.booking.findMany({
      where: { paid: true },
      orderBy: { createdAt: "desc" },
      include: { user: { select: { name: true, email: true } } },
    }),
  ]);

  const rows: PaymentRow[] = [
    ...planAccess.map((p) => ({
      id: p.id,
      buyerName: p.user.name,
      buyerEmail: p.user.email,
      product: `Plan · ${p.plan}`,
      amount: p.amount,
      paymentId: p.paymentId,
      orderId: p.orderId,
      createdAt: p.createdAt,
    })),
    ...paidBookings.map((b) => ({
      id: b.id,
      buyerName: b.user.name,
      buyerEmail: b.user.email,
      product: `Mentor session · ${b.mentorName}`,
      amount: b.price,
      paymentId: b.paymentId,
      orderId: b.orderId,
      createdAt: b.createdAt,
    })),
  ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const revenue = rows.reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink-900">Payments</h1>
        <p className="mt-1 text-sm text-ink-500">
          {rows.length} total — ₹99 plan unlocks and paid mentor bookings, verified via Razorpay.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total revenue" value={`₹${revenue.toLocaleString("en-IN")}`} />
        <StatCard label="Payments" value={rows.length} />
        <StatCard label="Avg. payment" value={`₹${rows.length ? Math.round(revenue / rows.length) : 0}`} />
      </div>

      <Card className="overflow-x-auto p-0">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-ink-200 bg-ink-50 text-xs uppercase tracking-wide text-ink-500">
            <tr>
              <th className="px-4 py-3">Buyer</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Payment ID</th>
              <th className="px-4 py-3">When</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-ink-100 last:border-0 hover:bg-ink-50">
                <td className="px-4 py-3">
                  <div className="font-medium text-ink-900">{r.buyerName}</div>
                  <div className="text-xs text-ink-500">{r.buyerEmail}</div>
                </td>
                <td className="px-4 py-3 text-ink-700">
                  {r.product}
                  {r.product.startsWith("Plan") && (
                    <Badge tone="green" className="ml-2">
                      plan
                    </Badge>
                  )}
                  {r.product.startsWith("Mentor") && (
                    <Badge tone="amber" className="ml-2">
                      booking
                    </Badge>
                  )}
                </td>
                <td className="px-4 py-3 text-ink-700">₹{r.amount}</td>
                <td className="px-4 py-3 font-mono text-xs text-ink-500">{r.paymentId ?? "—"}</td>
                <td className="px-4 py-3 text-ink-500">{r.createdAt.toLocaleString("en-IN")}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-ink-500">
                  No payments yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
