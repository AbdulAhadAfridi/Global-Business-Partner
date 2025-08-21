import type { Metadata } from "next"
import { Users, Award, Globe, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Members | B2B Marketplace",
  description: "Connect with verified business members from around the world.",
}

const memberStats = [
  { label: "Total Members", value: "50,000+", icon: Users },
  { label: "Countries", value: "195", icon: Globe },
  { label: "Verified Businesses", value: "25,000+", icon: Award },
  { label: "Monthly Growth", value: "15%", icon: TrendingUp },
]

const featuredMembers = [
  {
    id: 1,
    name: "Global Tech Solutions",
    type: "Premium Member",
    country: "United States",
    industry: "Technology",
    members: "500-1000",
    avatar: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 2,
    name: "Premium Textiles Co.",
    type: "Gold Member",
    country: "India",
    industry: "Textiles",
    members: "1000-5000",
    avatar: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 3,
    name: "Fresh Farm Exports",
    type: "Premium Member",
    country: "United States",
    industry: "Agriculture",
    members: "100-500",
    avatar: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 4,
    name: "BuildRight Materials",
    type: "Gold Member",
    country: "UAE",
    industry: "Construction",
    members: "500-1000",
    avatar: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
]

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Members</h1>
            <p className="text-xl mb-8">Connect with verified businesses from around the world</p>
            <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100">
              Become a Member
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Member Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {memberStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <IconComponent className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Featured Members */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        {member.verified && <Award className="h-5 w-5 text-yellow-500" />}
                      </div>
                      <CardDescription>{member.type}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Country</p>
                      <p className="font-medium">{member.country}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Industry</p>
                      <p className="font-medium">{member.industry}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Company Size</p>
                      <p className="font-medium">{member.members} employees</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
