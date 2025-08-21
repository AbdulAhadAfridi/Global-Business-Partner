"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockBusinesses, categories } from "@/lib/mock-data"

interface SearchBarProps {
  placeholder?: string
  className?: string
  showSuggestions?: boolean
}

export function SearchBar({
  placeholder = "Search products, suppliers, or categories...",
  className = "",
  showSuggestions = true,
}: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [suggestions, setSuggestions] = useState<any[]>([])
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length > 1 && showSuggestions) {
      const businessSuggestions = mockBusinesses
        .filter(
          (business) =>
            business.name.toLowerCase().includes(query.toLowerCase()) ||
            business.description.toLowerCase().includes(query.toLowerCase()) ||
            business.products.some((p) => p.toLowerCase().includes(query.toLowerCase())),
        )
        .slice(0, 3)
        .map((business) => ({
          type: "business",
          id: business.id,
          name: business.name,
          category: business.category,
          location: business.location,
          verified: business.verified,
        }))

      const categorySuggestions = categories
        .filter((category) => category.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 2)
        .map((category) => ({
          type: "category",
          name: category.name,
          slug: category.slug,
          icon: category.icon,
          count: category.count,
        }))

      const productSuggestions = Array.from(
        new Set(
          mockBusinesses
            .flatMap((business) => business.products)
            .filter((product) => product.toLowerCase().includes(query.toLowerCase())),
        ),
      )
        .slice(0, 3)
        .map((product) => ({
          type: "product",
          name: product,
        }))

      setSuggestions([...businessSuggestions, ...categorySuggestions, ...productSuggestions])
      setShowDropdown(true)
    } else {
      setSuggestions([])
      setShowDropdown(false)
    }
  }, [query, showSuggestions])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (searchQuery?: string) => {
    const searchTerm = searchQuery || query
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
      setShowDropdown(false)
      setQuery("")
    }
  }

  const handleSuggestionClick = (suggestion: any) => {
    if (suggestion.type === "business") {
      router.push(`/business/${suggestion.id}`)
    } else if (suggestion.type === "category") {
      router.push(`/categories/${suggestion.slug}`)
    } else if (suggestion.type === "product") {
      handleSearch(suggestion.name)
    }
    setShowDropdown(false)
    setQuery("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    } else if (e.key === "Escape") {
      setShowDropdown(false)
    }
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-10 pr-20"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-12 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            onClick={() => {
              setQuery("")
              setShowDropdown(false)
            }}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
        <Button
          size="sm"
          className="absolute right-1 top-1/2 transform -translate-y-1/2"
          onClick={() => handleSearch()}
        >
          Search
        </Button>
      </div>

      {/* Search Suggestions Dropdown */}
      {showDropdown && suggestions.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-3 hover:bg-muted cursor-pointer border-b last:border-b-0"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.type === "business" && (
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{suggestion.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {suggestion.category} • {suggestion.location}
                      </div>
                    </div>
                    {suggestion.verified && <Badge className="bg-green-500 text-xs">Verified</Badge>}
                  </div>
                )}

                {suggestion.type === "category" && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{suggestion.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{suggestion.name}</div>
                        <div className="text-xs text-muted-foreground">Category</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {suggestion.count} businesses
                    </Badge>
                  </div>
                )}

                {suggestion.type === "product" && (
                  <div>
                    <div className="font-medium text-sm">{suggestion.name}</div>
                    <div className="text-xs text-muted-foreground">Product</div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
