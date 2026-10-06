"use client";

import { useState } from "react";
import { Button, Card, Badge } from "@/components/ui";

export function AdminUserControls({ userId, role, initialPlan }: { userId: string; role: "USER" | "ADMIN"; initialPlan: string | null }) {
  const normalized = initialPlan === "mentor" ? "mentor" : initialPlan ? "prep" : "free";
  const [selectedPlan, setSelectedPlan] = useState(normalized);
  const [selectedRole, setSelectedRole] = useState(role);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function save() {
    setBusy(true); setMessage("");
    try {
      const r = await fetch(`/api/admin/users/${userId}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ role: selectedRole, plan: selectedPlan }) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.message || data.error || "Could not save changes.");
      setMessage("Changes saved. Refreshing…");
      window.location.reload();
    } catch (e) { setMessage(e instanceof Error ? e.message : "Could not save changes."); }
    finally { setBusy(false); }
  }

  return (
    <Card>
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-base font-semibold text-ink-900">Admin controls</h2>
        <Badge tone="slate">access & role</Badge>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink-700">Role
          <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value as "USER" | "ADMIN")} className="mt-1.5 w-full rounded-lg border border-ink-300 bg-white px-3 py-2.5">
            <option value="USER">User</option><option value="ADMIN">Admin</option>
          </select>
        </label>
        <label className="text-sm font-medium text-ink-700">Plan access
          <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} className="mt-1.5 w-full rounded-lg border border-ink-300 bg-white px-3 py-2.5">
            <option value="free">Free / remove paid access</option><option value="prep">Prep</option><option value="mentor">Prep + Mentorship</option>
          </select>
        </label>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button onClick={save} disabled={busy}>{busy ? "Saving…" : "Save changes"}</Button>
        {message && <span className="text-sm text-ink-500">{message}</span>}
      </div>
    </Card>
  );
}
