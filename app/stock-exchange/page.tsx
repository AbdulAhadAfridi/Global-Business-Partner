import type { Metadata } from "next"
import { TrendingUp, BarChart3, DollarSign, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Stock Exchange | B2B Marketplace",
  description: "Access global stock exchanges and investment opportunities.",
}

const exchanges = [
  {
    id: 1,
    name: "New York Stock Exchange",
    country: "United States",
    marketCap: "$26.2T",
    companies: "2,400+",
    icon: DollarSign,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "London Stock Exchange",
    country: "United Kingdom",
    marketCap: "$3.8T",
    companies: "2,000+",
    icon: BarChart3,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Tokyo Stock Exchange",
    country: "Japan",
    marketCap: "$5.4T",
    companies: "3,700+",
    icon: TrendingUp,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Shanghai Stock Exchange",
    country: "China",
    marketCap: "$4.0T",
    companies: "1,800+",
    icon: Globe,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function StockExchangePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Stock Exchange</h1>
            <p className="text-xl mb-8">Access global markets and investment opportunities</p>
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Start Trading
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">$40T+</h3>
              <p className="text-gray-600">Global Market Cap</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Stock Exchanges</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
              <p className="text-gray-600">Listed Companies</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">195</h3>
              <p className="text-gray-600">Countries</p>
            </CardContent>
          </Card>
        </div>

        {/* Exchanges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exchanges.map((exchange) => {
            const IconComponent = exchange.icon
            return (
              <Card key={exchange.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={exchange.image || "/placeholder.svg"}
                    alt={exchange.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-8 w-8 text-green-600" />
                    <CardTitle className="text-xl">{exchange.name}</CardTitle>
                  </div>
                  <CardDescription>{exchange.country}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600">Market Cap</p>
                      <p className="text-lg font-semibold">{exchange.marketCap}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Companies</p>
                      <p className="text-lg font-semibold">{exchange.companies}</p>
                    </div>
                  </div>
                  <Button className="w-full">View Market</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
