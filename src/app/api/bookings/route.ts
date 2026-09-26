import { NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { getCurrentUser, logEvent } from "@/lib/auth-server";
import { requestMeta } from "@/lib/request-meta";

export const runtime = "nodejs";

export async function GET() {
  if (!isDbConfigured) return NextResponse.json({ bookings: [] });
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ bookings: [] });
  const bookings = await prisma.booking.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 50,
  });
  return NextResponse.json({ bookings });
}

export async function POST(req: Request) {
  if (!isDbConfigured) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const booking = await prisma.booking.create({
    data: {
      userId: user.id,
      mentorSlug: String(body.mentorSlug ?? ""),
      mentorName: String(body.mentorName ?? ""),
      post: body.post ? String(body.post) : null,
      subject: body.subject ? String(body.subject) : null,
      date: String(body.date ?? ""),
      time: String(body.time ?? ""),
      price: Number(body.price ?? 0),
      paid: Boolean(body.paid ?? false),
      paymentId: body.paymentId ? String(body.paymentId) : null,
      orderId: body.orderId ? String(body.orderId) : null,
    },
  });

  await logEvent("booking_created", user.id, {
    mentorName: booking.mentorName,
    price: booking.price,
    paid: booking.paid,
    ...requestMeta(req),
  });

  return NextResponse.json({ booking });
}
