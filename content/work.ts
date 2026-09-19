export type Kind = "Client, paid" | "Work, confidential" | "Side project, parked";

export type LedgerRow = {
  index: string;
  year: string;
  title: string;
  kind: Kind;
  change: string;
  forWhom: string;
  caseHref?: string;
  live?: { href: string; label: string };
  confidential?: boolean;
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
    caseHref: "/work/kontinuum",
    live: { href: "https://kontinuum.biz", label: "kontinuum.biz" },
  },
  {
    index: "02",
    year: "2026 –",
    title: "Internal systems, Petrol Company",
    kind: "Work, confidential",
    change:
      "Replacing spreadsheet-and-chat workflows with structured systems used daily by leadership, HQ teams and field managers across a national network of 30 retail stations.",
    forWhom: "For Petrol Company, a national fuel retailer in Kosovo",
    confidential: true,
  },
  {
    index: "03",
    year: "2025 – 26",
    title: "LokalWeb",
    kind: "Side project, parked",
    change:
      "A website-as-a-service for Kosovo's small businesses: a five-step wizard and two Claude calls produce a site on its own subdomain. A working prototype, parked for scope.",
    forWhom: "Solo: product, design, full-stack",
    caseHref: "/work/lokalweb",
    live: { href: "https://lokal-web-one.vercel.app", label: "Landing page" },
  },
];

export const petrolBlock = {
  paragraphs: [
    "Build internal software tools used daily by leadership, HQ teams, and field managers across a national network of 30 retail stations.",
    "Replace legacy manual workflows (spreadsheets + chat-based coordination) with structured digital systems running in production.",
    "Combine business-process analysis with hands-on full-stack development (Next.js, TypeScript, Supabase) to ship in-house solutions end-to-end.",
  ],
  stack: "Next.js · TypeScript · Supabase / PostgreSQL",
  note: "Confidential: no names, no screenshots. Happy to walk through the approach in a call.",
};

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
    line: "A browser extension for filing pages into folders. Local-first, no accounts. Unpublished; I use it every day.",
    link: { href: "https://github.com/VocaDev/VocaFolders_Browser_Extension", label: "Code" },
  },
  {
    title: "Enit's Barber Shop",
    year: "2025",
    line: "A booking-site concept for a Prishtinë barbershop with Google Sheets as the back end. A concept, not in commercial use.",
    link: { href: "https://github.com/VocaDev/Enit-s-Barber-Shop", label: "Code" },
  },
  {
    title: "Data notebooks",
    year: "2025",
    line: "Cleaning, exploratory analysis and PostgreSQL integration on a Kaggle video-game sales dataset, from my data-science internship period.",
    link: { href: "https://github.com/VocaDev/data-science-notebooks", label: "Code" },
  },
];
