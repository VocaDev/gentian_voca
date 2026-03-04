'use client';

import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Coffee } from 'lucide-react';

export function AboutSection() {
    return (
        <section id="about" className="relative py-20 md:py-32 px-6 md:px-12 bg-zinc-950">
            <div className="section-divider mb-20" />
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: About text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-2">
                                About <span className="accent-gradient">Me</span>
                            </h2>
                            <div className="w-16 h-1 bg-emerald-500 rounded-full mt-4" />
                        </div>

                        {/* TODO: Update this paragraph with your actual story */}
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            I&apos;m a 2nd year Computer Science student with a passion for turning raw data into
                            actionable insights. Currently interning as a Data Engineer, I specialize in building
                            ETL pipelines, training ML models and crafting polished user interfaces
                            that make complex data accessible.
                        </p>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            I believe great engineering is invisible — the best data pipelines just work,
                            the best predictions feel obvious, and the best UIs get out of your way.
                            I&apos;m actively seeking opportunities where I can grow and contribute to impactful
                            data-driven projects.
                        </p>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                { value: '10+', label: 'Projects Built' },
                                { value: '2M+', label: 'Records Processed' },
                                { value: '15+', label: 'Technologies' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center p-4 rounded-lg border border-zinc-800 bg-zinc-900/30"
                                >
                                    <div className="text-2xl md:text-3xl font-bold accent-gradient">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-zinc-500 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Terminal-style card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden shadow-2xl shadow-emerald-500/5">
                            {/* Terminal header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                                <span className="ml-3 text-xs text-zinc-500 font-mono">voca_profile.json</span>
                            </div>

                            {/* Terminal content */}
                            <div className="p-6 font-mono text-sm leading-relaxed">
                                <div className="text-zinc-500">{'{'}</div>
                                <div className="ml-4">
                                    <span className="text-emerald-400">&quot;name&quot;</span>
                                    <span className="text-zinc-500">: </span>
                                    <span className="text-amber-300">&quot;Gentian Voca&quot;</span>
                                    <span className="text-zinc-500">,</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-emerald-400">&quot;role&quot;</span>
                                    <span className="text-zinc-500">: </span>
                                    <span className="text-amber-300">&quot;Data Engineering Intern&quot;</span>
                                    <span className="text-zinc-500">,</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-emerald-400">&quot;location&quot;</span>
                                    <span className="text-zinc-500">: </span>
                                    <span className="text-amber-300">&quot;Kosovo, Mitrovica&quot;</span>
                                    <span className="text-zinc-500">,</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-emerald-400">&quot;education&quot;</span>
                                    <span className="text-zinc-500">: </span>
                                    <span className="text-amber-300">&quot;CSE @ Isa Boletini University&quot;</span>
                                    <span className="text-zinc-500">,</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-emerald-400">&quot;interests&quot;</span>
                                    <span className="text-zinc-500">: [</span>
                                </div>
                                <div className="ml-8">
                                    <span className="text-amber-300">&quot;ETL Pipelines&quot;</span>
                                    <span className="text-zinc-500">, </span>
                                    <span className="text-amber-300">&quot;ML Models&quot;</span>
                                    <span className="text-zinc-500">,</span>
                                </div>
                                <div className="ml-8">
                                    <span className="text-amber-300">&quot;Data Visualization&quot;</span>
                                    <span className="text-zinc-500">, </span>
                                    <span className="text-amber-300">&quot;Web Dev&quot;</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-zinc-500">],</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-emerald-400">&quot;available_for_hire&quot;</span>
                                    <span className="text-zinc-500">: </span>
                                    <span className="text-amber-300">True</span>
                                </div>
                                <div className="text-zinc-500">{'}'}</div>
                                <div className="mt-2 flex items-center">
                                    <span className="terminal-cursor ml-2 inline-block w-2 h-4 bg-emerald-400" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute -inset-4 bg-emerald-500/5 rounded-2xl blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
