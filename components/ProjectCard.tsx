'use client';

import { motion } from 'framer-motion';
import { LucideIcon, Github, ArrowUpRight, Lock } from 'lucide-react';
import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children?: ReactNode;
  className?: string;
  techStack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status?: 'shipped' | 'building' | 'confidential';
  year?: string;
  locked?: boolean;
  quote?: string;
  quoteAuthor?: string;
}

const statusStyle: Record<NonNullable<ProjectCardProps['status']>, { label: string; className: string }> = {
  shipped: { label: 'Shipped', className: 'bg-accent/10 text-accent border-accent/25' },
  building: { label: 'In build', className: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/25' },
  confidential: { label: 'Confidential', className: 'bg-muted text-muted-foreground border-border' },
};

export function ProjectCard({
  title,
  description,
  icon: Icon,
  children,
  className = '',
  techStack = [],
  liveUrl,
  githubUrl,
  featured = false,
  status,
  year,
  locked = false,
  quote,
  quoteAuthor,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className={className}
    >
      <div
        className={`relative group h-full overflow-hidden rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/[0.05] ${
          featured ? 'p-8 md:p-10' : 'p-6 md:p-7'
        }`}
      >
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Content */}
        <div className="relative flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl border border-accent/25 bg-accent/[0.06] transition-colors duration-300 group-hover:bg-accent/10">
                <Icon className={`${featured ? 'w-6 h-6' : 'w-5 h-5'} text-accent`} />
              </div>
              {(status || year) && (
                <div className="flex items-center gap-2">
                  {status && (
                    <span
                      className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full border ${statusStyle[status].className}`}
                    >
                      {statusStyle[status].label}
                    </span>
                  )}
                  {year && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      {year}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center gap-1.5">
              {locked && (
                <div className="p-2 rounded-lg text-muted-foreground/60" title="Under NDA. Reach out for a walkthrough.">
                  <Lock className="w-4 h-4" />
                </div>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                  aria-label={`${title} GitHub repository`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                  aria-label={`${title} live demo`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Title + description */}
          <div className="flex-1 space-y-3">
            <h3
              className={`${
                featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
              } font-bold text-foreground leading-tight`}
            >
              {title}
            </h3>
            <p className={`text-sm ${featured ? 'md:text-base' : ''} text-muted-foreground leading-relaxed`}>
              {description}
            </p>
            {quote && (
              <figure className="pt-1">
                <blockquote className="border-l-2 border-accent/40 pl-4 text-sm text-foreground/80 italic leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                {quoteAuthor && (
                  <figcaption className="pl-4 pt-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground not-italic">
                    {quoteAuthor}
                  </figcaption>
                )}
              </figure>
            )}
            {children && <div className="pt-1">{children}</div>}
          </div>

          {/* Tech stack */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-5 mt-5 border-t border-border/60">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] rounded-md font-mono text-muted-foreground bg-secondary/50 border border-border/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
