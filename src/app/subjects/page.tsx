import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";


export const metadata: Metadata = {
  title: "Online Maths Tuition — KS2, KS3, GCSE & A-Level",
  description:
    "Live online Maths tuition for KS2, KS3, GCSE and A-Level. Structured British-curriculum teaching with exam-board focused support at GCSE and A-Level.",
  alternates: { canonical: `${SITE.url}/subjects/` },
};

const STAGES = [
  {
    id: "ks2",
    title: "KS2 Maths",
    years: "Years 3–6",
    image: "/images/ks2.jpg",
    intro:
      "Build confident number sense and mathematical reasoning in the later primary years — so students arrive at secondary school ready to thrive.",
    points: [
      "Number fluency — place value, the four operations, fractions, decimals and percentages",
      "Geometry, measures and early algebra thinking",
      "Reasoning and problem-solving strategies",
      "School support and Year 6 SATs preparation where appropriate",
      "Smooth preparation for the jump to KS3 Maths",
    ],
  },
  {
    id: "ks3",
    title: "KS3 Maths",
    years: "Years 7–9",
    image: "/images/ks3.jpg",
    intro:
      "Secure the full Key Stage 3 curriculum with clear teaching, regular practice and targeted support for individual gaps.",
    points: [
      "Number, algebra, ratio and proportion",
      "Geometry, probability and statistics",
      "Problem solving and mathematical reasoning",
      "Support alongside school lessons and assessments",
      "Strong preparation for the transition to GCSE Maths",
    ],
  },
  {
    id: "gcse",
    title: "GCSE Maths",
    years: "Years 10–11",
    image: "/images/gcse.jpg",
    intro:
      "Exam-board aware tuition for Foundation and Higher pathways — focused on topics, technique and the papers that matter.",
    points: [
      "Foundation and Higher tier pathways",
      "AQA, Edexcel and OCR support",
      "Topic teaching with targeted gap filling",
      "Exam technique, mark schemes and past papers",
      "Structured revision in the run-up to exams",
    ],
  },
  {
    id: "a-level",
    title: "A-Level Maths",
    years: "Years 12–13",
    image: "/images/alevel.jpg",
    intro:
      "Depth, fluency and exam technique across the A-Level course — so students can tackle demanding questions with confidence.",
    points: [
      "Pure Mathematics",
      "Statistics",
      "Mechanics",
      "Exam-board support and past-paper preparation",
      "Exam technique for longer, multi-step questions",
    ],
  },
] as const;

export default function SubjectsPage() {
  return (
    <>
      <PageHero
        title="Online Maths Tuition for KS2, KS3, GCSE & A-Level"
        subtitle="Structured online Maths tuition for the British curriculum, from KS2 through A-Level, with exam-board focused support at GCSE and A-Level."
        image="/images/subjects-hero.jpg"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mathematics"
            title="Mathematics"
            subtitle="Live online Maths tuition from KS2 through A-Level, covering core curriculum knowledge, exam technique, problem solving and targeted support for individual gaps."
          />
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-navy">
              GCSE &amp; A-Level exam boards: AQA · Edexcel · OCR
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {STAGES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold hover:bg-gold/10"
              >
                {s.title} → Learn more
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="By stage"
            title="What we cover at each stage"
            subtitle="See how our Maths tuition develops knowledge, confidence and exam skills at every stage."
          />
          {STAGES.map((stage, i) => (
            <article
              key={stage.id}
              id={stage.id}
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-sm"
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[220px] lg:min-h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={stage.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {stage.years}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed">{stage.intro}</p>
                  <ul className="mt-6 space-y-2.5">
                    {stage.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-navy/90 sm:text-base">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact/"
                    className="btn-gold mt-8 inline-block rounded-md px-6 py-3 text-sm uppercase tracking-wider"
                  >
                    Book a Free Consultation
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Coming soon
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
            More subjects coming soon
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Science and English tuition will be added as Bright Path grows. If
            you&apos;d like to register your interest, let us know during your
            consultation.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-block rounded-md border border-navy/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy transition hover:border-gold hover:bg-gold/10"
          >
            Register Interest
          </Link>
        </div>
      </section>

      <section className="pattern-navy py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to talk about your child&apos;s Maths?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            Book a free consultation and we&apos;ll map the right stage, goals
            and exam board together.
          </p>
          <Link
            href="/contact/"
            className="btn-gold mt-8 inline-block rounded-md px-7 py-3.5 text-sm uppercase tracking-wider"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
