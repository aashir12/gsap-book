const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ocean.si.edu",
      },
      {
        protocol: "https",
        hostname: "pub-3fc12084b01f4c4f920f3fefbc9570a3.r2.dev",
      },
    ],
  },
};

module.exports = nextConfig;
