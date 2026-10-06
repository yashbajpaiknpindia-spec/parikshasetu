"use client";

import { useState } from "react";
import { ShieldCheck, ShieldOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui";

export function AdminRoleQuickAction({ userId, isAdmin }: { userId: string; isAdmin: boolean }) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function toggleRole() {
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: isAdmin ? "USER" : "ADMIN" }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(String(data.message || data.error || "Could not update role."));
      window.location.reload();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not update role.");
      setBusy(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button size="sm" variant={isAdmin ? "outline" : "primary"} onClick={toggleRole} disabled={busy}>
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : isAdmin ? <ShieldOff className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
        {busy ? "Saving…" : isAdmin ? "Remove admin" : "Make admin"}
      </Button>
      {message && <span className="max-w-52 text-xs text-danger">{message}</span>}
    </div>
  );
}
