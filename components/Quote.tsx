import type { ReactNode } from "react";

export function Quote({ children, by }: { children: ReactNode; by: string }) {
  return (
    <figure className="m-0 border-l border-hairline pl-5 md:pl-6">
      <blockquote className="m-0 max-w-[40ch] text-[20px] leading-[1.45] text-ink md:text-[22px]">
        {children}
      </blockquote>
      <figcaption className="mt-3 text-[14px] text-muted">{by}</figcaption>
    </figure>
  );
}
