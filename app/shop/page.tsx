import type { Metadata } from "next"
import { ShoppingCart, Star, Filter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Shop | B2B Marketplace",
  description: "Browse and purchase products from verified suppliers worldwide.",
}

const products = [
  {
    id: 1,
    name: "Industrial Laptop",
    price: "$1,299",
    originalPrice: "$1,499",
    rating: 4.8,
    reviews: 124,
    supplier: "Global Tech Solutions",
    image: "/placeholder.svg?height=200&width=200",
    discount: "13% OFF",
  },
  {
    id: 2,
    name: "Organic Cotton Fabric",
    price: "$12.50/yard",
    originalPrice: "$15.00/yard",
    rating: 4.6,
    reviews: 89,
    supplier: "Premium Textiles Co.",
    image: "/placeholder.svg?height=200&width=200",
    discount: "17% OFF",
  },
  {
    id: 3,
    name: "Fresh Apples",
    price: "$2.80/kg",
    originalPrice: "$3.20/kg",
    rating: 4.9,
    reviews: 156,
    supplier: "Fresh Farm Exports",
    image: "/placeholder.svg?height=200&width=200",
    discount: "12% OFF",
  },
  {
    id: 4,
    name: "Steel Beams",
    price: "$850/ton",
    originalPrice: "$950/ton",
    rating: 4.7,
    reviews: 67,
    supplier: "BuildRight Materials",
    image: "/placeholder.svg?height=200&width=200",
    discount: "11% OFF",
  },
  {
    id: 5,
    name: "Medical Equipment",
    price: "$5,500",
    originalPrice: "$6,200",
    rating: 4.8,
    reviews: 43,
    supplier: "MedEquip Solutions",
    image: "/placeholder.svg?height=200&width=200",
    discount: "11% OFF",
  },
  {
    id: 6,
    name: "Auto Parts Kit",
    price: "$299",
    originalPrice: "$349",
    rating: 4.4,
    reviews: 78,
    supplier: "AutoParts Global",
    image: "/placeholder.svg?height=200&width=200",
    discount: "14% OFF",
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">B2B Shop</h1>
            <p className="text-xl mb-8">Discover quality products from verified suppliers worldwide</p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Input placeholder="Search products..." className="pl-4 pr-12 py-3 text-gray-900" />
                <Button size="sm" className="absolute right-1 top-1 bg-pink-600 hover:bg-pink-700">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {product.discount}
                  </span>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>by {product.supplier}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-pink-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
                <Button className="w-full flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
