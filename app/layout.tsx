import type { Metadata } from "next";
import "./globals.css";
import { Nav, Footer } from "@/components/Chrome";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 School Road",
    addressLocality: "Kolkata",
    postalCode: "700028",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  areaServed: SITE.countries,
  knowsAbout: [
    "Applied AI",
    "Website generation systems",
    "Business management software",
    "React development",
    "React Native development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* NOTE: no maximum-scale — pinch zoom must stay available */}
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
