'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/VocaDev',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gentian-voca-578943322/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:gentianvoca@gmail.com',
    icon: Mail,
  },
];

export function StatusFooter() {
  return (
    <footer className="relative py-12 md:py-16 px-6 md:px-12 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Logo & copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="font-mono text-lg font-bold text-zinc-300 mb-2">
              VOCA<span className="text-emerald-400">.</span>
            </div>
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Voca. Built with Next.js & Tailwind CSS.
            </p>
          </motion.div>

          {/* Center: Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-2.5 rounded-lg text-zinc-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Right: Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-400 transition-colors group"
            >
              Back to top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
