import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt = "Kontinuum: rebuilding a painter's website. Client work by Gentian Voca.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const file = await readFile(join(process.cwd(), "assets", "og-kontinuum.jpg"));
  const shot = `data:image/jpeg;base64,${file.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F5F3EE",
          color: "#17181A",
          padding: 56,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 620,
          }}
        >
          <div style={{ fontSize: 22, color: "#5A5852" }}>01 · Client, paid · 2026</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 56, lineHeight: 1.05, letterSpacing: -1.5 }}>Kontinuum</div>
            <div style={{ fontSize: 26, lineHeight: 1.3, color: "#5A5852", marginTop: 14 }}>
              A 2015 WordPress site for a painter, rebuilt in two weeks. Gallery page 41 MB → 1.5 MB.
              Accessibility violations 224 → 0.
            </div>
          </div>
          <div style={{ fontSize: 20, color: "#5A5852" }}>Gentian Voca · gentianvoca.vercel.app</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 48 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shot} width={420} height={262} style={{ border: "1px solid #D9D5CC" }} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
