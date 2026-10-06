import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth-server";
import { exportDatabase } from "@/lib/database-backup";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  try {
    const backup = await exportDatabase();
    const body = JSON.stringify(backup, null, 2);
    const filename = `merit-marg-db-backup-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
    return new NextResponse(body, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "private, no-store, max-age=0",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Database export failed", error);
    return NextResponse.json({ error: "export_failed" }, { status: 500 });
  }
}
