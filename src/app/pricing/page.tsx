import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { PRICING, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for live online Maths tuition. Group fees from £110 every 4 weeks (max 8 students). One-to-one rates also available.",
  alternates: { canonical: `${SITE.url}/pricing/` },
};

const FAQ_ITEMS = [
  {
    question: "Are there any joining fees?",
    answer: "No.",
  },
  {
    question: "How are fees paid?",
    answer: "Fees are paid in four-week blocks in advance.",
  },
  {
    question: "What happens if my child misses a lesson?",
    answer:
      "Group fees reserve your child's place in the class, so missed lessons are not normally refundable. Where appropriate, lesson materials and homework will still be provided.",
  },
  {
    question: "Can my child try a lesson first?",
    answer:
      "Where a suitable group has availability, we can arrange a trial lesson before you commit to a four-week block.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const ONE_TO_ONE = [
  { stage: "KS2", rate: "£35/hour" },
  { stage: "KS3", rate: "£40/hour" },
  { stage: "GCSE", rate: "£50/hour" },
  { stage: "A-Level", rate: "£60/hour" },
] as const;

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        title="Simple, transparent pricing"
        subtitle="Live online Maths tuition with small-group and one-to-one options. Group fees are paid every four weeks and include four 1-hour lessons."
        image="/images/pricing-hero.jpg"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Group tuition"
            title="Online group Maths classes"
            subtitle="Fees are charged in four-week blocks and cover four scheduled 1-hour lessons."
          />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {PRICING.map((tier) => (
              <div
                key={tier.name}
                className={`card-lift relative flex flex-col rounded-2xl p-7 ${
                  tier.highlight
                    ? "bg-navy text-white shadow-xl shadow-navy/30 ring-2 ring-gold"
                    : "border border-navy/10 bg-soft"
                }`}
              >
                {tier.badge ? (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      tier.highlight
                        ? "bg-gold text-navy"
                        : "bg-navy text-white"
                    }`}
                  >
                    {tier.badge}
                  </span>
                ) : null}
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    tier.highlight ? "text-gold" : "text-gold"
                  }`}
                >
                  {tier.years}
                </p>
                <h3
                  className={`mt-1 text-xl font-bold ${
                    tier.highlight ? "text-white" : "text-navy"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span
                    className={`font-display text-5xl font-bold ${
                      tier.highlight ? "text-gold" : "text-navy"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.highlight ? "text-white/65" : "text-muted"
                    }`}
                  >
                    {tier.unit}
                  </span>
                </p>
                <p
                  className={`mt-1 text-sm ${
                    tier.highlight ? "text-white/70" : "text-muted"
                  }`}
                >
                  {tier.perLesson}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <span className="text-gold">✓</span>
                      <span
                        className={
                          tier.highlight ? "text-white/85" : "text-muted"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact/"
                  className={`mt-8 block rounded-md px-3 py-3 text-center text-xs font-semibold uppercase leading-snug tracking-wide transition sm:text-sm sm:tracking-wider ${
                    tier.highlight ? "btn-gold" : "btn-primary"
                  }`}
                >
                  Book a Free Consultation
                </Link>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-semibold text-navy">
            No registration or joining fee.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-muted leading-relaxed">
            Group places are subject to suitable year-group and timetable
            availability. We&apos;ll confirm the best class during your free
            consultation.
          </p>
        </div>
      </section>

      <section className="bg-soft py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why a maximum of 8?"
            subtitle="Small groups allow students to learn collaboratively while still giving the tutor time to question each student, check understanding and provide individual feedback."
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="One-to-one"
            title="Prefer individual tuition?"
            subtitle="One-to-one online Maths tuition is also available for students who need fully personalised support."
          />
          <div className="overflow-hidden rounded-2xl border border-navy/10 bg-soft">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {ONE_TO_ONE.map((row) => (
                <div
                  key={row.stage}
                  className="border-b border-navy/8 p-5 text-center sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {row.stage}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-navy">{row.rate}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact/"
              className="btn-gold inline-block rounded-md px-7 py-3.5 text-sm uppercase tracking-wider"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Pricing questions" />
          <dl className="space-y-6">
            <div className="rounded-2xl border border-navy/8 bg-white p-6">
              <dt className="font-bold text-navy">Are there any joining fees?</dt>
              <dd className="mt-2 text-sm text-muted leading-relaxed">No.</dd>
            </div>
            <div className="rounded-2xl border border-navy/8 bg-white p-6">
              <dt className="font-bold text-navy">How are fees paid?</dt>
              <dd className="mt-2 text-sm text-muted leading-relaxed">
                Fees are paid in four-week blocks in advance.
              </dd>
            </div>
            <div className="rounded-2xl border border-navy/8 bg-white p-6">
              <dt className="font-bold text-navy">
                What happens if my child misses a lesson?
              </dt>
              <dd className="mt-2 text-sm text-muted leading-relaxed">
                Group fees reserve your child&apos;s place in the class, so
                missed lessons are not normally refundable. Where appropriate,
                lesson materials and homework will still be provided.
              </dd>
            </div>
            <div className="rounded-2xl border border-navy/8 bg-white p-6">
              <dt className="font-bold text-navy">
                Can my child try a lesson first?
              </dt>
              <dd className="mt-2 text-sm text-muted leading-relaxed">
                Where a suitable group has availability, we can arrange a trial
                lesson before you commit to a four-week block.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
