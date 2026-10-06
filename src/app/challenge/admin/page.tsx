import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth-server";

export const dynamic = "force-dynamic";
export const metadata = { title: "Challenge results", robots: { index: false, follow: false } };

export default async function ChallengeAdminRedirect() {
  if (!(await requireAdmin())) redirect("/login");
  redirect("/admin/challenge");
}
