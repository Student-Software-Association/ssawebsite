/**
 * CDN Constants — SSA Homepage
 * All asset URLs hosted on Cloudfront
 */

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400506510/d3SbcZBEzpjdng4FBAXmgY";

export const ASSETS = {
  logo: `${CDN_BASE}/399-20_eaa96580.webp`,
  heroBg: `${CDN_BASE}/375-29_40fe4133.webp`,
  // SVG assets are inlined in SvgAssets.tsx
} as const;
