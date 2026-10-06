"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarClock, CheckCircle2, Loader2, Info } from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";
import { cn, inr } from "@/lib/utils";
import { useAuth } from "@/components/auth/AuthProvider";
import { saveBooking } from "@/lib/bookings";
import { loadRazorpayScript, openRazorpayCheckout, type RazorpayResponse } from "@/lib/razorpay-client";
import type { Mentor } from "@/data/mentors";

const TIMES = ["9:00 AM", "11:00 AM", "5:00 PM", "7:00 PM"];

function nextDays(n: number) {
  const out: { key: string; label: string }[] = [];
  const fmt = new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "numeric", month: "short" });
  for (let i = 1; i <= n; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    out.push({ key: d.toISOString(), label: fmt.format(d) });
  }
  return out;
}

type Status = "idle" | "processing" | "done" | "error";

export function BookingWidget({ mentor }: { mentor: Mentor }) {
  const days = nextDays(5);
  const { user } = useAuth();
  const [day, setDay] = useState(days[0].label);
  const [time, setTime] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function confirm() {
    if (!time) {
      setMessage("Please pick a time slot.");
      return;
    }
    setStatus("processing");
    setMessage("");

    const record = {
      mentorSlug: mentor.slug,
      mentorName: mentor.name,
      post: mentor.post,
      subject: mentor.subject,
      date: day,
      time,
      price: mentor.pricePerSession,
      paid: false,
      createdAt: new Date().toISOString(),
    };

    if (!user) {
      setStatus("idle");
      setMessage("Please log in before booking a paid mentor session.");
      return;
    }

    try {
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: mentor.pricePerSession,
          notes: { mentor: mentor.slug, slot: `${day} ${time}` },
        }),
      });
      const order = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(order.message || (res.status === 401
          ? "Please log in before booking."
          : "Payment could not be started. Please try again or contact support."));
        return;
      }

      const ok = await loadRazorpayScript();
      if (!ok) {
        setStatus("error");
        setMessage("Razorpay checkout could not load. Check your connection and try again.");
        return;
      }

      const opened = openRazorpayCheckout({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Merit Marg",
        description: `Session with ${mentor.name} (${mentor.post})`,
        order_id: order.orderId,
        prefill: { name: user.name, email: user.email },
        theme: { color: "#2563eb" },
        handler: async (r: RazorpayResponse) => {
          const v = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...r, kind: "booking", booking: record }),
          });
          if (v.ok) {
            saveBooking({ ...record, paid: true });
            setStatus("done");
          } else {
            setStatus("error");
            setMessage("Payment could not be verified. If money was deducted, contact support with your Razorpay payment ID.");
          }
        },
        modal: { ondismiss: () => setStatus("idle") },
      });
      if (!opened) {
        setStatus("error");
        setMessage("Razorpay checkout could not open. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Payment could not be started. Please check your connection and try again.");
    }
  }

  if (status === "done") {
    return (
      <Card>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-8 w-8 text-success" />
          <div>
            <p className="font-semibold text-ink-900">Session reserved</p>
            <p className="text-sm text-ink-500">{day} · {time}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-ink-600">
          Your session with <strong>{mentor.name}</strong> is saved to your dashboard.
        </p>
        <div className="mt-4 flex gap-3">
          <Link href="/dashboard" className="text-sm font-semibold text-brand-700">Go to dashboard →</Link>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-ink-900">
          <CalendarClock className="h-5 w-5 text-brand-600" /> Book a session
        </h3>
        <span className="text-lg font-bold text-brand-700">{inr(mentor.pricePerSession)}</span>
      </div>

      <p className="mt-1 text-xs text-ink-500">60-minute 1-on-1 video call · reschedule up to 12h before</p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Pick a day</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {days.map((d) => (
            <button
              key={d.key}
              onClick={() => setDay(d.label)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-xs font-medium",
                day === d.label ? "border-brand-600 bg-brand-50 text-brand-700" : "border-ink-200 text-ink-600 hover:border-ink-300",
              )}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Pick a time</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {TIMES.map((t) => (
            <button
              key={t}
              onClick={() => setTime(t)}
              className={cn(
                "rounded-lg border px-3 py-2 text-sm font-medium",
                time === t ? "border-brand-600 bg-brand-50 text-brand-700" : "border-ink-200 text-ink-600 hover:border-ink-300",
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {!user && (
        <p className="mt-4 flex items-start gap-2 rounded-lg bg-ink-50 p-2.5 text-xs text-ink-600">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span><Link href="/login" className="font-semibold text-brand-700 underline">Log in</Link> to attach this booking to your account.</span>
        </p>
      )}

      {message && <p className="mt-3 text-sm text-danger">{message}</p>}

      <Button className="mt-5 w-full" size="lg" onClick={confirm} disabled={status === "processing"}>
        {status === "processing" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Processing…</>
        ) : (
          <>Pay {inr(mentor.pricePerSession)} &amp; book</>
        )}
      </Button>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <Badge tone="green">Verified mentor</Badge>
        <Badge tone="slate">Secure checkout</Badge>
      </div>
    </Card>
  );
}
