"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, LogOut, LayoutDashboard, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink, Container } from "@/components/ui";
import { BrandLockup } from "@/components/site/Logo";
import { useAuth } from "@/components/auth/AuthProvider";
import { useLang } from "@/lib/i18n";
import { readExamChoice, examMeta, isExamChoice } from "@/lib/exam-choice";

const nav = [
  { href: "/exams", key: "exams" },
  { href: "/notifications", key: "notifications" },
  { href: "/results", key: "results" },
  { href: "/mock-tests", key: "mockTests" },
  { href: "/pricing", key: "pricing" },
  { href: "/about", key: "about" },
] as const;

function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={cn("inline-flex overflow-hidden rounded-lg border border-ink-300 text-xs font-semibold", className)}>
      <button
        onClick={() => setLang("en")}
        className={cn("px-2.5 py-1.5", lang === "en" ? "bg-brand-600 text-white" : "text-ink-600 hover:bg-ink-100")}
      >
        EN
      </button>
      <button
        onClick={() => setLang("hi")}
        className={cn("px-2.5 py-1.5 font-hindi", lang === "hi" ? "bg-brand-600 text-white" : "text-ink-600 hover:bg-ink-100")}
      >
        हिं
      </button>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { t } = useLang();
  // "Today's topic" opens the plan for the exam the visitor chose (UP by default).
  const [planHref, setPlanHref] = useState("/exams/up/plan");
  useEffect(() => {
    const apply = (k: unknown) => { if (isExamChoice(k)) setPlanHref(examMeta(k).planHref); };
    apply(readExamChoice());
    const onChange = (e: Event) => apply((e as CustomEvent).detail);
    window.addEventListener("ps-exam-change", onChange);
    return () => window.removeEventListener("ps-exam-change", onChange);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <BrandLockup />
        </Link>


        <div className="hidden items-center gap-2 lg:flex">
          <LangToggle />
          {user ? (
            <>
              <ButtonLink href="/dashboard" variant="ghost" size="sm">
                <LayoutDashboard className="h-4 w-4" /> {t("dashboard")}
              </ButtonLink>
              {user.role === "ADMIN" && (
                <ButtonLink href="/admin" variant="ghost" size="sm">
                  <ShieldCheck className="h-4 w-4" /> Admin
                </ButtonLink>
              )}
              <button
                onClick={() => signOut()}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-600 hover:bg-ink-100"
              >
                <LogOut className="h-4 w-4" /> {t("signOut")}
              </button>
            </>
          ) : (
            <ButtonLink href="/login" variant="ghost" size="sm">
              {t("login")}
            </ButtonLink>
          )}
          <ButtonLink href={planHref} variant="primary" size="sm">
            {t("todaysTopic")}
          </ButtonLink>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-ink-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-ink-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-ink-200 bg-white lg:absolute lg:right-6 lg:top-[4.25rem] lg:w-72 lg:rounded-2xl lg:border lg:shadow-lg">
          <Container className="flex flex-col gap-1 py-4 lg:px-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive(item.href) ? "bg-brand-50 text-brand-700" : "text-ink-700 hover:bg-ink-100",
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-ink-100 pt-3 lg:hidden">
              {user ? (
                <>
                  <ButtonLink href="/dashboard" variant="outline" size="md" onClick={() => setOpen(false)}>
                    {t("dashboard")}
                  </ButtonLink>
                  {user.role === "ADMIN" && (
                    <ButtonLink href="/admin" variant="outline" size="md" onClick={() => setOpen(false)}>
                      Admin
                    </ButtonLink>
                  )}
                  <button
                    onClick={() => {
                      signOut();
                      setOpen(false);
                    }}
                    className="rounded-xl border border-ink-300 px-5 py-2.5 text-sm font-medium text-ink-700"
                  >
                    {t("signOut")}
                  </button>
                </>
              ) : (
                <ButtonLink href="/login" variant="outline" size="md" onClick={() => setOpen(false)}>
                  {t("login")}
                </ButtonLink>
              )}
              <ButtonLink href={planHref} variant="primary" size="md" onClick={() => setOpen(false)}>
                {t("todaysTopic")}
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
