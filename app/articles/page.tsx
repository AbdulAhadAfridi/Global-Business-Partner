import type { Metadata } from "next"
import { BookOpen, Clock, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Articles | B2B Marketplace",
  description: "In-depth articles and insights on business, trade, and industry trends.",
}

const articles = [
  {
    id: 1,
    title: "The Future of B2B E-commerce: Trends to Watch in 2025",
    excerpt: "Explore the emerging trends shaping the future of business-to-business e-commerce platforms.",
    author: "Alex Thompson",
    readTime: "8 min read",
    category: "E-commerce",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Supply Chain Optimization: Best Practices for Global Trade",
    excerpt: "Learn how to streamline your supply chain operations for maximum efficiency and cost savings.",
    author: "Maria Garcia",
    readTime: "12 min read",
    category: "Supply Chain",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Digital Transformation in Manufacturing: A Complete Guide",
    excerpt: "Comprehensive guide to implementing digital technologies in manufacturing processes.",
    author: "Robert Lee",
    readTime: "15 min read",
    category: "Manufacturing",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "International Trade Regulations: What Businesses Need to Know",
    excerpt: "Navigate complex international trade regulations with our comprehensive overview.",
    author: "Jennifer Wu",
    readTime: "10 min read",
    category: "Trade",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Sustainable Business Practices: ROI and Implementation",
    excerpt: "How sustainable practices can improve your bottom line while benefiting the environment.",
    author: "Thomas Brown",
    readTime: "7 min read",
    category: "Sustainability",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Fintech Solutions for B2B Payments and Finance",
    excerpt: "Discover how fintech innovations are revolutionizing business payments and financing.",
    author: "Lisa Chen",
    readTime: "9 min read",
    category: "Fintech",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Articles</h1>
            <p className="text-xl mb-8">In-depth insights and expert analysis on business trends</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium w-fit">
                  {article.category}
                </span>
                <CardTitle className="text-lg">{article.title}</CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
