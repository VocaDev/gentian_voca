'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'glass shadow-lg shadow-black/20'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2">
                            <span className="font-mono text-xl md:text-2xl font-bold text-zinc-100 tracking-tight">
                                VOCA
                            </span>
                            <span className="terminal-cursor inline-block w-0.5 h-5 bg-emerald-400"></span>
                        </a>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}
                            {/* TODO: Replace with your actual resume file path */}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200"
                            >
                                <Download className="w-4 h-4" />
                                Resume
                            </a>
                        </div>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-lg pt-20 px-6"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-2xl text-zinc-300 hover:text-emerald-400 font-medium transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                                className="flex items-center gap-2 text-xl text-emerald-400 font-medium mt-4"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
