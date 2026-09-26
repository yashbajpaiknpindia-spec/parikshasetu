import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Callout, Container } from "@/components/ui";
import { siteConfig, whatsappLink } from "@/lib/config";
import { PREP_PRICE, MENTOR_PRICE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `How refunds work at Merit Marg: the one-time ₹${PREP_PRICE} Prep Pass, failed or duplicate payments, and the upcoming ₹${MENTOR_PRICE} mentorship plan.`,
};

const lastUpdated = "25 September 2026";

export default function RefundPage() {
  return (
    <>
      <section className="hero-gradient border-b border-ink-200">
        <Container className="py-16">
          <Badge>Legal</Badge>
          <h1 className="mt-4 text-4xl font-bold text-ink-900 sm:text-5xl">Refund &amp; Cancellation Policy</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-600">
            When you can get your money back, and how to ask for it.
          </p>
          <p className="mt-2 text-sm text-ink-500">Last updated: {lastUpdated}</p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="mb-8 max-w-3xl">
            <Callout>
              This is a launch draft and not legal advice. Please have it reviewed by a qualified
              professional before relying on it.
            </Callout>
          </div>

          <div className="prose-ps max-w-3xl">
            <h2>1. Try before you pay</h2>
            <p>
              10 mock tests for every exam are free, with the same kind of questions and marking as
              the paid tests. Please try them before you buy, so you know what the Prep Pass gives you.
            </p>

            <h2>2. Prep Pass (₹{PREP_PRICE}, one-time)</h2>
            <p>
              The Prep Pass is a one-time payment for digital content that opens as soon as you pay.
              There is <strong>no subscription, so there is nothing to cancel</strong> and you will
              never be charged again.
            </p>
            <p>
              Because the content is delivered instantly, the Prep Pass is{" "}
              <strong>generally not refundable</strong> once it is active. We <strong>will</strong>{" "}
              give a full refund if:
            </p>
            <ul>
              <li>you were <strong>charged twice</strong> for the same pass;</li>
              <li>
                money was <strong>deducted but the pass did not activate</strong>, and we cannot
                activate it for you;
              </li>
              <li>
                a <strong>fault on our side</strong> stops you using the paid tests and we cannot fix
                it within 7 days of you reporting it.
              </li>
            </ul>
            <p>
              Please raise these within <strong>7 days of the payment</strong>. Where a pass was
              suspended for misuse under our <Link href="/legal/terms">Terms of Service</Link>, it is
              not refundable.
            </p>

            <h2>3. Payment deducted but pass not active?</h2>
            <p>
              This is usually a delay between the bank and the payment gateway. First try
              &ldquo;Restore your pass&rdquo; on any locked test with your Razorpay payment ID. If that
              doesn&apos;t work, WhatsApp us on{" "}
              <a href={whatsappLink("Hi, my payment was deducted but my Prep Pass is not active. Payment ID: ")} target="_blank" rel="noopener noreferrer">
                {siteConfig.whatsappDisplay}
              </a>{" "}
              with your Razorpay payment ID (it starts with <code>pay_</code>) and we will activate
              your pass or refund you. If a payment fails at the gateway, the bank normally reverses
              it on its own, usually within a few working days.
            </p>

            <h2>4. Prep + Mentorship (₹{MENTOR_PRICE}), coming soon</h2>
            <p>
              The mentorship plan is not yet on sale, so no payment can be taken for it. Before it
              opens, we will add its cancellation, rescheduling and refund rules to this page.
            </p>

            <h2>5. How to request a refund</h2>
            <p>
              WhatsApp{" "}
              <a href={whatsappLink("Hi, I would like to request a refund. Payment ID: ")} target="_blank" rel="noopener noreferrer">
                {siteConfig.whatsappDisplay}
              </a> with:
            </p>
            <ul>
              <li>your Razorpay payment ID (starts with <code>pay_</code>);</li>
              <li>the date of payment and the amount;</li>
              <li>what went wrong.</li>
            </ul>

            <h2>6. Processing time</h2>
            <p>
              Once we approve a refund, we start it within 2 working days. It goes back to{" "}
              <strong>your original payment method</strong>. Razorpay and your bank typically take a
              further 5&ndash;7 working days to credit it.
            </p>

            <h2>7. Chargebacks and disputes</h2>
            <p>
              Please contact us before raising a chargeback with your bank, so we can resolve the
              issue quickly. If a chargeback is raised, the related pass may be suspended while it is
              reviewed. Refund decisions are made under this policy and our{" "}
              <Link href="/legal/terms">Terms of Service</Link>; any dispute is subject to the
              exclusive jurisdiction of the courts at Kanpur, Uttar Pradesh.
            </p>

            <h2>8. Contact</h2>
            <p>
              For anything about payments or refunds, WhatsApp{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{siteConfig.whatsappDisplay}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
