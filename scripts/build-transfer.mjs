import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (!siteUrl) {
  console.error(`Set NEXT_PUBLIC_SITE_URL to the public address of the new host.

Examples:
  NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com.au npm run handover
  NEXT_PUBLIC_SITE_URL=https://newowner.github.io/motorhome npm run handover

This writes a handover pack (guide + static website) you can give to the
new owner.`);
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

const packDir = "handover";
rmSync(packDir, { recursive: true, force: true });
mkdirSync(`${packDir}/website`, { recursive: true });
cpSync("out", `${packDir}/website`, { recursive: true });
cpSync("HANDOVER.md", `${packDir}/HANDOVER.md`);

for (const zipName of ["handover.zip", "site-transfer.zip"]) {
  if (existsSync(zipName)) {
    rmSync(zipName);
  }
}

const zip = spawnSync("zip", ["-r", "-q", "handover.zip", "handover"], {
  stdio: "inherit",
});

if (zip.status === 0) {
  console.log(`Handover pack ready for ${siteUrl}

  handover/HANDOVER.md   start here — give this to the new owner
  handover/website/      upload these files to the new host
  handover.zip           send this folder as a zip

Read handover/HANDOVER.md for domain, GitHub, email, and stock steps.`);
  process.exit(0);
}

console.log(`Handover files ready in handover/ for ${siteUrl}
(zip not created — install zip if you want handover.zip)`);
