import Link from "next/link";

type Props = { className?: string; compact?: boolean; variant?: "light" | "dark" };

export default function Logo({ className = "", compact = false, variant = "light" }: Props) {
  const titleColor = "text-gold";
  const subColor = variant === "dark" ? "text-white" : "text-navy";
  const width = compact ? 40 : 52;

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="Bright Path Tuition home"
    >
      {/* Exact mark from brand sheet — full book + rays */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo-mark.png"
        alt=""
        width={width}
        className="h-auto w-[40px] shrink-0 object-contain object-center sm:w-[52px]"
        style={{ width, height: "auto" }}
      />
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
