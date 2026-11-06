import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHeader, PageNext } from "@/components/Page";
import { InstitutionMark } from "@/components/InstitutionMark";
import { credentials, education, experience } from "@/content/background";

const title = "Background";
const description =
  "Experience, education and certificates of Gentian Voca: automations and internal software at Petrol Company, and Computer Science & Engineering at UMIB.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/background" },
  openGraph: { title, description, url: "/background" },
  twitter: { title, description },
};

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-hairline pt-6 md:grid md:grid-cols-[9rem_minmax(0,1fr)] md:gap-8 md:pt-8">
      <h2 className="label m-0 md:pt-1">{label}</h2>
      <div className="mt-5 md:mt-0">{children}</div>
    </div>
  );
}

export default function BackgroundPage() {
  return (
    <>
      <PageHeader
        title="Background"
        lede="I work while I study: automations and internal software at Petrol Company, and year three of Computer Science & Engineering at UMIB."
      />

      <div className="container-x mt-14 space-y-12 md:mt-20 md:space-y-16">
        <Block label="Experience">
          <ul className="m-0 list-none p-0">
            {experience.map((e) => (
              <li
                key={e.org}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-1 border-t border-hairline py-5 first:border-t-0 first:pt-0 md:grid-cols-[auto_minmax(0,1fr)_11rem] md:gap-x-6"
              >
                <span className="row-span-3">
                  <InstitutionMark src={e.logo} name={e.org} monogram={e.monogram} />
                </span>
                <p className="m-0 text-[15px] leading-snug md:col-start-2 md:row-start-1">
                  <span className="font-medium text-ink">{e.role}</span>
                  <span className="text-muted">, {e.org}</span>
                </p>
                <p className="m-0 font-mono text-[11px] leading-relaxed text-muted-2 tnum md:col-start-3 md:row-start-1 md:row-span-2 md:text-right">
                  {e.when}
                  <span className="md:hidden"> · </span>
                  <span className="md:block">{e.where}</span>
                </p>
                <p className="m-0 mt-0.5 max-w-[62ch] text-[14px] leading-relaxed text-muted md:col-start-2 md:row-start-2">
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
                className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-1 border-t border-hairline py-5 first:border-t-0 first:pt-0 md:grid-cols-[auto_minmax(0,1fr)_11rem] md:gap-x-6"
              >
                <span className="row-span-3 md:row-span-3">
                  <InstitutionMark src={e.logo} name={e.org} monogram={e.monogram} />
                </span>
                <p className="m-0 text-[15px] leading-snug md:col-start-2 md:row-start-1">
                  <span className="font-medium text-ink">{e.role}</span>
                  <span className="text-muted">, {e.org}</span>
                </p>
                <p className="m-0 font-mono text-[11px] leading-relaxed text-muted-2 tnum md:col-start-3 md:row-start-1 md:text-right">
                  {e.when}
                </p>
                <p className="m-0 mt-0.5 text-[14px] leading-relaxed text-muted md:col-start-2 md:row-start-2">
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
                className="grid gap-x-6 gap-y-0.5 border-t border-hairline py-3.5 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1fr)_11rem]"
              >
                <p className="m-0 text-[14.5px] leading-snug">
                  <span className="text-ink">{c.what}</span>
                  <span className="text-muted">, {c.who}</span>
                </p>
                <p className="m-0 font-mono text-[11px] text-muted-2 tnum md:text-right">{c.when}</p>
              </li>
            ))}
          </ul>
        </Block>

      </div>

      <PageNext href="/#contact" label="Write to me" />
    </>
  );
}
