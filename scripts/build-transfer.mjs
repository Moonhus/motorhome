import { spawnSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (!siteUrl) {
  console.error(`Set NEXT_PUBLIC_SITE_URL to the public address of the new host.

Examples:
  NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com.au npm run build:transfer
  NEXT_PUBLIC_SITE_URL=https://newowner.github.io/motorhome npm run build:transfer

This writes a static site into out/ and site-transfer.zip that you can upload
to any web host, or attach as a GitHub Pages custom domain.`);
  process.exit(1);
}

try {
  new URL(siteUrl);
} catch {
  console.error("NEXT_PUBLIC_SITE_URL must be a full URL, including https://");
  process.exit(1);
}

const env = {
  ...process.env,
  NEXT_PUBLIC_SITE_URL: siteUrl,
};
delete env.GITHUB_PAGES;

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    env,
    shell: false,
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run("npm", ["run", "build"]);
run(process.execPath, ["scripts/write-cname.mjs", "out/CNAME"]);

if (existsSync("site-transfer.zip")) {
  rmSync("site-transfer.zip");
}

const zip = spawnSync("zip", ["-r", "-q", "../site-transfer.zip", "."], {
  cwd: "out",
  stdio: "inherit",
});

if (zip.status === 0) {
  console.log(`Transfer bundle ready:
  out/                 static files for any web host
  site-transfer.zip    same files as a zip
  Public URL: ${siteUrl}`);
  process.exit(0);
}

console.log(`Transfer files ready in out/ for ${siteUrl}
(zip not created — install zip if you want site-transfer.zip)`);
