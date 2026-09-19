'use client';

import { motion } from 'framer-motion';
import { Database, Wrench, Palette, Braces, LineChart, Boxes } from 'lucide-react';
import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiPostgresql,
  SiDotnet,
  SiTailwindcss,
  SiShadcnui,
  SiBootstrap,
  SiSupabase,
  SiVercel,
  SiNodedotjs,
  SiJupyter,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { SkillIcon } from './SkillIcon';

const skillCategories = [
  {
    title: 'Frontend',
    kicker: '01',
    icon: Braces,
    skills: [
      { name: 'Next.js 14', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
    ],
  },
  {
    title: 'Styling & UI',
    kicker: '02',
    icon: Palette,
    skills: [
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'shadcn/ui', icon: SiShadcnui },
      { name: 'Bootstrap', icon: SiBootstrap },
    ],
  },
  {
    title: 'Languages',
    kicker: '03',
    icon: Boxes,
    skills: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: SiPython },
      { name: 'C#', icon: SiDotnet },
      { name: 'SQL', icon: Database },
    ],
  },
  {
    title: 'Backend & Data',
    kicker: '04',
    icon: Database,
    skills: [
      { name: 'Supabase', icon: SiSupabase },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'REST APIs', icon: Wrench },
    ],
  },
  {
    title: 'Data Science',
    kicker: '05',
    icon: LineChart,
    skills: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Jupyter', icon: SiJupyter },
    ],
  },
  {
    title: 'Tools & Workflow',
    kicker: '06',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGit },
      { name: 'Vercel', icon: SiVercel },
      { name: 'VS Code', icon: VscCode },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-3">
            / stack
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            The tools I reach for.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Grouped honestly. No percentages, no fake proficiency bars. These are
            what I actually use in production and what I&apos;m comfortable
            debugging at 2am.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.06 }}
              className="p-6 rounded-2xl border border-border bg-card/40 hover:border-accent/25 transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono text-accent/70 tracking-wider">
                  {category.kicker}
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillIcon
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
