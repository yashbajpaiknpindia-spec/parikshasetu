import { NextResponse } from "next/server";
import { requireAdmin, logEvent } from "@/lib/auth-server";
import { importDatabase } from "@/lib/database-backup";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_BYTES = 100 * 1024 * 1024;

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  try {
    const form = await request.formData();
    const file = form.get("file");
    const replaceAll = form.get("replaceAll") === "true";
    if (!(file instanceof File)) return NextResponse.json({ error: "file_required" }, { status: 400 });
    if (file.size <= 0) return NextResponse.json({ error: "file_empty" }, { status: 400 });
    if (file.size > MAX_FILE_BYTES) return NextResponse.json({ error: "file_too_large", maxBytes: MAX_FILE_BYTES }, { status: 413 });

    const text = await file.text();
    let payload: unknown;
    try {
      payload = JSON.parse(text);
    } catch {
      return NextResponse.json({ error: "invalid_json" }, { status: 400 });
    }

    const result = await importDatabase(payload, replaceAll);
    await logEvent("admin_database_import", admin.id, {
      replaceAll,
      recordsImported: result.recordsImported,
      sourceFilename: file.name.slice(0, 120),
    });
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error("Database import failed", error);
    const message = error instanceof Error ? error.message : "Import failed";
    return NextResponse.json({ error: "import_failed", message }, { status: 400 });
  }
}
