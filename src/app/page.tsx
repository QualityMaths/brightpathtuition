import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderBanner from "@/components/PlaceholderBanner";
import {
  EXAMPLE_STATS,
  PROGRAMMES,
  SITE,
  STEPS,
  SUBJECTS,
  TESTIMONIALS,
} from "@/lib/constants";

const HERO_IMG =
  "/images/hero.jpg";

function IconCert() {
  return (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function IconGrad() {
  return (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
    </svg>
  );
}
function IconExpert() {
  return (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.08 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[78vh] overflow-hidden sm:min-h-[85vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt="Students celebrating graduation success"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-end px-4 pb-16 pt-28 text-center sm:min-h-[85vh] sm:px-6 sm:pb-20 lg:px-8">
          <PlaceholderBanner>Live online · British curriculum · KS3 / GCSE / A-level</PlaceholderBanner>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Learning is a lifelong adventure
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 sm:text-xl">
            Live online Maths tuition for the British curriculum — for students
            worldwide, with weekday daytime availability. Exam-board aligned,
            progress you can measure.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="btn-gold rounded-md px-7 py-3.5 text-sm uppercase tracking-wider"
            >
              Book a free consult
            </Link>
            <Link
              href="/subjects/"
              className="rounded-md border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur hover:bg-white/20 transition"
            >
              Explore Maths
            </Link>
          </div>
        </div>
      </section>

      {/* Icon strip */}
      <section className="border-b border-navy/5 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: <IconCert />, text: "Exam-board specialists" },
            { icon: <IconGrad />, text: "Grades that improve" },
            { icon: <IconExpert />, text: "Tutors who care" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-4 text-gold"
            >
              {item.icon}
              <span className="text-base font-semibold sm:text-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Programmes */}
      <section className="pattern-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            eyebrow="Programmes"
            title="Give your studies a Bright Path"
            subtitle="Structured pathways from Key Stage 3 through A-level — built around British exam boards (AQA, Edexcel, OCR), delivered live online."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {PROGRAMMES.map((p) => (
              <Link
                key={p.slug}
                href="/subjects/"
                className="card-lift group relative overflow-hidden rounded-2xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt=""
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {p.subtitle}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/80 line-clamp-3">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Subjects"
            title="Maths now. Science next. English later."
            subtitle="We are launching as a Maths-specialist tuition service. Science is next on the roadmap, then English — same quality throughout."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {SUBJECTS.map((s) => (
              <div
                key={s.name}
                className="card-lift rounded-2xl border border-navy/5 bg-white p-7 shadow-sm"
              >
                <span
                  className={`mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                    s.status === "available"
                      ? "bg-gold/20 text-navy"
                      : "bg-navy/5 text-muted"
                  }`}
                >
                  {s.badge}
                </span>
                <h3 className="text-xl font-bold text-navy">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.blurb}</p>
                {s.status === "available" ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.boards.map((b) => (
                      <span
                        key={b}
                        className="rounded-md bg-navy/5 px-2.5 py-1 text-xs font-semibold text-navy"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-gold">
                    Joining the Bright Path soon
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/subjects/"
              className="btn-primary inline-block rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              See Maths programmes
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="From first chat to exam day"
            subtitle="A simple, transparent process so parents and students always know what comes next."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-navy/8 bg-soft p-6"
              >
                <span className="font-display text-4xl font-bold text-gold/80">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pattern-navy py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <PlaceholderBanner>Example figures — replace with your real outcomes</PlaceholderBanner>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {EXAMPLE_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-bold text-gold sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/80">{stat.label}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">
                  {stat.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Families"
            title="What parents & students say"
            subtitle="Sample feedback to illustrate tone — swap in real reviews when you have them."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="card-lift flex flex-col rounded-2xl border border-navy/8 bg-soft p-7"
              >
                <p className="flex-1 text-base leading-relaxed text-navy/90">
                  “{t.quote}”
                </p>
                <footer className="mt-6 border-t border-navy/10 pt-4">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gold">
                    {t.note}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/cta.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to find your Bright Path?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Book a free consultation — no obligation. We will map a plan that fits
            your child&apos;s goals and your timetable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="btn-gold rounded-md px-7 py-3.5 text-sm uppercase tracking-wider"
            >
              Book a free consult
            </Link>
            <a
              href={SITE.phoneHref}
              className="rounded-md border border-white/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
