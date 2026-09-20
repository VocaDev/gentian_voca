import type { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  lede,
  children,
  className = "",
}: {
  id: string;
  index: string;
  title: string;
  lede?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={`scroll-mt-20 ${className}`}>
      <div className="container-x">
        <div className="border-t border-hairline pt-7 md:pt-9">
          <div className="grid gap-4 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-8">
            <span className="font-mono text-[13px] text-muted-2 tnum md:pt-1" aria-hidden="true">
              {index}
            </span>
            <div>
              <h2 id={headingId} className="m-0 text-[22px] font-medium leading-snug tracking-[-0.01em] md:text-[24px]">
                {title}
              </h2>
              {lede ? (
                <p className="mt-3 max-w-[60ch] text-[17px] leading-[1.6] text-muted md:text-[18px]">
                  {lede}
                </p>
              ) : null}
            </div>
          </div>
          <div className="mt-8 md:mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
