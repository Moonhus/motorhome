import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const DEFAULT_SITE_URL = "https://moonhus.github.io/motorhome";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
const outFile = process.argv[2] ?? "out/CNAME";
const hostname = new URL(siteUrl).hostname;
const isGitHubPages =
  hostname === "github.io" || hostname.endsWith(".github.io");

if (isGitHubPages) {
  console.log("No CNAME written (site is on GitHub Pages).");
  process.exit(0);
}

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, `${hostname}\n`);
console.log(`Wrote ${outFile} → ${hostname}`);
