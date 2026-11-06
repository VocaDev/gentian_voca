import { logoIfPresent } from "@/lib/logos";

/**
 * The record behind /background, and the source of the "where I work / where I study"
 * block on the homepage. `current: true` is what the homepage shows; flip it when a
 * role or a degree ends and the homepage follows.
 */
export type Entry = {
  role: string;
  org: string;
  when: string;
  where?: string;
  note: string;
  logo?: string;
  monogram: string;
  current?: boolean;
  /** One line for the homepage, when the role alone does not say enough. */
  short?: string;
};

export const experience: Entry[] = [
  {
    role: "Software Development & Digitalisation Assistant",
    org: "Petrol Company",
    when: "Apr 2026 – present",
    where: "Fushë Kosovë, Kosovo",
    logo: logoIfPresent("petrol.png"),
    monogram: "PC",
    current: true,
    note: "Internal software used daily by leadership, HQ teams and field managers across a national network of 30+ retail stations. Manual workflows replaced with structured systems running in production, pairing business-process analysis with full-stack development.",
  },
  {
    role: "Freelance web developer",
    org: "Atelier Kontinuum",
    when: "Sep 2026 – present",
    where: "Balzhausen, Germany",
    logo: logoIfPresent("kontinuum.png"),
    monogram: "AK",
    current: true,
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

export const education: Entry[] = [
  {
    role: "BSc Computer Science & Engineering",
    org: "University of Mitrovica “Isa Boletini”",
    when: "2024 – 2027, expected",
    where: "Mitrovicë, Kosovo",
    note: "GPA 9.21 / 10. Third year.",
    short: "Third year, GPA 9.21 / 10",
    logo: logoIfPresent("umib.png"),
    monogram: "UM",
    current: true,
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

export const credentials = [
  { what: "Cambridge English C1 Advanced, grade Excellent", who: "The Cambridge School, Mitrovicë", when: "2023" },
  { what: "International Cybersecurity Defense Challenge, blue team", who: "RIT Kosovo × Iowa State University", when: "2026" },
  { what: "DigiCamp & Digital Skills Festival hackathon, MVP award (top 5)", who: "ITP Prizren", when: "2025" },
  { what: "Python for Data Science", who: "TecTigon Academy", when: "2026" },
  { what: "Web Design Basics: HTML, CSS, JavaScript", who: "JCoders Academy", when: "2024" },
];
