import Link from "next/link";
import { Container } from "@/components/ui";
import { BrandLockup } from "@/components/site/Logo";
import { WhatsAppLink } from "@/components/site/WhatsAppHelp";

const groups = [
  {
    title: "Exams",
    links: [
      { href: "/exams", label: "All teaching exams" },
      { href: "/exams/up", label: "SUPER TET (UP Assistant Teacher)" },
      { href: "/exam", label: "KVS PRT/TGT/PGT" },
      { href: "/exams/bihar-tre", label: "Bihar BPSC TRE" },
      { href: "/notifications", label: "Job notifications" },
      { href: "/results", label: "Latest exam results" },
      { href: "/results/admit-cards", label: "Admit cards" },
    ],
  },
  {
    title: "Prepare",
    links: [
      { href: "/mock-tests", label: "Mock tests" },
      { href: "/pricing", label: "Pricing" },
      { href: "/dashboard", label: "Dashboard" },
      { href: "/mentors", label: "Mentorship (coming soon)" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/refund", label: "Refund policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-200 bg-ink-50">
      {/* extra bottom room on phones so the floating WhatsApp button never covers text */}
      <Container className="pb-24 pt-14 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <BrandLockup />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              Built by people who cleared these exams. 2 free mocks, a day-by-day plan to exam
              day, and teacher job notices from across India.
            </p>
            <p className="mt-3 font-hand text-base text-teal-700">Thoda roz, bina naaga. ✍️</p>
            <div className="mt-4 rounded-xl bg-white p-3 ring-1 ring-ink-200">
              <p className="text-xs font-semibold text-ink-900">Helpline · मदद के लिए</p>
              <WhatsAppLink className="mt-1 text-sm" text="Hi Merit Marg, I need help with:" />
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold text-ink-900">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ink-600 transition-colors hover:text-brand-700">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-200 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Merit Marg. Not affiliated with KVS, NVS, CBSE, UPESSC, any State Government or the Government of India.</p>
          <p>
            Always verify dates, vacancies and pattern on the official recruitment notification before you act.
          </p>
        </div>
      </Container>
    </footer>
  );
}
