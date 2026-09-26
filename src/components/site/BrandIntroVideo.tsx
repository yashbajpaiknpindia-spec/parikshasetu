"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The animated Merit Marg logo reveal (10 s, silent). Autoplays muted once and
 * rests on the final logo frame; a replay button appears when it ends. Users who
 * prefer reduced motion just see the still poster.
 */
export function BrandIntroVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.removeAttribute("autoplay");
      v.pause();
      setEnded(true);
    }
  }, []);

  const replay = () => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0;
    setEnded(false);
    void v.play();
  };

  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-[#0a1329] shadow-lg", className)}>
      <video
        ref={ref}
        className="block aspect-video w-full"
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster="/brand/merit-marg-intro-poster.jpg"
        onEnded={() => setEnded(true)}
        aria-label="Merit Marg logo animation"
      >
        <source src="/brand/merit-marg-intro.webm" type="video/webm" />
        <source src="/brand/merit-marg-intro.mp4" type="video/mp4" />
      </video>
      {ended && (
        <button
          type="button"
          onClick={replay}
          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur hover:bg-white/20"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Replay
        </button>
      )}
    </div>
  );
}
