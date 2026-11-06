import type { ReactNode } from "react";

/**
 * One idea per screen: a small index label, one large statement, at most one
 * sentence under it, then the content. Detail lives on its own page, not here.
 *
 * The region is named by the label ("Work"), the heading is the statement, so
 * landmark navigation and heading navigation both make sense to a screen reader.
 */
export function Section({
  id,
  index,
  label,
  title,
  lede,
  children,
  className = "",
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const labelId = `${id}-label`;
  return (
    <section id={id} aria-labelledby={labelId} className={`scroll-mt-20 ${className}`}>
      <div className="container-x">
        <div className="border-t border-hairline pt-8 md:pt-10">
          <p className="label m-0 flex gap-4">
            <span className="tnum" aria-hidden="true">
              {index}
            </span>
            <span id={labelId}>{label}</span>
          </p>
          <h2 className="display-2 mt-8 md:mt-12">{title}</h2>
          {lede ? (
            <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.6] text-muted md:mt-6 md:text-[19px]">
              {lede}
            </p>
          ) : null}
          {children ? <div className="mt-10 md:mt-14">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
