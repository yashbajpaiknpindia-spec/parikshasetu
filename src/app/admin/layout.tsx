import Link from "next/link";
import type { ReactNode } from "react";
import { LayoutDashboard, Users, Activity, ArrowLeft, FileCheck2, IndianRupee } from "lucide-react";
import { Container } from "@/components/ui";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/attempts", label: "Attempts", icon: FileCheck2 },
  { href: "/admin/payments", label: "Payments", icon: IndianRupee },
  { href: "/admin/activity", label: "Activity", icon: Activity },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ink-50">
      <div className="border-b border-ink-200 bg-white">
        <Container className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-ink-900">Merit Marg · Admin</span>
            <nav className="flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-ink-600 hover:bg-ink-100 hover:text-ink-900"
                >
                  <l.icon className="h-4 w-4" />
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <Link href="/dashboard" className="flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-800">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
        </Container>
      </div>
      <Container className="py-8">{children}</Container>
    </div>
  );
}
