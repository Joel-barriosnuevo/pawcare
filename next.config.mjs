/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Necesario para GitHub Pages
  basePath: '/pawcare', // Nombre del repositorio
  images: {
    unoptimized: true, // Necesario para export estático
  },
  trailingSlash: true, // Añadir trailing slash para mejor compatibilidad
  assetPrefix: '/pawcare/', // Prefijo para assets
}

export default nextConfig;