"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const categories = [
  {
    id: "snacks",
    name: "Traditional Snacks",
    description: "Crispy and healthy traditional Indian snacks made from natural ingredients",
    image: "/traditional-indian-snacks.png",
    productCount: 12,
    featured: ["Murmura", "Roasted Chana", "Khell Mix"],
    color: "bg-orange-100 text-orange-800",
  },
  {
    id: "grains",
    name: "Organic Grains",
    description: "Pure and natural grains sourced directly from organic farms",
    image: "/organic-grains-traditional.png",
    productCount: 8,
    featured: ["Chura", "Organic Rice", "Wheat Flour"],
    color: "bg-green-100 text-green-800",
  },
  {
    id: "sweeteners",
    name: "Natural Sweeteners",
    description: "Traditional sweeteners made without any artificial additives",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 6,
    featured: ["Pure Gurh", "Makhan Mishri", "Honey"],
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "health-foods",
    name: "Health Foods",
    description: "Nutritious superfoods packed with essential vitamins and minerals",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 10,
    featured: ["Shattu Powder", "Protein Mix", "Herbal Tea"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "seeds-nuts",
    name: "Seeds & Nuts",
    description: "Premium quality seeds and nuts rich in healthy fats and proteins",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 15,
    featured: ["Organic Til", "Almonds", "Pumpkin Seeds"],
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "spices",
    name: "Organic Spices",
    description: "Aromatic spices that add authentic flavors to your traditional dishes",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 20,
    featured: ["Turmeric Powder", "Cumin Seeds", "Garam Masala"],
    color: "bg-red-100 text-red-800",
  },
]

export default function CategoriesPage() {
  const scrollRef = useScrollReveal()

  return (
    <div>
    <div className="min-h-screen bg-background">
      <Navbar/>
      {/* Header */}
      <div className="bg-muted/30 py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Product Categories</h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Explore our carefully curated categories of authentic traditional Indian organic foods, each representing
            the rich culinary heritage of Bihar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div ref={scrollRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <Card className="group cursor-pointer product-card-hover h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={category.color}>{category.productCount} Products</Badge>
                    </div>
                  </div>

                  <div className="p-2">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{category.description}</p>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Featured Products:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.featured.map((product) => (
                          <Badge key={product} variant="outline" className="text-xs">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Category Stats */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Why Choose Our Categories?</h2>
            <p className="text-muted-foreground">Each category represents our commitment to quality and tradition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">100%</span>
              </div>
              <h3 className="font-semibold mb-2">Organic Certified</h3>
              <p className="text-sm text-muted-foreground">All products are certified organic and chemical-free</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">71+</span>
              </div>
              <h3 className="font-semibold mb-2">Total Products</h3>
              <p className="text-sm text-muted-foreground">Wide variety across all traditional food categories</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">24h</span>
              </div>
              <h3 className="font-semibold mb-2">Fresh Delivery</h3>
              <p className="text-sm text-muted-foreground">Farm-fresh products delivered within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
