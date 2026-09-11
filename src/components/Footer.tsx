import Link from "next/link";
import Logo from "./Logo";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="pattern-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 lg:col-span-1">
          <Logo variant="dark" />
          <p className="text-sm leading-relaxed text-white/75">
            Premium KS3, GCSE and A-level tuition in Maths, English and Science —
            online and across Greater London.
          </p>
          <p className="text-xs text-gold/80">{SITE.addressNote}</p>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Explore
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Legal
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/privacy/" className="hover:text-gold transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms/" className="hover:text-gold transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href={SITE.phoneHref} className="hover:text-gold transition">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-gold transition">
                {SITE.email}
              </a>
            </li>
            <li className="text-white/70">{SITE.address}</li>
            <li className="text-white/70">{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            {SITE.domain} · Exam boards: AQA · Edexcel · OCR
          </p>
        </div>
      </div>
    </footer>
  );
}
