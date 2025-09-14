"use client"
import { useState, useMemo } from "react"
import { Search, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const products = [
  {
    id: "1",
    name: "Premium Murmura",
    price: 120,
    originalPrice: 150,
    image: "/organic-puffed-rice.png",
    rating: 4.8,
    tagline: "Crispy & Fresh Puffed Rice",
    category: "Snacks",
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
    category: "Snacks",
  },
  {
    id: "3",
    name: "Traditional Chura",
    price: 90,
    image: "/organic-flattened-rice.png",
    rating: 4.6,
    tagline: "Authentic Flattened Rice",
    category: "Grains",
        isNew: true,

  },
  {
    id: "4",
    name: "Pure Gurh",
    price: 200,
    originalPrice: 250,
    image: "/gurh-jaggery-organic-traditional.png",
    rating: 4.9,
    tagline: "Natural Jaggery from Sugarcane",
    category: "Sweeteners",
    isNew: true,
  },
  {
    id: "5",
    name: "Khell Mix",
    price: 160,
    image: "/khell-mix-organic-snack.png",
    rating: 4.5,
    tagline: "Traditional Mixed Snack",
    category: "Snacks",
  },
  {
    id: "6",
    name: "Shattu Powder",
    price: 300,
    originalPrice: 350,
    image: "/organic-shattu-protein-drink.png",
    rating: 4.8,
    tagline: "Nutritious Protein Drink Mix",
    category: "Health Foods",
  },
  {
    id: "7",
    name: "Organic Til",
    price: 250,
    image: "/organic-sesame-seeds.png",
    rating: 4.7,
    tagline: "Pure Sesame Seeds",
    category: "Seeds & Nuts",
  },
  {
    id: "8",
    name: "Makhan Mishri",
    price: 400,
    image: "/organic-sweet-spread.png",
    rating: 4.6,
    tagline: "Traditional Butter Sugar",
    category: "Sweeteners",
  },
]

const categories = ["All", "Snacks", "Grains", "Sweeteners", "Health Foods", "Seeds & Nuts"]
const sortOptions = [
  { value: "name", label: "Name A-Z" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const scrollRef = useScrollReveal()

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort products
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
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      {/* Header */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Our Products</h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Discover our complete range of authentic traditional Indian organic foods, handpicked from local farmers
            across Bihar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full lg:w-48">
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

          {/* View Mode */}
          <div className="flex gap-2">
            <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Active Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="flex items-center gap-2">
              Category: {selectedCategory}
              <button onClick={() => setSelectedCategory("All")} className="ml-1 hover:text-destructive">
                ×
              </button>
            </Badge>
          )}
          {searchTerm && (
            <Badge variant="secondary" className="flex items-center gap-2">
              Search: "{searchTerm}"
              <button onClick={() => setSearchTerm("")} className="ml-1 hover:text-destructive">
                ×
              </button>
            </Badge>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAndSortedProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div ref={scrollRef} className="scroll-reveal">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAndSortedProducts.map((product) => (
                <div key={product.id} className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 relative flex-shrink-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-muted-foreground text-sm">{product.tagline}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xl font-bold text-primary">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                      )}
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm">Add to Cart</Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">No products found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  )
}
