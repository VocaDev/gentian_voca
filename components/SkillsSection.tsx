'use client';

import { motion } from 'framer-motion';
import {
  Database,
  BarChart3,
} from 'lucide-react';
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPlotly,
  SiGit,
  SiPostgresql,
  SiDocker,
  SiDotnet,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { SkillIcon } from './SkillIcon';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: SiPython, level: 80 },
      { name: 'SQL', icon: Database, level: 75 },
      { name: 'React', icon: SiReact, level: 60 },
      { name: 'JavaScript', icon: SiJavascript, level: 70 },
      { name: 'TypeScript', icon: SiTypescript, level: 45 },
      { name: 'HTML', icon: SiHtml5, level: 90 },
      { name: 'CSS', icon: SiCss3, level: 85 },
    ],
  },
  {
    title: 'Packages & Tools',
    skills: [
      { name: 'Pandas', icon: SiPandas, level: 85 },
      { name: 'NumPy', icon: SiNumpy, level: 80 },
      { name: 'Scikit-Learn', icon: SiScikitlearn, level: 75 },
      { name: 'Matplotlib', icon: SiPlotly, level: 70 },
    ],
  },
  {
    title: 'Environment & BI',
    skills: [
      { name: 'Git', icon: SiGit, level: 85 },
      { name: 'PowerBI', icon: BarChart3, level: 75 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 80 },
      { name: 'VS Code', icon: VscCode, level: 90 },
      { name: 'Visual Studio', icon: SiDotnet, level: 80 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-32 px-6 md:px-12 bg-zinc-900/50">
      <div className="section-divider mb-20" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
            The <span className="accent-gradient">Toolkit</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Technologies and tools that power my data engineering and development work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-zinc-100 flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillIcon
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    index={skillIndex}
                    level={skill.level}
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
