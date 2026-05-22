/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/landing-page',
  assetPrefix: '/landing-page/',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
