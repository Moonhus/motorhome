import { resolveHostFromEnv } from "@/lib/host";

export const basePath = resolveHostFromEnv().basePath;

export function withBasePath(path: string) {
  if (!path.startsWith("/") || (basePath && path.startsWith(`${basePath}/`))) {
    return path;
  }
  return `${basePath}${path}`;
}
