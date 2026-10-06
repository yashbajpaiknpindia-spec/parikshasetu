import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";
import { PricingSettingsForm } from "@/components/admin/PricingSettingsForm";
import { ArrowLeft } from "lucide-react";
import { DatabaseBackupForm } from "@/components/admin/DatabaseBackupForm";

export const metadata = pageSeo({
  title: "Admin Settings & Pricing",
  description: "Private Merit Marg settings for operational configuration and editable Prep Pass and mentorship pricing.",
  path: "/admin/settings",
  keywords: ["Merit Marg admin settings"],
  noIndex: true,
});

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  if (!isDbConfigured) redirect("/admin");
  if (!(await requireAdmin())) redirect("/login");
  return <div className="space-y-6"><Link href="/admin" className="flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-800"><ArrowLeft className="h-4 w-4" /> Overview</Link><div><h1 className="text-2xl font-bold text-ink-900">Settings</h1><p className="mt-1 text-sm text-ink-500">Control pricing and other admin-level configuration.</p></div><PricingSettingsForm /><DatabaseBackupForm /><Card className="p-5"><h2 className="font-semibold text-ink-900">Existing purchases</h2><p className="mt-1 text-sm text-ink-600">Changing a plan price only affects future purchases. Users already granted Prep or Mentor access keep that access.</p></Card></div>;
}
