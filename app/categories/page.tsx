"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { categories } from "@/lib/mock-data"

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Business Categories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore businesses across diverse industries and find the perfect suppliers for your needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full group">
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                  <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {category.count.toLocaleString()} businesses
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center mb-4">
                    Discover verified suppliers and manufacturers in {category.name.toLowerCase()}
                  </CardDescription>

                  {/* Subcategories */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Popular subcategories:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.subcategories.slice(0, 3).map((sub, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {sub}
                        </Badge>
                      ))}
                      {category.subcategories.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{category.subcategories.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary/5">
                    Explore Category
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our marketplace is constantly growing. Contact us to suggest new categories or find specialized suppliers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/businesses">Browse All Businesses</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
