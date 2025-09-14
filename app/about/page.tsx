"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
// import { Footer } from "react-day-picker"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"



const values = [
  {
    title: "100% Organic",
    description: "All our products are certified organic, grown without harmful chemicals or pesticides.",
    icon: "🌱",
  },
  {
    title: "Traditional Methods",
    description: "We preserve age-old traditional methods of processing and preparation.",
    icon: "🏺",
  },
  {
    title: "Direct from Farmers",
    description: "We work directly with local farmers, ensuring fair prices and quality.",
    icon: "👨‍🌾",
  },
  {
    title: "Fresh & Natural",
    description: "Products are processed and packed fresh to maintain nutritional value.",
    icon: "🌾",
  },
]

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Started with a small farm in rural Bihar, focusing on traditional organic farming methods.",
  },
  {
    year: "2020",
    title: "First Products",
    description: "Launched our first range of traditional snacks - Murmura and Roasted Chana.",
  },
  {
    year: "2022",
    title: "Expansion",
    description: "Expanded to include Gurh, Chura, and other traditional Bihar specialties.",
  },
  {
    year: "2024",
    title: "Going Digital",
    description: "Launched online platform to bring authentic Bihar foods to customers nationwide.",
  },
]

export default function AboutPage() {
  const scrollRef = useScrollReveal()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Navbar/>
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">Our Story</h1>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            From the fertile lands of Bihar to your kitchen - a journey of preserving traditional Indian food culture
            while bringing you the purest, most authentic organic products.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <div ref={scrollRef} className="scroll-reveal mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Our Mission</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-6">Preserving Tradition, Delivering Purity</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Aryan Naturals, we believe that the best foods come from the earth, prepared the way our ancestors
                did. Our mission is to bring you authentic traditional Indian foods that are not just delicious, but
                also nutritious and completely natural.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work closely with local farmers in Bihar, supporting sustainable farming practices and ensuring that
                every product maintains its traditional taste and nutritional value. From our family to yours, we're
                committed to delivering the purest foods that connect you to your roots.
              </p>
            </div>
            <div className="relative">
              <img
                src="/bihari-farmer-organic-field.png"
                alt="Traditional farming in Bihar"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div ref={scrollRef} className="scroll-reveal mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Values</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from sourcing ingredients to delivering products to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center product-card-hover">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div ref={scrollRef} className="scroll-reveal mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Journey</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">From Farm to Your Table</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of our growth and commitment to bringing you authentic traditional foods.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="product-card-hover">
                      <CardContent className="p-6">
                        <Badge className="mb-2 bg-primary text-primary-foreground">{item.year}</Badge>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div ref={scrollRef} className="scroll-reveal">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Team</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">The People Behind Aryan Naturals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals who work tirelessly to bring you the finest traditional foods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center product-card-hover">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Aryan Kumar</h3>
                <p className="text-primary font-medium mb-2">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  Born and raised in Bihar, Aryan started this journey to preserve traditional food culture.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center product-card-hover">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👩‍🔬</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Priya Sharma</h3>
                <p className="text-primary font-medium mb-2">Quality Manager</p>
                <p className="text-muted-foreground text-sm">
                  Ensures every product meets our high standards of quality and authenticity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center product-card-hover">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍🌾</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ramesh Singh</h3>
                <p className="text-primary font-medium mb-2">Head Farmer</p>
                <p className="text-muted-foreground text-sm">
                  With 20+ years of experience, he leads our organic farming initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
            <Footer/>

    </div>
  )
}
