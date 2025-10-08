

// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Star } from "lucide-react"
// import { motion } from "framer-motion"

// const testimonials = [
//   {
//     id: 1,
//     name: "Priya Sharma",
//     location: "Delhi",
//     image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
//     rating: 5,
//     text: "Bahut tasty aur healthy products! Bilkul ghar jaisa taste milta hai. Quality ekdum fresh hai.",
//     product: "Murmura & Gurh",
//   },
//   {
//     id: 2,
//     name: "Rajesh Kumar",
//     location: "Mumbai",
//     image: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
//     rating: 5,
//     text: "Original Bihar ka taste! Bachpan ki yaadein aa gayi. Packaging bhi bahut acchi hai.",
//     product: "Shattu Powder",
//   },
//   {
//     id: 3,
//     name: "Sunita Devi",
//     location: "Bangalore",
//     image: "https://robohash.org/mail@ashallendesign.co.uk",
//     rating: 4,
//     text: "Pure and natural products. Meri family ko bahut pasand aaya. Regular customer ban gayi hun.",
//     product: "Chana & Chura",
//   },
// ]

// export function TestimonialsSection() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-muted/20 to-muted/40">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
//             What Our Customers Say
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
//             Real reviews from our happy customers across India 🇮🇳
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//             >
//               <Card className="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-border bg-background/60 backdrop-blur-sm">
//                 <CardContent className="p-6">
//                   {/* Profile Info */}
//                   <div className="flex items-center gap-4 mb-4">
//                     <img
//                       src={testimonial.image || "/placeholder.svg"}
//                       alt={`${testimonial.name}'s photo`}
//                       className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
//                     />
//                     <div>
//                       <h4 className="font-semibold">{testimonial.name}</h4>
//                       <p className="text-sm text-muted-foreground">{testimonial.location}</p>
//                     </div>
//                   </div>

//                   {/* Rating Stars */}
//                   <div className="flex items-center gap-1 mb-3">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-4 h-4 fill-yellow-400 text-yellow-400"
//                       />
//                     ))}
//                   </div>

//                   {/* Review Text */}
//                   <p className="text-muted-foreground mb-3 italic leading-relaxed">
//                     “{testimonial.text}”
//                   </p>

//                   {/* Product Name */}
//                   <p className="text-sm font-medium text-primary">
//                     Purchased: {testimonial.product}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    rating: 5,
    text: "Bahut tasty aur healthy products! Bilkul ghar jaisa taste milta hai. Quality ekdum fresh hai.",
    product: "Murmura & Gurh",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Mumbai",
    image: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
    rating: 5,
    text: "Original Bihar ka taste! Bachpan ki yaadein aa gayi. Packaging bhi bahut acchi hai.",
    product: "Shattu Powder",
  },
  {
    id: 3,
    name: "Sunita Devi",
    location: "Bangalore",
    image: "https://robohash.org/mail@ashallendesign.co.uk",
    rating: 4,
    text: "Pure and natural products. Meri family ko bahut pasand aaya. Regular customer ban gayi hun.",
    product: "Chana & Chura",
  },
  {
    id: 4,
    name: "Amit Verma",
    location: "Lucknow",
    image: "https://i.pravatar.cc/250?u=amit@example.com",
    rating: 5,
    text: "Taste bilkul authentic hai! Har product me purity aur tradition dono dikhta hai.",
    product: "Sattu Drink Mix",
  },
  {
    id: 5,
    name: "Neha Gupta",
    location: "Jaipur",
    image: "https://i.pravatar.cc/250?u=neha@example.com",
    rating: 5,
    text: "Bahut hi healthy aur natural food options. Har order time pe milta hai aur quality best hai!",
    product: "Roasted Chana",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // 4 seconds per slide
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-muted/40">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
          What Our Customers Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
          Real reviews from our happy customers across India 🇮🇳
        </p>

        {/* Slider Container */}
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Card className="w-full sm:w-[500px] hover:shadow-xl transition-all duration-300 border border-border bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Profile Info */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                    />
                    <div>
                      <h4 className="font-semibold">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground mb-3 italic leading-relaxed">
                    “{testimonials[currentIndex].text}”
                  </p>

                  {/* Product */}
                  <p className="text-sm font-medium text-primary">
                    Purchased: {testimonials[currentIndex].product}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "bg-primary w-4"
                    : "bg-gray-400 hover:bg-primary/70"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
