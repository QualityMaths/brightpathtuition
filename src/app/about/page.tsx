import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderBanner from "@/components/PlaceholderBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Bright Path Tuition — London tutors focused on Maths, English and Science for KS3, GCSE and A-level.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About us"
        subtitle="Welcome to Bright Path Tuition — patient teaching, clear plans and results families can see."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <PlaceholderBanner>
              [PLACEHOLDER — replace founder story & photos with your own]
            </PlaceholderBanner>
          </div>
          <SectionHeading
            title="Start on the path to success"
            subtitle="We founded Bright Path to give London students the kind of tuition we wish every learner had access to: calm, expert and relentlessly practical."
          />
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef04259168?auto=format&fit=crop&w=900&q=80"
              alt="Tutor working with a student"
              className="rounded-2xl object-cover shadow-lg shadow-navy/10"
            />
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Bright Path Tuition is a London-based tutoring service specialising
                in <strong className="text-navy">Mathematics</strong>, with strong
                support in English and Science across KS3, GCSE and A-level.
              </p>
              <p>
                Our tutors know the AQA, Edexcel and OCR specifications inside out.
                Lessons blend concept teaching with exam technique — so students
                understand <em>why</em> a method works and how to earn every mark.
              </p>
              <p>
                Whether your child needs to catch up, push for a top grade, or
                simply rebuild confidence, we design a plan around their school
                timetable and learning style.
              </p>
              <p className="text-sm text-gold font-medium">
                Owner / lead tutor bio: [PLACEHOLDER — add name, DBS status,
                qualifications]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Clarity",
                d: "No jargon, no guesswork — every family gets a plain-English plan and regular updates.",
              },
              {
                t: "Mastery",
                d: "We teach until it sticks. Spaced practice and past papers sit at the heart of every pathway.",
              },
              {
                t: "Care",
                d: "Exams matter, but so does wellbeing. We pace lessons to reduce stress, not add to it.",
              },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-white p-7 shadow-sm border border-navy/5">
                <h3 className="text-lg font-bold text-navy">{v.t}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact/"
              className="btn-primary inline-block rounded-md px-7 py-3.5 text-sm font-semibold uppercase tracking-wider"
            >
              Meet us — book a consult
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
