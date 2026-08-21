import assert from "node:assert/strict";
import test from "node:test";
import {
  DEFAULT_SITE_URL,
  customDomainFromSiteUrl,
  joinSiteUrl,
  normalizeBasePath,
  resolveHost,
} from "./host.ts";

test("local and transfer builds stay at the domain root", () => {
  assert.deepEqual(resolveHost(), {
    siteUrl: DEFAULT_SITE_URL,
    origin: "https://moonhus.github.io",
    basePath: "",
  });
});

test("GitHub Pages project deploys keep the /motorhome prefix", () => {
  assert.deepEqual(resolveHost({ githubPages: true }), {
    siteUrl: DEFAULT_SITE_URL,
    origin: "https://moonhus.github.io",
    basePath: "/motorhome",
  });
  assert.equal(
    resolveHost({ siteUrl: DEFAULT_SITE_URL }).basePath,
    "/motorhome",
  );
});

test("an explicit custom domain drops the GitHub Pages subpath", () => {
  assert.deepEqual(
    resolveHost({ siteUrl: "https://www.commercialmotorhomes.com.au/" }),
    {
      siteUrl: "https://www.commercialmotorhomes.com.au",
      origin: "https://www.commercialmotorhomes.com.au",
      basePath: "",
    },
  );
});

test("another GitHub Pages project URL keeps that repo subpath", () => {
  assert.deepEqual(
    resolveHost({ siteUrl: "https://newowner.github.io/motorhome" }),
    {
      siteUrl: "https://newowner.github.io/motorhome",
      origin: "https://newowner.github.io",
      basePath: "/motorhome",
    },
  );
});

test("a GitHub user site has no subpath", () => {
  assert.equal(
    resolveHost({ siteUrl: "https://moonhus.github.io" }).basePath,
    "",
  );
});

test("an explicit empty base path wins over GitHub Pages", () => {
  assert.equal(
    resolveHost({ githubPages: true, basePath: "" }).basePath,
    "",
  );
});

test("normalizeBasePath accepts values with or without a leading slash", () => {
  assert.equal(normalizeBasePath("/motorhome/"), "/motorhome");
  assert.equal(normalizeBasePath("motorhome"), "/motorhome");
  assert.equal(normalizeBasePath("/"), "");
});

test("joinSiteUrl builds canonical URLs from the site root", () => {
  assert.equal(joinSiteUrl(DEFAULT_SITE_URL), "https://moonhus.github.io/motorhome/");
  assert.equal(
    joinSiteUrl(DEFAULT_SITE_URL, "/images/hero-brisbane.jpg"),
    "https://moonhus.github.io/motorhome/images/hero-brisbane.jpg",
  );
  assert.equal(
    joinSiteUrl("https://www.example.com.au", "inventory/demo/"),
    "https://www.example.com.au/inventory/demo/",
  );
});

test("custom domains write a CNAME host, GitHub Pages URLs do not", () => {
  assert.equal(
    customDomainFromSiteUrl("https://www.example.com.au/stock"),
    "www.example.com.au",
  );
  assert.equal(customDomainFromSiteUrl(DEFAULT_SITE_URL), null);
});
