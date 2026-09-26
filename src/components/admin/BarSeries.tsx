"use client";

/** Dependency-free bar chart for a day → count series (last 30 days). */
export function BarSeries({
  data,
  color = "#2563eb",
  height = 120,
}: {
  data: { day: string; count: number }[];
  color?: string;
  height?: number;
}) {
  const max = Math.max(1, ...data.map((d) => d.count));
  return (
    <div className="flex items-end gap-[3px]" style={{ height }}>
      {data.map((d) => (
        <div
          key={d.day}
          title={`${d.day}: ${d.count}`}
          className="flex-1 rounded-t-sm transition-all"
          style={{
            height: `${Math.max(3, (d.count / max) * 100)}%`,
            backgroundColor: color,
            opacity: d.count === 0 ? 0.15 : 0.85,
          }}
        />
      ))}
    </div>
  );
}
