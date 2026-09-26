"use client";

import { useEffect, useState } from "react";
import { Flame, Star, Trophy } from "lucide-react";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import { computeStats, type GameStats } from "@/lib/gamification";
import { useLang } from "@/lib/i18n";

export function StreakBadges() {
  const [stats, setStats] = useState<GameStats | null>(null);
  const { lang } = useLang();
  const hi = lang === "hi";

  useEffect(() => {
    setStats(computeStats());
  }, []);

  if (!stats) return null;
  const xpInLevel = stats.xp % 150;
  const xpPct = Math.round((xpInLevel / 150) * 100);
  const earned = stats.badges.filter((b) => b.earned).length;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Streak */}
      <Card className="flex items-center gap-4">
        <span className={cn("grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl", stats.streak > 0 ? "bg-saffron-100" : "bg-ink-100")}>
          🔥
        </span>
        <div>
          <div className="text-2xl font-extrabold text-ink-900">{stats.streak} {hi ? "दिन" : "day" + (stats.streak === 1 ? "" : "s")}</div>
          <div className="text-xs text-ink-500">
            {stats.streak > 0
              ? hi ? "मौजूदा स्ट्रीक: जारी रखें!" : "Current streak: keep it alive!"
              : hi ? "स्ट्रीक शुरू करने हेतु आज एक टेस्ट दें" : "Take a test today to start a streak"}
          </div>
        </div>
      </Card>

      {/* Level / XP */}
      <Card>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 font-semibold text-ink-900">
            <Star className="h-5 w-5 fill-saffron-400 text-saffron-400" /> {hi ? "स्तर" : "Level"} {stats.level}
          </span>
          <span className="text-xs text-ink-500">{stats.xp} XP</span>
        </div>
        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-ink-100">
          <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-saffron-500" style={{ width: `${xpPct}%` }} />
        </div>
        <div className="mt-1.5 text-xs text-ink-500">{hi ? `अगले स्तर तक ${150 - xpInLevel} XP` : `${150 - xpInLevel} XP to level ${stats.level + 1}`}</div>
      </Card>

      {/* Badges count */}
      <Card className="flex items-center gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">
          <Trophy className="h-7 w-7" />
        </span>
        <div>
          <div className="text-2xl font-extrabold text-ink-900">{earned}/{stats.badges.length}</div>
          <div className="text-xs text-ink-500">{hi ? "बैज अर्जित" : "badges earned"}</div>
        </div>
      </Card>

      {/* Badge grid */}
      <div className="md:col-span-3">
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
          {stats.badges.map((b) => (
            <div
              key={b.id}
              title={`${b.label}: ${b.desc}`}
              className={cn(
                "flex flex-col items-center gap-1 rounded-xl border p-3 text-center transition",
                b.earned ? "border-saffron-200 bg-saffron-50" : "border-ink-200 bg-ink-50 opacity-55 grayscale",
              )}
            >
              <span className="text-2xl">{b.emoji}</span>
              <span className="text-[10px] font-medium leading-tight text-ink-700">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
