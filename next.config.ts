import type { NextConfig } from "next";
import { SITE_CONFIG } from "./src/config/site";

const nextConfig = {
    output: "export",
    basePath: SITE_CONFIG.basePath,
    assetPrefix: SITE_CONFIG.basePath,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;


