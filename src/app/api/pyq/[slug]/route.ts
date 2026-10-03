import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { getPyq } from "@/data/pyq";
import { getCurrentUser } from "@/lib/auth-server";
import { hasPaidPlanAccess } from "@/lib/entitlements";
import { isDbConfigured } from "@/lib/prisma";

export const runtime = "nodejs";

/**
 * A previous-year paper PDF, for Prep Pass holders only. The file sits in
 * /private/pyq (bundled via outputFileTracingIncludes in next.config.ts), never
 * in /public, so the server-side Postgres entitlement check is the only way in.
 * `?download=1` saves the file instead of opening it in the browser.
 */
export async function GET(req: Request, ctx: RouteContext<"/api/pyq/[slug]">) {
  const { slug } = await ctx.params;
  const paper = getPyq(slug);
  if (!paper) return NextResponse.json({ ok: false }, { status: 404 });

  const user = isDbConfigured ? await getCurrentUser() : null;
  const pass = !!(user && (await hasPaidPlanAccess(user.id)));
  if (!pass) {
    return NextResponse.redirect(new URL(`/pyq?locked=${encodeURIComponent(slug)}`, req.url), 303);
  }

  try {
    const file = await readFile(path.join(process.cwd(), "private", "pyq", `${paper.slug}.pdf`));
    const download = new URL(req.url).searchParams.has("download");
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `${download ? "attachment" : "inline"}; filename="MeritMarg-${paper.slug}.pdf"`,
        "Cache-Control": "private, no-store",
        "X-Robots-Tag": "noindex",
      },
    });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
