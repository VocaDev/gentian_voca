import type { Metadata } from "next";
import { Ledger, SmallerThings } from "@/components/Ledger";
import { PageHeader, PageNext } from "@/components/Page";
import { ledger, smallerThings } from "@/content/work";

const words = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const say = (n: number) => words[n] ?? String(n);

const title = "Work";
const description =
  "Two case studies, a paid client rebuild and a website-as-a-service prototype, followed by hackathon prototypes, a browser extension and smaller builds by Gentian Voca.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: { title, description, url: "/work" },
  twitter: { title, description },
};

export default function WorkPage() {
  const cases = say(ledger.length);
  return (
    <>
      <PageHeader
        title="Work"
        lede={`${cases.charAt(0).toUpperCase()}${cases.slice(1)} case studies, then ${say(smallerThings.length)} smaller projects.`}
      />

      <section aria-label="Case studies" className="container-x mt-14 md:mt-20">
        <Ledger />
      </section>

      <section aria-label="Smaller projects" className="container-x mt-12 md:mt-16">
        <SmallerThings />
      </section>

      <PageNext href="/background" label="Background" />
    </>
  );
}
