import { pageSeo } from "@/lib/seo";
import DashboardClient from "./DashboardClient";

export const metadata = pageSeo({
  title: "My Dashboard",
  description: "Private Merit Marg dashboard for exam preparation progress, mock attempts, plans and account activity.",
  path: "/dashboard",
  keywords: ["Merit Marg dashboard"],
  noIndex: true,
});

export default function DashboardPage() {
  return <DashboardClient />;
}
