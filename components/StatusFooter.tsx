'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/VocaDev', icon: Github, external: true },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gentian-voca-578943322/', icon: Linkedin, external: true },
  { name: 'Email', href: 'mailto:gentianvoca@gmail.com', icon: Mail, external: false },
];

export function StatusFooter() {
  return (
    <footer className="relative py-10 md:py-12 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Logo & copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="font-mono text-sm font-semibold text-foreground mb-1">
              gentian<span className="text-accent">.</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Gentian Voca · Built with Next.js &amp; Tailwind
            </p>
          </motion.div>

          {/* Center: Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200"
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

          {/* Right: Back to top */}
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="#"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors group font-mono"
          >
            back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
