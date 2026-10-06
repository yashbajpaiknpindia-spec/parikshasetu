import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

/** Instagram glyph (brand icons aren't in lucide-react). */
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

/** Facebook glyph. */
export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6h1.6V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.2H7.7v3h2.6V21h3.2Z" />
    </svg>
  );
}

const IG = "bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]";
const FB = "bg-[#1877f2]";

/**
 * "Follow us" buttons for Instagram and Facebook. `variant="band"` is the big home-page
 * strip; `variant="compact"` is the small pair used in the footer.
 */
export function SocialFollow({ hi, variant = "band", className }: { hi: boolean; variant?: "band" | "compact"; className?: string }) {
  const { instagram, facebook } = siteConfig.social;
  if (variant === "compact") {
    return (
      <div className={cn("flex gap-2", className)}>
        <a href={instagram.url} target="_blank" rel="noopener" aria-label={`Instagram ${instagram.handle}`} className={cn("grid h-9 w-9 place-items-center rounded-full text-white", IG)}>
          <InstagramIcon className="h-5 w-5" />
        </a>
        <a href={facebook.url} target="_blank" rel="noopener" aria-label="Facebook" className={cn("grid h-9 w-9 place-items-center rounded-full text-white", FB)}>
          <FacebookIcon className="h-5 w-5" />
        </a>
      </div>
    );
  }
  return (
    <div className={cn("rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink-200 sm:p-6", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-extrabold text-ink-900 sm:text-2xl">
            {hi ? "हमें फ़ॉलो करें: रोज़ क्विज़, टिप्स और भर्ती अपडेट" : "Follow us for daily quizzes, tips and job updates"}
          </p>
          <p className="mt-1 text-sm text-ink-600">
            {hi ? "चैलेंज के परिणाम और नए मॉक की सूचना सबसे पहले यहीं मिलेगी।" : "Challenge results and new mocks are announced here first."}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a href={instagram.url} target="_blank" rel="noopener" className={cn("inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-bold text-white shadow-md transition-transform hover:-translate-y-0.5", IG)}>
            <InstagramIcon className="h-5 w-5" /> {hi ? "Instagram पर फ़ॉलो करें" : "Follow on Instagram"}
          </a>
          <a href={facebook.url} target="_blank" rel="noopener" className={cn("inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-bold text-white shadow-md transition-transform hover:-translate-y-0.5", FB)}>
            <FacebookIcon className="h-5 w-5" /> {hi ? "Facebook पर फ़ॉलो करें" : "Follow on Facebook"}
          </a>
        </div>
      </div>
    </div>
  );
}
