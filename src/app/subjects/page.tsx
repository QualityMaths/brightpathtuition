import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { PROGRAMMES, SUBJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Subjects & Programmes",
  description:
    "Live online KS3, GCSE and A-level Maths tuition for British-curriculum students worldwide. Science and English on the roadmap.",
};

export default function SubjectsPage() {
  return (
    <>
      <PageHero
        title="Subjects & programmes"
        subtitle="Maths tuition now — Science next, then English. Live online classes for British-curriculum learners anywhere in the world."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Subjects"
            title="What we teach today — and what is next"
            subtitle="Maths is available now. Science is the next subject we will add, then English. Every lesson is exam-board aware."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {SUBJECTS.map((s) => (
              <article
                key={s.name}
                className="card-lift flex flex-col rounded-2xl border border-navy/8 bg-soft p-8"
              >
                <span
                  className={`mb-3 w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                    s.status === "available"
                      ? "bg-gold/20 text-navy"
                      : "bg-navy/5 text-muted"
                  }`}
                >
                  {s.badge}
                </span>
                <h2 className="text-2xl font-bold text-navy">{s.name}</h2>
                <p className="mt-4 flex-1 text-muted leading-relaxed">{s.blurb}</p>
                {s.status === "available" ? (
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                      Exam boards
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {s.boards.map((b) => (
                        <span
                          key={b}
                          className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-navy shadow-sm"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold">
                    Not bookable yet — ask on your consultation if you want early interest noted
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pattern-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            eyebrow="By stage"
            title="Programmes for every key stage"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {PROGRAMMES.map((p) => (
              <div
                key={p.slug}
                className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt="" className="h-44 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {p.subtitle}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm text-white/75">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact/"
              className="btn-gold inline-block rounded-md px-7 py-3.5 text-sm uppercase tracking-wider"
            >
              Discuss your subject needs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
