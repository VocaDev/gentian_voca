import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { DeskCard, PhoneCard } from "@/components/ProfileCard";
import { WorkTiles } from "@/components/WorkTiles";
import { NowRecord } from "@/components/NowRecord";
import { ArrowRight } from "@/components/Icons";
import { TechStack } from "@/components/TechStack";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * The homepage says one thing per screen and points to where the detail lives:
 * /work for every project, /background for the full record.
 */
export default function Home() {
  return (
    <>
      {/* Identity: one statement, one line, then the card. Phones get the stacked card made to be
          screenshotted; tablet and desktop get the same card at full width. */}
      <section className="desk-light" aria-labelledby="identity">
        <div className="container-x pb-24 pt-14 md:pb-32 md:pt-24">
          <p className="label m-0">
            {site.role} · {site.location}
          </p>
          <h1 id="identity" className="display-hero mt-6 max-w-[8.6em] md:mt-8">
            {site.headline}
          </h1>
          <p className="mt-7 max-w-[50ch] text-[18px] leading-[1.55] text-muted md:mt-9 md:text-[20px]">
            By day I build internal systems @ Petrol Company. By night I build websites for small
            businesses.
          </p>
          <div className="mt-12 md:mt-16">
            <div className="md:hidden">
              <PhoneCard />
            </div>
            <div className="hidden md:block">
              <DeskCard />
            </div>
          </div>
        </div>
      </section>

      {/* 01 · Work: two pictures, one line each */}
      <Section id="work" index="01" label="Work" title="Built solo, end to end.">
        <WorkTiles />
        <p className="m-0 mt-14 md:mt-16">
          <Link href="/work" className="more text-[17px]">
            All work <ArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </Section>

      {/* 02 · Stack: what the work above is built with, named, grouped like the CV */}
      <Section
        id="stack"
        index="02"
        label="Stack"
        title="TypeScript most days, Python when there is data."
        className="mt-28 md:mt-40"
      >
        <TechStack />
      </Section>

      {/* 03 · Background: where I work and study now, then the rest of the record */}
      <Section
        id="background"
        index="03"
        label="Background"
        title="Working while I study."
        className="mt-28 md:mt-40"
      >
        <NowRecord />
        <p className="m-0 mt-12 md:mt-14">
          <Link href="/background" className="more text-[17px]">
            More: internship, courses and certificates <ArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </Section>

      {/* A full view of one idea, between the record and the invitation */}
      <section
        id="how-i-work"
        aria-labelledby="how-i-work-title"
        className="mt-24 flex min-h-[100svh] scroll-mt-16 items-center border-t border-hairline py-24 md:mt-32 md:py-32"
      >
        <div className="container-x">
          <h2 id="how-i-work-title" className="label m-0">
            How I work
          </h2>
          <p className="mt-8 text-[clamp(1.6rem,1.05rem+2.1vw,2.6rem)] font-medium leading-[1.18] tracking-[-0.018em] text-ink md:mt-10">
            Most of what I build replaces something a person is already doing by hand.
          </p>
          <p className="mt-7 text-[clamp(1.05rem,0.95rem+0.5vw,1.375rem)] leading-[1.55] text-muted md:mt-9">
            So I spend time with whoever owns that problem before I write anything: the requirements
            that matter are rarely the ones in the brief. Then I build the thing they can run without
            me, and I write the handover as carefully as the code.
          </p>
        </div>
      </section>

      {/* 04 · Contact */}
      <Section
        id="contact"
        index="04"
        label="Contact"
        title="Write to me."
        lede="Hiring for 2027, or looking at a website that has stopped doing its job?"
        className="pb-20 md:pb-28"
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
