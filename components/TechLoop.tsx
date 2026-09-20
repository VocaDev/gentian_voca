"use client";

import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDotnet,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiVite,
  SiBootstrap,
  SiFigma,
  SiNetlify,
  SiNpm,
  SiClaude,
  SiClaudecode,
} from "react-icons/si";
import { LogoLoop, type LogoItem } from "./LogoLoop";

/** Everything here is on the CV. Rough order: languages, front end, back end, data, tools. */
const tech: LogoItem[] = [
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiDotnet />, title: ".NET and C#", href: "https://dotnet.microsoft.com" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/docs/Web/HTML" },
  { node: <SiCss />, title: "CSS", href: "https://developer.mozilla.org/docs/Web/CSS" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiPandas />, title: "pandas", href: "https://pandas.pydata.org" },
  { node: <SiNumpy />, title: "NumPy", href: "https://numpy.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiRender />, title: "Render", href: "https://render.com" },
  { node: <SiVite />, title: "Vite", href: "https://vite.dev" },
  { node: <SiNpm />, title: "npm", href: "https://www.npmjs.com" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
  { node: <SiNetlify />, title: "Netlify", href: "https://www.netlify.com" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiClaude />, title: "Claude", href: "https://claude.com" },
  { node: <SiClaudecode />, title: "Claude Code", href: "https://claude.com/product/claude-code" },
];

/**
 * The stack, as a loop travelling right to left.
 * Monochrome at rest, colour and a small lift on hover, paused while hovered,
 * and frozen entirely under prefers-reduced-motion.
 */
export function TechLoop() {
  return (
    <LogoLoop
      logos={tech}
      speed={55}
      direction="left"
      logoHeight={26}
      gap={46}
      hoverSpeed={0}
      scaleOnHover
      fadeOut
      ariaLabel="Technologies I work with"
    />
  );
}
