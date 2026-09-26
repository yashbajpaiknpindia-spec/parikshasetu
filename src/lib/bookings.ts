"use client";

/** Local booking history (per-browser) for demo mode. Persisted to Supabase in production. */
export interface SavedBooking {
  mentorSlug: string;
  mentorName: string;
  post: string;
  subject: string;
  date: string; // e.g. "Mon, 6 Oct"
  time: string; // e.g. "6:00 PM"
  price: number;
  paid: boolean;
  createdAt: string; // ISO
}

const KEY = "ps_bookings";

export function getBookings(): SavedBooking[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as SavedBooking[]) : [];
  } catch {
    return [];
  }
}

export function saveBooking(b: SavedBooking) {
  try {
    const all = getBookings();
    all.unshift(b);
    localStorage.setItem(KEY, JSON.stringify(all.slice(0, 50)));
  } catch {
    /* ignore */
  }
  // Best-effort sync to the real backend — see attempts.ts for why this is
  // fire-and-forget. The Razorpay verify route also records paid bookings
  // server-side directly, so this mainly covers free/unpaid bookings.
  if (!b.paid) {
    fetch("/api/bookings", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(b),
    }).catch(() => { /* local history still works */ });
  }
}
