import type { Metadata } from "next"
import OurStoryPage from "./page"

export const metadata : Metadata = {
   title: "Our Story - Right Basket | Local Products from Lucknow",
  description:
    "Learn about Right Basket's journey to bring authentic local products from Lucknow to your doorstep. Supporting local farmers and preserving traditional flavors.",
  keywords: [
    "Right Basket story",
    "local products Lucknow",
    "supporting local farmers",
    "traditional foods",
    "authentic Lucknow products",
  ],
  openGraph: {
    title: "Our Story - Right Basket",
    description: "Learn about Right Basket's journey to bring authentic local products from Lucknow to your doorstep.",
    url: "https://rightbasket.in/our-story",
  },
}



export default function OurStory() {
  return <OurStoryPage />
}