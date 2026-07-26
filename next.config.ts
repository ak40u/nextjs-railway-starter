import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server bundle. Railway only has to run it.
  output: "standalone",
};

export default nextConfig;
