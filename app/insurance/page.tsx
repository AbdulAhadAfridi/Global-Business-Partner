import type { Metadata } from "next"
import { Shield, FileText, Users, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Insurance Services | B2B Marketplace",
  description: "Comprehensive business insurance solutions for international trade.",
}

const insuranceProducts = [
  {
    id: 1,
    name: "Trade Credit Insurance",
    description: "Protect your business against buyer default and political risks.",
    coverage: ["Buyer Default", "Political Risk", "Currency Risk", "Contract Frustration"],
    icon: Shield,
    image: "/placeholder-hzoxf.png",
  },
  {
    id: 2,
    name: "Cargo Insurance",
    description: "Comprehensive coverage for goods in transit worldwide.",
    coverage: ["Marine Cargo", "Air Cargo", "Land Transport", "Warehouse Coverage"],
    icon: FileText,
    image: "/placeholder-rquas.png",
  },
  {
    id: 3,
    name: "Business Liability",
    description: "Protect your business from third-party claims and lawsuits.",
    coverage: ["General Liability", "Product Liability", "Professional Indemnity", "Cyber Liability"],
    icon: Users,
    image: "/placeholder-xsln2.png",
  },
  {
    id: 4,
    name: "International Coverage",
    description: "Global insurance solutions for multinational operations.",
    coverage: ["Multi-Country Policies", "Local Compliance", "Currency Matching", "24/7 Support"],
    icon: Globe,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insurance Services</h1>
            <p className="text-xl mb-8">Comprehensive protection for your international business operations</p>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Coverage
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Insurance Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insuranceProducts.map((product) => {
            const IconComponent = product.icon
            return (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-8 w-8 text-purple-600" />
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.coverage.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Get Quote</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
