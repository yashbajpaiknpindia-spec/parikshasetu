"use client";

import { useMemo, useState } from "react";
import { Star, Search } from "lucide-react";
import { ButtonLink, Card, Badge } from "@/components/ui";
import { cn, inr } from "@/lib/utils";
import type { Mentor } from "@/data/mentors";

const postFilters = ["All", "PRT", "TGT", "PGT"] as const;

export function MentorDirectory({ mentors }: { mentors: Mentor[] }) {
  const [post, setPost] = useState<(typeof postFilters)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mentors.filter((m) => {
      const okPost = post === "All" || m.post === post;
      const okQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.subject.toLowerCase().includes(q) ||
        m.specialities.some((s) => s.toLowerCase().includes(q));
      return okPost && okQuery;
    });
  }, [mentors, post, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {postFilters.map((p) => (
            <button
              key={p}
              onClick={() => setPost(p)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                post === p
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-ink-300 text-ink-600 hover:border-ink-400",
              )}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="relative sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search subject or skill…"
            className="w-full rounded-xl border border-ink-300 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand-500"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-ink-500">
          No mentors match that filter yet. Try a different post or search.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <Card key={m.slug} hover className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className={cn("grid h-14 w-14 place-items-center rounded-full text-base font-bold text-white", m.accent)}>
                  {m.initials}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-ink-900">{m.name}</p>
                  <p className="text-xs text-ink-500">
                    {m.post} · {m.subject} · {m.yearsInKV} yrs in KV
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-ink-700">
                    <Star className="h-3.5 w-3.5 fill-saffron-400 text-saffron-400" />
                    {m.rating} <span className="font-normal text-ink-400">({m.reviews})</span>
                  </p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm text-ink-600">{m.headline}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {m.specialities.slice(0, 3).map((s) => (
                  <Badge key={s} tone="slate">{s}</Badge>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                <span className="text-sm">
                  <span className="font-semibold text-brand-700">{inr(m.pricePerSession)}</span>
                  <span className="text-ink-500"> / session</span>
                </span>
                <ButtonLink href={`/mentors/${m.slug}`} size="sm">
                  View & book
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
