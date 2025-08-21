import type { Metadata } from "next"
import { Truck, Ship, Plane, Package } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Shipping & Logistics | B2B Marketplace",
  description: "Global shipping and logistics solutions for international trade.",
}

const shippingServices = [
  {
    id: 1,
    name: "Ocean Freight",
    description: "Cost-effective shipping solutions for large cargo volumes.",
    features: ["FCL & LCL Services", "Port-to-Port", "Door-to-Door", "Customs Clearance"],
    icon: Ship,
    image: "/placeholder-pjev2.png",
  },
  {
    id: 2,
    name: "Air Freight",
    description: "Fast and reliable air cargo services worldwide.",
    features: ["Express Delivery", "Charter Services", "Temperature Control", "Dangerous Goods"],
    icon: Plane,
    image: "/placeholder-m730l.png",
  },
  {
    id: 3,
    name: "Land Transport",
    description: "Comprehensive road and rail transportation services.",
    features: ["Trucking Services", "Rail Transport", "Cross-Border", "Last Mile Delivery"],
    icon: Truck,
    image: "/highway-trucks.png",
  },
  {
    id: 4,
    name: "Warehousing",
    description: "Secure storage and distribution center solutions.",
    features: ["Storage Solutions", "Inventory Management", "Pick & Pack", "Distribution"],
    icon: Package,
    image: "/modern-warehouse-logistics-center.png",
  },
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shipping & Logistics</h1>
            <p className="text-xl mb-8">Global logistics solutions for seamless international trade</p>
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              Get Quote
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shippingServices.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-8 w-8 text-orange-600" />
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
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
