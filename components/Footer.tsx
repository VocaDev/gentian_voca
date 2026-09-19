import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-x flex flex-col gap-3 py-8 text-[13px] text-muted-2 md:flex-row md:items-center md:justify-between">
        <p className="m-0">
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
          <li>
            <a className="link" href={`mailto:${site.email}`}>
              Email
            </a>
          </li>
          <li>
            <a className="link" href={site.links.linkedin} rel="me noopener" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="link" href={site.links.github} rel="me noopener" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a className="link" href="/humans.txt">
              humans.txt
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
