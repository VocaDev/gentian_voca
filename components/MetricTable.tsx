export function MetricTable({
  columns,
  rows,
  footnote,
}: {
  columns: [string, string, string];
  rows: { label: string; before: string; after: string }[];
  footnote?: string;
}) {
  return (
    <div>
      <table className="w-full border-collapse text-left text-[14px] leading-snug md:text-[15px]">
        <thead>
          <tr className="border-b border-hairline font-mono text-[12px] uppercase tracking-wide text-muted-2">
            <th scope="col" className="py-2 pr-3 font-normal">
              {columns[0]}
            </th>
            <th scope="col" className="py-2 pr-3 font-normal">
              {columns[1]}
            </th>
            <th scope="col" className="py-2 font-normal text-accent">
              {columns[2]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-hairline align-top">
              <th scope="row" className="py-3 pr-3 font-medium text-ink">
                {r.label}
              </th>
              <td className="py-3 pr-3 text-muted tnum">{r.before}</td>
              <td className="py-3 text-ink tnum">{r.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {footnote ? <p className="mt-3 text-[13px] leading-relaxed text-muted-2">{footnote}</p> : null}
    </div>
  );
}
