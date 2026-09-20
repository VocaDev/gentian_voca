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
 * The stack as bare marks on the page: no plate, no rules, no cells.
 * Five across, so it still resolves to an even 5 x 5. The name appears on hover
 * and on keyboard focus; it is always on the link for screen readers.
 */
export function TechGrid() {
  return (
    <ul
      aria-label="Technologies I work with"
      className="m-0 grid list-none grid-cols-5 gap-x-2 gap-y-7 p-0 pt-7 md:gap-y-9"
    >
      {tech.map((t) => (
        <li key={t.title} className="flex justify-center">
          <a
            href={t.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.title}
            className="group relative flex items-center justify-center rounded-md p-2 text-muted-2 no-underline transition-colors duration-[160ms] hover:text-ink focus-visible:text-ink"
          >
            <span aria-hidden="true" className="text-[24px] leading-none md:text-[30px]">
              {t.node}
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-md border border-hairline bg-plate px-2 py-1 font-mono text-[10px] leading-none text-ink opacity-0 transition-opacity duration-[160ms] group-hover:opacity-100 group-focus-visible:opacity-100 md:text-[11px]"
            >
              {t.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
