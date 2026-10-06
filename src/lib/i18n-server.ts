import { cookies } from "next/headers";
import type { Lang } from "@/lib/i18n";

/** Read the chosen language from the cookie set by the client toggle.
 *  Lets server components render bilingual content while keeping SSG/SSR + SEO. */
export async function getLang(): Promise<Lang> {
  try {
    const c = await cookies();
    const v = c.get("ps_lang")?.value;
    return v === "hi" ? "hi" : "en";
  } catch {
    return "en";
  }
}
