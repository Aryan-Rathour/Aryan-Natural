import type React from "react"
import type { Metadata } from "next"
import { Poppins, Lato, Caveat } from "next/font/google"
import './globals.css';
import { CartProvider } from "@/contexts/cart-context"
import { generateOrganizationSchema , generateWebsiteSchema } from "@/lib/schema";
import NotificationPopUp from "@/components/itemAdded";
import AdSense from "@/components/ads/AdSense";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lato",
})

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
})

// export const metadata: Metadata = {
//   title: "Right Basket - Pure & Natural Foods from Bihar",
//   description:
//     "Traditional Indian organic food products like Murmura, Chana, Chura, Gurh, Khell, Shattu delivered fresh to your doorstep",
//      icons: {
//     icon: "/rbFavicon.png", // or '/favicon.png'
//   },
//   generator: "Aryan-Natural",
// }

export const metadata: Metadata = {
  title: {
    default: "Right Basket - Premium Products in Lucknow | Organic Food & Grains",
    template: "%s | Right Basket - Local Products Lucknow",
  },
  description:
    "Right Basket offers premium local products in Lucknow including organic grains, snacks, sweeteners, murmura, gurh, chana, shattu, and sprouted wheat flour. Fresh, authentic, and delivered to your doorstep.",
  keywords: [
    "Right Basket",
    "Lucknow local products",
    "organic grains Lucknow",
    "murmura",
    "gurh",
    "chana",
    "shattu powder",
    "sprouted wheat flour",
    "roasted chana",
    "local snacks Lucknow",
    "sweeteners",
    "chura",
    "kheel",
    "gram",
  ],
  authors: [{ name: "Right Basket" }],
  creator: "Right Basket",
  publisher: "Right Basket",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rightbasket.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Right Basket - Premium Local Products in Lucknow",
    description:
      "Premium local products including organic grains, snacks, and traditional foods delivered fresh in Lucknow and nearby cities.",
    url: "https://rightbasket.in",
    siteName: "Right Basket",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Right Basket - Local Products Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Right Basket - Premium Local Products in Lucknow",
    description:
      "Premium local products including organic grains, snacks, and traditional foods delivered fresh in Lucknow.",
    images: ["/og-image.jpg"],
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
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable} ${caveat.variable} antialiased`}>


     <head>
     
        <AdSense pId="ca-pub-4007604466129226"/>

     
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Right Basket",
                description:
                  "Premium local products including organic grains, snacks, and traditional foods in Lucknow",
                url: "https://rightbasket.in",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Lucknow",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "IN",
                },
                areaServed: [
                  {
                    "@type": "City",
                    name: "Lucknow",
                  },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Local Products",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Product",
                        name: "Organic Grains & Snacks",
                      },
                    },
                  ],
                },
              },
              generateOrganizationSchema(),
              generateWebsiteSchema(),
            ]),
          }}
        />
      </head>

      <body>
        <CartProvider>{children}
          <NotificationPopUp onViewCart={undefined}/>
        </CartProvider>

      </body>
    </html>
  )
}
