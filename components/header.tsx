"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, LogOut, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import { useRouter } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, logout } = useAuth()
  const { getTotalItems } = useCart()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const cartItemCount = getTotalItems()

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-b hidden sm:flex">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/associations" className="hover:text-blue-200 transition-colors duration-200">
                Associations
              </Link>
              <Link href="/banking" className="hover:text-blue-200 transition-colors duration-200">
                Banking
              </Link>
              <Link href="/shipping" className="hover:text-blue-200 transition-colors duration-200">
                Shipping & Logistics
              </Link>
              <Link href="/insurance" className="hover:text-blue-200 transition-colors duration-200">
                Insurance
              </Link>
              <Link href="/stock-exchange" className="hover:text-blue-200 transition-colors duration-200">
                StockExchange
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <Link href="/advertise" className="hover:text-blue-200 transition-colors duration-200">
                Advertise Here
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
              <img src="/companylogo.png" alt="Logo" className="h-8 w-8" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-200">TradeHub</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-xs sm:max-w-md lg:max-w-2xl mx-4 sm:mx-6 lg:mx-8 group">
            <form onSubmit={handleSearch} className="flex w-full transition-all duration-300 group-hover:shadow-md">
              <Input
                type="text"
                placeholder="Search Bar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none border-r-0 focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm"
              />
              <Select defaultValue="pakistan">
                <SelectTrigger className="w-24 sm:w-36 lg:w-48 rounded-l-none rounded-r-none border-x-0 focus:ring-2 focus:ring-blue-500 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pakistan">Pakistan</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="china">China</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" className="rounded-l-none bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
            <Link href="/signin" className="hover:text-blue-600 hover:underline transition-all duration-200">
              Login
            </Link>
            <Link href="/signup" className="hover:text-blue-600 hover:underline transition-all duration-200">
              Register
            </Link>
            <Link href="/orders" className="hover:text-blue-600 hover:underline transition-all duration-200">
              Orders
            </Link>
            <Link href="/cart" className="hover:text-blue-600 flex items-center transition-all duration-200">
              Cart
              {cartItemCount > 0 && (
                <Badge variant="secondary" className="ml-1 text-xs bg-blue-100 text-blue-600 animate-pulse">
                  {cartItemCount}
                </Badge>
              )}
            </Link>

            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:bg-blue-50 transition-colors duration-200">
                    <Avatar className="h-6 w-6 transform hover:scale-110 transition-transform duration-200">
                      {user.profilePicture ? (
                        <AvatarImage src={user.profilePicture || "/placeholder.svg"} alt={user.name} />
                      ) : (
                        <AvatarFallback className="text-xs bg-blue-100 text-blue-600">
                          {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <span className="hidden md:inline text-sm">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 animate-in fade-in-0 duration-200">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="hover:bg-blue-50 transition-colors duration-200">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="hover:bg-blue-50 transition-colors duration-200">Dashboard</Link>
                  </DropdownMenuItem>
                  {user.role === "admin" && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin" className="hover:bg-blue-50 transition-colors duration-200">Admin Panel</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 hover:bg-red-50 transition-colors duration-200">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            <Button variant="ghost" size="sm" className="lg:hidden hover:bg-blue-50 transition-colors duration-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

      
        <div className="border-t py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 hidden sm:block">
              <Link href="/news" className="hover:text-blue-600">
                News
              </Link>
              <Link href="/articles" className="hover:text-blue-600">
                Articles
              </Link>
              <Link href="/events" className="hover:text-blue-600">
                Events
              </Link>
              <Link href="/important-links" className="hover:text-blue-600">
                Important Links
              </Link>
              
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/members" className="hover:text-blue-600">
                Members
              </Link>
              <Link href="/shop" className="hover:text-blue-600">
                Shop
              </Link>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
              
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4 px-2">
              <form onSubmit={handleSearch} className="flex">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm"
                />
                <Button type="submit" className="rounded-l-none bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                  <Search className="h-4 w-4" />
                </Button>
              </form>

              <nav className="flex flex-col space-y-2">
                <Link href="/businesses" className="text-sm font-medium hover:text-blue-600 hover:bg-blue-50 py-2 rounded transition-all duration-200">
                  All Businesses
                </Link>
                <Link href="/suppliers" className="text-sm font-medium hover:text-blue-600 hover:bg-blue-50 py-2 rounded transition-all duration-200">
                  Suppliers
                </Link>
                <Link href="/buyers" className="text-sm font-medium hover:text-blue-600 hover:bg-blue-50 py-2 rounded transition-all duration-200">
                  Buyers
                </Link>
                <Link href="/categories" className="text-sm font-medium hover:text-blue-600 hover:bg-blue-50 py-2 rounded transition-all duration-200">
                  Categories
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-4 text-center">
          <p className="text-sm text-gray-600 animate-pulse">Space for Our Main Banner</p>
        </div>
      </div>
    </header>
  )
}



































// "use client"

// import type React from "react"

// import { useState } from "react"
// import Link from "next/link"
// import { Menu, X, LogOut, Search } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useAuth } from "@/contexts/auth-context"
// import { useCart } from "@/contexts/cart-context"
// import { useRouter } from "next/navigation"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")
//   const { user, logout } = useAuth()
//   const { getTotalItems } = useCart()
//   const router = useRouter()

//   const handleLogout = () => {
//     logout()
//     router.push("/")
//   }

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (searchQuery.trim()) {
//       router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
//     }
//   }

//   const cartItemCount = getTotalItems()

//   return (
//     <header className="w-full bg-white border-b">
//       <div className="bg-gray-50 border-b">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-10 text-xs">
            
//             <div className="flex items-center space-x-4">
//               <Link href="/associations" className="hover:text-blue-600">
//                 Associations
//               </Link>
//               <Link href="/banking" className="hover:text-blue-600">
//                 Banking
//               </Link>
//               <Link href="/shipping" className="hover:text-blue-600">
//                 Shipping & Logistics
//               </Link>
//               <Link href="/insurance" className="hover:text-blue-600">
//                 Insurance
//               </Link>
//               <Link href="/stock-exchange" className="hover:text-blue-600">
//                 StockExchange
//               </Link>
//               </div>
//               <div className="flex items-center justify-end">
//               <Link href="/advertise" className="hover:text-blue-600">
//                 Advertise Here
//               </Link>
//               </div>
            
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
//                   <img src="/companylogo.png" alt="Logo" className="h-8 w-8" />
//                         </div>
//             <span className="font-bold text-xl text-gray-900">TradeHub</span>
//           </Link>

//           <div className="hidden md:flex flex-1 max-w-2xl mx-8">
//             <form onSubmit={handleSearch} className="flex w-full">
//               <Input
//                 type="text"
//                 placeholder="Search Bar"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="rounded-r-none border-r-0"
//               />
//               <Select defaultValue="pakistan">
//                 <SelectTrigger className="w-48 rounded-l-none rounded-r-none border-x-0">
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="pakistan">Pakistan</SelectItem>
//                   <SelectItem value="india">India</SelectItem>
//                   <SelectItem value="china">China </SelectItem>
//                   <SelectItem value="usa">USA</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button type="submit" className="rounded-l-none bg-blue-600 hover:bg-blue-700">
//                 <Search className="h-4 w-4" />
//               </Button>
//             </form>
//           </div>

//           <div className="flex items-center space-x-4 text-sm">
//             <Link href="/signin" className="hover:text-blue-600">
//               Login
//             </Link>
//             <Link href="/signup" className="hover:text-blue-600">
//               Register
//             </Link>
//             <Link href="/orders" className="hover:text-blue-600">
//               Orders
//             </Link>
//             <Link href="/cart" className="hover:text-blue-600 flex items-center">
//               Cart
//               {cartItemCount > 0 && (
//                 <Badge variant="secondary" className="ml-1 text-xs">
//                   {cartItemCount}
//                 </Badge>
//               )}
//             </Link>

//             {user && (
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="ghost" size="sm" className="flex items-center space-x-2">
//                     <Avatar className="h-6 w-6">
//                       {user.profilePicture ? (
//                         <AvatarImage src={user.profilePicture || "/placeholder.svg"} alt={user.name} />
//                       ) : (
//                         <AvatarFallback className="text-xs bg-blue-100 text-blue-600">
//                           {user.name.charAt(0).toUpperCase()}
//                         </AvatarFallback>
//                       )}
//                     </Avatar>
//                     <span className="hidden md:inline text-sm">{user.name}</span>
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end" className="w-56">
//                   <div className="px-2 py-1.5">
//                     <p className="text-sm font-medium">{user.name}</p>
//                     <p className="text-xs text-muted-foreground">{user.email}</p>
//                   </div>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem asChild>
//                     <Link href="/profile">Profile</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <Link href="/dashboard">Dashboard</Link>
//                   </DropdownMenuItem>
//                   {user.role === "admin" && (
//                     <DropdownMenuItem asChild>
//                       <Link href="/admin">Admin Panel</Link>
//                     </DropdownMenuItem>
//                   )}
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem onClick={handleLogout} className="text-red-600">
//                     <LogOut className="mr-2 h-4 w-4" />
//                     Sign Out
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             )}

//             <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>

        // <div className="border-t py-2">
        //   <div className="flex items-center justify-between text-sm">
        //     <div className="flex items-center space-x-6">
        //       <Link href="/news" className="hover:text-blue-600">
        //         News
        //       </Link>
        //       <Link href="/articles" className="hover:text-blue-600">
        //         Articles
        //       </Link>
        //       <Link href="/events" className="hover:text-blue-600">
        //         Events
        //       </Link>
        //       <Link href="/important-links" className="hover:text-blue-600">
        //         Important Links
        //       </Link>
              
        //     </div>
        //     <div className="flex items-center space-x-6">
        //       <Link href="/members" className="hover:text-blue-600">
        //         Members
        //       </Link>
        //       <Link href="/shop" className="hover:text-blue-600">
        //         Shop
        //       </Link>
        //       <Link href="/about" className="hover:text-blue-600">
        //         About Us
        //       </Link>
              
        //     </div>
        //   </div>
        // </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden border-t py-4">
//             <div className="flex flex-col space-y-4">
//               <form onSubmit={handleSearch} className="flex">
//                 <Input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="rounded-r-none"
//                 />
//                 <Button type="submit" className="rounded-l-none">
//                   <Search className="h-4 w-4" />
//                 </Button>
//               </form>

//               <nav className="flex flex-col space-y-2">
//                 <Link href="/businesses" className="text-sm font-medium hover:text-blue-600 py-2">
//                   All Businesses
//                 </Link>
//                 <Link href="/suppliers" className="text-sm font-medium hover:text-blue-600 py-2">
//                   Suppliers
//                 </Link>
//                 <Link href="/buyers" className="text-sm font-medium hover:text-blue-600 py-2">
//                   Buyers
//                 </Link>
//                 <Link href="/categories" className="text-sm font-medium hover:text-blue-600 py-2">
//                   Categories
//                 </Link>
//               </nav>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="bg-gray-100 border-t">
//         <div className="container mx-auto px-4 py-4 text-center">
//           <p className="text-sm text-gray-600">Space for Our Main Banner</p>
//         </div>
//       </div>
//     </header>
//   )
// }
