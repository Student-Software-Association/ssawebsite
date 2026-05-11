import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/**", // 👈 allow ALL (public + sign)
      },
    ],
  },
};

export default nextConfig;