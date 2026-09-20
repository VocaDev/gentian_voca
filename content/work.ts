import type { StaticImageData } from "next/image";
import kontinuumAfter from "@/assets/kontinuum-after-home.jpg";
import kontinuumBefore from "@/assets/kontinuum-before-home.jpg";
import lokalwebLanding from "@/assets/lokalweb-landing.jpg";

export type Kind = "Client, paid" | "Side project";

export type LedgerRow = {
  index: string;
  year: string;
  title: string;
  kind: Kind;
  change: string;
  forWhom: string;
  facts?: string;
  caseHref: string;
  live?: { href: string; label: string };
  thumb: { src: StaticImageData; before?: StaticImageData; alt: string };
};

export const ledger: LedgerRow[] = [
  {
    index: "01",
    year: "2026",
    title: "Kontinuum",
    kind: "Client, paid",
    change:
      "Rebuilt a painter's 2015 WordPress site as a fast, bilingual catalogue of 81 works, with a zoomable viewer and an editing panel made for the owner.",
    forWhom: "For Harald Wicht, Atelier Kontinuum, Balzhausen, Germany",
    facts: "41 → 1.5 MB gallery page · 2 weeks brief to launch · 224 → 0 accessibility violations",
    caseHref: "/work/kontinuum",
    live: { href: "https://kontinuum.biz", label: "kontinuum.biz" },
    thumb: {
      src: kontinuumAfter,
      before: kontinuumBefore,
      alt: "Kontinuum case study. The new homepage; hover to see the old one.",
    },
  },
  {
    index: "02",
    year: "2025 – 26",
    title: "LokalWeb",
    kind: "Side project",
    change:
      "A website-as-a-service for Kosovo's small businesses: a five-step wizard and two Claude calls produce a site on its own subdomain. A working prototype, built solo.",
    forWhom: "Solo: product, design, full-stack",
    caseHref: "/work/lokalweb",
    live: { href: "https://lokal-web-one.vercel.app", label: "Landing page" },
    thumb: { src: lokalwebLanding, alt: "LokalWeb case study. The landing page." },
  },
];

export type SmallThing = {
  title: string;
  year: string;
  line: string;
  link?: { href: string; label: string };
};

export const smallerThings: SmallThing[] = [
  {
    title: "Islam Companion",
    year: "2024",
    line: "Daily prayer and dhikr tracking with step-by-step wudu and prayer guides. React front end on Vercel, Node back end on Render.",
    link: { href: "https://islam-companion-app.vercel.app", label: "Live" },
  },
  {
    title: "FinMatch",
    year: "2025",
    line: "Startup-to-investor matching prototype, built in a team of five at the DigiCamp & Digital Skills Festival hackathon in Prizren. Top 5 of the field, MVP award. QA, prototyping, team organisation.",
  },
  {
    title: "Hapi",
    year: "2026",
    line: "“One life event, the whole state responds”: a proactive-government layer beside eKosova, prototyped with a team of five at JunctionX ITP Prizren.",
    link: { href: "https://github.com/VocaDev/Hapi", label: "Code" },
  },
  {
    title: "VocaFolders",
    year: "2024",
    line: "A browser extension for filing pages into folders. Local-first, no accounts. Open source, and I use it every day.",
    link: { href: "https://github.com/VocaDev/VocaFolders_Browser_Extension", label: "Code" },
  },
  {
    title: "Enit's Barber Shop",
    year: "2025",
    line: "A booking-site concept for a Mitrovica barbershop with Google Sheets as the back end. A concept, not in commercial use.",
    link: { href: "https://github.com/VocaDev/Enit-s-Barber-Shop", label: "Code" },
  },
  {
    title: "Data notebooks",
    year: "2025",
    line: "Cleaning, exploratory analysis and PostgreSQL integration on a Kaggle video-game sales dataset, from my data-science internship period.",
    link: { href: "https://github.com/VocaDev/data-science-notebooks", label: "Code" },
  },
];
