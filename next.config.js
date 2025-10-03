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
    ],
  },
};

module.exports = nextConfig;
