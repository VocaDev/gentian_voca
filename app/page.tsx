import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { BeforeAfter } from "@/components/BeforeAfter";
import { kontinuumPairs } from "@/content/kontinuum";
import { FactsStrip } from "@/components/FactsStrip";
import { Ledger, SmallerThings } from "@/components/Ledger";
import { IdentityPlate } from "@/components/IdentityPlate";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const stackLine = "TypeScript · Next.js · React · Supabase / PostgreSQL · Python · Albanian · English (C1)";

const now = [
  {
    when: "October 2026",
    what: "Semester 5 at UMIB starts: computer networks, mobile development, database management, information security, big data.",
  },
  {
    when: "Petrol Company",
    what: "The internal systems are built and in daily use. My work there now is maintenance and small improvements.",
  },
  {
    when: "kontinuum.biz",
    what: "Live since 15 September. I look after the hosting and the updates.",
  },
  {
    when: "2027",
    what: "Open to junior full-stack roles and internships, in Kosovo, the EU or remote.",
  },
];

const experience = [
  {
    role: "Software Development & Digitalisation Assistant",
    org: "Petrol Company",
    when: "Apr 2026 – present",
    where: "Fushë Kosovë, Kosovo",
    note: "Internal systems for a national fuel retailer, in daily use across 30 retail stations. Row 02 above.",
  },
  {
    role: "Freelance web developer",
    org: "Atelier Kontinuum",
    when: "Sep 2026 – present",
    where: "Balzhausen, Germany · remote",
    note: "kontinuum.biz: audit, rebuild, migration, and the care that follows.",
  },
  {
    role: "Data Science & Machine Learning intern",
    org: "TecTigon Academy",
    when: "Nov 2025 – Feb 2026",
    where: "Prishtinë, Kosovo",
    note: "Data cleaning and exploratory analysis with Pandas, a baseline sales-forecasting model, visual reports delivered in agile sprints. Reference letter from the CEO.",
  },
];

const education = [
  {
    role: "BSc Computer Science & Engineering",
    org: "University of Mitrovica “Isa Boletini”",
    when: "2024 – 2027, expected",
    note: "GPA 9.20 / 10. Third year.",
  },
  {
    role: "High school, social sciences",
    org: "Gjimnazi “Frang Bardhi”, Mitrovicë",
    when: "2021 – 2024",
    note: "5.0 / 5.0.",
  },
];

const credentials = [
  { what: "Cambridge English C1 Advanced, grade Excellent", who: "The Cambridge School, Mitrovicë", when: "2023" },
  { what: "International Cybersecurity Defense Challenge, blue team", who: "RIT Kosovo × Iowa State University", when: "2026" },
  { what: "DigiCamp & Digital Skills Festival hackathon, MVP award (top 5)", who: "ITP Prizren", when: "2025" },
  { what: "Python for Data Science", who: "TecTigon Academy", when: "2026" },
  { what: "Web Design Basics: HTML, CSS, JavaScript", who: "JCoders Academy", when: "2024" },
];

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="md:grid md:grid-cols-[5.5rem_minmax(0,1fr)] md:gap-8">
      <h3 className="m-0 font-mono text-[12px] uppercase tracking-wide text-muted-2 md:pt-1">{label}</h3>
      <div className="mt-3 md:mt-0">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Identity: a statement, then the identity plate as one object */}
      <section className="desk-light" aria-labelledby="identity">
        <div className="container-x pb-14 pt-12 md:pb-20 md:pt-20">
          <p className="label m-0">
            {site.role} · {site.location}
          </p>
          <h1
            id="identity"
            className="mt-5 max-w-[24ch] text-[clamp(2.25rem,1.55rem+2vw,3.375rem)] font-medium leading-[1.06] tracking-[-0.022em]"
          >
            {site.headline}
          </h1>
          <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.55] text-muted md:text-[19px]">
            Third-year Computer Science &amp; Engineering student at UMIB, 9.20 out of 10. By day I build
            internal systems at Petrol Company, a national fuel retailer. On the side I build websites
            for small businesses, most recently for a painter in Bavaria.
          </p>
          <p className="label m-0 mt-5 normal-case tracking-normal">{stackLine}</p>
          <div className="mt-10 md:mt-12">
            <IdentityPlate />
          </div>
        </div>
      </section>

      {/* 01 · What changed */}
      <Section
        id="change"
        index="01"
        title="What changed"
        lede="Harald Wicht is a mineralogist who paints. His website was built for neither."
      >
        <BeforeAfter
          priority
          pairs={kontinuumPairs}
          caption="kontinuum.biz for Atelier Kontinuum, Balzhausen, Germany. Client work: brief 1 September 2026, live 15 September 2026. Both states captured at the same viewport, nothing retouched."
        />
        <div className="mt-8 md:mt-10">
          <FactsStrip
            columns={3}
            facts={[
              { value: "41 → 1.5 MB", label: "gallery page, every work loaded" },
              { value: "2 weeks", label: "from brief to launch" },
              { value: "224 → 0", label: "accessibility violations, axe-core" },
            ]}
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/work/kontinuum" className="proof">
            Read the Kontinuum case <ArrowRight />
          </Link>
          <a href="https://kontinuum.biz" className="proof" target="_blank" rel="noopener">
            kontinuum.biz <ArrowUpRight />
          </a>
        </div>
      </Section>

      {/* 02 · Work */}
      <Section
        id="work"
        index="02"
        title="Work"
        lede="Three things that changed something for someone, and a list of smaller ones."
        className="mt-16 md:mt-24"
      >
        <Ledger />
        <div className="mt-10 md:mt-14">
          <SmallerThings />
        </div>
      </Section>

      {/* 03 · Now */}
      <Section id="now" index="03" title="Now" lede="September 2026." className="mt-16 md:mt-24">
        <dl className="m-0 grid gap-x-8 gap-y-1.5 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-y-5">
          {now.map((n) => (
            <Fragment key={n.when}>
              <dt className="font-mono text-[13px] text-muted-2 tnum">{n.when}</dt>
              <dd className="m-0 mb-3 max-w-[62ch] text-[16px] leading-relaxed text-ink md:mb-0">
                {n.what}
              </dd>
            </Fragment>
          ))}
        </dl>
      </Section>

      {/* 04 · Background */}
      <Section id="background" index="04" title="Background" className="mt-16 md:mt-24">
        <div className="space-y-10 md:space-y-12">
          <Block label="Experience">
            <ul className="m-0 list-none p-0">
              {experience.map((e) => (
                <li
                  key={e.org}
                  className="grid gap-1 border-t border-hairline py-4 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1fr)_12rem] md:gap-6"
                >
                  <div>
                    <p className="m-0 text-[16px] leading-snug">
                      <span className="font-medium text-ink">{e.role}</span>
                      <span className="text-muted">, {e.org}</span>
                    </p>
                    <p className="m-0 mt-1.5 max-w-[60ch] text-[14px] leading-relaxed text-muted">{e.note}</p>
                  </div>
                  <p className="m-0 font-mono text-[13px] leading-relaxed text-muted-2 tnum md:text-right">
                    {e.when}
                    <br />
                    {e.where}
                  </p>
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Education">
            <ul className="m-0 list-none p-0">
              {education.map((e) => (
                <li
                  key={e.org}
                  className="grid gap-1 border-t border-hairline py-4 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1fr)_12rem] md:gap-6"
                >
                  <div>
                    <p className="m-0 text-[16px] leading-snug">
                      <span className="font-medium text-ink">{e.role}</span>
                      <span className="text-muted">, {e.org}</span>
                    </p>
                    <p className="m-0 mt-1.5 text-[14px] text-muted">{e.note}</p>
                  </div>
                  <p className="m-0 font-mono text-[13px] leading-relaxed text-muted-2 tnum md:text-right">{e.when}</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Credentials">
            <ul className="m-0 list-none p-0">
              {credentials.map((c) => (
                <li
                  key={c.what}
                  className="grid gap-1 border-t border-hairline py-3 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1fr)_12rem] md:gap-6"
                >
                  <p className="m-0 text-[15px] leading-snug">
                    <span className="text-ink">{c.what}</span>
                    <span className="text-muted">, {c.who}</span>
                  </p>
                  <p className="m-0 font-mono text-[13px] text-muted-2 tnum md:text-right">{c.when}</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block label="How I work">
            <p className="m-0 max-w-[60ch] text-[16px] leading-[1.65] text-ink">
              Most of what I have built started as someone&rsquo;s spreadsheet. I like to sit with the
              person who owns the problem before I touch the code, and I like handing over something
              they can run. TypeScript most days, Python when there is data, Claude beside me for all
              of it, and I read everything it writes before it ships. Albanian and English.
            </p>
          </Block>
        </div>
      </Section>

      {/* 05 · Contact */}
      <Section
        id="contact"
        index="05"
        title="Write to me"
        lede="Hiring for 2027, or have a website that deserves better? Email is the fastest way to reach me. I answer in English or Albanian."
        className="mt-16 pb-20 md:mt-24 md:pb-28"
      >
        <dl className="m-0 grid gap-x-8 gap-y-1.5 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-y-4">
          <dt className="font-mono text-[13px] text-muted-2">Email</dt>
          <dd className="m-0 mb-3 md:mb-0">
            <a className="link text-[17px] text-ink md:text-[18px]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </dd>
          <dt className="font-mono text-[13px] text-muted-2">Phone</dt>
          <dd className="m-0 mb-3 md:mb-0">
            <a className="link text-[16px] tnum" href={site.phoneHref}>
              {site.phone}
            </a>
          </dd>
          <dt className="font-mono text-[13px] text-muted-2">LinkedIn</dt>
          <dd className="m-0 mb-3 md:mb-0">
            <a className="link text-[16px]" href={site.links.linkedin} rel="me noopener" target="_blank">
              linkedin.com/in/gentianvoca
            </a>
          </dd>
          <dt className="font-mono text-[13px] text-muted-2">GitHub</dt>
          <dd className="m-0 mb-3 md:mb-0">
            <a className="link text-[16px]" href={site.links.github} rel="me noopener" target="_blank">
              github.com/VocaDev
            </a>
          </dd>
          <dt className="font-mono text-[13px] text-muted-2">CV</dt>
          <dd className="m-0">
            <a className="link text-[16px]" href={site.links.cv} target="_blank" rel="noopener">
              PDF, two pages
            </a>
          </dd>
        </dl>
      </Section>
    </>
  );
}
