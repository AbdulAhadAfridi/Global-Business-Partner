import type { Metadata } from "next"
import { Building2, Users, Award, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Business Associations | B2B Marketplace",
  description: "Connect with leading business associations and trade organizations worldwide.",
}

const associations = [
  {
    id: 1,
    name: "International Chamber of Commerce",
    description: "Global business organization promoting international trade and investment.",
    members: "45M+",
    countries: 100,
    category: "Trade",
    image: "/icc-building.png",
  },
  {
    id: 2,
    name: "World Trade Organization",
    description: "Deals with the global rules of trade between nations.",
    members: "164",
    countries: 164,
    category: "Government",
    image: "/wto-headquarters.png",
  },
  {
    id: 3,
    name: "Small Business Association",
    description: "Supporting small businesses with resources and advocacy.",
    members: "30M+",
    countries: 50,
    category: "Small Business",
    image: "/placeholder-tt9is.png",
  },
  {
    id: 4,
    name: "Manufacturing Association",
    description: "Advancing manufacturing industry through advocacy and resources.",
    members: "14K+",
    countries: 25,
    category: "Manufacturing",
    image: "/manufacturing-association-facility.png",
  },
]

export default function AssociationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Associations</h1>
            <p className="text-xl mb-8">Connect with leading trade organizations and business associations worldwide</p>
            <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
              Join an Association
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Building2 className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Associations</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">50M+</h3>
              <p className="text-gray-600">Members</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">150+</h3>
              <p className="text-gray-600">Countries</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">25+</h3>
              <p className="text-gray-600">Industries</p>
            </CardContent>
          </Card>
        </div>

        {/* Associations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {associations.map((association) => (
            <Card key={association.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={association.image || "/placeholder.svg"}
                  alt={association.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{association.name}</CardTitle>
                <CardDescription>{association.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-600">
                    <p>
                      <strong>{association.members}</strong> Members
                    </p>
                    <p>
                      <strong>{association.countries}</strong> Countries
                    </p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    {association.category}
                  </span>
                </div>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
