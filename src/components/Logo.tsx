import Link from "next/link";

type Props = { className?: string; compact?: boolean; variant?: "light" | "dark" };

export default function Logo({ className = "", compact = false, variant = "light" }: Props) {
  const titleColor = variant === "dark" ? "text-gold" : "text-gold";
  const subColor = variant === "dark" ? "text-white" : "text-navy";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="Bright Path Tuition home"
    >
      <svg
        width={compact ? 36 : 44}
        height={compact ? 36 : 44}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          width="44"
          height="44"
          rx="10"
          fill={variant === "dark" ? "#0B1B33" : "#031f42"}
          stroke={variant === "dark" ? "#C9A227" : "none"}
          strokeWidth={variant === "dark" ? 1 : 0}
        />
        <path
          d="M12 30V14h6.2c3.4 0 5.5 1.85 5.5 4.55 0 1.7-.9 3.05-2.45 3.75L28 30h-4.3l-5.85-7.2H16.2V30H12zm4.2-10.55h1.85c1.55 0 2.45-.75 2.45-1.95s-.9-1.9-2.45-1.9H16.2v3.85z"
          fill="#C9A227"
        />
        <path
          d="M30.5 14l1.15 3.55H35.5L31.9 19.8l1.2 3.6L30.5 21.2l-2.6 2.2 1.2-3.6-3.6-2.25h3.85L30.5 14z"
          fill="#ffc221"
        />
      </svg>
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
