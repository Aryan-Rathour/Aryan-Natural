import type { Metadata } from "next"
import ContactPage from "./page"

export const metadata : Metadata = {
  title: "Contact Us - Right Basket Lucknow | Local Products Delivery",
  description:
    "Contact Right Basket for premium local products in Lucknow. Get in touch for orders, queries, or information about our organic grains, snacks, and traditional foods.",
  keywords: [
    "contact Right Basket",
    "Lucknow local products contact",
    "organic food delivery Lucknow",
    "Right Basket phone number",
    "local products inquiry Lucknow",
  ],
  openGraph: {
    title: "Contact Us - Right Basket Lucknow",
    description:
      "Contact Right Basket for premium local products in Lucknow. Get in touch for orders, queries, or information about our organic foods.",
    url: "https://rightbasket.in/contact",
  },
}



export default function Contact() {
  return <ContactPage />
}