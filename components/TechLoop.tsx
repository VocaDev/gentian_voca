"use client";

import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiPython,
  SiNodedotjs,
  SiGit,
  SiVercel,
} from "react-icons/si";
import { LogoLoop, type LogoItem } from "./LogoLoop";

const tech: LogoItem[] = [
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
];

/** The stack, as a slow monochrome loop. Colour only on hover; frozen under reduced motion. */
export function TechLoop() {
  return (
    <LogoLoop
      logos={tech}
      speed={26}
      direction="left"
      logoHeight={24}
      gap={44}
      hoverSpeed={0}
      scaleOnHover
      fadeOut
      ariaLabel="Technologies I work with"
    />
  );
}
