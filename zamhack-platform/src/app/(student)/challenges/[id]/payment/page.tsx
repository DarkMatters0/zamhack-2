// src/app/(student)/challenges/[id]/payment/page.tsx
"use client"

import { useState, use, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { AlertCircle, CreditCard, Lock, Loader2, ShieldCheck } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PaymentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [challengeTitle, setChallengeTitle] = useState<string>("")
  const [feeAmount, setFeeAmount] = useState<number>(100)
  const [currency, setCurrency] = useState<string>("PHP")

  // ── Fetch challenge details to display in the summary ──
  useEffect(() => {
    const fetchChallenge = async () => {
      const supabase = createClient()
      const { data } = await supabase
        .from("challenges")
        .select("title, entry_fee_amount, currency")
        .eq("id", id)
        .single()

      if (data) {
        setChallengeTitle(data.title)
        setFeeAmount(data.entry_fee_amount ?? 100)
        setCurrency(data.currency ?? "PHP")
      }
    }
    fetchChallenge()
  }, [id])

  const handlePayment = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Call our API route to create a PayMongo checkout session
      const response = await fetch("/api/payment/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ challengeId: id }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to initiate payment.")
      }

      // Redirect student to PayMongo's hosted checkout page
      // (GCash / Maya / Card options are shown there natively)
      window.location.href = data.checkout_url

    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="container max-w-md py-20">
      <Card className="border-2 shadow-lg">
        <CardHeader className="text-center border-b bg-muted/20">
          <div className="flex justify-center mb-2">
            <ShieldCheck className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Secure Checkout</CardTitle>
          <CardDescription>Complete your registration for this challenge</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">

          {/* Order Summary */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 space-y-2">
            {challengeTitle && (
              <p className="text-sm font-medium text-blue-900 border-b border-blue-200 pb-2 mb-2 truncate">
                {challengeTitle}
              </p>
            )}
            <div className="flex justify-between text-sm text-blue-900">
              <span>Registration Fee</span>
              <span className="font-semibold">
                {currency} {feeAmount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm text-blue-900">
              <span>Processing Fee</span>
              <span className="font-semibold">₱0.00</span>
            </div>
            <div className="border-t border-blue-200 pt-2 flex justify-between font-bold text-blue-900">
              <span>Total</span>
              <span>{currency} {feeAmount.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Methods Info */}
          <div className="rounded-lg border p-4 space-y-2">
            <p className="text-sm font-medium text-muted-foreground text-center">
              Accepted Payment Methods
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {["GCash", "PayMaya", "Card", "QR Ph"].map((method) => (
                <span
                  key={method}
                  className="text-xs px-3 py-1 bg-muted rounded-full font-medium"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Payment Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* CTA Button */}
          <Button
            onClick={handlePayment}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Redirecting to checkout...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Pay {currency} {feeAmount.toFixed(2)}
              </span>
            )}
          </Button>

          <Button
            variant="ghost"
            className="w-full"
            onClick={() => router.push(`/challenges/${id}`)}
            disabled={isLoading}
          >
            Cancel
          </Button>

        </CardContent>

        <CardFooter className="justify-center border-t bg-muted/20 py-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Lock className="h-3 w-3" />
            Payments are processed securely by PayMongo
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}