"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Star, ShoppingCart, Heart, Share2, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const productData = {
  "1": {
    id: "1",
    name: "Premium Murmura",
    price: 120,
    originalPrice: 150,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    rating: 4.8,
    reviewCount: 124,
    tagline: "Crispy & Fresh Puffed Rice",
    category: "Snacks",
    isNew: true,
    inStock: true,
    description:
      "Our Premium Murmura is made from the finest quality rice, carefully puffed to perfection. This traditional snack is not only delicious but also packed with nutrients. Perfect for evening snacks or as an ingredient in your favorite chaat recipes.",
    features: ["100% Organic Rice", "No Artificial Preservatives", "Rich in Fiber", "Gluten-Free", "Low in Calories"],
    nutritionFacts: {
      calories: "325 per 100g",
      protein: "7.5g",
      carbs: "78g",
      fat: "1.2g",
      fiber: "2.2g",
    },
    ingredients: ["Organic Rice", "Natural Salt"],
    shelfLife: "6 months from manufacturing date",
    weight: "500g",
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const product = productData[id as keyof typeof productData]

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    // Add to cart logic
    console.log(`Added ${quantity} x ${product.name} to cart`)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <span>/</span>
          <Link href={`/categories/${product.category.toLowerCase()}`} className="hover:text-primary">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">New</Badge>}
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                {product.isNew && <Badge className="bg-accent text-accent-foreground">New</Badge>}
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground">{product.tagline}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">₹{product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <Badge className="bg-destructive text-destructive-foreground">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}></div>
              <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleAddToCart} className="flex-1" disabled={!product.inStock}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>

              <Button variant="outline" className="w-full bg-transparent" disabled={!product.inStock}>
                Buy Now
              </Button>
            </div>

            {/* Key Features */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Ingredients</h4>
                      <ul className="space-y-1">
                        {product.ingredients.map((ingredient, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            • {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Product Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Weight:</span>
                          <span>{product.weight}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Shelf Life:</span>
                          <span>{product.shelfLife}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nutrition" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Nutrition Facts</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(product.nutritionFacts).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-primary">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  <div className="text-center py-8 text-muted-foreground">
                    <p>Reviews feature coming soon!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
