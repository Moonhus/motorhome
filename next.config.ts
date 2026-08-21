import type { NextConfig } from "next";
import { resolveHostFromEnv } from "./src/lib/host";

const { basePath } = resolveHostFromEnv();

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
