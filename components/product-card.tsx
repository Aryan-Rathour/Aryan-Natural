"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useCart } from "@/contexts/cart-context"
import { SuccessAnimation } from "@/components/success-animation"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  tagline: string
  category?: string
  isNew?: boolean
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  tagline,
  category = "General",
  isNew,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const scrollRef = useScrollReveal()
  const { addItem } = useCart()

  const handleAddToCart = async () => {
    setIsAdding(true)

    // Add to cart
    addItem({
      id,
      name,
      price,
      originalPrice,
      image,
      category,
    })

    const productImage = document.querySelector(`#product-${id} img`)
    const cartIcon = document.querySelector(".cart-icon")

    if (productImage && cartIcon) {
      const clone = productImage.cloneNode(true) as HTMLElement
      const productRect = productImage.getBoundingClientRect()
      const cartRect = cartIcon.getBoundingClientRect()

      clone.className = "fixed w-12 h-12 z-50 pointer-events-none rounded-lg"
      clone.style.left = productRect.left + "px"
      clone.style.top = productRect.top + "px"
      clone.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"

      document.body.appendChild(clone)

      // Animate to cart
      setTimeout(() => {
        clone.style.left = cartRect.left + "px"
        clone.style.top = cartRect.top + "px"
        clone.style.transform = "scale(0.3)"
        clone.style.opacity = "0"
      }, 100)

      setTimeout(() => {
        document.body.removeChild(clone)
        // Bounce cart icon
        cartIcon.classList.add("bounce-cart")
        setTimeout(() => cartIcon.classList.remove("bounce-cart"), 600)
      }, 900)
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsAdding(false)
    setShowSuccess(true)
  }

  return (
    <>
      <div ref={scrollRef} className="scroll-reveal">
        <Card
          id={`product-${id}`}
          className="group cursor-pointer product-card-hover overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden rounded-t-lg">
              {isNew && <Badge className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground">New</Badge>}

              <div className="aspect-square relative">
                <Image
                  src={image || `/placeholder.svg?height=300&width=300&query=${name} organic food product`}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {originalPrice && (
                <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                  {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
                </Badge>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent add-to-cart-slide">
                <Button onClick={handleAddToCart} disabled={isAdding} className="w-full btn-hover-scale" size="sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {isAdding ? "Adding..." : "Quick Add"}
                </Button>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{tagline}</p>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 transition-colors ${i < rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">({rating})</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">₹{price}</span>
                  {originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleAddToCart} disabled={isAdding} className="flex-1 btn-hover-scale" size="sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {isAdding ? "Adding..." : "Add to Cart"}
                </Button>

                <Button variant="outline" size="sm" className="px-4 bg-transparent btn-hover-scale">
                  Buy Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <SuccessAnimation
        show={showSuccess}
        message="Added to cart successfully!"
        onComplete={() => setShowSuccess(false)}
      />
    </>
  )
}
