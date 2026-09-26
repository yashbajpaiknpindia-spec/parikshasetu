import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Individual mentor profiles are gone while mentorship is "coming soon";
  // old links land on the coming-soon page instead of a 404.
  async redirects() {
    return [{ source: "/mentors/:slug", destination: "/mentors", permanent: false }];
  },
};

export default nextConfig;
