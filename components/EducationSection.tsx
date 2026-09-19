'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar, Building2, School, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface EntryProps {
  title: string;
  role: string;
  period: string;
  location: string;
  meta?: string;
  description: string;
  icon: LucideIcon;
  imageSrc?: string;
  link?: string;
  linkLabel?: string;
  index: number;
  highlights?: string[];
}

function TimelineCard({
  title,
  role,
  period,
  location,
  meta,
  description,
  icon: Icon,
  imageSrc,
  link,
  linkLabel = 'Visit',
  index,
  highlights,
}: EntryProps) {
  const Wrapper: React.ElementType = link ? 'a' : 'div';
  const wrapperProps = link
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="group h-full"
    >
      <Wrapper
        {...wrapperProps}
        className="block h-full overflow-hidden rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/[0.05]"
      >
        {/* Image or gradient placeholder */}
        <div className="relative h-40 md:h-44 overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.12] via-accent/[0.04] to-transparent">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="w-12 h-12 text-accent/40" />
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

          {/* Period pill */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/85 backdrop-blur-sm border border-border text-[11px] font-mono text-foreground">
            <Calendar className="w-3 h-3 text-accent" />
            {period}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/25 flex-shrink-0">
              <Icon className="w-4 h-4 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight mb-0.5">
                {title}
              </h3>
              <p className="text-sm text-accent font-medium">{role}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground pl-[46px]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              {location}
            </span>
            {meta && (
              <span className="inline-flex items-center gap-1.5 font-mono text-foreground/80">
                {meta}
              </span>
            )}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed pl-[46px]">
            {description}
          </p>

          {highlights && highlights.length > 0 && (
            <ul className="space-y-1.5 pl-[46px]">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-accent mt-1 leading-none">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {link && (
            <div className="pl-[46px] pt-1 flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-accent transition-colors">
              <span className="font-mono">{linkLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 -translate-y-0.5 transition-all" />
            </div>
          )}
        </div>
      </Wrapper>
    </motion.div>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-3">
            / journey
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Experience &amp; Education.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Where I&apos;ve worked and where I&apos;m studying.
          </p>
        </div>

        {/* Experience row */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Briefcase className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
              Experience
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <TimelineCard
              title="Petrol Company"
              role="Software Development & Digitalisation Intern"
              period="Apr 2026 → now"
              location="Fushë Kosovë, Kosovo"
              icon={Building2}
              index={0}
              description="Full-stack development on internal tools used daily by leadership, HQ teams, and field managers across 30 retail stations. Replacing legacy manual workflows with structured digital systems, in production."
              highlights={[
                'Stack: Next.js · TypeScript · Supabase · PostgreSQL',
                'Business-process analysis paired with hands-on engineering',
                'Confidential. Details available on request',
              ]}
            />

            <TimelineCard
              title="TecTigon Academy"
              role="Data Science & Machine Learning Intern"
              period="Nov 2025 → Feb 2026"
              location="Prishtinë, Kosovo"
              imageSrc="/images/texttigon-academy.jpg"
              link="https://tectigonacademy.com/"
              icon={Briefcase}
              index={1}
              description="Four-month applied DS/ML internship. Cleaned real-world datasets, built a baseline sales forecasting model, and delivered visual reports in agile sprints. Formal reference letter from CEO Erion Prokshi."
              highlights={[
                'Stack: Python · Pandas · NumPy · Scikit-learn · Matplotlib',
                'Sales forecasting baseline: RMSE 2.02M · MAE 1.54M',
              ]}
            />
          </div>
        </div>

        {/* Education row */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
              Education
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <TimelineCard
              title="Universiteti i Mitrovicës"
              role="BSc Computer Science & Engineering"
              period="Oct 2024 → Jun 2027"
              location="Mitrovicë, Kosovo"
              meta="GPA 9.20 / 10"
              imageSrc="/images/isa-boletini.jpg"
              link="https://umib.net/en/"
              icon={GraduationCap}
              index={0}
              description="Third-year CS and Engineering. Coursework across Web Development, Software Engineering, Databases, Business Intelligence, OS, Microprocessors, Statistics, and Computer Architecture."
            />

            <TimelineCard
              title="Gjimnazi &quot;Frang Bardhi&quot;"
              role="High School · Social Sciences"
              period="2021 → 2024"
              location="Mitrovicë, Kosovo"
              meta="GPA 5.0 / 5.0"
              icon={School}
              index={1}
              description="Graduated with a perfect GPA. Coursework included TIK (Computer Science) and English, which were the first sparks for the tech and language paths I&apos;m on now."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
