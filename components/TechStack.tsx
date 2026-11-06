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
  SiClaudecode,
} from "react-icons/si";
import type { ReactNode } from "react";

type Tech = { icon: ReactNode; name: string };

/**
 * The same 20 marks as before (every one is on the CV except Claude Code, which is
 * used daily), now named and grouped the way the CV groups them. Names are always
 * visible: a phone has no hover, and a recruiter scanning for "Next.js" reads words,
 * not logos.
 */
const groups: { label: string; items: Tech[] }[] = [
  {
    label: "Languages",
    items: [
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiDotnet />, name: "C#" },
    ],
  },
  {
    label: "Front end",
    items: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss />, name: "CSS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
  {
    label: "Back end & data",
    items: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiSupabase />, name: "Supabase" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiPandas />, name: "pandas" },
      { icon: <SiNumpy />, name: "NumPy" },
    ],
  },
  {
    label: "Tools",
    items: [
      { icon: <SiGit />, name: "Git" },
      { icon: <SiGithub />, name: "GitHub" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiRender />, name: "Render" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiClaudecode />, name: "Claude Code" },
    ],
  },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
      {groups.map((g) => (
        <div key={g.label}>
          <h3 className="label m-0">{g.label}</h3>
          <ul className="m-0 mt-4 list-none border-t border-hairline p-0 pt-4">
            {g.items.map((t) => (
              <li key={t.name} className="flex items-center gap-3 py-[7px] text-[15px] leading-snug text-ink">
                <span aria-hidden="true" className="flex w-5 shrink-0 justify-center text-[18px] leading-none text-muted-2">
                  {t.icon}
                </span>
                {t.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
