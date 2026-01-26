/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
