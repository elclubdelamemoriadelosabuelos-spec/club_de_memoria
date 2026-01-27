/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.pexels.com",
      },
      {
        protocol: "https",
        hostname: "**.instagram.com",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
    ],
  },
  compress: true,
  reactStrictMode: true,
  // Optimizaciones para videos
  poweredByHeader: false,
  generateEtags: true,
  async redirects() {
    return [
      {
        source: "/program",
        destination: "/#programa",
        permanent: true,
      },
      {
        source: "/programa",
        destination: "/#programa",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/#nosotros",
        permanent: true,
      },
      {
        source: "/nosotros",
        destination: "/#nosotros",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contacto",
        permanent: true,
      },
      {
        source: "/contacto",
        destination: "/#contacto",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/#equipo",
        permanent: true,
      },
      {
        source: "/equipo",
        destination: "/#equipo",
        permanent: true,
      },
      {
        source: "/method",
        destination: "/#metodo",
        permanent: true,
      },
      {
        source: "/metodo",
        destination: "/#metodo",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
