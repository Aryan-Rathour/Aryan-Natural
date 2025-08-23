"use client"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Link from "next/link"



export const metadata: Metadata = {
  title: "Our Story - Right Basket | Local Products from Lucknow",
  description:
    "Learn about Right Basket's journey to bring authentic local products from Lucknow to your doorstep. Supporting local farmers and preserving traditional flavors.",
  keywords: [
    "Right Basket story",
    "local products Lucknow",
    "supporting local farmers",
    "traditional foods",
    "authentic Lucknow products",
  ],
  openGraph: {
    title: "Our Story - Right Basket",
    description: "Learn about Right Basket's journey to bring authentic local products from Lucknow to your doorstep.",
    url: "https://rightbasket.in/our-story",
  },
}


const milestones = [
  {
    year: "1995",
    title: "Humble Beginnings",
    description:
      "Our founder's grandfather started organic farming in a small village in Bihar, following traditional methods passed down through generations.",
    image: "/old-indian-farmer-bihar.png",
  },
  {
    year: "2010",
    title: "Next Generation",
    description:
      "Aryan Kumar inherited the family farm and modernized operations while preserving traditional organic farming practices.",
    image: "/young-indian-farmer-organic-bihar.png",
  },
  {
    year: "2018",
    title: "First Products",
    description:
      "Started processing and packaging traditional foods like Murmura and Chana, sharing Bihar's authentic flavors with nearby communities.",
    image: "/traditional-indian-food-processing.png",
  },
  {
    year: "2024",
    title: "Digital Journey",
    description:
      "Launched our online platform to bring authentic Bihar foods to customers across India, preserving tradition in the digital age.",
    image: "/modern-indian-food-packaging.png",
  },
]

const principles = [
  {
    title: "Authenticity First",
    description:
      "Every recipe and method we use has been passed down through generations. We never compromise on traditional authenticity.",
    icon: "🏺",
  },
  {
    title: "Farmer Partnership",
    description:
      "We work directly with local farmers, ensuring fair wages and supporting sustainable farming practices in rural Bihar.",
    icon: "🤝",
  },
  {
    title: "Chemical-Free Promise",
    description:
      "From seed to package, no chemicals, preservatives, or artificial additives touch our products. Pure and natural, always.",
    icon: "🌿",
  },
  {
    title: "Cultural Heritage",
    description: "We're not just selling food; we're preserving Bihar's rich culinary heritage for future generations.",
    icon: "🏛️",
  },
]

export default function OurStoryPage() {
  const scrollRef = useScrollReveal()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">Our Story</h1>
          <p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A tale of three generations, rooted in the fertile lands of Bihar, dedicated to preserving traditional
            Indian food culture while bringing you the purest, most authentic organic products.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div ref={scrollRef} className="scroll-reveal mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary">The Beginning</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              From Grandfather's Farm to Your Kitchen
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              It all started in 1995 when our founder's grandfather, Shri Ram Prasad Singh, decided to dedicate his life
              to organic farming in a small village in Bihar. He believed that the best foods come from the earth,
              prepared the way nature intended - without chemicals, without shortcuts, with patience and care.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, three generations later, we continue his legacy by bringing you authentic traditional Indian foods
              that connect you to your roots and nourish your family with the same love and care that has been passed
              down through our family for decades.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div ref={scrollRef} className="scroll-reveal mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Journey</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Three Decades of Dedication</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small family farm to serving customers across India, here's how our story unfolded.
            </p>
          </div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={milestone.image || "/placeholder.svg"}
                    alt={milestone.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="lg:w-1/2">
                  <Badge className="mb-4 bg-primary text-primary-foreground">{milestone.year}</Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div ref={scrollRef} className="scroll-reveal mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Principles</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">What Drives Us Every Day</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide every decision we make, from farming to packaging to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="product-card-hover">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div ref={scrollRef} className="scroll-reveal mb-20">
          <Card className="bg-muted/30">
            <CardContent className="p-12 text-center">
              <Badge className="mb-6 bg-primary/10 text-primary">Our Impact</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-8">Making a Difference</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Local Farmers Supported</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Organic & Chemical-Free</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Every purchase you make supports local farmers in Bihar, helps preserve traditional farming methods, and
                brings authentic, healthy food to families across India. Together, we're building a sustainable future
                while honoring our past.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button size="lg" className="btn-hover-scale">
                    Shop Our Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="btn-hover-scale bg-transparent">
                    Visit Our Farm
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div ref={scrollRef} className="scroll-reveal text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Story</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            When you choose Aryan Naturals, you become part of our story. You support traditional farming, help preserve
            cultural heritage, and bring authentic flavors to your family.
          </p>
          <Link href="/products">
            <Button size="lg" className="btn-hover-scale">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
