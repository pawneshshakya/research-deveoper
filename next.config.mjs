/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Remove output: 'export'
    output: "export",
    images: {
      unoptimized: true, // Optionally disable Image Optimization API
    },
    trailingSlash: true,
  };
  
  export default nextConfig;
