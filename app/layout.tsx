import type React from "react"
import type { Metadata } from "next"
import { Lato, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ElfsightScript } from "@/components/elfsight-script/ElfsightScript"
import "./globals.css"

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
})

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://clubdelamemoria.com"),
  title: "Club de la Memoria | Actividades para Adultos Mayores en Quito - Bienestar Integral",
  description:
    "Club de la Memoria: el primer club de adultos mayores en Quito desde 2004. Ofrecemos bienestar integral con actividades para la memoria, reconexión social y programa completo de estimulación cognitiva. Centro especializado en actividades para adultos mayores.",
  keywords: [
    "club de la memoria",
    "club de la memoria quito",
    "actividades para adultos mayores",
    "actividades para adultos mayores quito",
    "adultos mayores quito",
    "bienestar integral adultos mayores",
    "actividades para la memoria",
    "reconexión social adultos mayores",
    "estimulación cognitiva quito",
    "centro día adultos mayores quito",
    "club tercera edad quito",
    "actividades tercera edad",
    "programa adultos mayores",
    "cuidado integral adultos mayores",
  ],
  authors: [{ name: "Club de la Memoria" }],
  creator: "Club de la Memoria",
  publisher: "Club de la Memoria",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://clubdelamemoria.com",
    siteName: "Club de la Memoria",
    title: "Club de la Memoria | Actividades para Adultos Mayores Quito - Bienestar Integral",
    description:
      "Club de la Memoria ofrece bienestar integral para adultos mayores en Quito. Actividades para la memoria, reconexión social y programa completo desde 2004.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Club de la Memoria - Adultos mayores disfrutando actividades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Club de la Memoria | Actividades para Adultos Mayores Quito",
    description:
      "Bienestar integral y actividades para la memoria. Reconexión social y vitalidad para adultos mayores en Quito desde 2004.",
    images: ["/og-image.jpg"],
    creator: "@clubdelamemoria",
  },
  alternates: {
    canonical: "https://clubdelamemoria.com",
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/clubmemoria/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/clubmemoria/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/clubmemoria/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/clubmemoria/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/clubmemoria/favicon.ico",
    apple: [
      { url: "/clubmemoria/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/clubmemoria/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/clubmemoria/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/clubmemoria/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/clubmemoria/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/clubmemoria/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/clubmemoria/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/clubmemoria/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/clubmemoria/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/clubmemoria/apple-icon.png" },
    ],
  },
  other: {
    "msapplication-TileColor": "#2EB9BE",
    "msapplication-TileImage": "/clubmemoria/ms-icon-144x144.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2EB9BE",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Club de la Memoria",
              description:
                "Club de adultos mayores en Quito que ofrece bienestar integral, actividades para la memoria y reconexión social desde 2004",
              url: "https://clubdelamemoria.com",
              logo: "https://clubdelamemoria.com/logo_club_memoria.png",
              foundingDate: "2004",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Quito",
                addressCountry: "EC",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+593-99-567-1600",
                contactType: "customer service",
                availableLanguage: ["es"],
              },
              sameAs: [
                "https://www.instagram.com/clubdelamemoria",
                "https://www.facebook.com/profile.php?id=61565484248833",
                "https://www.tiktok.com/@clubdelamemoriauio",
              ],
              keywords:
                "club de la memoria, actividades para adultos mayores, bienestar integral, reconexión social, adultos mayores quito",
            }),
          }}
        />
      </head>
      <body className={`${lato.variable} ${openSans.variable} font-sans antialiased`} style={{ fontFamily: 'var(--font-lato), var(--font-open-sans), system-ui, sans-serif' }}>
        {children}
        <Analytics />
        {/* Elfsight Platform Script - Cargado solo una vez al día */}
        <ElfsightScript />
      </body>
    </html>
  )
}
