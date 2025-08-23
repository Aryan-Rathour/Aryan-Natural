import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedProducts } from "@/components/featured-products"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Right Basket - Premium Local Products in Lucknow | Home",
  description:
    "Discover premium local products in Lucknow. Fresh organic grains, traditional snacks, and authentic local foods delivered to your doorstep.",
  openGraph: {
    title: "Right Basket - Premium Local Products in Lucknow",
    description:
      "Discover premium local products in Lucknow. Fresh organic grains, traditional snacks, and authentic local foods delivered to your doorstep.",
  },
  icons: {
    icon: "/rbFavicon.png", 
  
  },
}


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
