type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centre?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  centre = true,
}: Props) {
  return (
    <div className={`mb-10 max-w-3xl ${centre ? "mx-auto text-centre text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-gold" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/75" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
