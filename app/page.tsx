import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Ledger, SmallerThings } from "@/components/Ledger";
import { IdentityPlate } from "@/components/IdentityPlate";
import { TechLoop } from "@/components/TechLoop";
import { InstitutionMark } from "@/components/InstitutionMark";
import { logoIfPresent } from "@/lib/logos";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const experience = [
  {
    role: "Software Development & Digitalisation Assistant",
    org: "Petrol Company",
    when: "Apr 2026 – present",
    where: "Fushë Kosovë, Kosovo",
    logo: logoIfPresent("petrol.png"),
    monogram: "PC",
    note: "Internal software used daily by leadership, HQ teams and field managers across a national network of 30+ retail stations. Manual workflows replaced with structured systems running in production, pairing business-process analysis with full-stack development.",
  },
  {
    role: "Freelance web developer",
    org: "Atelier Kontinuum",
    when: "Sep 2026 – present",
    where: "Balzhausen, Germany",
    logo: logoIfPresent("kontinuum.png"),
    monogram: "AK",
    note: "kontinuum.biz: audit, rebuild, migration, and the care that follows.",
  },
  {
    role: "Data Science & Machine Learning intern",
    org: "TecTigon Academy",
    when: "Nov 2025 – Feb 2026",
    where: "Prishtinë, Kosovo",
    logo: logoIfPresent("tectigon.png"),
    monogram: "TA",
    note: "Data cleaning and exploratory analysis with Pandas, a baseline sales-forecasting model, visual reports delivered in agile sprints. Reference letter from the CEO.",
  },
];

const education = [
  {
    role: "BSc Computer Science & Engineering",
    org: "University of Mitrovica “Isa Boletini”",
    when: "2024 – 2027, expected",
    note: "GPA 9.20 / 10. Third year.",
    logo: logoIfPresent("umib.png"),
    monogram: "UM",
  },
  {
    role: "Data Science course",
    org: "TecTigon Academy, Prishtinë",
    when: "Oct 2025 – Jan 2026",
    note: "Python, Pandas and applied data analysis.",
    logo: logoIfPresent("tectigon.png"),
    monogram: "TA",
  },
  {
    role: "High school, social sciences",
    org: "Gjimnazi “Frang Bardhi”, Mitrovicë",
    when: "2021 – 2024",
    note: "5.0 / 5.0.",
    logo: logoIfPresent("frang-bardhi.png"),
    monogram: "FB",
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
    <div className="md:grid md:grid-cols-[7rem_minmax(0,1fr)] md:gap-8">
      <h3 className="label m-0 md:pt-1">{label}</h3>
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
            Third-year Computer Science &amp; Engineering student at UMIB.
            <br />
            By day I build internal systems @ Petrol Company. By night I build websites for small
            businesses.
          </p>
          <div className="mt-9 md:mt-11">
            <IdentityPlate />
          </div>
        </div>
        <div className="mt-10 pb-6 md:mt-12 md:pb-8">
          <TechLoop />
        </div>
      </section>

      {/* 01 · Work */}
      <Section
        id="work"
        index="01"
        title="Work"
      >
        <Ledger />
        <div className="mt-10 md:mt-14">
          <SmallerThings />
        </div>
      </Section>

      {/* 02 · Background */}
      <Section id="background" index="02" title="Background" className="mt-16 md:mt-24">
        <div className="space-y-10 md:space-y-12">
          <Block label="Experience">
            <ul className="m-0 list-none p-0">
              {experience.map((e) => (
                <li
                  key={e.org}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-1 border-t border-hairline py-4 first:border-t-0 first:pt-0 md:grid-cols-[auto_minmax(0,1fr)_11rem] md:gap-x-6"
                >
                  <span className="row-span-3">
                    <InstitutionMark src={e.logo} name={e.org} monogram={e.monogram} />
                  </span>
                  <p className="m-0 text-[15px] leading-snug md:col-start-2 md:row-start-1">
                    <span className="font-medium text-ink">{e.role}</span>
                    <span className="text-muted">, {e.org}</span>
                  </p>
                  <p className="m-0 font-mono text-[12px] leading-relaxed text-muted-2 tnum md:col-start-3 md:row-start-1 md:row-span-2 md:text-right">
                    {e.when}
                    <span className="md:hidden"> · </span>
                    <span className="md:block">{e.where}</span>
                  </p>
                  <p className="m-0 mt-0.5 max-w-[62ch] text-[13.5px] leading-relaxed text-muted md:col-start-2 md:row-start-2">
                    {e.note}
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
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-1 border-t border-hairline py-4 first:border-t-0 first:pt-0 md:grid-cols-[auto_minmax(0,1fr)_11rem] md:gap-x-6"
                >
                  <span className="row-span-3 md:row-span-3">
                    <InstitutionMark src={e.logo} name={e.org} monogram={e.monogram} />
                  </span>
                  <p className="m-0 text-[15px] leading-snug md:col-start-2 md:row-start-1">
                    <span className="font-medium text-ink">{e.role}</span>
                    <span className="text-muted">, {e.org}</span>
                  </p>
                  <p className="m-0 font-mono text-[12px] leading-relaxed text-muted-2 tnum md:col-start-3 md:row-start-1 md:text-right">
                    {e.when}
                  </p>
                  <p className="m-0 mt-0.5 text-[13.5px] leading-relaxed text-muted md:col-start-2 md:row-start-2">
                    {e.note}
                  </p>
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Certifications">
            <ul className="m-0 list-none p-0">
              {credentials.map((c) => (
                <li
                  key={c.what}
                  className="grid gap-x-6 gap-y-0.5 border-t border-hairline py-3 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1fr)_11rem]"
                >
                  <p className="m-0 text-[14px] leading-snug">
                    <span className="text-ink">{c.what}</span>
                    <span className="text-muted">, {c.who}</span>
                  </p>
                  <p className="m-0 font-mono text-[12px] text-muted-2 tnum md:text-right">{c.when}</p>
                </li>
              ))}
            </ul>
          </Block>

        </div>
      </Section>

      {/* A full view of one idea, between the record and the invitation */}
      <section
        id="how-i-work"
        aria-labelledby="how-i-work-title"
        className="mt-16 flex min-h-[100svh] scroll-mt-16 items-center border-t border-hairline py-24 md:mt-24 md:py-32"
      >
        <div className="container-x">
          <h2 id="how-i-work-title" className="label m-0">
            How I work
          </h2>
          <p className="mt-8 max-w-[26ch] text-[clamp(1.6rem,1.05rem+2.1vw,2.6rem)] font-medium leading-[1.22] tracking-[-0.018em] text-ink md:mt-10 md:max-w-[19ch]">
            Most of what I build replaces something a person is already doing by hand.
          </p>
          <p className="mt-6 max-w-[46ch] text-[clamp(1.05rem,0.95rem+0.5vw,1.375rem)] leading-[1.5] text-muted md:mt-8">
            So I spend time with whoever owns that problem before I write anything: the requirements
            that matter are rarely the ones in the brief. Then I build the thing they can run without
            me, and I write the handover as carefully as the code.
          </p>
          <p className="label m-0 mt-8 normal-case tracking-normal md:mt-10">
            TypeScript most days, Python when there is data.
          </p>
        </div>
      </section>

      {/* 03 · Contact */}
      <Section
        id="contact"
        index="03"
        title="Write to me"
        lede="Hiring for 2027, or looking at a website that has stopped doing its job?"
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
              PDF
            </a>
          </dd>
        </dl>
      </Section>
    </>
  );
}
