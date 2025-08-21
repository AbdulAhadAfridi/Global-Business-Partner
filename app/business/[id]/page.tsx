"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  MapPin,
  Users,
  Calendar,
  Globe,
  Phone,
  Mail,
  Verified,
  ShoppingCart,
  MessageCircle,
  Building2,
  Package,
  Award,
  Truck,
  CreditCard,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { mockBusinesses } from "@/lib/mock-data"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

export default function BusinessPage() {
  const params = useParams()
  const businessId = params.id as string
  const business = mockBusinesses.find((b) => b.id === businessId)
  const { addItem } = useCart()
  const { user } = useAuth()
  const router = useRouter()

  const [selectedProduct, setSelectedProduct] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [specifications, setSpecifications] = useState<Record<string, string>>({})

  if (!business) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Business Not Found</h1>
          <Button asChild>
            <Link href="/businesses">Back to Businesses</Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!user) {
      router.push("/signin")
      return
    }

    if (!selectedProduct) {
      alert("Please select a product")
      return
    }

    addItem({
      businessId: business.id,
      businessName: business.name,
      productName: selectedProduct,
      description: `${selectedProduct} from ${business.name}`,
      price: Math.floor(Math.random() * 1000) + 100, // Mock pricing
      quantity,
      minOrderQuantity: 1,
      unit: "pcs",
      image: business.image,
      specifications,
    })

    alert("Product added to cart!")
    setSelectedProduct("")
    setQuantity(1)
    setSpecifications({})
  }

  const handleRequestQuote = () => {
    if (!user) {
      router.push("/signin")
      return
    }
    // In a real app, this would open a quote request form
    alert("Quote request functionality would be implemented here")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/businesses" className="hover:text-primary">
            Businesses
          </Link>
          <span>/</span>
          <span className="text-foreground">{business.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Business Header */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-64 h-48 relative overflow-hidden rounded-lg flex-shrink-0">
                  <img
                    src={business.image || "/placeholder.svg"}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                  {business.verified && (
                    <Badge className="absolute top-3 right-3 bg-green-500">
                      <Verified className="mr-1 h-3 w-3" />
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{business.name}</h1>
                    <p className="text-muted-foreground text-lg">{business.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{business.category}</Badge>
                    <Badge variant="outline" className="capitalize">
                      {business.businessType.replace("_", " ")}
                    </Badge>
                    {business.subcategory && <Badge variant="outline">{business.subcategory}</Badge>}
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium text-lg">{business.rating}</span>
                      <span className="text-muted-foreground ml-1">({business.reviews} reviews)</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Response: {business.responseTime}</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      {business.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      {business.employees} employees
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      Est. {business.established}
                    </div>
                    <div className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                      Min. order: {business.minOrderValue}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Main Products
                    </CardTitle>
                    <CardDescription>Select products to add to your cart or request a quote</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {business.products.map((product, index) => (
                        <Card
                          key={index}
                          className={`cursor-pointer transition-colors ${
                            selectedProduct === product ? "ring-2 ring-primary" : ""
                          }`}
                          onClick={() => setSelectedProduct(product)}
                        >
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-2">{product}</h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              High-quality {product.toLowerCase()} with competitive pricing and reliable delivery.
                            </p>
                            <div className="flex justify-between items-center">
                              <Badge variant="outline">MOQ: 100 pcs</Badge>
                              <span className="font-medium">Contact for price</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {selectedProduct && (
                      <Card className="border-primary/20 bg-primary/5">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-3">Order Details: {selectedProduct}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="quantity">Quantity</Label>
                              <Input
                                id="quantity"
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="specifications">Specifications (Optional)</Label>
                              <Input
                                id="specifications"
                                placeholder="Color, size, material, etc."
                                className="mt-1"
                                onChange={(e) => setSpecifications({ ...specifications, general: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="flex gap-3 mt-4">
                            <Button onClick={handleAddToCart} className="flex-1">
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Add to Cart
                            </Button>
                            <Button variant="outline" onClick={handleRequestQuote} className="flex-1 bg-transparent">
                              <MessageCircle className="mr-2 h-4 w-4" />
                              Request Quote
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      Company Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">About {business.name}</h4>
                      <p className="text-muted-foreground">{business.description}</p>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Business Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Business Type:</span>
                            <span className="capitalize">{business.businessType.replace("_", " ")}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Established:</span>
                            <span>{business.established}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Employees:</span>
                            <span>{business.employees}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Location:</span>
                            <span>{business.location}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Trading Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Min. Order Value:</span>
                            <span>{business.minOrderValue}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Response Time:</span>
                            <span>{business.responseTime}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Payment Terms:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {business.paymentTerms.map((term, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {term}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Shipping Methods:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {business.shippingMethods.map((method, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {method}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="certifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Certifications & Standards
                    </CardTitle>
                    <CardDescription>Quality certifications and industry standards compliance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {business.certifications.map((cert, index) => (
                        <Card key={index} className="text-center p-4">
                          <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                          <h4 className="font-semibold">{cert}</h4>
                          <p className="text-xs text-muted-foreground mt-1">Certified</p>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                    <CardDescription>{business.reviews} reviews from verified buyers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Mock reviews */}
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="font-medium">Verified Buyer</span>
                          </div>
                          <span className="text-sm text-muted-foreground">2 weeks ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Excellent quality products and professional service. Delivery was on time and packaging was
                          secure. Highly recommended for bulk orders.
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {business.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{business.phone}</span>
                  </div>
                )}
                {business.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{business.email}</span>
                  </div>
                )}
                {business.website && (
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a href={business.website} className="text-sm text-primary hover:underline">
                      Visit Website
                    </a>
                  </div>
                )}
                <Button className="w-full mt-4">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Supplier
                </Button>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-muted-foreground" />
                    <span>Shipping</span>
                  </div>
                  <span>Worldwide</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    <span>Payment</span>
                  </div>
                  <span>Multiple options</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Response</span>
                  </div>
                  <span>{business.responseTime}</span>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {business.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
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
