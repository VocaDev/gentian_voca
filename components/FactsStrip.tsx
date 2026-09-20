/** Facts on one plate, divided by hairlines. Values in mono, labels in the museum register. */
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
      className={`plate rise m-0 grid grid-cols-2 overflow-hidden [&>div:last-child:nth-child(odd)]:col-span-2 md:[&>div:last-child:nth-child(odd)]:col-span-1 ${cols}`}
    >
      {facts.map((f, i) => (
        <div
          key={f.label}
          className={`flex flex-col-reverse justify-end gap-1.5 p-4 md:p-5 ${
            i % 2 === 1 ? "border-l border-hairline" : ""
          } ${i >= 2 ? "border-t border-hairline" : ""} md:border-t-0 ${i > 0 ? "md:border-l" : "md:border-l-0"}`}
        >
          <dt className="text-[13px] leading-snug text-muted-2">{f.label}</dt>
          <dd className="m-0 font-mono text-[20px] leading-tight text-ink tnum md:text-[23px]">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
