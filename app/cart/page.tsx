"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight, Package, Building2 } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice, getItemsByBusiness } = useCart()
  const { user } = useAuth()
  const router = useRouter()
  const [promoCode, setPromoCode] = useState("")

  const itemsByBusiness = getItemsByBusiness()
  const totalPrice = getTotalPrice()
  const totalItems = items.length

  const handleCheckout = () => {
    if (!user) {
      router.push("/signin")
      return
    }
    router.push("/checkout")
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Start shopping to add products to your cart and connect with suppliers worldwide.
            </p>
            <div className="space-y-3">
              <Button size="lg" className="w-full" asChild>
                <Link href="/businesses">
                  <Package className="mr-2 h-5 w-5" />
                  Browse Businesses
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full bg-transparent" asChild>
                <Link href="/categories">View Categories</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
          <Badge variant="secondary">{totalItems} items</Badge>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {Object.entries(itemsByBusiness).map(([businessId, businessItems]) => {
              const businessName = businessItems[0]?.businessName || "Unknown Business"
              const businessTotal = businessItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

              return (
                <Card key={businessId}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{businessName}</CardTitle>
                          <CardDescription>{businessItems.length} items</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${businessTotal.toFixed(2)}</div>
                        <div className="text-sm text-muted-foreground">Subtotal</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {businessItems.map((item) => (
                      <div key={item.id} className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                        <div className="md:w-24 h-20 relative overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.productName}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 space-y-2">
                          <h4 className="font-semibold">{item.productName}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                          {item.specifications && Object.keys(item.specifications).length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {Object.entries(item.specifications).map(([key, value]) => (
                                <Badge key={key} variant="outline" className="text-xs">
                                  {key}: {value}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col md:items-end gap-3">
                          <div className="text-right">
                            <div className="font-semibold text-lg">${item.price.toFixed(2)}</div>
                            <div className="text-sm text-muted-foreground">per {item.unit}</div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= item.minOrderQuantity}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                              className="w-20 text-center"
                              min={item.minOrderQuantity}
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}

            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={clearCart} className="text-red-600 hover:text-red-700 bg-transparent">
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cart
              </Button>
              <Button variant="outline" asChild className="bg-transparent">
                <Link href="/businesses">Continue Shopping</Link>
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-muted-foreground">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span className="text-muted-foreground">Calculated at checkout</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input placeholder="Promo code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
                    <Button variant="outline" className="bg-transparent">
                      Apply
                    </Button>
                  </div>

                  <Button size="lg" className="w-full" onClick={handleCheckout}>
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Secure checkout powered by industry-standard encryption
                  </p>
                </div>

                <Separator />

                <div className="space-y-2 text-sm text-muted-foreground">
                  <h4 className="font-medium text-foreground">Need help?</h4>
                  <p>Contact our support team for assistance with your order or to request bulk pricing.</p>
                  <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
