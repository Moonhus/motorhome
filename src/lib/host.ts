export const DEFAULT_SITE_URL = "https://moonhus.github.io/motorhome";

export type HostInput = {
  siteUrl?: string;
  basePath?: string;
  githubPages?: boolean;
};

export type HostConfig = {
  siteUrl: string;
  origin: string;
  basePath: string;
};

function present(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function stripTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

export function normalizeBasePath(value: string) {
  if (!value || value === "/") {
    return "";
  }

  const withSlash = value.startsWith("/") ? value : `/${value}`;
  return stripTrailingSlash(withSlash);
}

export function resolveHost({
  siteUrl,
  basePath,
  githubPages = false,
}: HostInput = {}): HostConfig {
  const explicitUrl = present(siteUrl);
  const resolvedUrl = stripTrailingSlash(explicitUrl ?? DEFAULT_SITE_URL);
  const parsed = new URL(resolvedUrl);
  const pathFromUrl = normalizeBasePath(parsed.pathname);

  let resolvedBasePath = "";
  if (basePath !== undefined) {
    resolvedBasePath = normalizeBasePath(basePath);
  } else if (explicitUrl) {
    resolvedBasePath = pathFromUrl;
  } else if (githubPages) {
    resolvedBasePath = pathFromUrl;
  }

  return {
    siteUrl: resolvedUrl,
    origin: parsed.origin,
    basePath: resolvedBasePath,
  };
}

export function resolveHostFromEnv() {
  return resolveHost({
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    githubPages: process.env.GITHUB_PAGES === "true",
  });
}

export function isGitHubPagesHost(hostname: string) {
  return hostname === "github.io" || hostname.endsWith(".github.io");
}

export function customDomainFromSiteUrl(siteUrl: string) {
  const { hostname } = new URL(siteUrl);
  return isGitHubPagesHost(hostname) ? null : hostname;
}

export function joinSiteUrl(siteUrl: string, path = "/") {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return normalised === "/" ? `${siteUrl}/` : `${siteUrl}${normalised}`;
}
