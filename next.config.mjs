/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Necesario para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/pawcare' : '', // Nombre del repositorio
  images: {
    unoptimized: true, // Necesario para export estático
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: true,
  trailingSlash: true, // Añadir trailing slash para mejor compatibilidad
}

export default nextConfig;