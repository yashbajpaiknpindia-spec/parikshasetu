"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";

export function ActivityTracker() {
  const pathname = usePathname();
  const { user } = useAuth();
  useEffect(() => {
    if (!user || !pathname || pathname.startsWith("/admin")) return;
    void fetch("/api/activity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname, user]);
  return null;
}
