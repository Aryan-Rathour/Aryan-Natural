"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Murmura",
    icon: "/placeholder-112pq.png",
    description: "Crispy puffed rice",
    href: "/categories/murmura",
  },
  {
    name: "Gurh",
    icon: "/jaggery-gurh-icon.png",
    description: "Pure jaggery",
    href: "/categories/gurh",
  },
  {
    name: "Chana",
    icon: "/placeholder-zwkkm.png",
    description: "Roasted chickpeas",
    href: "/categories/chana",
  },
  {
    name: "Shattu",
    icon: "/sattu-flour-icon.png",
    description: "Nutritious flour",
    href: "/categories/shattu",
  },
  {
    name: "Chura",
    icon: "/flattened-rice-chura-icon.png",
    description: "Flattened rice",
    href: "/categories/chura",
  },
  {
    name: "Khell",
    icon: "/traditional-khell-snack-icon.png",
    description: "Traditional snack",
    href: "/categories/khell",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our authentic collection of traditional Indian organic foods
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link key={category.name} href={category.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <img
                      src={category.icon || "/placeholder.svg"}
                      alt={category.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
