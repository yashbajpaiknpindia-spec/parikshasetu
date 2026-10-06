"use client";

import { useEffect, useState } from "react";

const COLORS = ["#2563eb", "#0d9488", "#facc15", "#14b8a6", "#60a5fa", "#fde047", "#1d4ed8"];

/** Lightweight dependency-free confetti burst. Renders on mount, clears after ~5s. */
export function Confetti({ pieces = 110 }: { pieces?: number }) {
  const [items] = useState(() =>
    Array.from({ length: pieces }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 0.7,
      duration: 2.4 + Math.random() * 2,
      color: COLORS[i % COLORS.length],
      rotate: Math.random() * 360,
      w: 6 + Math.random() * 8,
      h: 8 + Math.random() * 10,
    })),
  );
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 5200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: p.color,
            width: `${p.w}px`,
            height: `${p.h}px`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
