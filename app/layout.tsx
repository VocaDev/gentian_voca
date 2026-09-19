import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["400"],
});

const title = `${site.name} · Software developer, Mitrovicë`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Gentian Voca",
    "software developer Kosovo",
    "full-stack developer Mitrovicë",
    "Next.js developer",
    "TypeScript",
    "Supabase",
    "web developer for small businesses",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title,
    description: site.description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#121316" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: "Software developer",
      url: site.url,
      email: `mailto:${site.email}`,
      image: `${site.url}/opengraph-image`,
      address: { "@type": "PostalAddress", addressLocality: "Mitrovicë", addressCountry: "XK" },
      sameAs: [site.links.linkedin, site.links.github],
      worksFor: { "@type": "Organization", name: "Petrol Company" },
      alumniOf: { "@type": "CollegeOrUniversity", name: 'University of Mitrovica "Isa Boletini"' },
      knowsLanguage: ["sq", "en"],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
  ],
};

// The only joke on load. For the people who open the console.
const consoleNote =
  'console.log("%cNice. Most people don\'t look.","font:14px/1.4 Geist,ui-sans-serif,system-ui;color:#3d5a73")';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="animate-fade-in">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script dangerouslySetInnerHTML={{ __html: consoleNote }} />
      </body>
    </html>
  );
}
