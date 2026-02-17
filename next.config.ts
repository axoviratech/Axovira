import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';
const repoName = 'Axovira';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd && !isVercel ? `/${repoName}` : undefined,
  assetPrefix: isProd && !isVercel ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
