/** @type {import('next').NextConfig} */
const basePath = '/portfolio';
const nextConfig = {
 reactStrictMode: true,
 basePath,
 images: {
  path: `${basePath}/_next/image`,
 },
};

module.exports = nextConfig;
