/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "default",
    domains: ["localhost", "team-pj.herokuapp.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://team-pj.herokuapp.com",
        pathname: "uploads",
      },
    ],
  },
};

module.exports = nextConfig;
