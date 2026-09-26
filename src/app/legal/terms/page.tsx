import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Callout, Container } from "@/components/ui";
import { siteConfig, whatsappLink } from "@/lib/config";
import { PREP_PRICE, MENTOR_PRICE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using Merit Marg, an independent preparation platform for government teacher exams (SUPER TET, BPSC TRE 4.0 and more), not affiliated with any recruiting body or government. Courts at Kanpur, Uttar Pradesh have exclusive jurisdiction.",
};

const lastUpdated = "25 September 2026";

function WhatsApp() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
      {siteConfig.whatsappDisplay}
    </a>
  );
}

export default function TermsPage() {
  return (
    <>
      <section className="hero-gradient border-b border-ink-200">
        <Container className="py-16">
          <Badge>Legal</Badge>
          <h1 className="mt-4 text-4xl font-bold text-ink-900 sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-600">
            The agreement between you and {siteConfig.name} for using the website and its tests.
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
            <h2>1. Agreement</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) are a binding agreement between you and{" "}
              {siteConfig.name} (&ldquo;{siteConfig.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
              By accessing or using the website, its tests, study plans or any related service (the
              &ldquo;Service&rdquo;), or by buying a pass, you confirm that you have read, understood
              and accepted these Terms, our <Link href="/legal/privacy">Privacy Policy</Link> and our{" "}
              <Link href="/legal/refund">Refund &amp; Cancellation Policy</Link>. If you do not agree,
              do not use the Service.
            </p>
            <p>
              You must be at least 18 years old, or use the Service with the consent and supervision
              of a parent or guardian who accepts these Terms on your behalf.
            </p>

            <h2>2. What the Service is</h2>
            <ul>
              <li>
                <strong>Exam information</strong>, guides to government teacher recruitment exams
                (such as SUPER TET, the UP Assistant Teacher exam by UPESSC, and BPSC TRE 4.0), job notifications,
                results and admit-card updates, with links to official sources.
              </li>
              <li>
                <strong>Practice</strong>, mock tests, section-wise mocks and a day-by-day study plan,
                with scores and analysis.
              </li>
              <li>
                <strong>Mentorship</strong>, a plan that is announced but{" "}
                <strong>not yet available</strong> (see section 6).
              </li>
            </ul>

            <h2>3. Independent platform, no affiliation</h2>
            <p>
              {siteConfig.name} is an independent private platform.{" "}
              <strong>We are not affiliated with, endorsed by, authorised by or acting for</strong>{" "}
              UPESSC, BPSC, KVS, NVS, CBSE, any examination or recruiting body, any State Government
              or the Government of India. Names of exams and bodies are used only to describe what
              our preparation material covers.
            </p>

            <h2>4. No guarantee of selection; information for guidance only</h2>
            <p>
              The Service is a <strong>preparation aid only</strong>. We do not guarantee, promise or
              imply any selection, rank, qualifying score, result, admission or employment. Your
              result depends solely on your own performance, the competition and the decisions of the
              recruiting body.
            </p>
            <p>
              Our questions are <strong>original practice questions modelled on previous papers</strong>;
              they are not official question papers and are not predictions of any future paper.
              Exam information, eligibility, dates, patterns, syllabi, vacancies, cut-offs and
              results, is compiled in good faith from public sources and may be incomplete, change
              without notice or contain errors. <strong>You must verify every detail against the
              official notification</strong> before applying, paying any fee or making any decision.
              We are not responsible for any missed deadline, rejected application or other loss
              arising from reliance on information on the Service.
            </p>

            <h2>5. Plans, passes and access</h2>
            <ul>
              <li>
                <strong>Free:</strong> 2 complete mock tests and the exam information pages.
              </li>
              <li>
                <strong>Prep Pass (₹{PREP_PRICE}, one-time):</strong> every other test, including the
                full mock tests, section-wise mocks and complete study plans made available under the
                pass, with the detailed analysis. There is no subscription and no automatic renewal.
              </li>
              <li>
                <strong>Prep + Mentorship (₹{MENTOR_PRICE}):</strong> coming soon; not on sale.
              </li>
            </ul>
            <h3>Meaning of &ldquo;lifetime access&rdquo;</h3>
            <p>
              &ldquo;Lifetime&rdquo; means for as long as {siteConfig.name} operates the Service and
              offers that content. It does not mean the lifetime of the purchaser.
            </p>
            <h3>Content may change</h3>
            <p>
              We may add, update, reorganise, replace or withdraw tests, questions, exams covered,
              features and plans at any time, for example to reflect a new exam pattern. A pass gives
              access to the content we make available under it from time to time, not to any fixed
              set of tests.
            </p>
            <h3>Personal licence</h3>
            <p>
              A pass is a limited, personal, non-exclusive, non-transferable and revocable licence for
              <strong> one individual</strong>. It may not be shared, sold, transferred or used by
              more than one person.
            </p>
            <h3>How a pass is activated and recorded</h3>
            <p>
              A pass is activated only by an online payment through Razorpay, our payment gateway. We
              do not accept payment by any other method, and nobody from {siteConfig.name} will ask you
              to pay by bank transfer, UPI ID or WhatsApp. The pass is recorded on the device and
              browser used to buy it. On a new device, use &ldquo;Restore your pass&rdquo; with your
              Razorpay payment ID; we check the payment with Razorpay before restoring access.
            </p>
            <h3>Free mocks</h3>
            <p>
              The free mock tests are a promotional offer. We may change their number or content, or
              withdraw them, at any time without notice.
            </p>
            <h3>Prices</h3>
            <p>
              Prices are in Indian Rupees, include any applicable taxes unless stated otherwise, and
              are launch prices that we may change at any time. A price change does not affect a pass
              already bought. The amount payable is shown at checkout before you pay.
            </p>

            <h2>6. Mentorship (coming soon)</h2>
            <p>
              The ₹{MENTOR_PRICE} mentorship plan is <strong>not available and cannot be bought</strong>.
              Any description of it shows what we intend to offer; it is not an offer or a promise, and
              it may change or not launch. If it launches, its terms will be published before we accept
              any payment for it. Mentors will share their personal experience and opinions for
              guidance only, and we will not be responsible for any decision you make based on them.
            </p>

            <h2>7. Payments</h2>
            <p>
              Payments are processed by Razorpay, a third-party payment gateway, under its own terms.
              We do not see or store your full card, UPI or bank details. We are not responsible for
              failures, delays or errors caused by the payment gateway, your bank or your network.
              Refunds are governed only by our <Link href="/legal/refund">Refund &amp; Cancellation Policy</Link>.
            </p>

            <h2>8. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                share, copy, download, screenshot for distribution, resell, republish or broadcast any
                paid test, question, explanation or study plan, including on WhatsApp, Telegram,
                YouTube or any other channel;
              </li>
              <li>scrape, crawl or use bots or automated tools to access or extract content;</li>
              <li>bypass, disable or interfere with the paywall, security or any access control;</li>
              <li>reverse-engineer, overload or disrupt the Service;</li>
              <li>create false payment records, make fraudulent chargebacks or misuse a refund;</li>
              <li>harass, threaten, abuse or impersonate our team, mentors or other users;</li>
              <li>use the Service for any unlawful purpose or in breach of these Terms.</li>
            </ul>

            <h2>9. Suspension and termination</h2>
            <p>
              We may, at our sole discretion and without prior notice, suspend, restrict or terminate
              your access (including any pass) if we reasonably believe you have breached these Terms,
              misused the Service or acted fraudulently, or where the law requires it. Access
              terminated for these reasons is <strong>not refundable</strong>. We may also take legal
              action to recover losses and protect our content.
            </p>

            <h2>10. Intellectual property</h2>
            <p>
              All content on the Service, questions, explanations, solutions, study plans, analysis,
              software, text, graphics, the {siteConfig.name} name, logo and design, is owned by or
              licensed to {siteConfig.name} and protected by copyright, trademark and other laws.
              Except for the personal licence in section 5, no right is granted to you. Unauthorised
              use may result in civil and criminal liability. Official notifications we link to belong
              to their issuing authorities.
            </p>

            <h2>11. Your feedback</h2>
            <p>
              If you send us suggestions, corrections or feedback, you allow us to use them freely,
              without any obligation or payment to you.
            </p>

            <h2>12. Third-party services and links</h2>
            <p>
              The Service links to official websites and relies on third parties (such as Razorpay,
              WhatsApp, Supabase and Vercel). We do not control them and are not responsible for their
              content, availability, policies or acts.
            </p>

            <h2>13. Availability</h2>
            <p>
              We try to keep the Service running, but we do not guarantee that it will be
              uninterrupted, timely, secure or error-free. We may carry out maintenance, and may modify,
              suspend or discontinue any part of the Service at any time. We are not liable for any
              downtime, lost test progress or data loss, including data stored in your browser.
            </p>

            <h2>14. Disclaimer of warranties</h2>
            <p>
              To the fullest extent permitted by law, the Service and all content are provided on an
              &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without warranties of any kind,
              express or implied, including warranties of accuracy, completeness, fitness for a
              particular purpose or non-infringement.
            </p>

            <h2>15. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {siteConfig.name}, its founders, team members,
              mentors and partners will not be liable for any indirect, incidental, special,
              consequential or punitive loss, or for any loss of opportunity, selection, employment,
              income, data or goodwill, arising from or related to the Service, however caused.
            </p>
            <p>
              Our <strong>total aggregate liability</strong> for all claims relating to the Service is
              limited to the amount you actually paid us in the 3 months before the event giving rise
              to the claim. Nothing in these Terms excludes any liability that cannot be excluded
              under applicable law.
            </p>

            <h2>16. Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless {siteConfig.name}, its founders and team from
              any claim, loss, liability, penalty or expense (including reasonable legal fees) arising
              from your breach of these Terms, your misuse of the Service or your violation of any law
              or third-party right.
            </p>

            <h2>17. Force majeure</h2>
            <p>
              We are not liable for any delay or failure caused by events beyond our reasonable
              control, including natural disasters, epidemics, power or internet failures, failures of
              hosting or payment providers, cyber-attacks, government action, or changes to or
              cancellation of any exam.
            </p>

            <h2>18. Governing law and exclusive jurisdiction</h2>
            <p>
              These Terms and any dispute arising out of or in connection with them or the Service are
              governed by the laws of India.{" "}
              <strong>
                The courts at Kanpur, Uttar Pradesh shall have exclusive jurisdiction
              </strong>
              , and you agree to submit to the jurisdiction of those courts alone.
            </p>
            <p>
              Before starting any legal proceeding, you agree to first raise the issue with us on
              WhatsApp <WhatsApp /> and give us 30 days to try to resolve it in good faith.
            </p>

            <h2>19. Grievances</h2>
            <p>
              For any complaint about the Service or its content, WhatsApp <WhatsApp /> with your
              details. We will acknowledge it within 48 hours and aim to resolve it within 15 days.
            </p>

            <h2>20. General</h2>
            <ul>
              <li>
                <strong>Changes:</strong> we may update these Terms at any time by posting the new
                version here with a new &ldquo;last updated&rdquo; date. Continued use after that means
                you accept them.
              </li>
              <li>
                <strong>Entire agreement:</strong> these Terms, with the Privacy Policy and the Refund
                &amp; Cancellation Policy, are the entire agreement between you and us about the
                Service.
              </li>
              <li>
                <strong>Severability:</strong> if any part of these Terms is found unenforceable, the
                rest remains in full force.
              </li>
              <li>
                <strong>No waiver:</strong> if we do not enforce a right, that is not a waiver of it.
              </li>
              <li>
                <strong>Assignment:</strong> you may not transfer your rights under these Terms. We may
                transfer ours, including to a successor business.
              </li>
              <li>
                <strong>Language:</strong> if a translation differs from this English version, the
                English version prevails.
              </li>
            </ul>

            <h2>21. Contact</h2>
            <p>
              Questions about these Terms? WhatsApp <WhatsApp />.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
