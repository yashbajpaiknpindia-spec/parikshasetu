import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { composeTest, mockTests, isMockLive, type MockTest } from "@/lib/mock-engine";
import { allPlanTests } from "@/lib/exams/tracks";
import { MockPlayer } from "@/components/mock/MockPlayer";
import { Container, Card, ButtonLink } from "@/components/ui";
import { isPaidTest } from "@/lib/plan-access";
import { getCurrentUser } from "@/lib/auth-server";
import { prisma, isDbConfigured } from "@/lib/prisma";

const allTests: MockTest[] = [...mockTests, ...allPlanTests];
function findTest(id: string) {
  return allTests.find((t) => t.id === id);
}

export async function generateMetadata({
  params,
}: PageProps<"/mock-tests/[id]">): Promise<Metadata> {
  const { id } = await params;
  const test = findTest(id);
  return {
    title: test ? test.title : "Mock Test",
    description: test?.description,
  };
}

export default async function MockTestPage({
  params,
}: PageProps<"/mock-tests/[id]">) {
  const { id } = await params;
  const test = findTest(id);
  if (!test) notFound();

  // Only UPESSC mocks are live for now; others show a "coming soon" note.
  if (!isMockLive(test)) {
    return (
      <Container className="py-20">
        <Card className="mx-auto max-w-lg text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-saffron-50 text-saffron-600">
            <Clock className="h-6 w-6" />
          </span>
          <h1 className="mt-4 text-2xl font-bold text-ink-900">{test.examName} mock tests: coming soon</h1>
          <p className="mt-2 text-ink-600">
            Mock tests are live for SUPER TET and BPSC TRE 4.0 right now. The {test.examName} guide,
            pattern and notifications are still available.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/mock-tests">UPESSC mock tests</ButtonLink>
            <ButtonLink href={test.examSlug === "kvs" ? "/exam" : `/exams/${test.examSlug}`} variant="outline">
              {test.examName} guide
            </ButtonLink>
          </div>
        </Card>
      </Container>
    );
  }

  // Paid questions are withheld on the server unless the signed-in account owns
  // Prep/Mentor access in Postgres. Browser state cannot bypass this.
  if (isPaidTest(test)) {
    if (!isDbConfigured) return <MockPlayer test={test} questions={[]} locked />;
    const user = await getCurrentUser();
    if (!user) return <MockPlayer test={test} questions={[]} locked />;
    const access = await prisma.planAccess.findFirst({ where: { userId: user.id } });
    if (!access) return <MockPlayer test={test} questions={[]} locked />;
  }
  const questions = composeTest(test);
  return <MockPlayer test={test} questions={questions} locked={false} />;
}
