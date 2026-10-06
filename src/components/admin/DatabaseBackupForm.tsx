"use client";

import { useRef, useState } from "react";
import { AlertTriangle, Database, Download, Loader2, Upload } from "lucide-react";

export function DatabaseBackupForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState<"export" | "import" | null>(null);
  const [replaceAll, setReplaceAll] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function downloadBackup() {
    setBusy("export"); setMessage(null); setError(null);
    try {
      const res = await fetch("/api/admin/data/export", { cache: "no-store" });
      if (!res.ok) throw new Error("Could not create the database backup.");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `merit-marg-db-backup-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
      setMessage("Full database backup downloaded.");
    } catch (e) { setError(e instanceof Error ? e.message : "Backup failed."); }
    finally { setBusy(null); }
  }

  async function importBackup(file: File) {
    setBusy("import"); setMessage(null); setError(null);
    try {
      if (!file.name.toLowerCase().endsWith(".json")) throw new Error("Please choose a .json database backup.");
      const form = new FormData();
      form.append("file", file);
      form.append("replaceAll", String(replaceAll));
      const res = await fetch("/api/admin/data/import", { method: "POST", body: form });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Database import failed.");
      setMessage(`Imported ${data.recordsImported ?? 0} records successfully${replaceAll ? " (database replaced from backup)" : ""}.`);
      if (inputRef.current) inputRef.current.value = "";
    } catch (e) { setError(e instanceof Error ? e.message : "Import failed."); }
    finally { setBusy(null); }
  }

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-brand-50 p-2 text-brand-700"><Database className="h-5 w-5" /></div>
        <div><h2 className="font-semibold text-ink-900">Database backup & restore</h2><p className="mt-1 text-sm text-ink-500">Download every application table as one JSON backup, or restore a previous backup.</p></div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" onClick={downloadBackup} disabled={!!busy} className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60">
          {busy === "export" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />} Download all data
        </button>
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-ink-300 px-4 py-2.5 text-sm font-semibold text-ink-800 hover:bg-ink-50">
          {busy === "import" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />} Import backup
          <input ref={inputRef} type="file" accept="application/json,.json" className="sr-only" disabled={!!busy} onChange={(e) => { const f = e.target.files?.[0]; if (f) void importBackup(f); }} />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
        <input type="checkbox" checked={replaceAll} onChange={(e) => setReplaceAll(e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-amber-400" />
        <span><span className="font-semibold">Replace all existing database data</span><span className="block mt-1 text-amber-900/80">OFF = merge/overwrite matching record IDs. ON = delete the current application data first, then restore the selected backup. Use only for a deliberate full restore.</span></span>
      </label>

      <div className="mt-4 flex items-start gap-2 text-xs text-ink-500"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /> Backups contain sensitive admin data such as password hashes, reset tokens, attempts, payments and visitor records. Store the downloaded file securely.</div>
      {message && <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">{message}</p>}
      {error && <p className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800">{error}</p>}
    </div>
  );
}
