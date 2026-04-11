import type { NextConfig } from "next";

const repo = "lazybeanslab-website";

const nextConfig = {
    output: "export",
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    images: {
        unoptimized: true,
    },
};
export default nextConfig;





