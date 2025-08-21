"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Package, Mail, ArrowRight, Download, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"

export default function CheckoutSuccessPage() {
  const { user } = useAuth()

  // Mock order data
  const orderNumber = `ORD-${Date.now().toString().slice(-6)}`
  const orderDate = new Date().toLocaleDateString()

  useEffect(() => {
    // In a real app, you might want to track this conversion event
    console.log("Order completed successfully")
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Order Placed Successfully!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your order. We've received your request and will process it shortly.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Package className="h-5 w-5" />
                Order Details
              </CardTitle>
              <CardDescription>Your order information and next steps</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold">Order Number</div>
                  <div className="text-primary font-mono">{orderNumber}</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold">Order Date</div>
                  <div>{orderDate}</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    Order confirmation sent to <strong>{user?.email}</strong>
                  </span>
                </div>
                <Badge variant="secondary" className="mx-auto">
                  Processing
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What happens next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Order Confirmation</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll send you an email confirmation with your order details and tracking information.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Supplier Coordination</h4>
                    <p className="text-sm text-muted-foreground">
                      Our team will coordinate with suppliers to confirm availability and finalize shipping details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Processing & Shipping</h4>
                    <p className="text-sm text-muted-foreground">
                      Your order will be processed and shipped within 1-2 business days. You'll receive tracking
                      information.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      Estimated delivery time is 5-10 business days depending on your location and shipping method.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/profile">
                  <Package className="mr-2 h-5 w-5" />
                  View Order History
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent">
                <Link href="/businesses">
                  Continue Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="sm" className="bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                Download Invoice
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-3">Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If you have any questions about your order or need assistance, our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
              <span>Email: support@tradehub.com</span>
              <span className="hidden sm:inline">•</span>
              <span>Phone: +1 (555) 123-4567</span>
              <span className="hidden sm:inline">•</span>
              <span>Live Chat: Available 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
