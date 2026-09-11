type Props = {
  title: string;
  subtitle?: string;
  image: string;
};

export default function PageHero({ title, subtitle, image }: Props) {
  return (
    <section className="relative min-h-[280px] overflow-hidden sm:min-h-[340px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="page-hero-overlay absolute inset-0" />
      <div className="relative mx-auto flex h-full min-h-[280px] max-w-7xl flex-col justify-end px-4 py-12 sm:min-h-[340px] sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-lg text-white/90">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
