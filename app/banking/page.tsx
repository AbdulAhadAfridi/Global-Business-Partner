import type { Metadata } from "next"
import { CreditCard, DollarSign, Shield, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Banking Services | B2B Marketplace",
  description: "Comprehensive banking and financial services for businesses worldwide.",
}

const bankingServices = [
  {
    id: 1,
    name: "Trade Finance",
    description: "Letters of credit, trade loans, and export financing solutions.",
    features: ["Letters of Credit", "Export Financing", "Trade Loans", "Documentary Collections"],
    icon: DollarSign,
    image: "/placeholder-5rjjm.png",
  },
  {
    id: 2,
    name: "Business Banking",
    description: "Complete banking solutions for small to large enterprises.",
    features: ["Business Accounts", "Cash Management", "Payroll Services", "Online Banking"],
    icon: CreditCard,
    image: "/business-banking-modern-office.png",
  },
  {
    id: 3,
    name: "Investment Services",
    description: "Investment banking and wealth management for businesses.",
    features: ["Portfolio Management", "Investment Advisory", "Capital Markets", "M&A Services"],
    icon: TrendingUp,
    image: "/investment-banking-trading-floor.png",
  },
  {
    id: 4,
    name: "Risk Management",
    description: "Comprehensive risk assessment and mitigation solutions.",
    features: ["Credit Assessment", "Insurance Products", "Hedging Solutions", "Compliance"],
    icon: Shield,
    image: "/risk-management-financial-security.png",
  },
]

export default function BankingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Banking Services</h1>
            <p className="text-xl mb-8">Comprehensive financial solutions for your business growth</p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bankingServices.map((service) => {
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
                    <IconComponent className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
