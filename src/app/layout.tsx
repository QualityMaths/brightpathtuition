import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const OG_IMAGE = "/images/logo-mark-v2.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Online British Curriculum Maths Tuition`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Live online Maths tuition for the British curriculum — KS2, KS3, GCSE and A-Level — for students in the UK and worldwide. Science and English programmes coming soon. Book a free consultation.",
  keywords: [
    "online Maths tuition",
    "GCSE Maths tutor",
    "A-level Maths",
    "KS2 tuition",
    "KS3 tuition",
    "British curriculum Maths tutor",
    "Bright Path Tuition",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Online British Curriculum Maths Tuition`,
    description:
      "Live online British-curriculum Maths tuition for KS2, KS3, GCSE and A-Level — welcoming students worldwide. Science next, then English.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }, { url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      telephone: "+447951647672",
      description: SITE.tagline,
      logo: `${SITE.url}/images/logo-mark-v2.png`,
      image: `${SITE.url}/images/logo-mark-v2.png`,
      areaServed: ["GB", "Worldwide"],
      sameAs: [],
    },
    {
      "@type": "Service",
      "@id": `${SITE.url}/#maths-tuition`,
      name: "Online British Curriculum Maths Tuition",
      serviceType: "Maths tuition",
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: ["GB", "Worldwide"],
      description:
        "Live online Maths tuition for KS2, KS3, GCSE and A-Level following the British curriculum.",
      url: SITE.url,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
