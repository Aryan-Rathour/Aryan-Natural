"use client"

import { ProductCard } from "./product-card"

const featuredProducts = [
  {
    id: "1",
    name: "Premium Murmura",
    price: 120,
    originalPrice: 150,
    image: "/premium-puffed-rice-murmura.png",
    rating: 5,
    tagline: "Healthy puffed rice snack",
    isNew: true,
  },
  {
    id: "2",
    name: "Pure Gurh",
    price: 200,
    image: "/pure-jaggery-gurh-blocks.png",
    rating: 5,
    tagline: "Unrefined natural sweetener",
  },
  {
    id: "3",
    name: "Roasted Chana",
    price: 80,
    originalPrice: 100,
    image: "/placeholder-ipaf0.png",
    rating: 4,
    tagline: "Protein-rich crunchy snack",
  },
  {
    id: "4",
    name: "Shattu Powder",
    price: 180,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    tagline: "Nutritious superfood flour",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites from our authentic collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
