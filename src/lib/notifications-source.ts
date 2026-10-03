import {
  notifications as builtinNotifications,
  newsUpdates as builtinUpdates,
  type JobNotification,
  type NewsUpdate,
} from "@/data/notifications";

/**
 * Notifications data source.
 *
 * The feed is DYNAMIC: when `NOTIFICATIONS_FEED_URL` is set (a JSON endpoint,
 * a hosted file, a published Google Sheet, a Supabase/edge function, or a future
 * automated aggregator), the page fetches it and revalidates hourly, so openings,
 * dates and news update WITHOUT a redeploy. If the feed is missing, invalid, or
 * unreachable, it safely falls back to the built-in seed data, so the site never
 * shows nothing and never shows malformed/fabricated records.
 *
 * Expected JSON shape:
 *   { "lastUpdated": "2026-09-21",
 *     "notifications": JobNotification[],
 *     "newsUpdates": NewsUpdate[] }
 */

const BUILTIN_LAST_UPDATED = "21 September 2026";

export interface FeedResult {
  notifications: JobNotification[];
  newsUpdates: NewsUpdate[];
  lastUpdated: string;
  source: "live" | "built-in";
}

function isNotification(x: unknown): x is JobNotification {
  const n = x as Partial<JobNotification>;
  return (
    !!n &&
    typeof n.id === "string" &&
    typeof n.title === "string" &&
    typeof n.officialUrl === "string" &&
    typeof n.status === "string" &&
    typeof n.type === "string"
  );
}

function isUpdate(x: unknown): x is NewsUpdate {
  const u = x as Partial<NewsUpdate>;
  return !!u && typeof u.id === "string" && typeof u.text === "string";
}

export async function getNotificationFeed(): Promise<FeedResult> {
  const fallback: FeedResult = {
    notifications: builtinNotifications,
    newsUpdates: builtinUpdates,
    lastUpdated: BUILTIN_LAST_UPDATED,
    source: "built-in",
  };

  const url = process.env.NOTIFICATIONS_FEED_URL;
  if (!url) return fallback;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return fallback;
    const data = await res.json();

    const notifications = Array.isArray(data?.notifications)
      ? data.notifications.filter(isNotification)
      : [];
    if (notifications.length === 0) return fallback;

    const newsUpdates = Array.isArray(data?.newsUpdates)
      ? data.newsUpdates.filter(isUpdate)
      : [];

    return {
      notifications,
      newsUpdates,
      lastUpdated:
        typeof data?.lastUpdated === "string"
          ? data.lastUpdated
          : new Date().toISOString().slice(0, 10),
      source: "live",
    };
  } catch {
    return fallback;
  }
}
