'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Soft radial glows */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-accent/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 min-h-screen flex flex-col px-6 pt-28 pb-12 md:px-12 lg:px-20">
        <div className="flex-1 flex items-center max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
            {/* Left: text — 7 cols */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left order-2 lg:order-1">
              {/* Status pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full border border-border/70 bg-secondary/40 backdrop-blur-sm mb-7"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  Open to junior SWE roles for 2027
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-4xl md:text-6xl lg:text-[68px] font-bold text-foreground leading-[1.05] tracking-tight"
              >
                Software engineer building things{' '}
                <span className="accent-gradient">people actually use</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                I&apos;m Gentian. A third-year CS student in Kosovo, full-time
                software and digitalisation intern by day. On the side, I build{' '}
                <span className="text-foreground font-medium">LokalWeb</span>, a
                website builder for Kosovar small businesses.
              </motion.p>

              {/* Meta strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-muted-foreground"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent/80" />
                  Mitrovicë, Kosovo
                </span>
                <span className="text-border">•</span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accent/80" />
                  GPA <span className="font-semibold text-foreground">9.20</span>
                  <span className="text-muted-foreground/60">/ 10</span>
                </span>
                <span className="text-border">•</span>
                <span className="font-mono text-xs">
                  🇦🇱 Shqip · 🇬🇧 English (C1)
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
              >
                <a
                  href="#projects"
                  className="group px-6 py-3 rounded-xl bg-accent hover:bg-accent-light text-accent-foreground font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 flex items-center gap-2"
                >
                  View my work
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl border border-border hover:border-accent/40 text-foreground hover:text-accent font-semibold text-sm transition-all duration-300 hover:bg-accent/5"
                >
                  Get in touch
                </a>
              </motion.div>
            </div>

            {/* Right: portrait — 5 cols */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Amber glow behind portrait */}
                <div className="absolute -inset-8 bg-accent/15 rounded-[2rem] blur-3xl pointer-events-none" />
                <div className="absolute -inset-3 bg-accent/[0.08] rounded-[1.75rem] blur-2xl pointer-events-none" />

                {/* Portrait frame */}
                <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-[22rem] rounded-3xl overflow-hidden border border-border/70 shadow-2xl shadow-black/40 bg-card">
                  <Image
                    src="/images/gentian.jpeg"
                    alt="Gentian Voca"
                    fill
                    priority
                    sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                    className="object-cover"
                  />
                  {/* Subtle warm overlay to blend with the amber palette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating "now" badge on the portrait */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="absolute -bottom-3 -left-3 md:-left-5 flex items-center gap-2 px-3 py-2 rounded-xl bg-card/95 backdrop-blur-sm border border-border shadow-lg"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                      currently
                    </span>
                    <span className="text-xs text-foreground font-semibold">
                      Building LokalWeb
                    </span>
                  </div>
                </motion.div>

                {/* Signature corner tag */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -top-3 -right-3 md:-right-4 px-2.5 py-1 rounded-lg bg-accent text-accent-foreground text-[10px] font-mono font-semibold shadow-lg"
                >
                  v.2026
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center mt-10"
        >
          <a href="#about" className="group flex flex-col items-center gap-2">
            <span className="text-[10px] text-muted-foreground/70 group-hover:text-accent transition-colors uppercase tracking-[0.2em] font-mono">
              scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4 text-muted-foreground/70 group-hover:text-accent transition-colors" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
