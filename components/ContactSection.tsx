'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';

const socialLinks = [
    {
        name: 'GitHub',
        // TODO: Replace with your real GitHub URL
        href: 'https://github.com/VocaDev',
        icon: Github,
        description: 'Check out my code',
    },
    {
        name: 'LinkedIn',
        // TODO: Replace with your real LinkedIn URL
        href: 'https://www.linkedin.com/in/gentian-voca-578943322/',
        icon: Linkedin,
        description: 'Connect professionally',
    },
    {
        name: 'Email',
        // TODO: Replace with your real email
        href: 'mailto:gentianvoca@gmail.com',
        icon: Mail,
        description: 'Drop me a message',
    },
];

export function ContactSection() {
    return (
        <section id="contact" className="relative py-20 md:py-32 px-6 md:px-12 bg-zinc-950">
            <div className="section-divider mb-20" />
            <div className="max-w-4xl mx-auto text-center">
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm text-emerald-400 font-medium">Available for opportunities</span>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4 mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-zinc-50">
                        Let&apos;s <span className="accent-gradient">Work Together</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                        I&apos;m actively looking for data engineering and software development roles.
                        If you think I&apos;d be a good fit for your team, I&apos;d love to hear from you.
                    </p>
                </motion.div>

                {/* Primary CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    {/* TODO: Replace with your real email */}
                    <a
                        href="mailto:your.email@example.com"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 group"
                    >
                        <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Say Hello
                        <ArrowUpRight className="w-5 h-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </a>
                </motion.div>

                {/* Social links grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            target={link.name !== 'Email' ? '_blank' : undefined}
                            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
                        >
                            <link.icon className="w-7 h-7 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                            <div>
                                <div className="text-zinc-200 font-semibold group-hover:text-emerald-300 transition-colors">
                                    {link.name}
                                </div>
                                <div className="text-sm text-zinc-500 mt-1">{link.description}</div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
