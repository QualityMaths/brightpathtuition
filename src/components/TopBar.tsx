import { SITE } from "@/lib/constants";

function IconFacebook() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.4 3h-2.6v7A10 10 0 0 0 22 12" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zm6 0h3.8v1.7h.05c.53-1 1.84-2.05 3.8-2.05C20.4 8.65 21 11.1 21 14.3V21h-4v-5.9c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.5-2.25 3.1V21H9z" />
    </svg>
  );
}
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
          <a href={SITE.social.facebook} className="hover:text-gold-bright transition" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <IconFacebook />
          </a>
          <a href={SITE.social.instagram} className="hover:text-gold-bright transition" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <IconInstagram />
          </a>
          <a href={SITE.social.linkedin} className="hover:text-gold-bright transition" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <IconLinkedIn />
          </a>
          <span className="hidden text-gold/50 sm:inline">|</span>
          <a href={SITE.phoneHref} className="hidden items-center gap-1.5 hover:text-gold-bright transition sm:inline-flex">
            <IconPhone />
            {SITE.phone}
          </a>
          <span className="hidden text-[10px] text-gold/60 sm:inline">[placeholder]</span>
        </div>
        <p className="truncate text-gold/90">
          Free consultation available · {SITE.hours}
        </p>
      </div>
    </div>
  );
}
