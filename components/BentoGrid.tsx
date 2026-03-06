'use client';

import { ProjectCard } from './ProjectCard';
import {
  BarChart3,
  Code2,
  Database,
  Zap,
} from 'lucide-react';

export function BentoGrid() {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-6 md:px-12 bg-zinc-950">
      <div className="section-divider mb-20" />
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
            Selected <span className="accent-gradient">Work</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Projects that showcase my journey in data engineering and software development.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Featured project */}
          <ProjectCard
            title="Sales Prediction ML Engine"
            description="Engineered a predictive pipeline using Kaggle datasets, focusing on feature engineering and noise reduction to forecast e-commerce trends. Achieved 89% accuracy through systematic data cleaning and hyperparameter optimization."
            icon={BarChart3}
            techStack={['Python', 'Scikit-Learn', 'Pandas', 'Kaggle']}
            githubUrl="https://github.com/VocaDev/DataCleaningExercises"
            accentColor="emerald"
            featured
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-500">Model Accuracy</span>
                  <span className="text-emerald-400 font-mono font-bold">89%</span>
                </div>
                <div className="w-full bg-zinc-800/60 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full"
                    style={{ width: '89%' }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-500">Data Cleaning Rate</span>
                  <span className="text-emerald-400 font-mono font-bold">94%</span>
                </div>
                <div className="w-full bg-zinc-800/60 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-500/70 to-emerald-400/70 h-full rounded-full"
                    style={{ width: '94%' }}
                  />
                </div>
              </div>
            </div>
          </ProjectCard>

          {/* Regular projects */}
          <ProjectCard
            title="VocaFolders Browser Extension"
            description="Save and organize websites into folders — clean, fast, and private."
            icon={Code2}
            techStack={['Browser Extension', 'Productivity', 'Privacy-First']}
            githubUrl="https://github.com/VocaDev/VocaFolders_Browser_Extension/tree/main"
            accentColor="cyan"
          />

          <ProjectCard
            title="Barbershop Web UI"
            description="Crafted with React and Tailwind CSS, delivering a seamless booking experience with real-time updates, smooth animations, and a responsive design."
            icon={Code2}
            techStack={['React', 'Tailwind CSS', 'Vite']}
            githubUrl="https://github.com/VocaDev/Enit-s-Barber-Shop"
            accentColor="cyan"
          />

          <ProjectCard
            title="E-commerce Backend"
            description="Built a robust inventory management system with relational data integrity, transaction handling, and API endpoints for full product catalog management."
            icon={Database}
            techStack={['C#', '.NET', 'OOP']}
            githubUrl="https://github.com/VocaDev/E-commerce-Application"
            accentColor="amber"
          />

          <ProjectCard
            title="Data Engineering Internship"
            description="Currently focused on automated data cleaning, SQL optimization, and transforming raw data into business intelligence. Building ETL pipelines that process millions of records daily."
            icon={Zap}
            techStack={['SQL', 'Python', 'ETL']}
            githubUrl="https://github.com/VocaDev/Data-Engineering-Internship-Project"
            accentColor="violet"
          >
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-lg text-xs text-violet-300/80 font-medium">⚡ SQL Optimization</span>
              <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-lg text-xs text-violet-300/80 font-medium">⚡ ETL Pipelines</span>
              <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-lg text-xs text-violet-300/80 font-medium">⚡ Data Quality</span>
            </div>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}
