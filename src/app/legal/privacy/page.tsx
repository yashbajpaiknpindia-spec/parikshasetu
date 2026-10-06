import { pageSeo } from "@/lib/seo";
import type { Metadata } from "next";
import { Badge, Callout, Container } from "@/components/ui";
import { siteConfig, whatsappLink } from "@/lib/config";

export const metadata = pageSeo({
  title: "Privacy Policy",
  description: "Read the Merit Marg privacy policy covering account information, mock-test activity, payments, communications, cookies and user rights.",
  path: "/legal/privacy",
  keywords: ["Merit Marg privacy policy"],
  noIndex: false,
});

const lastUpdated = "30 September 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="hero-gradient border-b border-ink-200">
        <Container className="py-16">
          <Badge>Legal</Badge>
          <h1 className="mt-4 text-4xl font-bold text-ink-900 sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-600">
            What we collect, why, and what you can ask us to do with it.
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
            <h2>1. What we collect</h2>
            <ul>
              <li>
                <strong>Account details</strong>, if you create an account: your name, email address
                and the exam you are preparing for.
              </li>
              <li>
                <strong>Mock-test results</strong>, your answers, scores, attempts and weak topics, so
                we can show your analysis and progress.
              </li>
              <li>
                <strong>Pass and payment references</strong>, which pass you bought, when, and the
                Razorpay order and payment IDs. We <strong>never</strong> receive or store your card,
                UPI or bank details.
              </li>
              <li>
                <strong>WhatsApp messages</strong>, if you message our helpline, we see your WhatsApp
                number, name and what you send us.
              </li>
              <li>
                <strong>Preferences</strong>, your language (English or Hindi) and chosen exam.
              </li>
              <li>
                <strong>Free Mock Challenge registration</strong>, if you enter: your name, mobile/WhatsApp number, chosen exam, optional district, selected rounds, consent choices and registration source. We may also receive basic request metadata such as IP address, approximate region/city and browser type for abuse prevention and operations.
              </li>
            </ul>
            <p>
              We do not use advertising trackers, and we do not ask for any government ID.
            </p>

            <h2>2. Why we use it</h2>
            <ul>
              <li>to run the tests, show your results and personalise your study plan;</li>
              <li>to activate, restore and verify your pass;</li>
              <li>to answer your questions and resolve payment or refund issues;</li>
              <li>to keep the Service secure and meet legal and accounting obligations.</li>
            </ul>
            <p>
              <strong>We do not sell your personal data.</strong> We will not add you to marketing
              broadcasts unless you ask to be told about something, such as when mentorship opens.
            </p>

            <h2>3. Where it is stored</h2>
            <p>
              Account details, paid access, payment references, bookings, challenge registrations and
              authenticated test attempts are stored in our PostgreSQL application database. Some
              convenience state, such as language preference, recent UI progress and anonymous browser
              identifiers, may also be stored locally in your browser. Clearing browser data can remove
              only that local copy; it does not delete server-side account or payment records.
            </p>

            <h2>4. Who we share it with</h2>
            <p>Only the service providers we need, and only what each one needs:</p>
            <ul>
              <li><strong>Razorpay</strong>, payment processing.</li>
              <li><strong>PostgreSQL hosting on Render</strong>, application accounts, access records, challenge registrations and related data.</li>
              <li><strong>Vercel</strong>, website hosting (standard server logs such as IP address and browser type).</li>
              <li><strong>WhatsApp (Meta)</strong>, when you choose to message our helpline.</li>
            </ul>
            <p>
              Challenge registrants who give consent may be contacted about the challenge and its
              results by WhatsApp, SMS or phone. Each provider handles data under its own privacy terms.
              We may also disclose data where the law requires it.
            </p>

            <h2>5. How long we keep it</h2>
            <p>
              We keep account data while your account is active. We keep payment references for as
              long as tax and accounting law requires. We delete or anonymise data we no longer need.
            </p>

            <h2>6. Your rights</h2>
            <p>
              Under applicable Indian law, including the Digital Personal Data Protection Act, 2023,
              you can ask to see the personal data we hold about you, correct it, or delete it, and
              you can withdraw consent you have given. We may need to confirm it is you before acting.
              To make a request or raise a grievance, contact us using the details below.
            </p>

            <h2>7. Children</h2>
            <p>
              The Service is meant for adult exam aspirants. We do not knowingly collect data from
              children. If you think a child has given us data, contact us and we will remove it.
            </p>

            <h2>8. Security</h2>
            <p>
              We take reasonable steps to protect your data, and payments run on Razorpay&rsquo;s
              secure checkout. No system is completely secure, so we cannot guarantee absolute
              security.
            </p>

            <h2>9. Changes</h2>
            <p>
              We may update this policy. When we do, we change the &ldquo;last updated&rdquo; date
              above.
            </p>

            <h2>10. Contact</h2>
            <p>
              For any privacy question or request, WhatsApp{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{siteConfig.whatsappDisplay}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
