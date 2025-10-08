"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"

const featuredProducts = [
  {
    id: "1",
    name: "Premium Murmura",
    price: 60,
    originalPrice: 150,
    image: "/laiya.jpg",
    rating: 5,
    tagline: "Healthy puffed rice snack",
    isNew: true,
  },
  {
    id: "2",
    name: "Roasted Chana",
    price: 120,
    image: "/chana.jpg",
    rating: 5,
    tagline: "Unrefined natural sweetener",
  },
  {
    id: "3",
    name: "Pure Gurh",
    price: 60,
    originalPrice: 100,
    image: "/gurh.jpg",
    rating: 4,
    tagline: "Protein-rich crunchy snack",
  },
  {
    id: "4",
    name: "Shattu Powder",
    price: 120,
    image: "/sattu_powder.jpg",
    rating: 5,
    tagline: "Nutritious superfood flour",
  },
  {
    id: "5",
    name: "Chura",
    price: 60,
    image: "/chura.jpg",
    rating: 5,
    tagline: "Nutritious superfood flour",
  },
  // {
  //   id: "6",
  //   name: "Kachha Chana",
  //   price: 80,
  //   image: "/placeholder.svg?height=300&width=300",
  //   rating: 5,
  //   tagline: "Nutritious superfood flour",
  // },
  // {
  //   id: "7",
  //   name: "Safed Matar",
  //   price: 60,
  //   image: "/placeholder.svg?height=300&width=300",
  //   rating: 5,
  //   tagline: "Nutritious superfood flour",
  // },
  // {
  //   id: "8",
  //   name: "Corn Flakes",
  //   price: 80,
  //   image: "/placeholder.svg?height=300&width=300",
  //   rating: 5,
  //   tagline: "Nutritious superfood flour",
  // },
]

export function FeaturedProducts() {
    const [showSuccess, setShowSuccess] = useState(false)
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites from our authentic collection
          </p>
        </div>

        {/* Mobile: 2 cols, Tablet: 3 cols, Medium: 4 cols, Laptop+: Center with less gap */}
        <div className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 
          lg:flex lg:flex-wrap lg:justify-center lg:gap-4 
        ">
          {featuredProducts.map((product) => (
            <div key={product.id} className="lg:flex-shrink-0 my-2">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
