import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Erhan Gulsen and Bright Path Tuition — live online British-curriculum Maths from KS2 through A-Level, built on 13+ years of teaching and tutoring.",
};

const CREDENTIALS = [
  "Qualified Teacher Status",
  "First-Class BSc Mathematics",
  "PGCE Secondary Mathematics",
  "13+ Years Tutoring Experience",
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About us"
        subtitle="Welcome to Bright Path Tuition — expert Maths teaching, clear plans and results families can see."
        image="/images/alevel.jpg"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Built on 13+ Years of Maths Teaching and Tutoring"
            subtitle="Bright Path Tuition was created to provide high-quality online Maths tuition for students following the British curriculum. Our approach combines expert subject knowledge, clear explanations, targeted practice and regular progress feedback."
          />

          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex justify-center lg:justify-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/founder.jpg"
                alt="Erhan Gulsen, founder of Bright Path Tuition"
                className="h-72 w-72 rounded-2xl object-cover shadow-lg shadow-navy/10 ring-4 ring-gold/30 sm:h-80 sm:w-80"
              />
            </div>
            <div className="space-y-4 text-muted leading-relaxed">
              <h3 className="text-2xl font-bold text-navy sm:text-3xl">
                Meet the Founder — Erhan Gulsen
              </h3>
              <p>
                Erhan Gulsen is a qualified Mathematics teacher with QTS since
                2013, a First-Class BSc Mathematics degree and more than 13 years
                of tutoring experience.
              </p>
              <p>
                He has taught Mathematics in secondary schools as well as
                privately, supporting students from KS2 through GCSE and
                A-Level. His teaching focuses on clear explanations, building
                confidence, closing gaps and developing the exam technique
                students need to succeed.
              </p>
              <p>
                Bright Path Tuition brings that experience into a structured
                online setting, with small-group teaching and personalised
                support for students in the UK and worldwide.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {CREDENTIALS.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-soft px-3 py-1.5 text-xs font-semibold text-navy ring-1 ring-navy/10 sm:text-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-4 text-center text-muted leading-relaxed">
            <h3 className="text-xl font-bold text-navy sm:text-2xl">
              Our approach to teaching
            </h3>
            <p>
              At GCSE and A-Level, our Maths tuition is aligned with the major
              UK exam boards, including AQA, Edexcel and OCR. Lessons combine
              strong subject teaching with exam technique, targeted practice
              and past-paper preparation where appropriate.
            </p>
            <p>
              Whether your child needs to close gaps, build confidence or work
              towards a top grade, we create a clear learning plan around their
              current level, goals and school curriculum.
            </p>
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
                d: "Clear explanations, clear goals and regular feedback so students and parents know exactly what comes next.",
              },
              {
                t: "Mastery",
                d: "We strengthen foundations before moving on, using targeted practice and exam-style questions to build lasting understanding.",
              },
              {
                t: "Care",
                d: "Students learn best when they feel confident and supported. Lessons are challenging without becoming overwhelming.",
              },
            ].map((v) => (
              <div
                key={v.t}
                className="rounded-2xl border border-navy/5 bg-white p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-navy">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact/"
              className="btn-gold inline-block rounded-md px-7 py-3.5 text-sm uppercase tracking-wider"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
