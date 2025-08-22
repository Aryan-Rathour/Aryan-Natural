import type React from "react"
import type { Metadata } from "next"
import { Poppins, Lato, Caveat } from "next/font/google"
import './globals.css';
import { CartProvider } from "@/contexts/cart-context"

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

export const metadata: Metadata = {
  title: "Aryan Naturals - Pure & Natural Foods from Bihar",
  description:
    "Traditional Indian organic food products like Murmura, Chana, Chura, Gurh, Khell, Shattu delivered fresh to your doorstep",
  generator: "Aryan-Natural",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable} ${caveat.variable} antialiased`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
