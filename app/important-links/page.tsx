import type { Metadata } from "next"
import { ExternalLink, Globe, FileText, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Important Links | B2B Marketplace",
  description: "Essential resources and links for international business and trade.",
}

const linkCategories = [
  {
    title: "Government & Trade",
    icon: Globe,
    links: [
      { name: "World Trade Organization", url: "https://wto.org", description: "Global trade rules and regulations" },
      {
        name: "International Chamber of Commerce",
        url: "https://iccwbo.org",
        description: "Business organization promoting international trade",
      },
      { name: "Export.gov", url: "https://export.gov", description: "US government export assistance" },
      { name: "Trade.gov", url: "https://trade.gov", description: "International trade administration" },
    ],
  },
  {
    title: "Documentation & Compliance",
    icon: FileText,
    links: [
      { name: "Harmonized System Codes", url: "#", description: "International product classification system" },
      { name: "Certificate of Origin", url: "#", description: "Document certifying country of origin" },
      { name: "Commercial Invoice Templates", url: "#", description: "Standard invoice formats for trade" },
      { name: "Bill of Lading Guide", url: "#", description: "Shipping document requirements" },
    ],
  },
  {
    title: "Security & Standards",
    icon: Shield,
    links: [
      { name: "ISO Standards", url: "https://iso.org", description: "International organization for standardization" },
      { name: "C-TPAT Program", url: "#", description: "Customs-Trade Partnership Against Terrorism" },
      { name: "AEO Certification", url: "#", description: "Authorized Economic Operator program" },
      { name: "GDPR Compliance", url: "#", description: "Data protection regulation guidelines" },
    ],
  },
]

export default function ImportantLinksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Important Links</h1>
            <p className="text-xl mb-8">Essential resources for international business and trade</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {linkCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-8 w-8 text-teal-600" />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">{link.name}</h4>
                            <p className="text-sm text-gray-600">{link.description}</p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
