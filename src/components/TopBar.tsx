import { SITE } from "@/lib/constants";

function IconPhone() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.3a1 1 0 01.95.68l1.2 3.5a1 1 0 01-.27 1.1L7.9 10.1a12 12 0 006 6l1.82-1.28a1 1 0 011.1-.27l3.5 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C8.82 21 3 15.18 3 8V7a2 2 0 012-2z" />
    </svg>
  );
}

export default function TopBar() {
  return (
    <div className="bg-navy text-gold text-xs sm:text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 hover:text-gold-bright transition">
            <IconPhone />
            {SITE.phone}
          </a>
          <span className="hidden text-gold/50 sm:inline">|</span>
          <a
            href={`mailto:${SITE.email}`}
            className="hidden hover:text-gold-bright transition sm:inline"
          >
            {SITE.email}
          </a>
        </div>
        <p className="truncate text-gold/90">
          Free consultation · {SITE.hours}
        </p>
      </div>
    </div>
  );
}
