import type { Metadata } from "next";
import CategoriesPage from "./page"; // client component

export const metadata: Metadata = {
  title: "Shop by Categories - Local Products in Lucknow | Right Basket",
  description:
    "Browse all product categories at Right Basket. Find grains, snacks, sweeteners, pulses, and specialty items. Premium local products in Lucknow delivered fresh.",
  keywords: [
    "product categories Lucknow",
    "grains snacks sweeteners",
    "local products categories",
    "Right Basket categories",
    "organic food categories Lucknow",
  ],
  openGraph: {
    title: "Shop by Categories - Local Products in Lucknow",
    description:
      "Browse all product categories at Right Basket. Premium local products in Lucknow including grains, snacks, sweeteners, and specialty items.",
    url: "https://rightbasket.in/categories",
  },
};

export default function Page() {
  return <CategoriesPage />; // render client UI
}
