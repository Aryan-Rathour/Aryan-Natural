
import type { Metadata } from "next"
import ProductsPage from "./page"

export const metadata : Metadata = {

  title: "All Products - Premium Local Products in Lucknow | Right Basket",
  description:
    "Browse all premium local products at Right Basket. Organic grains, traditional snacks, natural sweeteners, and specialty items from Lucknow. Fresh delivery guaranteed.",
  keywords: [
    "all products Lucknow",
    "local products online",
    "organic food Lucknow",
    "traditional snacks",
    "natural sweeteners",
    "Right Basket products",
    "murmura gurh chana shattu",
  ],
  openGraph: {
    title: "All Products - Premium Local Products in Lucknow",
    description:
      "Browse all premium local products at Right Basket. Organic grains, traditional snacks, natural sweeteners, and specialty items from Lucknow.",
    url: "https://rightbasket.in/products",
  },
}



export default function Products() {
  return <ProductsPage />
}

