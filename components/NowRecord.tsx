import { education, experience, type Entry } from "@/content/background";
import { InstitutionMark } from "./InstitutionMark";

function Row({ e }: { e: Entry }) {
  return (
    <li className="flex items-start gap-4 border-t border-hairline py-5 first:border-t-0 first:pt-0 md:gap-5">
      <InstitutionMark src={e.logo} name={e.org} monogram={e.monogram} />
      <div className="min-w-0">
        <p className="m-0 text-[18px] font-medium leading-snug tracking-[-0.01em] text-ink md:text-[19px]">
          {e.org}
        </p>
        <p className="m-0 mt-1 text-[15px] leading-snug text-muted">{e.role}</p>
        {e.short ? <p className="m-0 mt-0.5 text-[15px] leading-snug text-muted">{e.short}</p> : null}
        <p className="m-0 mt-2 font-mono text-[12px] leading-relaxed text-muted-2 tnum">
          {e.when}
          {e.where ? ` · ${e.where}` : ""}
        </p>
      </div>
    </li>
  );
}

function Column({ label, entries }: { label: string; entries: Entry[] }) {
  return (
    <div>
      <h3 className="label m-0">{label}</h3>
      <ul className="m-0 mt-4 list-none border-t border-hairline p-0 pt-5">
        {entries.map((e) => (
          <Row key={e.org} e={e} />
        ))}
      </ul>
    </div>
  );
}

/** The homepage answer to "where are you now": current roles and the current degree. */
export function NowRecord() {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-10">
      <Column label="Where I work" entries={experience.filter((e) => e.current)} />
      <Column label="Where I study" entries={education.filter((e) => e.current)} />
    </div>
  );
}
