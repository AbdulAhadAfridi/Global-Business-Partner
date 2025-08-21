"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Search,
  Filter,
  MapPin,
  Users,
  Calendar,
  Globe,
  Verified,
  Building2,
  Package,
  Grid3X3,
} from "lucide-react"
import Link from "next/link"
import { mockBusinesses, categories } from "@/lib/mock-data"
import { SearchBar } from "@/components/search-bar"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedBusinessType, setSelectedBusinessType] = useState("all")
  const [minRating, setMinRating] = useState(0)
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    setSearchQuery(initialQuery)
  }, [initialQuery])

  const countries = Array.from(new Set(mockBusinesses.map((b) => b.country))).sort()
  const businessTypes = Array.from(new Set(mockBusinesses.map((b) => b.businessType))).sort()

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return { businesses: [], categories: [], products: [] }

    const query = searchQuery.toLowerCase()

    // Business results
    const businesses = mockBusinesses.filter((business) => {
      const matchesSearch =
        business.name.toLowerCase().includes(query) ||
        business.description.toLowerCase().includes(query) ||
        business.products.some((p) => p.toLowerCase().includes(query)) ||
        business.tags.some((t) => t.toLowerCase().includes(query))

      const matchesCategory = selectedCategory === "all" || business.category === selectedCategory
      const matchesCountry = selectedCountry === "all" || business.country === selectedCountry
      const matchesBusinessType = selectedBusinessType === "all" || business.businessType === selectedBusinessType
      const matchesRating = business.rating >= minRating
      const matchesVerified = !verifiedOnly || business.verified

      return (
        matchesSearch && matchesCategory && matchesCountry && matchesBusinessType && matchesRating && matchesVerified
      )
    })

    // Category results
    const categoryResults = categories.filter((category) => category.name.toLowerCase().includes(query))

    // Product results
    const productResults = Array.from(
      new Set(
        mockBusinesses
          .flatMap((business) => business.products)
          .filter((product) => product.toLowerCase().includes(query)),
      ),
    ).map((product) => ({
      name: product,
      businesses: mockBusinesses.filter((b) => b.products.some((p) => p.toLowerCase() === product.toLowerCase()))
        .length,
    }))

    // Sort businesses
    businesses.sort((a, b) => {
      switch (sortBy) {
        case "relevance":
          // Simple relevance scoring based on name match
          const aScore = a.name.toLowerCase().includes(query) ? 2 : 1
          const bScore = b.name.toLowerCase().includes(query) ? 2 : 1
          return bScore - aScore
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

    return {
      businesses,
      categories: categoryResults,
      products: productResults,
    }
  }, [searchQuery, selectedCategory, selectedCountry, selectedBusinessType, minRating, verifiedOnly, sortBy])

  const totalResults = searchResults.businesses.length + searchResults.categories.length + searchResults.products.length

  const filteredResults = useMemo(() => {
    switch (activeTab) {
      case "businesses":
        return searchResults.businesses
      case "categories":
        return searchResults.categories
      case "products":
        return searchResults.products
      default:
        return [
          ...searchResults.businesses.slice(0, 10),
          ...searchResults.categories,
          ...searchResults.products.slice(0, 5),
        ]
    }
  }, [searchResults, activeTab])

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text
    const regex = new RegExp(`(${query})`, "gi")
    const parts = text.split(regex)
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-yellow-900 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Search Results</h1>
          </div>

          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mb-4">
            <SearchBar
              placeholder="Search products, suppliers, or categories..."
              className="w-full"
              showSuggestions={false}
            />
          </div>

          {searchQuery && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Showing results for:</span>
              <Badge variant="secondary" className="font-medium">
                "{searchQuery}"
              </Badge>
              <span>•</span>
              <span>{totalResults} results found</span>
            </div>
          )}
        </div>

        {searchQuery ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80 space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </h3>

                {/* Category Filter */}
                <div className="space-y-2 mb-4">
                  <label className="text-sm font-medium">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.slug} value={category.name}>
                          {category.icon} {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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

                {/* Rating Filter */}
                <div className="space-y-2 mb-4">
                  <label className="text-sm font-medium">Minimum Rating</label>
                  <Select value={minRating.toString()} onValueChange={(value) => setMinRating(Number(value))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Any Rating</SelectItem>
                      <SelectItem value="3">3+ Stars</SelectItem>
                      <SelectItem value="4">4+ Stars</SelectItem>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Verified Only */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="verified"
                    checked={verifiedOnly}
                    onCheckedChange={(checked) => setVerifiedOnly(checked as boolean)}
                  />
                  <label htmlFor="verified" className="text-sm font-medium">
                    Verified businesses only
                  </label>
                </div>
              </Card>
            </div>

            {/* Results */}
            <div className="flex-1">
              {/* Results Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <TabsList>
                    <TabsTrigger value="all" className="flex items-center gap-2">
                      <Grid3X3 className="h-4 w-4" />
                      All ({totalResults})
                    </TabsTrigger>
                    <TabsTrigger value="businesses" className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Businesses ({searchResults.businesses.length})
                    </TabsTrigger>
                    <TabsTrigger value="categories" className="flex items-center gap-2">
                      <Grid3X3 className="h-4 w-4" />
                      Categories ({searchResults.categories.length})
                    </TabsTrigger>
                    <TabsTrigger value="products" className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Products ({searchResults.products.length})
                    </TabsTrigger>
                  </TabsList>

                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Sort by:</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                        <SelectItem value="reviews">Reviews</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="established">Established</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <TabsContent value="all" className="space-y-6">
                  {/* Mixed Results */}
                  {searchResults.categories.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Categories</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {searchResults.categories.map((category, index) => (
                          <Link key={index} href={`/categories/${category.slug}`}>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                              <CardContent className="p-4 text-center">
                                <div className="text-3xl mb-2">{category.icon}</div>
                                <h4 className="font-semibold text-sm mb-1">
                                  {highlightText(category.name, searchQuery)}
                                </h4>
                                <Badge variant="secondary" className="text-xs">
                                  {category.count} businesses
                                </Badge>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.products.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Products</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {searchResults.products.slice(0, 6).map((product, index) => (
                          <Link key={index} href={`/search?q=${encodeURIComponent(product.name)}`}>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                              <CardContent className="p-4">
                                <h4 className="font-semibold text-sm mb-1">
                                  {highlightText(product.name, searchQuery)}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                  {product.businesses} businesses offer this product
                                </p>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.businesses.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Businesses</h3>
                      <div className="space-y-4">
                        {searchResults.businesses.slice(0, 10).map((business) => (
                          <Link key={business.id} href={`/business/${business.id}`}>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                              <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row gap-6">
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

                                  <div className="flex-1 space-y-3">
                                    <div>
                                      <h3 className="text-xl font-semibold text-foreground mb-1">
                                        {highlightText(business.name, searchQuery)}
                                      </h3>
                                      <p className="text-muted-foreground text-sm line-clamp-2">
                                        {highlightText(business.description, searchQuery)}
                                      </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                      <Badge variant="secondary">{business.category}</Badge>
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
                                      <div className="text-sm text-muted-foreground">
                                        Response: {business.responseTime}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="businesses" className="space-y-4">
                  {searchResults.businesses.map((business) => (
                    <Link key={business.id} href={`/business/${business.id}`}>
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-6">
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

                            <div className="flex-1 space-y-3">
                              <div>
                                <h3 className="text-xl font-semibold text-foreground mb-1">
                                  {highlightText(business.name, searchQuery)}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                  {highlightText(business.description, searchQuery)}
                                </p>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">{business.category}</Badge>
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
                </TabsContent>

                <TabsContent value="categories" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchResults.categories.map((category, index) => (
                      <Link key={index} href={`/categories/${category.slug}`}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                          <CardContent className="p-6 text-center">
                            <div className="text-5xl mb-4">{category.icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{highlightText(category.name, searchQuery)}</h3>
                            <Badge variant="secondary">{category.count} businesses</Badge>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="products" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchResults.products.map((product, index) => (
                      <Link key={index} href={`/search?q=${encodeURIComponent(product.name)}`}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                          <CardContent className="p-6">
                            <h3 className="font-semibold text-lg mb-2">{highlightText(product.name, searchQuery)}</h3>
                            <p className="text-muted-foreground text-sm">
                              {product.businesses} businesses offer this product
                            </p>
                            <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                              View Suppliers
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {totalResults === 0 && (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("all")
                      setSelectedCountry("all")
                      setSelectedBusinessType("all")
                      setMinRating(0)
                      setVerifiedOnly(false)
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Start your search</h3>
            <p className="text-muted-foreground">Enter keywords to find businesses, categories, or products.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
