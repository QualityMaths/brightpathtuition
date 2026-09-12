import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { SITE } from "@/lib/constants";


export const metadata: Metadata = {
  title: "Moved to Resources",
  description: "This section has moved to Research, Guidance & Parent Resources.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE.url}/blog/` },
};

export default function BlogRedirectPage() {
  return (
    <section className="bg-white py-24">
      <Script id="blog-redirect" strategy="beforeInteractive">{`
        window.location.replace("/resources/");
      `}</Script>
      <div className="mx-auto max-w-xl px-4 text-center">
        <h1 className="text-2xl font-bold text-navy">Moved to Resources</h1>
        <p className="mt-3 text-muted">
          Our Blog section has been replaced with Research, Guidance &amp; Parent
          Resources.
        </p>
        <Link
          href="/resources/"
          className="btn-gold mt-8 inline-block rounded-md px-7 py-3.5 text-sm uppercase tracking-wider"
        >
          Go to Resources
        </Link>
      </div>
    </section>
  );
}
