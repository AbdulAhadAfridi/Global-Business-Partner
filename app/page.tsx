import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Users, Globe, Star, ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const categories = [
    { name: "Agriculture & Food", icon: "🌾", count: "2,450", color: "bg-green-100 text-green-800" },
    { name: "Builders & Real Estate", icon: "🏗️", count: "1,890", color: "bg-blue-100 text-blue-800" },
    { name: "Books & Education", icon: "📚", count: "1,234", color: "bg-purple-100 text-purple-800" },
    { name: "Business Services & Others", icon: "💼", count: "3,567", color: "bg-gray-100 text-gray-800" },
    { name: "Chemicals & Minerals", icon: "⚗️", count: "987", color: "bg-yellow-100 text-yellow-800" },
    { name: "Construction, Material & Scrap", icon: "🧱", count: "2,123", color: "bg-orange-100 text-orange-800" },
    { name: "Computers, IT & Telecommunications", icon: "💻", count: "4,567", color: "bg-indigo-100 text-indigo-800" },
    { name: "Energy", icon: "⚡", count: "1,456", color: "bg-red-100 text-red-800" },
    { name: "Excess Inventory", icon: "📦", count: "789", color: "bg-cyan-100 text-cyan-800" },
    { name: "Foreign Companies", icon: "🌍", count: "2,345", color: "bg-teal-100 text-teal-800" },
    { name: "Health, Lab & Surgical Items", icon: "🏥", count: "1,678", color: "bg-rose-100 text-rose-800" },
    { name: "House Hold Furnitures & Appliances", icon: "🏠", count: "3,456", color: "bg-amber-100 text-amber-800" },
    { name: "Islamic Products", icon: "☪️", count: "567", color: "bg-emerald-100 text-emerald-800" },
    { name: "Plant & Machinery", icon: "🏭", count: "1,234", color: "bg-slate-100 text-slate-800" },
    { name: "Printing & Packaging", icon: "📄", count: "890", color: "bg-violet-100 text-violet-800" },
    { name: "Plastic & Rubber", icon: "🔧", count: "1,567", color: "bg-lime-100 text-lime-800" },
    { name: "Sports Products & Services", icon: "⚽", count: "678", color: "bg-sky-100 text-sky-800" },
    { name: "Startups", icon: "🚀", count: "2,890", color: "bg-fuchsia-100 text-fuchsia-800" },
    { name: "Travel, Tourism &Sports", icon: "✈️", count: "1,345", color: "bg-orange-100 text-orange-800" },
    { name: "Women Led Businesses", icon: "👩‍💼", count: "1,789", color: "bg-pink-100 text-pink-800" },
  ]

  const featuredBusinesses = [
    {
      id: 1,
      name: "Global Tech Solutions",
      category: "Technology",
      location: "New York, USA",
      rating: 4.8,
      reviews: 234,
      image: "/modern-tech-office.png",
      description: "Leading provider of enterprise software solutions and IT consulting services.",
      verified: true,
    },
    {
      id: 2,
      name: "Premium Textiles Co.",
      category: "Textiles",
      location: "Mumbai, India",
      rating: 4.6,
      reviews: 189,
      image: "/placeholder-oxojy.png",
      description: "High-quality textile manufacturing with sustainable practices and global reach.",
      verified: true,
    },
    {
      id: 3,
      name: "Fresh Farm Exports",
      category: "Agriculture",
      location: "California, USA",
      rating: 4.9,
      reviews: 156,
      image: "/modern-agricultural-farm.png",
      description: "Organic produce supplier specializing in fresh fruits and vegetables export.",
      verified: true,
    },
    {
      id: 4,
      name: "BuildRight Materials",
      category: "Construction",
      location: "Dubai, UAE",
      rating: 4.7,
      reviews: 298,
      image: "/construction-warehouse.png",
      description: "Premium construction materials and building supplies for large-scale projects.",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      

      <div className="flex">
        <aside className="hidden lg:block w-64 bg-white border-r min-h-screen">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Categories :</h3>
              <Button variant="ghost" size="sm" id="categories-toggle">
                <span className="text-xl">≡</span>
              </Button>
            </div>
            <div className="space-y-1" id="categories-list">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-").replace(/,/g, "")}`}
                  className="block text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>
        
        

        {/* Main content */}
        <main className="flex-1">
          {/* Hero Section */}
          {/*  Space for Our Main Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-4 text-center">
          <p className="text-sm text-gray-600 animate-pulse">
            Space for Our Main Banner
          </p>
        </div>
      </div>
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Join World's Fastest Growing <span className="text-primary">B2B Network</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Connect with verified suppliers and buyers across 20+ industries. Find the right business partners and
                  grow your network globally.
                </p>

                {/* Hero Search */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search for products, suppliers, or services..."
                      className="w-full pl-12 pr-32 py-4 text-lg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button size="lg" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      Search Now
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Button size="lg" className="px-8" asChild>
                    <Link href="/register-business">
                      <Building2 className="mr-2 h-5 w-5" />
                      Register Your Business
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 bg-transparent" asChild>
                    <Link href="/suppliers">
                      <Users className="mr-2 h-5 w-5" />
                      Browse Suppliers
                    </Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Active Businesses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">1M+</div>
                    <div className="text-sm text-muted-foreground">Products Listed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Categories</h2>
                <p className="text-lg text-muted-foreground">Discover businesses across diverse industries</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.slice(0, 8).map((category, index) => (
                  <Link
                    key={index}
                    href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-").replace(/,/g, "")}`}
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h3 className="font-semibold text-sm mb-2">{category.name}</h3>
                        <Badge variant="secondary" className={category.color}>
                          {category.count} businesses
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/categories">
                    View All Categories
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Featured Businesses */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Featured Businesses</h2>
                <p className="text-lg text-muted-foreground">Verified suppliers and manufacturers you can trust</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredBusinesses.map((business) => (
                  <Link key={business.id} href={`/business/${business.id}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <div className="aspect-video relative overflow-hidden rounded-t-lg">
                        <img
                          src={business.image || "/placeholder.svg"}
                          alt={business.name}
                          className="w-full h-full object-cover"
                        />
                        {business.verified && <Badge className="absolute top-2 right-2 bg-green-500">Verified</Badge>}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{business.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{business.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{business.location}</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span>{business.rating}</span>
                            <span className="text-muted-foreground ml-1">({business.reviews})</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button size="lg" asChild>
                  <Link href="/businesses">
                    View All Businesses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose TradeHub?</h2>
                <p className="text-lg text-muted-foreground">The most trusted B2B marketplace for global trade</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Global Reach</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>
                      Connect with businesses from over 200 countries and expand your market reach globally.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Verified Partners</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>
                      All businesses are thoroughly verified to ensure safe and reliable trading partnerships.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Growth Focused</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>
                      Advanced tools and analytics to help you grow your business and increase sales.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}
