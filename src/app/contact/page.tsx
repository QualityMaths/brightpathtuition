import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderBanner from "@/components/PlaceholderBanner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with Bright Path Tuition. Get in touch by phone, email or WhatsApp.",
};

export default function ContactPage() {
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    "Free consultation enquiry — Bright Path Tuition"
  )}`;

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Tell us about your child — we will reply within one working day."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <PlaceholderBanner>
              Form is mailto / Formspree-ready — plug in your Formspree endpoint when live
            </PlaceholderBanner>
          </div>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <SectionHeading
                centre={false}
                eyebrow="Get in touch"
                title="Book a free consult"
                subtitle="Share year group, subjects and goals. We will suggest the best format and tutor match."
              />
              <ul className="space-y-4 text-sm text-muted">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold">
                    Phone
                  </span>
                  <a href={SITE.phoneHref} className="text-navy font-medium hover:text-gold">
                    {SITE.phone}
                  </a>{" "}
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold">
                    Email
                  </span>
                  <a href={`mailto:${SITE.email}`} className="text-navy font-medium hover:text-gold">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold">
                    WhatsApp
                  </span>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy font-medium hover:text-gold"
                  >
                    Message us
                  </a>{" "}
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold">
                    Location
                  </span>
                  {SITE.address}
                  <br />
                  <span className="text-xs text-gold">{SITE.addressNote}</span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold">
                    Hours
                  </span>
                  {SITE.hours}
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              {/* Formspree-ready: set action="https://formspree.io/f/YOUR_ID" method="POST" */}
              <form
                action={mailto}
                method="get"
                className="rounded-2xl border border-navy/10 bg-soft p-6 sm:p-8 space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="font-medium text-navy">Your name</span>
                    <input
                      name="name"
                      required
                      className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                      placeholder="Full name"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-navy">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="font-medium text-navy">Phone</span>
                    <input
                      name="phone"
                      className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                      placeholder="07…"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-navy">Year group</span>
                    <select
                      name="year"
                      className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      <option>KS3 (Y7–9)</option>
                      <option>GCSE (Y10–11)</option>
                      <option>A-level (Y12–13)</option>
                      <option>Other / adult learner</option>
                    </select>
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="font-medium text-navy">Subject(s)</span>
                  <input
                    name="subjects"
                    className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                    placeholder="e.g. GCSE Maths Higher, A-level Maths / Further Maths"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-navy">How can we help?</span>
                  <textarea
                    name="body"
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                    placeholder="Goals, exam board, preferred times…"
                  />
                </label>
                <button
                  type="submit"
                  className="btn-primary w-full rounded-md py-3.5 text-sm font-semibold uppercase tracking-wider sm:w-auto sm:px-8"
                >
                  Send enquiry
                </button>
                <p className="text-xs text-muted">
                  Submits via your email client for now. To use Formspree, set the
                  form <code className="text-navy">action</code> to your endpoint
                  and <code className="text-navy">method=&quot;POST&quot;</code>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
