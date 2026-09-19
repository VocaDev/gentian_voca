'use client';

import { ProjectCard } from './ProjectCard';
import { Globe2, Building2, Scissors, Layers, LineChart, Palette } from 'lucide-react';

export function BentoGrid() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-3">
            / selected work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            A handful of things I&apos;ve shipped.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Personal products, client work, and internal tools. The confidential
            entry has an NDA around it. Ask for a walkthrough if we&apos;re
            talking.
          </p>
        </div>

        {/* Real bento grid: client work and LokalWeb span 2 cols, then 2x2 below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 auto-rows-fr">
          {/* Row 1: Kontinuum (first paying client, spans both cols on md+) */}
          <ProjectCard
            className="md:col-span-2"
            title="Kontinuum · Website for a German painter"
            description="My first paying client. A full rebuild of a 2015 WordPress site for Harald Wicht, a mineralogist turned painter in Bavaria. All 81 paintings sit in a catalogue at true relative scale, each one zoomable. German and English, and an editing panel so he publishes new work and journal entries himself, with no developer in the loop. The site is generated from a template plus JSON data and deployed from GitHub, so there is no database and no CMS to maintain. I also moved the domain off the previous agency with no downtime. The full catalogue dropped from 4.0 MB to 0.9 MB, and accessibility went from 224 WCAG violations to zero."
            icon={Palette}
            techStack={['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'Render', 'Cloudflare', 'GitHub Actions']}
            liveUrl="https://kontinuum.biz"
            featured
            status="shipped"
            year="2026"
            quote="He did an excellent job! Short regarding time, focussing on my aim and reflecting my service to the visitors respectively customer."
            quoteAuthor="Harald Wicht · Atelier Kontinuum, Balzhausen"
          />

          {/* Row 2: LokalWeb (feature, spans both cols on md+) */}
          <ProjectCard
            className="md:col-span-2"
            title="LokalWeb · Multi-tenant SaaS for Kosovar SMBs"
            description="A Website-as-a-Service platform where a barbershop, restaurant, or clinic can go from nothing to a live site in ~4 minutes. Each business gets a dedicated subdomain, mobile-first design, and an optional booking flow. Guided wizard collects the essentials; either a template renders or Claude generates a bespoke site. Multi-tenant auth on Supabase, deployed on Vercel with GitHub CI/CD."
            icon={Globe2}
            techStack={['Next.js 14', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Supabase', 'Vercel', 'Claude API']}
            liveUrl="https://lokal-web-one.vercel.app/"
            featured
            status="building"
            year="2025 → now"
          />

          {/* Row 2: Petrol Company (locked) + Enit's Barber */}
          <ProjectCard
            title="Internal software tools · national fuel company"
            description="Full-stack web apps that replaced spreadsheets + chat coordination for pricing, back-office workflows, and daily operations across 30 retail stations. Business-process analysis paired with hands-on Next.js / TypeScript / Supabase development."
            icon={Building2}
            techStack={['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL']}
            status="confidential"
            year="2026 → now"
            locked
          />

          <ProjectCard
            title="Enit's Barber Shop"
            description="Professional booking site for a working Prishtinë barbershop. Online form backed by Google Sheets as a lightweight API. Full branding, legal pages, mobile-first (95% of traffic is on phones)."
            icon={Scissors}
            techStack={['React', 'CSS', 'Google Sheets API']}
            githubUrl="https://github.com/VocaDev/Enit-s-Barber-Shop"
            status="shipped"
            year="2024"
          />

          {/* Row 3: Islam Companion + Sales Forecasting */}
          <ProjectCard
            title="Islam Companion · Full-stack Web App"
            description="React frontend on Vercel, Node.js backend on Render. Half the deliverable was the debugging story: resolving production CORS between two hosting platforms end-to-end."
            icon={Layers}
            techStack={['React', 'Node.js', 'Vercel', 'Render']}
            status="shipped"
            year="2024"
          />

          <ProjectCard
            title="Sales Forecasting Model"
            description="Built during my Data Science &amp; ML internship at TecTigon Academy. Feature engineering, baseline model, benchmarked with RMSE 2.02M · MAE 1.54M for future model comparison. Matplotlib for the visualisations."
            icon={LineChart}
            techStack={['Python', 'Pandas', 'Scikit-learn', 'Matplotlib']}
            githubUrl="https://github.com/VocaDev/DataCleaningExercises"
            status="shipped"
            year="2025"
          />
        </div>
      </div>
    </section>
  );
}
