import Link from "next/link";

type Props = { className?: string; compact?: boolean; variant?: "light" | "dark" };

export default function Logo({ className = "", compact = false, variant = "light" }: Props) {
  const titleColor = "text-gold";
  const subColor = variant === "dark" ? "text-white" : "text-navy";
  // Larger mark so the full book + rays stay clear in the header
  const width = compact ? 48 : 64;
  const src =
    variant === "dark"
      ? "/images/logo-icon-dark.png?v=20260912b"
      : "/images/logo-mark-v2.png?v=20260912b";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="Bright Path Tuition home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={width}
        height={Math.round(width * 0.83)}
        className="h-auto shrink-0 object-contain object-center"
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
