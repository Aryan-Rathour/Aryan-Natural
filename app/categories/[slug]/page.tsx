"use client"

import { useState, useMemo } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"

const categoryData = {
  snacks: {
    name: "Traditional Snacks",
    description: "Crispy and healthy traditional Indian snacks made from natural ingredients",
    products: [
      {
        id: "1",
        name: "Premium Murmura",
        price: 120,
        originalPrice: 150,
        image: "/organic-puffed-rice.png",
        rating: 4.8,
        tagline: "Crispy & Fresh Puffed Rice",
        isNew: true,
      },
      {
        id: "2",
        name: "Roasted Chana",
        price: 180,
        originalPrice: 220,
        image: "/roasted-organic-chana.png",
        rating: 4.7,
        tagline: "Protein-Rich Roasted Chickpeas",
      },
      {
        id: "5",
        name: "Khell Mix",
        price: 160,
        image: "/khell-mix-organic-snack.png",
        rating: 4.5,
        tagline: "Traditional Mixed Snack",
      },
    ],
  },
  grains: {
    name: "Organic Grains",
    description: "Pure and natural grains sourced directly from organic farms",
    products: [
      {
        id: "3",
        name: "Traditional Chura",
        price: 90,
        image: "/organic-flattened-rice.png",
        rating: 4.6,
        tagline: "Authentic Flattened Rice",
      },
    ],
  },
  sweeteners: {
    name: "Natural Sweeteners",
    description: "Traditional sweeteners made without any artificial additives",
    products: [
      {
        id: "4",
        name: "Pure Gurh",
        price: 200,
        originalPrice: 250,
        image: "/gurh-jaggery-organic-traditional.png",
        rating: 4.9,
        tagline: "Natural Jaggery from Sugarcane",
        isNew: true,
      },
      {
        id: "8",
        name: "Makhan Mishri",
        price: 400,
        image: "/organic-sweet-spread.png",
        rating: 4.6,
        tagline: "Traditional Butter Sugar",
      },
    ],
  },
  "health-foods": {
    name: "Health Foods",
    description: "Nutritious superfoods packed with essential vitamins and minerals",
    products: [
      {
        id: "6",
        name: "Shattu Powder",
        price: 300,
        originalPrice: 350,
        image: "/organic-shattu-protein-drink.png",
        rating: 4.8,
        tagline: "Nutritious Protein Drink Mix",
      },
    ],
  },
  "seeds-nuts": {
    name: "Seeds & Nuts",
    description: "Premium quality seeds and nuts rich in healthy fats and proteins",
    products: [
      {
        id: "7",
        name: "Organic Til",
        price: 250,
        image: "/organic-sesame-seeds.png",
        rating: 4.7,
        tagline: "Pure Sesame Seeds",
      },
    ],
  },
}

const sortOptions = [
  { value: "name", label: "Name A-Z" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
]

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")

  const category = categoryData[slug as keyof typeof categoryData]

  const filteredAndSortedProducts = useMemo(() => {
    if (!category) return []

    const filtered = category.products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }, [category, searchTerm, sortBy])

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Link href="/categories">
            <Button>Back to Categories</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">{category.name}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {category.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search in this category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAndSortedProducts.length} of {category.products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} {...product} category={category.name} />
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">No products found in this category.</p>
            <Button onClick={() => setSearchTerm("")}>Clear Search</Button>
          </div>
        )}
      </div>
    </div>
  )
}
