"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, CreditCard, Truck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { SuccessAnimation } from "@/components/success-animation"
import { PaymentMethods } from "@/components/payment-methods"

const steps = [
  { id: 1, name: "Shipping", icon: Truck },
  { id: 2, name: "Payment", icon: CreditCard },
  { id: 3, name: "Confirmation", icon: Check },
]

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [paymentData, setPaymentData] = useState(null)
  const { state, clearCart } = useCart()

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  })

  const [paymentMethod, setPaymentMethod] = useState("cod")

  const deliveryFee = state.total > 500 ? 0 : 50
  const finalTotal = state.total + deliveryFee

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handlePaymentComplete = async (payment: any) => {
    setPaymentData(payment)
    setIsProcessing(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setOrderComplete(true)
    clearCart()
  }

  const handlePlaceOrder = async () => {
    if (paymentMethod === "cod") {
      setIsProcessing(true)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsProcessing(false)
      setOrderComplete(true)
      clearCart()
    } else {
      // For other payment methods, this will be handled by PaymentMethods component
      handleNextStep()
    }
  }

  if (state.items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link href="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Cart
            </Link>
            <h1 className="text-3xl font-bold text-foreground animate-fade-in-up">Checkout</h1>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = currentStep > step.id

                return (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                          isCompleted
                            ? "bg-primary text-primary-foreground"
                            : isActive
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </div>
                      <span
                        className={`mt-2 text-sm ${isActive ? "text-primary font-medium" : "text-muted-foreground"}`}
                      >
                        {step.name}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 mx-4 ${isCompleted ? "bg-primary" : "bg-muted"}`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <Card className="animate-fade-in-up">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Shipping Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={shippingInfo.firstName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                          placeholder="Enter first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={shippingInfo.lastName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={shippingInfo.email}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={shippingInfo.phone}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                        placeholder="Enter full address"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={shippingInfo.city}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                          placeholder="Enter city"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={shippingInfo.state}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                          placeholder="Enter state"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input
                          id="pincode"
                          value={shippingInfo.pincode}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                          placeholder="Enter pincode"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <Button onClick={handleNextStep} className="btn-hover-scale">
                        Continue to Payment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Payment Method */}
              {currentStep === 2 && (
                <Card className="animate-fade-in-up">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PaymentMethods
                      selectedMethod={paymentMethod}
                      onMethodChange={setPaymentMethod}
                      onPaymentComplete={handlePaymentComplete}
                      amount={finalTotal}
                    />

                    <div className="flex justify-between pt-6">
                      <Button variant="outline" onClick={handlePreviousStep} className="btn-hover-scale bg-transparent">
                        Back to Shipping
                      </Button>
                      {paymentMethod === "cod" && (
                        <Button onClick={handlePlaceOrder} disabled={isProcessing} className="btn-hover-scale">
                          {isProcessing ? "Processing..." : "Place Order"}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Order Confirmation */}
              {currentStep === 3 && (
                <Card className="animate-fade-in-up">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Order Confirmation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Shipping Details */}
                    <div>
                      <h3 className="font-semibold mb-3">Shipping Address</h3>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="font-medium">
                          {shippingInfo.firstName} {shippingInfo.lastName}
                        </p>
                        <p className="text-sm text-muted-foreground">{shippingInfo.address}</p>
                        <p className="text-sm text-muted-foreground">
                          {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}
                        </p>
                        <p className="text-sm text-muted-foreground">{shippingInfo.phone}</p>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="font-semibold mb-3">Payment Method</h3>
                      <div className="bg-muted p-4 rounded-lg">
                        {paymentMethod === "cod" ? (
                          <>
                            <p className="font-medium">Cash on Delivery</p>
                            <p className="text-sm text-muted-foreground">
                              Pay ₹{finalTotal} when you receive your order
                            </p>
                          </>
                        ) : paymentData ? (
                          <>
                            <p className="font-medium">Payment Completed</p>
                            <p className="text-sm text-muted-foreground">Transaction ID: {paymentData.transactionId}</p>
                            <Badge className="mt-2 bg-green-100 text-green-800">Paid ₹{finalTotal}</Badge>
                          </>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex justify-between pt-6">
                      <Button variant="outline" onClick={handlePreviousStep} className="btn-hover-scale bg-transparent">
                        Back to Payment
                      </Button>
                      {paymentMethod === "cod" && (
                        <Button
                          onClick={handlePlaceOrder}
                          disabled={isProcessing}
                          className="btn-hover-scale"
                          size="lg"
                        >
                          {isProcessing ? "Processing..." : `Place Order - ₹${finalTotal}`}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-12 h-12 relative flex-shrink-0 rounded overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-sm font-medium">₹{item.price * item.quantity}</div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>₹{state.total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Delivery</span>
                      <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-primary">₹{finalTotal}</span>
                    </div>
                  </div>

                  {/* Payment Status */}
                  {paymentData && (
                    <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-2 h-2 text-white" />
                        </div>
                        <span className="text-sm font-medium text-green-800">Payment Successful</span>
                      </div>
                      <p className="text-xs text-green-600 mt-1">Transaction ID: {paymentData.transactionId}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <SuccessAnimation
        show={orderComplete}
        message="Your order has been placed successfully!"
        onComplete={() => {
          setOrderComplete(false)
          window.location.href = "/"
        }}
      />
    </>
  )
}
