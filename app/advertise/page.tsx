import type { Metadata } from "next"
import { Megaphone, Target, BarChart, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Advertise Here | B2B Marketplace",
  description: "Promote your business to millions of potential customers worldwide.",
}

const advertisingOptions = [
  {
    id: 1,
    name: "Banner Advertising",
    description: "Premium banner placements across our platform.",
    features: ["Homepage Banner", "Category Pages", "Search Results", "Mobile Optimized"],
    price: "From $500/month",
    icon: Megaphone,
  },
  {
    id: 2,
    name: "Sponsored Listings",
    description: "Boost your products to the top of search results.",
    features: ["Priority Placement", "Enhanced Visibility", "Performance Analytics", "Targeted Audience"],
    price: "From $200/month",
    icon: Target,
  },
  {
    id: 3,
    name: "Content Marketing",
    description: "Showcase your expertise through articles and case studies.",
    features: ["Article Publishing", "Case Studies", "Industry Reports", "Thought Leadership"],
    price: "From $300/month",
    icon: BarChart,
  },
  {
    id: 4,
    name: "Directory Listing",
    description: "Premium business directory placement.",
    features: ["Enhanced Profile", "Contact Information", "Business Description", "Customer Reviews"],
    price: "From $100/month",
    icon: Users,
  },
]

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advertise Here</h1>
            <p className="text-xl mb-8">Reach millions of potential customers worldwide</p>
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              Start Advertising
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Advertising Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {advertisingOptions.map((option) => {
            const IconComponent = option.icon
            return (
              <Card key={option.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">{option.name}</CardTitle>
                  </div>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-red-600">{option.price}</span>
                    <Button>Get Started</Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Contact us for custom advertising solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your company name" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your advertising needs" rows={4} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
