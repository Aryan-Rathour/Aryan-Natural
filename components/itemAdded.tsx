"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AddedToCartPopupProps {
  show: boolean
  product: {
    id: string
    name: string
    price: number
    image: string
  }
  onClose: () => void
}

export function AddedToCartPopup({ show, product, onClose }: AddedToCartPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onClose, 300) // Wait for fade out animation
      }, 3000) // Auto-close after 3 seconds

      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show && !isVisible) return null

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-background border rounded-lg shadow-lg p-4 max-w-xs w-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-sm">Item added to cart</h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => {
              setIsVisible(false)
              setTimeout(onClose, 300)
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 relative rounded-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="flex-1">
            <p className="text-sm font-medium line-clamp-1">{product.name}</p>
            <p className="text-sm text-muted-foreground">₹{product.price}</p>
          </div>
        </div>
        
        <div className="mt-3 flex justify-end">
          <Button size="sm" variant="outline" className="text-xs h-7">
            VIEW CART
          </Button>
        </div>
      </div>
    </div>
  )
}