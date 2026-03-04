'use client';

import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

interface EducationEntryProps {
  title: string;
  subtitle: string;
  degree?: string;
  period?: string;
  location?: string;
  description?: string;
  imageSrc: string;
  link: string;
  icon: React.ElementType;
  index: number;
}

function EducationEntry({
  title,
  subtitle,
  degree,
  period,
  location,
  description,
  imageSrc,
  link,
  icon: Icon,
  index,
}: EducationEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="relative h-full overflow-hidden rounded-xl border border-zinc-800 group-hover:border-emerald-500/30 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative h-full flex flex-col">
            {/* Image header */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-zinc-950/10" />

              {/* Period badge */}
              {period && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 text-xs text-zinc-300">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  {period}
                </div>
              )}
            </div>

            <div className="relative p-6 md:p-8 flex-1 flex flex-col justify-between bg-zinc-900/50 backdrop-blur-sm">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-50 mb-1">
                      {title}
                    </h3>
                    <p className="text-sm md:text-base text-emerald-400/80 font-medium">
                      {subtitle}
                    </p>
                  </div>
                </div>

                {degree && (
                  <p className="text-sm text-zinc-300 font-medium pl-[52px]">
                    {degree}
                  </p>
                )}

                {location && (
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 pl-[52px]">
                    <MapPin className="w-3 h-3" />
                    {location}
                  </div>
                )}

                {description && (
                  <p className="text-sm text-zinc-400 leading-relaxed pl-[52px] pt-2">
                    {description}
                  </p>
                )}
              </div>

              <div className="mt-6 flex items-center gap-2 text-zinc-400 group-hover:text-emerald-400 transition-colors">
                <span className="text-sm font-mono">Visit</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="relative py-20 md:py-32 px-6 md:px-12 bg-zinc-950">
      <div className="section-divider mb-20" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
            Education & <span className="accent-gradient">Experience</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Academic journey and professional development experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <EducationEntry
            title="Isa Boletini University"
            subtitle="University"
            degree="B.Sc. Computer Science and Engineering — 2nd Year"
            period="2024 – Present"
            location="Mitrovicë, Kosovo"
            description="Focused on software engineering, data structures, algorithms, and database systems. Building a strong foundation in computer science theory and practice."
            imageSrc="/images/isa-boletini.jpg"
            link="https://umib.net/en/"
            icon={GraduationCap}
            index={0}
          />

          <EducationEntry
            title="TextTigon Academy"
            subtitle="Data Engineering Internship"
            period="2025 – Present"
            location="Kosovo"
            description="Hands-on experience building ETL pipelines and transforming raw data into actionable business intelligence. Working with real-world datasets processing millions of records."
            imageSrc="/images/texttigon-academy.jpg"
            link="https://tectigonacademy.com/"
            icon={Briefcase}
            index={1}
          />
        </div>
      </div>
    </section>
  );
}
