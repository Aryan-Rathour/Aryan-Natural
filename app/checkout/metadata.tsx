import type { Metadata } from "next"
import CheckoutPage from "./page"

export const metadata : Metadata = {
  title: "Checkout - Right Basket | Complete Your Order",
  description:
    "Complete your order for fresh local products from Lucknow. Secure checkout with multiple payment options and same-day delivery.",
  keywords: [
    "checkout",
    "order local products",
    "Lucknow delivery",
    "secure payment",
    "Right Basket checkout",
  ],
  robots: {
    index: false,
    follow: true,
  },
}



export default function Checkout() {
  return <CheckoutPage />
}