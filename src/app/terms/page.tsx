import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE.name} are being finalised. Contact us for current booking information.`,
  alternates: { canonical: `${SITE.url}/terms/` },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Our full website and tuition terms are being finalised."
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-muted sm:px-6">
          <p className="text-sm text-gold font-medium">
            Last updated: 12 September 2026
          </p>
          <h2 className="text-xl font-bold text-navy">Holding notice</h2>
          <p>
            The full terms of service for {SITE.name} — covering website use and tuition
            bookings — are being finalised. Until they are published here, please contact us
            before booking if you need written details of fees, scheduling or other arrangements.
          </p>
          <p>
            For questions, email{" "}
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
