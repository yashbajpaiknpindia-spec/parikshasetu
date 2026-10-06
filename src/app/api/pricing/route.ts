import { NextResponse } from "next/server";
import { getPricingSettings } from "@/lib/pricing-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const pricing = await getPricingSettings();
  return NextResponse.json(pricing, { headers: { "Cache-Control": "no-store" } });
}
