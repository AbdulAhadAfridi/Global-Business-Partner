"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Filter, MapPin, Users, Calendar, Globe, Verified, Package } from "lucide-react"
import Link from "next/link"
import { mockBusinesses, categories } from "@/lib/mock-data"

export default function SuppliersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  // Filter only suppliers and manufacturers
  const suppliers = mockBusinesses.filter(
    (business) => business.businessType === "supplier" || business.businessType === "manufacturer",
  )

  const countries = Array.from(new Set(suppliers.map((b) => b.country))).sort()

  const filteredSuppliers = useMemo(() => {
    const filtered = suppliers.filter((business) => {
      const matchesSearch =
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.products.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || business.category === selectedCategory
      const matchesCountry = selectedCountry === "all" || business.country === selectedCountry

      return matchesSearch && matchesCategory && matchesCountry
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
  }, [suppliers, searchQuery, selectedCategory, selectedCountry, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Package className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-foreground">Suppliers & Manufacturers</h1>
              <p className="text-muted-foreground">Connect with verified suppliers and manufacturers worldwide</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-muted/30 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{suppliers.length}</div>
              <div className="text-sm text-muted-foreground">Total Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{countries.length}</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{categories.length}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{suppliers.filter((s) => s.verified).length}</div>
              <div className="text-sm text-muted-foreground">Verified</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </h3>

              {/* Search */}
              <div className="space-y-2 mb-4">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search suppliers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

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
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <p className="text-muted-foreground">
                  Showing {filteredSuppliers.length} of {suppliers.length} suppliers
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

            {/* Supplier Cards */}
            <div className="grid gap-6">
              {filteredSuppliers.map((supplier) => (
                <Link key={supplier.id} href={`/business/${supplier.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Supplier Image */}
                        <div className="md:w-48 h-32 md:h-36 relative overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={supplier.image || "/placeholder.svg"}
                            alt={supplier.name}
                            className="w-full h-full object-cover"
                          />
                          {supplier.verified && (
                            <Badge className="absolute top-2 right-2 bg-green-500">
                              <Verified className="mr-1 h-3 w-3" />
                              Verified
                            </Badge>
                          )}
                        </div>

                        {/* Supplier Info */}
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">{supplier.name}</h3>
                            <p className="text-muted-foreground text-sm line-clamp-2">{supplier.description}</p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">{supplier.category}</Badge>
                            <Badge variant="outline" className="capitalize">
                              {supplier.businessType.replace("_", " ")}
                            </Badge>
                          </div>

                          {/* Products */}
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">Main Products:</p>
                            <div className="flex flex-wrap gap-1">
                              {supplier.products.slice(0, 4).map((product, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {product}
                                </Badge>
                              ))}
                              {supplier.products.length > 4 && (
                                <Badge variant="outline" className="text-xs">
                                  +{supplier.products.length - 4} more
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-4 w-4" />
                              {supplier.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4" />
                              {supplier.employees} employees
                            </div>
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4" />
                              Est. {supplier.established}
                            </div>
                            <div className="flex items-center">
                              <Globe className="mr-2 h-4 w-4" />
                              Min. order: {supplier.minOrderValue}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                              <span className="font-medium">{supplier.rating}</span>
                              <span className="text-muted-foreground ml-1">({supplier.reviews} reviews)</span>
                            </div>
                            <div className="text-sm text-muted-foreground">Response: {supplier.responseTime}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredSuppliers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No suppliers found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setSelectedCountry("all")
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
