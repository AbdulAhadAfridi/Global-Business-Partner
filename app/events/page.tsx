import type { Metadata } from "next"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Business Events | B2B Marketplace",
  description: "Discover upcoming business events, trade shows, and networking opportunities.",
}

const events = [
  {
    id: 1,
    title: "Global Trade Summit 2025",
    description: "Annual summit bringing together international trade leaders and industry experts.",
    date: "2025-03-15",
    time: "09:00 AM - 06:00 PM",
    location: "Dubai World Trade Centre, UAE",
    attendees: 5000,
    category: "Trade Show",
    price: "$299",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "B2B Technology Expo",
    description: "Showcase of latest business technology solutions and innovations.",
    date: "2025-04-22",
    time: "10:00 AM - 08:00 PM",
    location: "Las Vegas Convention Center, USA",
    attendees: 8000,
    category: "Technology",
    price: "$199",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Manufacturing Excellence Conference",
    description: "Learn about best practices in modern manufacturing and Industry 4.0.",
    date: "2025-05-10",
    time: "08:30 AM - 05:30 PM",
    location: "ExCeL London, UK",
    attendees: 3500,
    category: "Manufacturing",
    price: "$349",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Sustainable Business Forum",
    description: "Focus on sustainable practices and green business solutions.",
    date: "2025-06-18",
    time: "09:00 AM - 06:00 PM",
    location: "Singapore Expo, Singapore",
    attendees: 2800,
    category: "Sustainability",
    price: "$249",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Events</h1>
            <p className="text-xl mb-8">Connect, learn, and grow at premier business events worldwide</p>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Browse All Events
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                  <span className="text-lg font-bold text-purple-600">{event.price}</span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees.toLocaleString()} expected attendees</span>
                  </div>
                </div>
                <Button className="w-full">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
