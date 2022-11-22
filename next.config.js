/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "default",
    domains: ["localhost", "images.prismic.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        pathname: "team-project",
      },
    ],
  },
};

module.exports = nextConfig;
