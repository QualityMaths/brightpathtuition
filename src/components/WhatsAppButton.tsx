import { SITE } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm text-navy shadow-lg shadow-navy/15 sm:inline-block group-hover:shadow-xl transition">
        Need help? <strong>Chat with us</strong>
        <span className="ml-1 text-[10px] text-muted">[placeholder]</span>
      </span>
      <span className="wa-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M20.5 3.5A11 11 0 0 0 2.3 17.3L1 22.5l5.3-1.4A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3A9 9 0 1 1 12 21zm5-6.6c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.5-.8-.8-1.4-1.7-1.6-2-.1-.3 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.4l-.9-2.1c-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.5 2.3 1 2.3.7 2.7.6.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </span>
    </a>
  );
}
