import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "I-Con Ltd - Building Rwanda's Future with Excellence | Construction & Engineering",
  description:
    "I-Con Ltd is a leading construction company in Rwanda specializing in building construction, civil engineering, MEP services, and infrastructure development since 2013. Contact us for quality construction solutions.",
  keywords:
    "construction Rwanda, building construction Kigali, civil engineering Rwanda, MEP services, infrastructure development, I-Con Ltd, construction company Rwanda",
  authors: [{ name: "I-Con Ltd" }],
  openGraph: {
    title: "I-Con Ltd - Building Rwanda's Future with Excellence",
    description:
      "Leading construction company in Rwanda specializing in building construction, civil engineering, MEP services, and infrastructure development.",
    url: "https://iconltd.rw",
    siteName: "I-Con Ltd",
    locale: "en_RW",
    type: "website",
    images: [
      {
        url: "/images/icon-logo.png",
        width: 400,
        height: 300,
        alt: "I-Con Ltd Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I-Con Ltd - Building Rwanda's Future with Excellence",
    description:
      "Leading construction company in Rwanda specializing in building construction, civil engineering, MEP services, and infrastructure development.",
    images: ["/images/icon-logo.png"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://iconltd.rw" />
        <meta name="geo.region" content="RW" />
        <meta name="geo.placename" content="Kigali" />
        <meta name="geo.position" content="-1.9441;30.0619" />
        <meta name="ICBM" content="-1.9441, 30.0619" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "I-Con Ltd",
              description:
                "Leading construction company in Rwanda specializing in building construction, civil engineering, MEP services, and infrastructure development.",
              url: "https://iconltd.rw",
              logo: "https://iconltd.rw/images/icon-logo.png",
              foundingDate: "2013",
              address: {
                "@type": "PostalAddress",
                streetAddress: "KG 9 Ave",
                addressLocality: "Kigali",
                addressRegion: "Kigali City",
                addressCountry: "RW",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-1.9441",
                longitude: "30.0619",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+250788404080",
                contactType: "customer service",
                availableLanguage: ["English", "Kinyarwanda"],
              },
              sameAs: ["https://wa.me/250788404080"],
              services: [
                "Building Construction",
                "Civil Engineering",
                "MEP Services",
                "Water & Sanitation",
                "Electrical Engineering",
                "Project Supervision",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
