import type { Metadata } from "next"
import { Calendar, User, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Business News | B2B Marketplace",
  description: "Latest business news, market updates, and industry insights.",
}

const newsArticles = [
  {
    id: 1,
    title: "Global Trade Reaches Record High in Q4 2024",
    excerpt:
      "International trade volumes hit unprecedented levels as supply chains recover and digital transformation accelerates.",
    author: "Sarah Johnson",
    date: "2024-12-15",
    views: 1250,
    category: "Trade",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "AI Revolution in B2B Manufacturing",
    excerpt: "How artificial intelligence is transforming manufacturing processes and supply chain management.",
    author: "Michael Chen",
    date: "2024-12-14",
    views: 980,
    category: "Technology",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Sustainable Business Practices Drive Growth",
    excerpt: "Companies adopting green initiatives see 25% increase in B2B partnerships and customer loyalty.",
    author: "Emma Rodriguez",
    date: "2024-12-13",
    views: 756,
    category: "Sustainability",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Digital Payment Solutions Transform B2B Commerce",
    excerpt: "New fintech innovations streamline international payments and reduce transaction costs by 40%.",
    author: "David Kim",
    date: "2024-12-12",
    views: 1100,
    category: "Fintech",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business News</h1>
            <p className="text-xl mb-8">Stay updated with the latest business trends and market insights</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Article */}
        <Card className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img
                src={newsArticles[0].image || "/placeholder.svg"}
                alt={newsArticles[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {newsArticles[0].category}
              </span>
              <h2 className="text-2xl font-bold mt-4 mb-3">{newsArticles[0].title}</h2>
              <p className="text-gray-600 mb-4">{newsArticles[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{newsArticles[0].author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{newsArticles[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{newsArticles[0].views} views</span>
                </div>
              </div>
              <Button>Read Full Article</Button>
            </div>
          </div>
        </Card>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium w-fit">
                  {article.category}
                </span>
                <CardTitle className="text-lg">{article.title}</CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{article.views}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
