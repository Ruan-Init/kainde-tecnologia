/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Turbopack is stable and default in Next.js 16
  // React Compiler is stable but opt-in
  reactCompiler: false,
};

module.exports = nextConfig;
