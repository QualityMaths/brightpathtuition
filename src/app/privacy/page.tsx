import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we handle personal information. [PLACEHOLDER — have a solicitor review before go-live.]"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-16">
        <div className="prose prose-navy mx-auto max-w-3xl px-4 text-muted sm:px-6 space-y-6">
          <p className="text-sm text-gold font-medium">
            Last updated: 11 September 2026 · Placeholder policy for launch.
          </p>
          <h2 className="text-xl font-bold text-navy">Who we are</h2>
          <p>
            {SITE.name} (&quot;we&quot;, &quot;us&quot;) provides tutoring services
            via {SITE.domain}. Contact:{" "}
            <a className="text-navy underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
          <h2 className="text-xl font-bold text-navy">What we collect</h2>
          <p>
            When you enquire or book, we may collect your name, email, phone
            number, your child&apos;s year group and subject needs, and any
            information you voluntarily provide in messages.
          </p>
          <h2 className="text-xl font-bold text-navy">How we use it</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To respond to enquiries and arrange tuition</li>
            <li>To deliver lessons and share progress updates</li>
            <li>To improve our services</li>
            <li>To meet legal and safeguarding obligations</li>
          </ul>
          <h2 className="text-xl font-bold text-navy">Lawful basis</h2>
          <p>
            We process data under legitimate interests, contract performance and,
            where required, consent (UK GDPR / Data Protection Act 2018).
          </p>
          <h2 className="text-xl font-bold text-navy">Sharing</h2>
          <p>
            We do not sell personal data. We may use processors such as email,
            hosting (e.g. Cloudflare) and form providers under appropriate
            agreements.
          </p>
          <h2 className="text-xl font-bold text-navy">Retention &amp; rights</h2>
          <p>
            We keep enquiry data only as long as needed. You may request access,
            correction, deletion or restriction by emailing {SITE.email}. You may
            complain to the ICO (ico.org.uk).
          </p>
          <h2 className="text-xl font-bold text-navy">Cookies</h2>
          <p>
            This static marketing site uses minimal cookies required for hosting /
            analytics if you later enable them. Update this section when analytics
            are added.
          </p>
        </div>
      </section>
    </>
  );
}
