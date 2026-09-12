import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with Bright Path Tuition. Get in touch by phone, email or WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Tell us about your child — we will reply within one working day."
        image="/images/subjects-hero.jpg"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <SectionHeading
                centre={false}
                eyebrow="Get in touch"
                title="Book a free consultation"
                subtitle="Tell us your child’s year group, current level and goals, and we’ll recommend the most suitable tuition option. Live online Maths tuition is available in small groups of up to 8 students or one-to-one."
              />
              <ul className="space-y-4 text-sm text-muted">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold">
                    Phone
                  </span>
                  <a
                    href={SITE.phoneHref}
                    className="font-medium text-navy hover:text-gold"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold">
                    Email
                  </span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-medium text-navy hover:text-gold"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold">
                    WhatsApp
                  </span>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-navy hover:text-gold"
                  >
                    Message us
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold">
                    Location
                  </span>
                  <span className="font-medium text-navy">{SITE.address}</span>
                  <br />
                  <span className="text-xs text-muted">{SITE.addressNote}</span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold">
                    Hours
                  </span>
                  {SITE.hours}
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
