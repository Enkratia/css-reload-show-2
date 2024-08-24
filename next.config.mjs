/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // doesn't work:
    minimumCacheTTL: 31540000000,

    // works:
    // minimumCacheTTL: 3154000000,
  },
};

export default nextConfig;
