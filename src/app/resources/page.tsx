import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { RESOURCES } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Research, Guidance & Parent Resources",
  description:
    "Curated research and official guidance on Maths teaching and tuition, including Education Endowment Foundation evidence on small-group and one-to-one tuition.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Research, Guidance & Parent Resources"
        subtitle="Evidence and official guidance that informs how we teach Maths — summarised in plain English, with links to the original sources."
        image="/images/resources-hero.jpg"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What the research says"
            title="Evidence we draw on"
            subtitle="We summarise trusted educational research and official guidance in plain English, with direct links to the original sources."
          />

          <div className="mx-auto grid max-w-5xl gap-8">
            {RESOURCES.map((r) => (
              <article
                key={r.href}
                className="rounded-2xl border border-navy/10 bg-soft p-8 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Source: {r.source}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-navy">{r.title}</h2>
                <p className="mt-4 text-muted leading-relaxed">
                  <span className="font-medium text-navy">Bright Path summary: </span>
                  {r.summary}
                </p>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-6 inline-block rounded-md px-6 py-3 text-sm uppercase tracking-wider"
                >
                  Read the original source
                </a>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-muted leading-relaxed">
            More parent guidance and exam-board resources will be added here over
            time. Prefer to talk through what this means for your child?{" "}
            <Link href="/contact/" className="font-semibold text-navy underline-offset-2 hover:underline">
              Book a free consultation
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
