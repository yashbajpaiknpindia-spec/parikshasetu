"use client";

import { useEffect, useState } from "react";
import { getAttempts } from "@/lib/attempts";
import { usePassTier } from "@/components/pricing/PlanUnlock";
import { cn } from "@/lib/utils";

/** "3 of 10 free mocks used" with a progress bar, for one exam's free mocks. */
export function FreeMockProgress({ ids, hi, className }: { ids: string[]; hi: boolean; className?: string }) {
  const tier = usePassTier();
  const [used, setUsed] = useState<number | null>(null);
  useEffect(() => {
    const taken = new Set(getAttempts().map((a) => a.testId));
    setUsed(ids.filter((id) => taken.has(id)).length);
  }, [ids]);

  if (tier || used === null) return null;
  const total = ids.length;
  const pct = Math.round((used / total) * 100);
  return (
    <div className={cn("rounded-xl bg-white px-4 py-3 ring-1 ring-teal-200", className)}>
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-semibold text-ink-900">
          {hi ? `${used} / ${total} मुफ़्त मॉक दिए` : `${used} of ${total} free mocks used`}
        </span>
        <span className="text-xs text-ink-500">
          {used >= total ? (hi ? "सब पूरे" : "All used") : hi ? `${total - used} बचे` : `${total - used} left`}
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-100">
        <div className={cn("h-full rounded-full", used >= total ? "bg-saffron-500" : "bg-teal-500")} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/** Tick on a free mock card once it has been taken. */
export function TakenTick({ id, hi }: { id: string; hi: boolean }) {
  const [taken, setTaken] = useState(false);
  useEffect(() => {
    setTaken(getAttempts().some((a) => a.testId === id));
  }, [id]);
  if (!taken) return null;
  return (
    <span className="inline-flex items-center rounded-full bg-teal-50 px-2 py-0.5 text-[11px] font-semibold text-teal-700 ring-1 ring-teal-200">
      ✓ {hi ? "दिया" : "Taken"}
    </span>
  );
}
