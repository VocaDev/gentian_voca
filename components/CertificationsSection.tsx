'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Shield, Languages, Code2, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Cert {
  name: string;
  issuer: string;
  date: string;
  icon: LucideIcon;
  featured?: boolean;
}

const certs: Cert[] = [
  {
    name: 'Cambridge Advanced English C1',
    issuer: 'The Cambridge School, Mitrovicë',
    date: 'Jan 2023',
    icon: Languages,
    featured: true,
  },
  {
    name: 'International Cybersecurity Defense Challenge',
    issuer: 'RIT Kosovo × Iowa State University',
    date: 'Feb 2026',
    icon: Shield,
  },
  {
    name: 'Python for Data Science',
    issuer: 'TecTigon Academy',
    date: 'Jan 2026',
    icon: Code2,
  },
  {
    name: 'DigiCamp Hackathon',
    issuer: 'Digital Skills Festival · MVP Award',
    date: 'May 2023',
    icon: Trophy,
    featured: true,
  },
  {
    name: 'Web Design Basics',
    issuer: 'JCoders Academy · HTML, CSS, JavaScript',
    date: 'Jul 2024',
    icon: Sparkles,
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-3">
            / certifications
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            The paper trail.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Five certifications and one MVP award. All earned, all real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -3 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/[0.05] p-6 flex flex-col ${
                cert.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Header row */}
              <div className="relative flex items-start justify-between gap-3 mb-5">
                <div
                  className={`p-2.5 rounded-xl border ${
                    cert.featured
                      ? 'border-accent/40 bg-accent/10'
                      : 'border-accent/25 bg-accent/[0.06]'
                  } transition-colors duration-300 group-hover:bg-accent/12`}
                >
                  <cert.icon className="w-5 h-5 text-accent" />
                </div>

                <div className="flex items-center gap-1.5">
                  {cert.featured && (
                    <span className="text-[9px] font-mono uppercase tracking-wider text-accent bg-accent/10 border border-accent/25 px-2 py-0.5 rounded-full">
                      Highlight
                    </span>
                  )}
                  <Award className="w-3.5 h-3.5 text-accent/60" />
                </div>
              </div>

              {/* Content */}
              <div className="relative flex-1 flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-foreground leading-snug mb-1.5">
                  {cert.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                  {cert.issuer}
                </p>

                <div className="mt-auto pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Issued
                  </span>
                  <span className="text-xs font-mono text-foreground">
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
