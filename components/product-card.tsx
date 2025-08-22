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
  className="group cursor-pointer overflow-hidden w-40 h-auto sm:w-48 md:w-56 lg:w-64 mx-auto"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <CardContent className="p-0">
    <div className="relative overflow-hidden rounded-t-md">
      {isNew && (
        <Badge className="absolute top-1 left-1 z-10 bg-accent text-accent-foreground text-[10px] px-1.5 py-0.5">
          New
        </Badge>
      )}

      {/* Smaller image */}
      <div className="relative w-full h-32 sm:h-40 md:h-48">
        <Image
          src={
            image 
          }
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {originalPrice && (
        <Badge className="absolute top-1 right-1 bg-destructive text-destructive-foreground text-[10px] px-1.5 py-0.5">
          {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
        </Badge>
      )}
    </div>

    <div className="p-2 sm:p-3">
      <h3 className="font-semibold text-xs sm:text-sm line-clamp-1">{name}</h3>
      <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2 mb-1">
        {tagline}
      </p>

      <div className="flex items-center gap-1 mb-1">
        <span className="text-sm sm:text-base font-bold text-primary">
          ₹{price}
        </span>
        {originalPrice && (
          <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
            ₹{originalPrice}
          </span>
        )}
      </div>

      <div className="flex gap-2">
  <Button
    onClick={handleAddToCart}
    disabled={isAdding}
    size="sm"
    className="flex-[3] h-7 text-[10px] sm:text-xs"
  >
    <ShoppingCart className="w-3 h-3 mr-1" />
    Add
  </Button>

  <Button
    variant="outline"
    size="sm"
    className="flex-[2] h-7 px-2 text-[10px] sm:text-xs bg-transparent"
  >
    Buy
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
