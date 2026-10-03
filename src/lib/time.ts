const INDIA_TZ = "Asia/Kolkata";

export function formatIndiaDateTime(value: Date | string | number) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: INDIA_TZ,
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(value));
}

export function formatIndiaDate(value: Date | string | number) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: INDIA_TZ,
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function indiaDateParts(value = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: INDIA_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(value);
  return {
    year: parts.find((p) => p.type === "year")?.value ?? "1970",
    month: parts.find((p) => p.type === "month")?.value ?? "01",
    day: parts.find((p) => p.type === "day")?.value ?? "01",
  };
}

export function indiaStartOfDay(daysBack = 0) {
  const p = indiaDateParts();
  const start = new Date(`${p.year}-${p.month}-${p.day}T00:00:00+05:30`);
  return new Date(start.getTime() - daysBack * 24 * 60 * 60 * 1000);
}

export function indiaDateKey(value: Date | string | number) {
  const p = indiaDateParts(new Date(value));
  return `${p.year}-${p.month}-${p.day}`;
}
