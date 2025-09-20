"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-4 flex items-center justify-center bg-gradient-to-br from-muted to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/traditional-grain-texture.png')`,
            backgroundSize: "200px 200px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="primary text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            Fresh <span className="secondary">&</span> Healthy Roasted  Foods
            <br />
            <span className="primary">from Bihar to Your Plate</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Discover authentic traditional Indian organic foods - Murmura, Chana, Chura, Gurh, Khell, and Shattu.
            Handpicked from local farmers, delivered fresh to your doorstep.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full btn-hover-scale btn-hover-glow">
              <Link href="/products">Shop Now</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full btn-hover-scale bg-transparent"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>

          <div
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>100% Healthy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Handmade</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Cash on Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
