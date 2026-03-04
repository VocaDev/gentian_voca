'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';

type AccentColor = 'emerald' | 'cyan' | 'amber' | 'violet';

const accentStyles: Record<AccentColor, {
  border: string;
  borderHover: string;
  bg: string;
  bgHover: string;
  text: string;
  glow: string;
  gradient: string;
  strip: string;
  iconBg: string;
  iconBgHover: string;
  tagBg: string;
  tagBorder: string;
  tagText: string;
}> = {
  emerald: {
    border: 'border-emerald-500/20',
    borderHover: 'group-hover:border-emerald-500/40',
    bg: 'bg-emerald-500/5',
    bgHover: 'group-hover:bg-emerald-500/[0.07]',
    text: 'text-emerald-400',
    glow: 'group-hover:shadow-emerald-500/10',
    gradient: 'from-emerald-500/10 via-transparent to-transparent',
    strip: 'bg-gradient-to-b from-emerald-400 to-emerald-600',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconBgHover: 'group-hover:bg-emerald-500/20',
    tagBg: 'bg-emerald-500/5',
    tagBorder: 'border-emerald-500/15',
    tagText: 'text-emerald-400/80',
  },
  cyan: {
    border: 'border-cyan-500/20',
    borderHover: 'group-hover:border-cyan-500/40',
    bg: 'bg-cyan-500/5',
    bgHover: 'group-hover:bg-cyan-500/[0.07]',
    text: 'text-cyan-400',
    glow: 'group-hover:shadow-cyan-500/10',
    gradient: 'from-cyan-500/10 via-transparent to-transparent',
    strip: 'bg-gradient-to-b from-cyan-400 to-cyan-600',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconBgHover: 'group-hover:bg-cyan-500/20',
    tagBg: 'bg-cyan-500/5',
    tagBorder: 'border-cyan-500/15',
    tagText: 'text-cyan-400/80',
  },
  amber: {
    border: 'border-amber-500/20',
    borderHover: 'group-hover:border-amber-500/40',
    bg: 'bg-amber-500/5',
    bgHover: 'group-hover:bg-amber-500/[0.07]',
    text: 'text-amber-400',
    glow: 'group-hover:shadow-amber-500/10',
    gradient: 'from-amber-500/10 via-transparent to-transparent',
    strip: 'bg-gradient-to-b from-amber-400 to-amber-600',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    iconBgHover: 'group-hover:bg-amber-500/20',
    tagBg: 'bg-amber-500/5',
    tagBorder: 'border-amber-500/15',
    tagText: 'text-amber-400/80',
  },
  violet: {
    border: 'border-violet-500/20',
    borderHover: 'group-hover:border-violet-500/40',
    bg: 'bg-violet-500/5',
    bgHover: 'group-hover:bg-violet-500/[0.07]',
    text: 'text-violet-400',
    glow: 'group-hover:shadow-violet-500/10',
    gradient: 'from-violet-500/10 via-transparent to-transparent',
    strip: 'bg-gradient-to-b from-violet-400 to-violet-600',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    iconBgHover: 'group-hover:bg-violet-500/20',
    tagBg: 'bg-violet-500/5',
    tagBorder: 'border-violet-500/15',
    tagText: 'text-violet-400/80',
  },
};

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children?: ReactNode;
  className?: string;
  techStack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor?: AccentColor;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  icon: Icon,
  children,
  className = '',
  techStack = [],
  liveUrl,
  githubUrl,
  accentColor = 'emerald',
  featured = false,
}: ProjectCardProps) {
  const accent = accentStyles[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className={`${className}`}
    >
      <div className={`relative group overflow-hidden rounded-2xl border ${accent.border} ${accent.borderHover} ${accent.bgHover} transition-all duration-500 hover:shadow-2xl ${accent.glow}`}>
        {/* Left accent strip */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 ${accent.strip} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Hover gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Content */}
        <div className={`relative ${featured ? 'p-8 md:p-10' : 'p-6 md:p-8'} pl-8 md:pl-10`}>
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Left: Icon */}
            <div className={`p-3 rounded-xl border ${accent.iconBg} ${accent.iconBgHover} transition-colors duration-300 flex-shrink-0 self-start`}>
              <Icon className={`${featured ? 'w-7 h-7' : 'w-6 h-6'} ${accent.text}`} />
            </div>

            {/* Center: Text content */}
            <div className="flex-1 min-w-0 space-y-4">
              <div>
                <h3 className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-bold text-zinc-50 mb-2`}>
                  {title}
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Tech stack */}
              {techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full ${accent.tagBg} ${accent.tagText} border ${accent.tagBorder} font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Extra children content (e.g. stats bars) */}
              {children && <div className="pt-2">{children}</div>}
            </div>

            {/* Right: Links */}
            <div className="flex md:flex-col items-center gap-2 flex-shrink-0 self-start">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border border-zinc-800 text-zinc-500 hover:${accent.text} hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-200`}
                  aria-label={`${title} GitHub repository`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border border-zinc-800 text-zinc-500 hover:${accent.text} hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-200`}
                  aria-label={`${title} live demo`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
