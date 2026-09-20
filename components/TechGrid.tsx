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
  SiNpm,
  SiBootstrap,
  SiNetlify,
  SiFigma,
  SiClaude,
  SiClaudecode,
} from "react-icons/si";
import type { ReactNode } from "react";

type Tech = { node: ReactNode; title: string; href: string };

/**
 * 25 marks, so the grid resolves to an exact 5 x 5 on desktop.
 * Rough order: languages, front end, back end, data, tools.
 */
const tech: Tech[] = [
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiDotnet />, title: "C#", href: "https://dotnet.microsoft.com" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/docs/Web/HTML" },

  { node: <SiCss />, title: "CSS", href: "https://developer.mozilla.org/docs/Web/CSS" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss />, title: "Tailwind", href: "https://tailwindcss.com" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },

  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiPandas />, title: "pandas", href: "https://pandas.pydata.org" },
  { node: <SiNumpy />, title: "NumPy", href: "https://numpy.org" },

  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiRender />, title: "Render", href: "https://render.com" },
  { node: <SiNetlify />, title: "Netlify", href: "https://www.netlify.com" },

  { node: <SiVite />, title: "Vite", href: "https://vite.dev" },
  { node: <SiNpm />, title: "npm", href: "https://www.npmjs.com" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiClaude />, title: "Claude", href: "https://claude.com" },
  { node: <SiClaudecode />, title: "Claude Code", href: "https://claude.com/product/claude-code" },
];

/**
 * The stack as a plain table: hairline rules between cells, one mark per cell,
 * named underneath. No motion, so it reads the same for everyone.
 */
export function TechGrid() {
  return (
    <ul
      aria-label="Technologies I work with"
      className="plate m-0 grid list-none grid-cols-5 gap-px overflow-hidden bg-hairline p-0"
    >
      {tech.map((t) => (
        <li key={t.title} className="bg-plate">
          <a
            href={t.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.title}
            className="group flex h-full min-h-[84px] flex-col items-center justify-center gap-2 px-1.5 py-4 text-muted-2 no-underline transition-colors duration-[160ms] hover:bg-surface-2 hover:text-ink md:min-h-[104px] md:gap-2.5"
          >
            <span aria-hidden="true" className="text-[20px] leading-none md:text-[24px]">
              {t.node}
            </span>
            <span className="text-center font-mono text-[9px] leading-tight tracking-tight md:text-[11px]">
              {t.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
