import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Contributor PRs introduce lint-rule violations (e.g. no-explicit-any).
    // These are style/lint rules, not type errors — type-checking still runs.
    // Don't let them block production deployments.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
