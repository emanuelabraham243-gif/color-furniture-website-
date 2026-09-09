import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/products", destination: "/collections", permanent: true }];
  },
};

export default nextConfig;
