"use client";

import { getAttempts } from "@/lib/attempts";

export interface Badge {
  id: string;
  emoji: string;
  label: string;
  desc: string;
  earned: boolean;
}

export interface GameStats {
  testsTaken: number;
  passedCount: number;
  perfectCount: number;
  avgPct: number;
  bestPct: number;
  streak: number;
  xp: number;
  level: number;
  badges: Badge[];
}

function dayKey(iso: string) {
  return iso.slice(0, 10);
}

/** Current consecutive-day streak (today or yesterday counts as the anchor). */
export function computeStreak(dates: string[]): number {
  const days = new Set(dates.map(dayKey));
  const cursor = new Date();
  const todayKey = cursor.toISOString().slice(0, 10);
  if (!days.has(todayKey)) cursor.setDate(cursor.getDate() - 1); // grace: yesterday
  let streak = 0;
  while (days.has(cursor.toISOString().slice(0, 10))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function computeStats(): GameStats {
  const attempts = getAttempts();
  const testsTaken = attempts.length;
  const passedCount = attempts.filter((a) => a.maxScore > 0 && a.score / a.maxScore >= 0.6).length;
  const perfectCount = attempts.filter((a) => a.total > 0 && a.correct === a.total).length;
  const avgPct = testsTaken
    ? Math.round((attempts.reduce((s, a) => s + (a.maxScore ? a.score / a.maxScore : 0), 0) / testsTaken) * 100)
    : 0;
  const bestPct = testsTaken
    ? Math.round(Math.max(...attempts.map((a) => (a.maxScore ? a.score / a.maxScore : 0))) * 100)
    : 0;
  const streak = computeStreak(attempts.map((a) => a.takenAt));
  const xp = testsTaken * 10 + passedCount * 15 + perfectCount * 25 + streak * 20;
  const level = Math.floor(xp / 150) + 1;

  const badges: Badge[] = [
    { id: "first", emoji: "🌱", label: "First step", desc: "Take your first test", earned: testsTaken >= 1 },
    { id: "five", emoji: "🖐️", label: "Getting going", desc: "Take 5 tests", earned: testsTaken >= 5 },
    { id: "twenty", emoji: "🔥", label: "On a roll", desc: "Take 20 tests", earned: testsTaken >= 20 },
    { id: "fifty", emoji: "🏅", label: "Half-century", desc: "Take 50 tests", earned: testsTaken >= 50 },
    { id: "perfect", emoji: "💯", label: "Perfect score", desc: "Score 100% on any test", earned: perfectCount >= 1 },
    { id: "sharp", emoji: "🎯", label: "Sharp shooter", desc: "Keep a 70%+ average", earned: avgPct >= 70 && testsTaken >= 3 },
    { id: "streak3", emoji: "⚡", label: "3-day streak", desc: "Practise 3 days in a row", earned: streak >= 3 },
    { id: "streak7", emoji: "🚀", label: "7-day streak", desc: "Practise 7 days in a row", earned: streak >= 7 },
  ];

  return { testsTaken, passedCount, perfectCount, avgPct, bestPct, streak, xp, level, badges };
}
