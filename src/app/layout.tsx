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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | London KS3, GCSE & A-level Tuition`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Premium Maths tuition for KS3, GCSE and A-level students across Greater London. Science and English coming soon. AQA, Edexcel and OCR. Book a free consultation.",
  keywords: [
    "tuition London",
    "GCSE Maths tutor",
    "A-level Maths",
    "KS3 tuition",
    "private tutor London",
    "Bright Path Tuition",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | London KS3, GCSE & A-level Tuition`,
    description:
      "Expert Maths tuition for KS3, GCSE and A-level — online and across Greater London. Science next, then English.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
