"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";

export function ActivityTracker() {
  const pathname = usePathname();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading || !pathname || pathname.startsWith("/admin")) return;
    void fetch("/api/activity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
      credentials: "same-origin",
      keepalive: true,
    }).catch(() => {});
  }, [loading, pathname, user]);
  return null;
}
