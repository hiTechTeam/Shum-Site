import type { NextConfig } from "next";

// The site is plain static HTML: no server, no image optimizer, no telemetry
// endpoints, so it can live on any static host.
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default config;
