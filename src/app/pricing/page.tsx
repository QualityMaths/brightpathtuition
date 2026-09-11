import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderBanner from "@/components/PlaceholderBanner";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent example pricing for 1:1 and small-group tuition online and in person across London.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing"
        subtitle="Clear packages so you can plan with confidence. All figures below are examples."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <PlaceholderBanner>
              EXAMPLE PRICES — confirm final rates with the owner before publishing
            </PlaceholderBanner>
          </div>
          <SectionHeading
            eyebrow="Packages"
            title="Simple, flexible tuition rates"
            subtitle="Packages can be adjusted for siblings, intensive revision blocks and exam-season boosts."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {PRICING.map((tier) => (
              <div
                key={tier.name}
                className={`card-lift relative flex flex-col rounded-2xl p-8 ${
                  tier.highlight
                    ? "bg-navy text-white shadow-xl shadow-navy/30 ring-2 ring-gold"
                    : "border border-navy/10 bg-soft"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
                    Most popular
                  </span>
                )}
                <h3
                  className={`text-xl font-bold ${
                    tier.highlight ? "text-white" : "text-navy"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span
                    className={`font-display text-5xl font-bold ${
                      tier.highlight ? "text-gold" : "text-navy"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.highlight ? "text-white/60" : "text-muted"
                    }`}
                  >
                    {tier.unit}
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <span className={tier.highlight ? "text-gold" : "text-gold"}>
                        ✓
                      </span>
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
                  className={`mt-8 block rounded-md py-3 text-center text-sm font-semibold uppercase tracking-wider transition ${
                    tier.highlight
                      ? "btn-gold"
                      : "btn-primary"
                  }`}
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            Block bookings and sibling discounts available on request.{" "}
            <span className="text-gold">[PLACEHOLDER terms]</span>
          </p>
        </div>
      </section>
    </>
  );
}
