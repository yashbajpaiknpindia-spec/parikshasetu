"use client";

import { useEffect, useState } from "react";
import { Button, Card } from "@/components/ui";

export function PricingSettingsForm() {
  const [prepPrice, setPrepPrice] = useState(99);
  const [mentorPrice, setMentorPrice] = useState(199);
  const [mentorLive, setMentorLive] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/admin/settings/pricing", { cache: "no-store" }).then((r) => r.ok ? r.json() : null).then((d) => {
      if (!d) return; setPrepPrice(Number(d.prepPrice) || 99); setMentorPrice(Number(d.mentorPrice) || 199); setMentorLive(!!d.mentorLive);
    }).catch(() => {});
  }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setMessage("");
    try {
      const r = await fetch("/api/admin/settings/pricing", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prepPrice, mentorPrice, mentorLive }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.message || d.error || "Could not update pricing.");
      setMessage("Pricing updated across checkout and pricing surfaces.");
    } catch (e) { setMessage(e instanceof Error ? e.message : "Could not update pricing."); }
    finally { setBusy(false); }
  }

  return (
    <Card>
      <h2 className="text-base font-semibold text-ink-900">Pricing plans</h2>
      <p className="mt-1 text-sm text-ink-500">New purchases use these server-side prices. Existing paid access stays active.</p>
      <form onSubmit={save} className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-medium text-ink-700">Prep price (₹)<input type="number" min={1} step={1} value={prepPrice} onChange={(e) => setPrepPrice(Number(e.target.value))} className="mt-1.5 w-full rounded-lg border border-ink-300 px-3 py-2.5" /></label>
        <label className="text-sm font-medium text-ink-700">Mentor price (₹)<input type="number" min={1} step={1} value={mentorPrice} onChange={(e) => setMentorPrice(Number(e.target.value))} className="mt-1.5 w-full rounded-lg border border-ink-300 px-3 py-2.5" /></label>
        <label className="flex items-center gap-2 pt-7 text-sm font-medium text-ink-700"><input type="checkbox" checked={mentorLive} onChange={(e) => setMentorLive(e.target.checked)} /> Put mentorship on sale</label>
        <div className="sm:col-span-3 flex items-center gap-3"><Button type="submit" disabled={busy}>{busy ? "Saving…" : "Save pricing"}</Button>{message && <span className="text-sm text-ink-500">{message}</span>}</div>
      </form>
    </Card>
  );
}
