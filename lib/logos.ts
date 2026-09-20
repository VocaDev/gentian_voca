import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Returns the public path for a logo only if the file is actually there.
 * Keeps the browser from requesting logos that do not exist yet: no 404s,
 * and the Education rows fall back to a monogram until a file is dropped in.
 * Server-side only; resolved at build time.
 */
export function logoIfPresent(file: string): string | undefined {
  const rel = `logos/${file}`;
  return existsSync(join(process.cwd(), "public", rel)) ? `/${rel}` : undefined;
}
