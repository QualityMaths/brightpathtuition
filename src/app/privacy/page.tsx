import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}. How we collect and use information when you enquire about or use our tuition services.`,
  alternates: { canonical: `${SITE.url}/privacy/` },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we handle personal information when you contact us or use our tuition services."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-16">
        <div className="prose prose-navy mx-auto max-w-3xl px-4 text-muted sm:px-6 space-y-6">
          <p className="text-sm text-gold font-medium">
            Last updated: 12 September 2026
          </p>

          <h2 className="text-xl font-bold text-navy">1. Who we are</h2>
          <p>
            Bright Path Tuition (&quot;we&quot;, &quot;us&quot;) provides online
            British-curriculum Maths tuition. Our website is{" "}
            <a className="text-navy underline" href={SITE.url}>
              {SITE.domain}
            </a>
            . You can contact us at{" "}
            <a className="text-navy underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-navy">2. Information we collect</h2>
          <p>Depending on how you get in touch and whether you book tuition, we may collect:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Parent or guardian name, email address, and phone or WhatsApp number</li>
            <li>Student name, year group, Maths level, and exam board where relevant</li>
            <li>Timetable preferences and enquiry messages you send us</li>
            <li>
              Lesson, attendance and progress information where applicable once tuition is arranged
            </li>
          </ul>

          <h2 className="text-xl font-bold text-navy">3. Children&apos;s information</h2>
          <p>
            Our services are for children and young people, and are usually arranged by a parent
            or guardian. We only collect student information that is needed to respond to an
            enquiry or to provide tuition. We do not sell children&apos;s personal information, and
            we do not use it for behavioural advertising.
          </p>

          <h2 className="text-xl font-bold text-navy">4. Why we use information</h2>
          <p>We use personal information to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Respond to enquiries</li>
            <li>Arrange and provide tuition</li>
            <li>Communicate with parents and guardians</li>
            <li>Handle payments and keep records</li>
            <li>Support educational progress</li>
            <li>Meet safeguarding, legal and accounting duties where applicable</li>
          </ul>

          <h2 className="text-xl font-bold text-navy">5. Lawful bases</h2>
          <p>
            Where UK data protection law applies, we rely on an appropriate lawful basis for each
            use of personal information. Depending on the circumstances, that may include
            performance of a contract, steps taken before entering a contract, legitimate
            interests, legal obligations, and consent where it is specifically required. This
            section is subject to final review by the owner and, if needed, legal advice.
          </p>

          <h2 className="text-xl font-bold text-navy">6. Who we share with</h2>
          <p>
            We do not sell personal data. We only share information with the services we actually
            use to run the website and communicate with you:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>GitHub Pages — hosts this website</li>
            <li>
              FormSubmit.co — delivers enquiry form messages to{" "}
              <a className="text-navy underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
            <li>Email — when we reply to you</li>
            <li>WhatsApp (Meta) — when parents or guardians choose to message us that way</li>
          </ul>

          <h2 className="text-xl font-bold text-navy">7. International transfers</h2>
          <p>
            Some of the providers above (including GitHub Pages, FormSubmit and Meta / WhatsApp)
            may process information outside the UK. Where that happens, we rely on the
            arrangements and safeguards those providers describe for their services.
          </p>

          <h2 className="text-xl font-bold text-navy">8. Retention</h2>
          <p>
            We keep personal information only for as long as it is needed for tuition,
            administration, accounting, safeguarding and legal purposes. Exact retention periods
            will be confirmed and this notice updated.
          </p>

          <h2 className="text-xl font-bold text-navy">9. Your rights</h2>
          <p>
            Depending on the law that applies, you may have rights to access, correct, erase,
            restrict or object to certain processing of your personal information, and to data
            portability where applicable. Where we rely on consent, you can withdraw it at any
            time. To exercise these rights, email{" "}
            <a className="text-navy underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            . You can also complain to the Information Commissioner&apos;s Office at{" "}
            <a
              className="text-navy underline"
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              ico.org.uk
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-navy">10. Cookies</h2>
          <p>
            We use cookies or similar technologies only where necessary for the website to
            function. If we introduce analytics or other non-essential cookies in future, we will
            update this policy and obtain consent where required.
          </p>

          <h2 className="text-xl font-bold text-navy">11. Contact</h2>
          <p>
            Questions about this policy or your personal information:{" "}
            <a className="text-navy underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
