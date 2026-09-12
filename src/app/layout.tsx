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
