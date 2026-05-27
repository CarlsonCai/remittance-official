import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Turbopack（next dev）：SVG → React 元件
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  // Webpack（next build）：SVG → React 元件
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (rule: any) => rule.test?.test?.(".svg")
    );
    config.module.rules.push(
      // *.svg?url → 維持原本 file/url loader（可用於 CSS background-image 等）
      { ...fileLoaderRule, test: /\.svg$/i, resourceQuery: /url/ },
      // *.svg → SVGR React 元件
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule?.issuer,
        resourceQuery: { not: [...(fileLoaderRule?.resourceQuery?.not ?? []), /url/] },
        use: ["@svgr/webpack"],
      }
    );
    if (fileLoaderRule) fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default withNextIntl(nextConfig);
