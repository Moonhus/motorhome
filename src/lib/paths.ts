export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.GITHUB_PAGES === "true" ? "/motorhome" : "");

export function withBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith(`${basePath}/`)) {
    return path;
  }
  return `${basePath}${path}`;
}
