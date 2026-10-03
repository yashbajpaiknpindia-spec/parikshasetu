export default function AdminLoading() {
  return (
    <div className="space-y-6" aria-busy="true" aria-label="Loading admin page">
      <div className="h-9 w-56 animate-pulse rounded-lg bg-ink-100" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, i) => <div key={i} className="h-32 animate-pulse rounded-2xl bg-white ring-1 ring-ink-100" />)}
      </div>
      <div className="h-72 animate-pulse rounded-2xl bg-white ring-1 ring-ink-100" />
    </div>
  );
}
