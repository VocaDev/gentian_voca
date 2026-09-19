'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Send, Phone } from 'lucide-react';

const links = [
  {
    name: 'Email',
    href: 'mailto:gentianvoca@gmail.com',
    handle: 'gentianvoca@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gentian-voca-578943322/',
    handle: '/in/gentian-voca',
    icon: Linkedin,
    external: true,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/VocaDev',
    handle: '@VocaDev',
    icon: Github,
    external: true,
  },
  {
    name: 'Phone',
    href: 'tel:+38349206565',
    handle: '+383 49 206 565',
    icon: Phone,
    external: false,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="section-divider mb-24" />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-secondary/40 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Open to junior SWE roles for 2027
            </span>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-4">
            / contact
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight mb-5">
            Let&apos;s <span className="accent-gradient">build</span> something.
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            Hiring, collaborating, or just curious about LokalWeb? Reach out.
            Based in Kosovo, open to remote and EU.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          >
            <a
              href="mailto:gentianvoca@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-light text-accent-foreground font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              <Send className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Say hello
              <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-border hover:border-accent/40 text-foreground hover:text-accent font-semibold text-sm transition-all duration-300 hover:bg-accent/5"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Link grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 + index * 0.06 }}
              whileHover={{ y: -2 }}
              className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/15 transition-colors">
                  <link.icon className="w-4 h-4 text-accent" />
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider font-mono text-muted-foreground mb-0.5">
                    {link.name}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {link.handle}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
