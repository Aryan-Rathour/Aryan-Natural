"use client"

import { useState } from "react"
import { Check, Package, Truck, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

interface OrderSuccessProps {
  orderData: {
    orderId: string
    items: any[]
    total: number
    paymentMethod: string
    shippingAddress: any
    estimatedDelivery: string
  }
}

export function OrderSuccess({ orderData }: OrderSuccessProps) {
  const [trackingSteps, setTrackingSteps] = useState([
    { id: 1, name: "Order Confirmed", status: "completed", time: "Just now" },
    { id: 2, name: "Processing", status: "current", time: "Within 2 hours" },
    { id: 3, name: "Shipped", status: "pending", time: "1-2 days" },
    { id: 4, name: "Delivered", status: "pending", time: orderData.estimatedDelivery },
  ])

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-success">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Order Placed Successfully!</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Thank you for your order. We'll send you updates via email and SMS.
          </p>
          <Badge className="text-lg px-4 py-2 bg-primary text-primary-foreground">Order ID: {orderData.orderId}</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {orderData.items.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-12 h-12 relative flex-shrink-0 rounded overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}

              <Separator />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total Paid</span>
                <span className="text-primary">₹{orderData.total}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Payment Method</span>
                <span className="capitalize">{orderData.paymentMethod}</span>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Shipping Address</h4>
                <div className="text-sm text-muted-foreground">
                  <p>
                    {orderData.shippingAddress.firstName} {orderData.shippingAddress.lastName}
                  </p>
                  <p>{orderData.shippingAddress.address}</p>
                  <p>
                    {orderData.shippingAddress.city}, {orderData.shippingAddress.state} -{" "}
                    {orderData.shippingAddress.pincode}
                  </p>
                  <p>{orderData.shippingAddress.phone}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-2">Estimated Delivery</h4>
                <p className="text-primary font-medium">{orderData.estimatedDelivery}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Tracking */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              Order Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trackingSteps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : step.status === "current"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-medium">{step.id}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${step.status === "current" ? "text-primary" : ""}`}>{step.name}</p>
                    <p className="text-sm text-muted-foreground">{step.time}</p>
                  </div>
                  {step.status === "current" && <Badge variant="secondary">In Progress</Badge>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="btn-hover-scale">
            <Download className="w-4 h-4 mr-2" />
            Download Invoice
          </Button>
          <Button variant="outline" size="lg" className="btn-hover-scale bg-transparent">
            Track Order
          </Button>
          <Link href="/products">
            <Button variant="outline" size="lg" className="btn-hover-scale bg-transparent">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
