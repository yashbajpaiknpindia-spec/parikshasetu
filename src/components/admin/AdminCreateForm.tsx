"use client";

import { useState } from "react";
import { Button, Card } from "@/components/ui";

export function AdminCreateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plan, setPlan] = useState("free");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setMessage("");
    try {
      const r = await fetch("/api/admin/admins", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, password, plan }) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.message || data.error || "Could not create admin.");
      setMessage(`Admin ${data.user.email} created.`); setName(""); setEmail(""); setPassword(""); setPlan("free");
      setTimeout(() => window.location.reload(), 350);
    } catch (e) { setMessage(e instanceof Error ? e.message : "Could not create admin."); }
    finally { setBusy(false); }
  }

  return (
    <Card>
      <h2 className="text-base font-semibold text-ink-900">Add another admin</h2>
      <p className="mt-1 text-sm text-ink-500">Creates a login account with full admin access. The selected plan is assigned immediately; you can change it later.</p>
      <form onSubmit={submit} className="mt-4 grid gap-3 sm:grid-cols-2">
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="rounded-lg border border-ink-300 px-3 py-2.5 text-sm" />
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="rounded-lg border border-ink-300 px-3 py-2.5 text-sm" />
        <input required minLength={6} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Temporary password" className="rounded-lg border border-ink-300 px-3 py-2.5 text-sm" />
        <select value={plan} onChange={(e) => setPlan(e.target.value)} className="rounded-lg border border-ink-300 bg-white px-3 py-2.5 text-sm">
          <option value="free">Free</option><option value="prep">Prep</option><option value="mentor">Prep + Mentorship</option>
        </select>
        <div className="sm:col-span-2 flex items-center gap-3"><Button type="submit" disabled={busy}>{busy ? "Creating…" : "Create admin"}</Button>{message && <span className="text-sm text-ink-500">{message}</span>}</div>
      </form>
    </Card>
  );
}
