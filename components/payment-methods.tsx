"use client"

import { useState } from "react"
import { CreditCard, Smartphone, Building2, Wallet, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface PaymentMethodsProps {
  selectedMethod: string
  onMethodChange: (method: string) => void
  onPaymentComplete: (paymentData: any) => void
  amount: number
}

const upiApps = [
  { id: "phonepe", name: "PhonePe", icon: "📱" },
  { id: "googlepay", name: "Google Pay", icon: "🟢" },
  { id: "paytm", name: "Paytm", icon: "💙" },
  { id: "bhim", name: "BHIM UPI", icon: "🇮🇳" },
]

const banks = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Punjab National Bank",
  "Bank of Baroda",
  "Canara Bank",
  "Union Bank",
]

const wallets = [
  { id: "paytm-wallet", name: "Paytm Wallet", icon: "💙" },
  { id: "mobikwik", name: "MobiKwik", icon: "🔵" },
  { id: "freecharge", name: "FreeCharge", icon: "🟡" },
  { id: "amazonpay", name: "Amazon Pay", icon: "🟠" },
]

export function PaymentMethods({ selectedMethod, onMethodChange, onPaymentComplete, amount }: PaymentMethodsProps) {
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  })
  const [upiId, setUpiId] = useState("")
  const [selectedBank, setSelectedBank] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const paymentData = {
      method: selectedMethod,
      amount,
      transactionId: `TXN${Date.now()}`,
      status: "success",
      timestamp: new Date().toISOString(),
    }

    setIsProcessing(false)
    onPaymentComplete(paymentData)
  }

  return (
    <div className="space-y-6">
      <RadioGroup value={selectedMethod} onValueChange={onMethodChange}>
        {/* Cash on Delivery */}
        <div className="flex items-center space-x-2 p-4 border rounded-lg">
          <RadioGroupItem value="cod" id="cod" />
          <Label htmlFor="cod" className="flex-1 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Banknote className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">Cash on Delivery</p>
                  <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                </div>
              </div>
              <Badge variant="secondary">Recommended</Badge>
            </div>
          </Label>
        </div>

        {/* UPI Payment */}
        <div className="flex items-center space-x-2 p-4 border rounded-lg">
          <RadioGroupItem value="upi" id="upi" />
          <Label htmlFor="upi" className="flex-1 cursor-pointer">
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium">UPI Payment</p>
                <p className="text-sm text-muted-foreground">Pay using any UPI app</p>
              </div>
            </div>
          </Label>
        </div>

        {selectedMethod === "upi" && (
          <Card className="ml-8 animate-fade-in-up">
            <CardContent className="p-4 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {upiApps.map((app) => (
                  <Button key={app.id} variant="outline" className="h-auto p-3 flex flex-col gap-2 bg-transparent">
                    <span className="text-2xl">{app.icon}</span>
                    <span className="text-xs">{app.name}</span>
                  </Button>
                ))}
              </div>
              <Separator />
              <div>
                <Label htmlFor="upi-id">Enter UPI ID</Label>
                <Input
                  id="upi-id"
                  placeholder="yourname@paytm"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </div>
              <Button onClick={handlePayment} disabled={!upiId || isProcessing} className="w-full">
                {isProcessing ? "Processing..." : `Pay ₹${amount} via UPI`}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Credit/Debit Card */}
        <div className="flex items-center space-x-2 p-4 border rounded-lg">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card" className="flex-1 cursor-pointer">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium">Credit/Debit Card</p>
                <p className="text-sm text-muted-foreground">Visa, Mastercard, RuPay accepted</p>
              </div>
            </div>
          </Label>
        </div>

        {selectedMethod === "card" && (
          <Card className="ml-8 animate-fade-in-up">
            <CardContent className="p-4 space-y-4">
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="card-name">Cardholder Name</Label>
                <Input
                  id="card-name"
                  placeholder="Name as on card"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                />
              </div>
              <Button
                onClick={handlePayment}
                disabled={!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || isProcessing}
                className="w-full"
              >
                {isProcessing ? "Processing..." : `Pay ₹${amount} via Card`}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Net Banking */}
        <div className="flex items-center space-x-2 p-4 border rounded-lg">
          <RadioGroupItem value="netbanking" id="netbanking" />
          <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-red-600" />
              <div>
                <p className="font-medium">Net Banking</p>
                <p className="text-sm text-muted-foreground">Pay using your bank account</p>
              </div>
            </div>
          </Label>
        </div>

        {selectedMethod === "netbanking" && (
          <Card className="ml-8 animate-fade-in-up">
            <CardContent className="p-4 space-y-4">
              <div>
                <Label htmlFor="bank-select">Select Your Bank</Label>
                <select
                  id="bank-select"
                  className="w-full p-2 border rounded-md"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                >
                  <option value="">Choose your bank</option>
                  {banks.map((bank) => (
                    <option key={bank} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>
              <Button onClick={handlePayment} disabled={!selectedBank || isProcessing} className="w-full">
                {isProcessing ? "Processing..." : `Pay ₹${amount} via Net Banking`}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Digital Wallets */}
        <div className="flex items-center space-x-2 p-4 border rounded-lg">
          <RadioGroupItem value="wallet" id="wallet" />
          <Label htmlFor="wallet" className="flex-1 cursor-pointer">
            <div className="flex items-center gap-3">
              <Wallet className="w-5 h-5 text-orange-600" />
              <div>
                <p className="font-medium">Digital Wallets</p>
                <p className="text-sm text-muted-foreground">Paytm, MobiKwik, Amazon Pay</p>
              </div>
            </div>
          </Label>
        </div>

        {selectedMethod === "wallet" && (
          <Card className="ml-8 animate-fade-in-up">
            <CardContent className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {wallets.map((wallet) => (
                  <Button
                    key={wallet.id}
                    variant="outline"
                    className="h-auto p-3 flex items-center gap-2 bg-transparent"
                  >
                    <span className="text-xl">{wallet.icon}</span>
                    <span className="text-sm">{wallet.name}</span>
                  </Button>
                ))}
              </div>
              <Button onClick={handlePayment} disabled={isProcessing} className="w-full">
                {isProcessing ? "Processing..." : `Pay ₹${amount} via Wallet`}
              </Button>
            </CardContent>
          </Card>
        )}
      </RadioGroup>

      {/* Security Badge */}
      <div className="flex items-center justify-center gap-4 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 text-xs">🔒</span>
          </div>
          <span className="text-sm text-muted-foreground">256-bit SSL Encrypted</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-xs">✓</span>
          </div>
          <span className="text-sm text-muted-foreground">PCI DSS Compliant</span>
        </div>
      </div>
    </div>
  )
}
