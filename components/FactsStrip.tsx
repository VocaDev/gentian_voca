export function FactsStrip({
  facts,
  columns = 4,
}: {
  facts: { value: string; label: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cols = columns === 3 ? "md:grid-cols-3" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-4";
  return (
    <dl
      className={`m-0 grid grid-cols-2 gap-px border border-hairline bg-hairline [&>div:last-child:nth-child(odd)]:col-span-2 md:[&>div:last-child:nth-child(odd)]:col-span-1 ${cols}`}
    >
      {facts.map((f) => (
        <div key={f.label} className="flex flex-col-reverse justify-end gap-1 bg-paper p-4 md:p-5">
          <dt className="text-[13px] leading-snug text-muted-2">{f.label}</dt>
          <dd className="m-0 font-mono text-[17px] leading-tight text-ink tnum md:text-[19px]">
            {f.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
