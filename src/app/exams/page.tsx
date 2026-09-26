import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { Container, Badge, Callout } from "@/components/ui";
import { ExamDirectory } from "@/components/exams/ExamDirectory";
import { exams, regions } from "@/lib/exams/registry";
import { getLang } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "All Teaching Exams",
  description:
    "Find your government teaching exam: KVS, UP UPESSC, BPSC TRE 4.0, Rajasthan REET, Maharashtra, Telangana and more. Eligibility, pattern, syllabus and mocks for each.",
};

export default async function ExamsPage() {
  const hi = (await getLang()) === "hi";
  return (
    <>
      <section className="hero-gradient">
        <Container className="py-16">
          <Badge tone="brand">
            <Compass className="h-3.5 w-3.5" /> {hi ? "अपनी परीक्षा चुनें" : "Find your exam"}
          </Badge>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-ink-900 sm:text-5xl">
            {hi ? "हर सरकारी शिक्षक भर्ती परीक्षा के लिए एक मंच" : "One platform for every government teaching exam"}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-600">
            {hi
              ? "पता नहीं कौन-सी परीक्षा आपकी है? राज्य और पद के अनुसार छाँटें। हर गाइड में पात्रता, पैटर्न, पाठ्यक्रम और मॉक हैं: आधिकारिक अधिसूचना से जुड़े। UP UPESSC अभी हमारी प्राथमिकता है (लिखित परीक्षा दिसंबर में)।"
              : "Not sure which exam is yours? Filter by state and post. Each guide has the eligibility, pattern, syllabus and mocks, labelled and linked to the official notification. UP UPESSC is our current priority (written exam in December)."}
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <ExamDirectory exams={exams} regions={regions()} />
          <Callout tone="slate" className="mt-10 max-w-3xl">
            Building for your state and don&apos;t see full detail yet? Every exam links to its
            official portal, and we&apos;re rolling out deep guides + mocks exam by exam, UP and
            KVS first. Tell us your exam and we&apos;ll prioritise it.
          </Callout>
        </Container>
      </section>
    </>
  );
}
