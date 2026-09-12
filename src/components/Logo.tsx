import Link from "next/link";

type Props = { className?: string; compact?: boolean; variant?: "light" | "dark" };

function BookMark({ size, variant }: { size: number; variant: "light" | "dark" }) {
  const book = variant === "dark" ? "#F5F7FA" : "#0B1B33";
  const spine = variant === "dark" ? "#0B1B33" : "#F5F7FA";
  const gold = "#C9A227";
  const goldSoft = "#D4AF37";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* rays */}
      <path d="M32 6 L34.6 24 L29.4 24 Z" fill={gold} />
      <path d="M20 9 L30 26 L26.2 28.2 Z" fill={gold} />
      <path d="M44 9 L37.8 28.2 L34 26 Z" fill={gold} />
      <path d="M10 18 L27 29 L24.5 32.5 Z" fill={goldSoft} />
      <path d="M54 18 L39.5 32.5 L37 29 Z" fill={goldSoft} />
      {/* open book */}
      <path
        d="M32 30 C27.5 30 18.5 27.8 11 23.5 L11 48 C18.5 52 27.5 54 32 54 C36.5 54 45.5 52 53 48 L53 23.5 C45.5 27.8 36.5 30 32 30 Z"
        fill={book}
      />
      <path d="M32 30 V54" stroke={spine} strokeWidth="1.6" opacity="0.4" />
      <path
        d="M11 23.5 C18.5 28 27.5 30 32 30 C36.5 30 45.5 28 53 23.5"
        stroke={gold}
        strokeWidth="1.4"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}

export default function Logo({ className = "", compact = false, variant = "light" }: Props) {
  const titleColor = "text-gold";
  const subColor = variant === "dark" ? "text-white" : "text-navy";
  const size = compact ? 36 : 44;

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="Bright Path Tuition home"
    >
      <BookMark size={size} variant={variant} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-bold tracking-tight ${titleColor} ${
            compact ? "text-lg" : "text-xl sm:text-2xl"
          }`}
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Bright Path
        </span>
        <span
          className={`font-semibold uppercase tracking-[0.22em] ${subColor} ${
            compact ? "text-[9px]" : "text-[10px] sm:text-xs"
          }`}
        >
          Tuition
        </span>
      </span>
    </Link>
  );
}
