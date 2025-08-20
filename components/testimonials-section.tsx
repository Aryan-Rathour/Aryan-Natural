"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Bahut tasty aur healthy products! Bilkul ghar jaisa taste milta hai. Quality ekdum fresh hai.",
    product: "Murmura & Gurh",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Mumbai",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Original Bihar ka taste! Bachpan ki yaadein aa gayi. Packaging bhi bahut acchi hai.",
    product: "Shattu Powder",
  },
  {
    id: 3,
    name: "Sunita Devi",
    location: "Bangalore",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Pure and natural products. Meri family ko bahut pasand aaya. Regular customer ban gayi hun.",
    product: "Chana & Chura",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from our happy customers across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-3 font-accent text-lg italic">"{testimonial.text}"</p>

                <p className="text-sm text-primary font-medium">Purchased: {testimonial.product}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
