"use client"

import { useState, useMemo } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, MapPin, Users, Calendar, Globe, Verified, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { mockBusinesses, categories } from "@/lib/mock-data"

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.slug as string

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedBusinessType, setSelectedBusinessType] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  const category = categories.find((cat) => cat.slug === categorySlug)
  const categoryName = category?.name || ""

  const categoryBusinesses = useMemo(() => {
    return mockBusinesses.filter((business) => business.category === categoryName)
  }, [categoryName])

  const countries = Array.from(new Set(categoryBusinesses.map((b) => b.country))).sort()
  const businessTypes = Array.from(new Set(categoryBusinesses.map((b) => b.businessType))).sort()

  const filteredBusinesses = useMemo(() => {
    const filtered = categoryBusinesses.filter((business) => {
      const matchesSearch =
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.products.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCountry = selectedCountry === "all" || business.country === selectedCountry
      const matchesBusinessType = selectedBusinessType === "all" || business.businessType === selectedBusinessType

      return matchesSearch && matchesCountry && matchesBusinessType
    })

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        case "name":
          return a.name.localeCompare(b.name)
        case "established":
          return b.established - a.established
        default:
          return 0
      }
    })

    return filtered
  }, [categoryBusinesses, searchQuery, selectedCountry, selectedBusinessType, sortBy])

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Button asChild>
            <Link href="/categories">Back to Categories</Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/categories" className="hover:text-primary">
            Categories
          </Link>
          <span>/</span>
          <span className="text-foreground">{category.name}</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/categories">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">{category.icon}</div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{category.name}</h1>
              <p className="text-muted-foreground">{categoryBusinesses.length} verified businesses in this category</p>
            </div>
          </div>

          {/* Subcategories */}
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map((sub, index) => (
              <Badge key={index} variant="secondary">
                {sub}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Refine Results</h3>

              {/* Search */}
              <div className="space-y-2 mb-4">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search in category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Country Filter */}
              <div className="space-y-2 mb-4">
                <label className="text-sm font-medium">Country</label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Countries" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Countries</SelectItem>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Business Type Filter */}
              <div className="space-y-2 mb-4">
                <label className="text-sm font-medium">Business Type</label>
                <Select value={selectedBusinessType} onValueChange={setSelectedBusinessType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {businessTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <p className="text-muted-foreground">
                  Showing {filteredBusinesses.length} of {categoryBusinesses.length} businesses
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Sort by:</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="reviews">Reviews</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="established">Established</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Business Cards */}
            <div className="grid gap-6">
              {filteredBusinesses.map((business) => (
                <Link key={business.id} href={`/business/${business.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Business Image */}
                        <div className="md:w-48 h-32 md:h-36 relative overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={business.image || "/placeholder.svg"}
                            alt={business.name}
                            className="w-full h-full object-cover"
                          />
                          {business.verified && (
                            <Badge className="absolute top-2 right-2 bg-green-500">
                              <Verified className="mr-1 h-3 w-3" />
                              Verified
                            </Badge>
                          )}
                        </div>

                        {/* Business Info */}
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">{business.name}</h3>
                            <p className="text-muted-foreground text-sm line-clamp-2">{business.description}</p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {business.subcategory && <Badge variant="secondary">{business.subcategory}</Badge>}
                            <Badge variant="outline" className="capitalize">
                              {business.businessType.replace("_", " ")}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-4 w-4" />
                              {business.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4" />
                              {business.employees} employees
                            </div>
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4" />
                              Est. {business.established}
                            </div>
                            <div className="flex items-center">
                              <Globe className="mr-2 h-4 w-4" />
                              Min. order: {business.minOrderValue}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                              <span className="font-medium">{business.rating}</span>
                              <span className="text-muted-foreground ml-1">({business.reviews} reviews)</span>
                            </div>
                            <div className="text-sm text-muted-foreground">Response: {business.responseTime}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredBusinesses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No businesses found in this category.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCountry("all")
                    setSelectedBusinessType("all")
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
