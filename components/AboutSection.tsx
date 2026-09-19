'use client';

import { motion } from 'framer-motion';

const facts = [
  { label: 'GPA', value: '9.20', unit: '/ 10' },
  { label: 'Year', value: '3rd', unit: 'CS & Engineering' },
  { label: 'Building', value: 'LokalWeb', unit: 'solo, on the side' },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: About text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-3">
                / about
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Building software that has to work on Monday morning.
              </h2>
            </div>

            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Third-year Computer Science and Engineering student at the
                University of Mitrovica &quot;Isa Boletini&quot;. Full-time{' '}
                <span className="text-foreground font-medium">
                  Software Development and Digitalisation Intern
                </span>{' '}
                at a national fuel company, where I build internal tools that
                leadership, HQ, and field managers rely on across 30 retail
                stations.
              </p>
              <p>
                Most of my work sits at the seam between business operations
                and code. I turn spreadsheets and chat-based coordination into
                structured web apps that need to work on Monday morning. On the
                side, I&apos;m building{' '}
                <a
                  href="#projects"
                  className="text-foreground font-medium underline decoration-accent/50 decoration-2 underline-offset-4 hover:decoration-accent transition-colors"
                >
                  LokalWeb
                </a>
                , a multi-tenant Website-as-a-Service platform for Kosovar SMBs
                like barbershops, restaurants, and clinics.
              </p>
              <p>
                Between now and my June 2027 graduation, I&apos;m looking for
                the next role. Junior full-stack software engineer, ideally
                somewhere I can keep learning at speed.
              </p>
            </div>

            {/* Real facts — no bullshit metrics */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="pt-4"
                >
                  <div className="text-xs uppercase tracking-wider text-muted-foreground/70 font-mono mb-1.5">
                    {fact.label}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-foreground">
                    {fact.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {fact.unit}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Terminal card — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 relative lg:sticky lg:top-28"
          >
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/20">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/40 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-accent/70" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">
                  gentian.json
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-5 font-mono text-[13px] leading-relaxed">
                <div className="text-muted-foreground">{'{'}</div>
                <div className="ml-4">
                  <span className="text-accent">&quot;name&quot;</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">&quot;Gentian Voca&quot;</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-accent">&quot;role&quot;</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">
                    &quot;Software Dev &amp; Digitalisation Intern&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-accent">&quot;based_in&quot;</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">&quot;Mitrovicë, Kosovo&quot;</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-accent">&quot;studying&quot;</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">
                    &quot;CS &amp; Engineering, Yr 3&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-accent">&quot;stack&quot;</span>
                  <span className="text-muted-foreground">: [</span>
                </div>
                <div className="ml-8 text-foreground">
                  &quot;Next.js&quot;<span className="text-muted-foreground">, </span>
                  &quot;TypeScript&quot;<span className="text-muted-foreground">,</span>
                </div>
                <div className="ml-8 text-foreground">
                  &quot;React&quot;<span className="text-muted-foreground">, </span>
                  &quot;Supabase&quot;<span className="text-muted-foreground">,</span>
                </div>
                <div className="ml-8 text-foreground">
                  &quot;Python&quot;<span className="text-muted-foreground">, </span>
                  &quot;C#&quot;
                </div>
                <div className="ml-4 text-muted-foreground">],</div>
                <div className="ml-4">
                  <span className="text-accent">&quot;building&quot;</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">&quot;LokalWeb&quot;</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-accent">&quot;open_to_work&quot;</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-yellow-400">true</span>
                </div>
                <div className="text-muted-foreground">{'}'}</div>
                <div className="mt-2 flex items-center">
                  <span className="text-accent">$</span>
                  <span className="terminal-cursor ml-2 inline-block w-2 h-4 bg-accent" />
                </div>
              </div>
            </div>

            {/* Subtle glow behind card */}
            <div className="absolute -inset-6 bg-accent/[0.04] rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
