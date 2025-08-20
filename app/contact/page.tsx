"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SuccessAnimation } from "@/components/success-animation"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Aryan Naturals Farm", "Village Rampur, District Patna", "Bihar 801503, India"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 98765 43210", "+91 87654 32109", "Mon-Sat: 9 AM - 6 PM"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@aryannaturals.com", "orders@aryannaturals.com", "support@aryannaturals.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM", "Closed on major holidays"],
  },
]

const faqs = [
  {
    question: "Do you deliver across India?",
    answer:
      "Yes, we deliver to all major cities across India. Delivery time varies from 2-7 days depending on location.",
  },
  {
    question: "Are your products really organic?",
    answer: "All our products are certified organic and grown without any chemicals or pesticides.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return policy for unopened products. If you're not satisfied, we'll provide a full refund.",
  },
  {
    question: "Do you offer bulk orders?",
    answer: "Yes, we provide special pricing for bulk orders. Please contact us directly for wholesale inquiries.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const scrollRef = useScrollReveal()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">Get in Touch</h1>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Have questions about our products? Want to place a bulk order? Or just want to say hello? We'd love to
              hear from you!
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Contact Information */}
          <div ref={scrollRef} className="scroll-reveal mb-16">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary">Contact Information</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">How to Reach Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to connect with us. Choose what works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="text-center product-card-hover">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={scrollRef} className="scroll-reveal">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What is this about?"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full btn-hover-scale" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div ref={scrollRef} className="scroll-reveal">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Find Us on Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive map coming soon</p>
                      <p className="text-sm text-muted-foreground">Village Rampur, District Patna, Bihar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <div ref={scrollRef} className="scroll-reveal mt-16">
            <Card className="bg-muted/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Visit Our Farm</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Want to see how we grow and process our organic products? We welcome visitors to our farm! Schedule a
                  visit to experience traditional farming methods firsthand and meet our farmers.
                </p>
                <Button size="lg" className="btn-hover-scale">
                  Schedule Farm Visit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <SuccessAnimation
        show={showSuccess}
        message="Message sent successfully! We'll get back to you soon."
        onComplete={() => setShowSuccess(false)}
      />
    </>
  )
}
