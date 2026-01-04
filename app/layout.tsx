import type React from "react"
import type { Metadata } from "next"
import { Lato, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#33BBD2",
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
              logo: "https://clubdelamemoria.com/icon.svg",
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
      <body className={`${lato.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
