import "server-only";

/**
 * Admin dashboards should not become completely unusable because one optional
 * analytics widget/query fails. This helper logs the exact operation while
 * returning the caller's safe fallback so the rest of the admin UI renders.
 *
 * The factory form is intentional: the Prisma query is not started until we
 * are inside the try/catch, avoiding unhandled/rejected work before the guard.
 */
export async function safeAdminQuery<T>(
  label: string,
  queryFactory: () => Promise<T>,
  fallback: T,
): Promise<T> {
  try {
    return await queryFactory();
  } catch (error) {
    console.error(`[admin] ${label} query failed`, error);
    return fallback;
  }
}
