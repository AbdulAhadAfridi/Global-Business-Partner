"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Users, Globe, TrendingUp, ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"

export default function BuyersPage() {
  const buyerServices = [
    {
      title: "Sourcing Assistance",
      description: "Get help finding the right suppliers for your specific needs",
      icon: <Users className="h-8 w-8 text-primary" />,
      features: ["Supplier matching", "Quality verification", "Price negotiation", "Sample coordination"],
    },
    {
      title: "Global Marketplace",
      description: "Access thousands of verified suppliers from around the world",
      icon: <Globe className="h-8 w-8 text-primary" />,
      features: ["200+ countries", "50K+ suppliers", "Real-time inventory", "Multi-language support"],
    },
    {
      title: "Secure Trading",
      description: "Trade with confidence using our secure payment and escrow services",
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      features: ["Secure payments", "Trade assurance", "Quality inspection", "Dispute resolution"],
    },
    {
      title: "Business Growth",
      description: "Tools and insights to help grow your business and optimize procurement",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      features: ["Market insights", "Price analytics", "Supplier performance", "Procurement tools"],
    },
  ]

  const buyingSteps = [
    {
      step: 1,
      title: "Search & Discover",
      description: "Browse our extensive catalog or use our advanced search to find exactly what you need.",
    },
    {
      step: 2,
      title: "Compare & Connect",
      description: "Compare suppliers, read reviews, and connect directly with verified businesses.",
    },
    {
      step: 3,
      title: "Negotiate & Order",
      description: "Negotiate terms, request samples, and place orders with confidence.",
    },
    {
      step: 4,
      title: "Track & Receive",
      description: "Track your orders in real-time and receive quality products on schedule.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ShoppingCart className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">For Buyers</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Source products from verified suppliers worldwide. Get competitive prices, quality assurance, and reliable
            delivery for your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <Link href="/businesses">
                <Building2 className="mr-2 h-5 w-5" />
                Start Sourcing
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent" asChild>
              <Link href="/signup">Join as Buyer</Link>
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {buyerServices.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to start sourcing products from global suppliers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buyingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Categories for Buyers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Categories</h2>
            <p className="text-lg text-muted-foreground">Most sourced categories by buyers on our platform</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Electronics", icon: "💻", buyers: "12K+" },
              { name: "Textiles", icon: "👔", buyers: "8K+" },
              { name: "Machinery", icon: "⚙️", buyers: "6K+" },
              { name: "Chemicals", icon: "⚗️", buyers: "4K+" },
              { name: "Food Products", icon: "🌾", buyers: "9K+" },
              { name: "Construction", icon: "🧱", buyers: "5K+" },
              { name: "Medical", icon: "🏥", buyers: "3K+" },
              { name: "Automotive", icon: "🚗", buyers: "7K+" },
            ].map((category, index) => (
              <Link key={index} href={`/categories/${category.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center p-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <Badge variant="secondary">{category.buyers} buyers</Badge>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of buyers who trust our platform for their sourcing needs. Get access to verified suppliers,
            competitive prices, and quality assurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <Link href="/signup">
                Create Buyer Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent" asChild>
              <Link href="/businesses">Browse Suppliers</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
