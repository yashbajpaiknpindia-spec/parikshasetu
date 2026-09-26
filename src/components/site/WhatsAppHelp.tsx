"use client";

import { usePathname } from "next/navigation";
import { siteConfig, whatsappLink } from "@/lib/config";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** WhatsApp's glyph (brand mark used only to signal "chat on WhatsApp"). */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-5 w-5", className)} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35ZM12.04 21.5h-.01a9.43 9.43 0 0 1-4.8-1.31l-.35-.21-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.45 9.43Zm8.04-17.47A11.3 11.3 0 0 0 12.04.7C5.77.7.67 5.8.67 12.07c0 2 .52 3.96 1.52 5.68L.57 23.64l6.03-1.58a11.33 11.33 0 0 0 5.43 1.38h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.33-8.04Z" />
    </svg>
  );
}

/** Inline "WhatsApp +91 …" link for help text. */
export function WhatsAppLink({ text, className, label }: { text?: string; className?: string; label?: string }) {
  return (
    <a
      href={whatsappLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center gap-1 font-semibold text-[#128c4a] hover:underline", className)}
    >
      <WhatsAppIcon className="h-4 w-4" /> {label ?? siteConfig.whatsappDisplay}
    </a>
  );
}

/**
 * Floating "Help on WhatsApp" button on every page. Hidden inside a mock test so
 * it never covers the question palette or the submit button.
 */
export function WhatsAppFloat() {
  const pathname = usePathname();
  const { lang } = useLang();
  if (/^\/mock-tests\/[^/]+/.test(pathname)) return null;
  const hi = lang === "hi";
  return (
    <a
      href={whatsappLink(hi ? "नमस्ते मेरिट मार्ग, मुझे मदद चाहिए:" : "Hi Merit Marg, I need help with:")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={hi ? "WhatsApp पर मदद" : "Help on WhatsApp"}
      className="fixed bottom-3 right-3 z-50 inline-flex items-center gap-2 rounded-full bg-[#25d366] p-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6 sm:px-4"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">{hi ? "WhatsApp पर मदद" : "Help on WhatsApp"}</span>
    </a>
  );
}
