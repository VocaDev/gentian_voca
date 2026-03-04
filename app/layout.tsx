import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Voca — Data Engineering Portfolio',
  description: 'Data Engineering Intern specializing in ETL pipelines, ML models, and full-stack development. 2nd year CS student building systems that turn raw data into business intelligence.',
  keywords: ['Data Engineering', 'Machine Learning', 'ETL', 'Python', 'SQL', 'Data Science', 'Portfolio', 'Software Developer'],
  authors: [{ name: 'Voca' }],
  openGraph: {
    title: 'Voca — Data Engineering Portfolio',
    description: 'Cleaning the noise. Predicting the future. Data Engineer available for hire.',
    type: 'website',
    locale: 'en_US',
    // TODO: Replace with your own OG image (upload to /public/og-image.png)
    // For now removed the bolt.new placeholder
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voca — Data Engineering Portfolio',
    description: 'Cleaning the noise. Predicting the future. Data Engineer available for hire.',
    // TODO: Replace with your own OG image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
