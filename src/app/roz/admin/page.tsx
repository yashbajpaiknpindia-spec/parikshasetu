import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth-server";

export const dynamic = "force-dynamic";
export const metadata = { title: "Roz ka 10 stats", robots: { index: false, follow: false } };

export default async function RozAdminCompatibility() {
  if (!(await requireAdmin())) redirect("/login");
  redirect("/admin/roz");
}
