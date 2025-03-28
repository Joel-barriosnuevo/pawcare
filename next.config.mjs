/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/pawcare' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pawcare/' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  reactStrictMode: true,
  trailingSlash: true,
}

export default nextConfig;