import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://gentianvoca.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Gentian Voca · Software Engineer',
  description:
    'Third-year CS student in Kosovo (GPA 9.20). Full-stack developer building LokalWeb and internal digitalisation tools at a national fuel company.',
  keywords: [
    'Gentian Voca',
    'Software Engineer',
    'Full-Stack Developer',
    'Next.js',
    'TypeScript',
    'React',
    'Supabase',
    'Kosovo',
    'LokalWeb',
  ],
  authors: [{ name: 'Gentian Voca', url: siteUrl }],
  creator: 'Gentian Voca',
  openGraph: {
    title: 'Gentian Voca · Software Engineer',
    description:
      'Full-stack developer building LokalWeb and internal digitalisation tools. Open to junior SWE roles for 2027.',
    url: siteUrl,
    siteName: 'Gentian Voca',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gentian Voca · Software Engineer',
    description:
      'Full-stack developer building LokalWeb and internal digitalisation tools. Open to junior SWE roles for 2027.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-accent/25`}>
        {children}
      </body>
    </html>
  );
}
