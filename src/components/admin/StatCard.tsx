import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  sub,
  className,
}: {
  label: string;
  value: string | number;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-ink-200 bg-white p-5", className)}>
      <div className="text-xs font-semibold uppercase tracking-wide text-ink-500">{label}</div>
      <div className="mt-2 text-3xl font-bold text-ink-900">{value}</div>
      {sub && <div className="mt-1 text-sm text-ink-500">{sub}</div>}
    </div>
  );
}
