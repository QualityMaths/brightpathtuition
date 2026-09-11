import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE.name}.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Placeholder terms for website use and tuition bookings. [Have them reviewed before go-live.]"
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-muted sm:px-6">
          <p className="text-sm text-gold font-medium">
            Last updated: 11 September 2026 · Placeholder terms.
          </p>
          <h2 className="text-xl font-bold text-navy">1. Website</h2>
          <p>
            Content on {SITE.domain} is for general information. Example prices,
            statistics and testimonials are clearly labelled and may change.
          </p>
          <h2 className="text-xl font-bold text-navy">2. Tuition bookings</h2>
          <p>
            Lessons are confirmed in writing (email or message). Fees, cancellation
            windows and missed-lesson policies will be set out in your individual
            agreement. [PLACEHOLDER — insert your cancellation policy, e.g. 24
            hours&apos; notice.]
          </p>
          <h2 className="text-xl font-bold text-navy">3. Safeguarding</h2>
          <p>
            Tutors working with children should hold enhanced DBS checks. Online
            lessons should take place in an appropriate shared space at home.
            [PLACEHOLDER — confirm your safeguarding policy.]
          </p>
          <h2 className="text-xl font-bold text-navy">4. Liability</h2>
          <p>
            While we strive for excellent outcomes, academic results depend on many
            factors. We do not guarantee specific grades.
          </p>
          <h2 className="text-xl font-bold text-navy">5. Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Contact{" "}
            <a className="text-navy underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            with questions.
          </p>
        </div>
      </section>
    </>
  );
}
