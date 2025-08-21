import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Building2, Upload, Phone, Mail, Globe, Users, Package } from "lucide-react"

export default function RegisterBusinessPage() {
  const categories = [
    "Agriculture & Food",
    "Builders & Real Estate",
    "Books & Education",
    "Business Services & Others",
    "Chemicals & Minerals",
    "Construction, Material & Scrap",
    "Computers, IT & Telecommunications",
    "Energy",
    "Excess Inventory",
    "Foreign Companies",
    "Health, Lab & Surgical Items",
    "House Hold Furnitures & Appliances",
    "Islamic Products",
    "Plant & Machinery",
    "Printing & Packaging",
    "Plastic & Rubber",
    "Sports Products & Services",
    "Startups",
    "Travel, Tourism & Sports",
    "Women Led Businesses",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="relative h-48 bg-gradient-to-r from-primary to-primary/80 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center text-white">
            <Building2 className="mx-auto h-16 w-16 mb-4" />
            <h1 className="text-4xl font-bold mb-4">Register Your Business</h1>
            <p className="text-xl">Join thousands of verified businesses on TradeHub</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Business Registration Form</CardTitle>
                  <CardDescription>
                    Fill out all required information to register your business on our platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input id="businessName" placeholder="Your Business Name" />
                      </div>
                      <div>
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manufacturer">Manufacturer</SelectItem>
                            <SelectItem value="supplier">Supplier</SelectItem>
                            <SelectItem value="distributor">Distributor</SelectItem>
                            <SelectItem value="retailer">Retailer</SelectItem>
                            <SelectItem value="service-provider">Service Provider</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="category">Primary Category *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="establishedYear">Established Year</Label>
                        <Input id="establishedYear" type="number" placeholder="2020" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="description">Business Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your business, products, and services..."
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactPerson">Contact Person *</Label>
                        <Input id="contactPerson" placeholder="Full Name" />
                      </div>
                      <div>
                        <Label htmlFor="designation">Designation</Label>
                        <Input id="designation" placeholder="CEO, Manager, etc." />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="business@example.com" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div>
                        <Label htmlFor="whatsapp">WhatsApp Number</Label>
                        <Input id="whatsapp" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" placeholder="https://yourwebsite.com" />
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Address Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Street Address *</Label>
                        <Input id="address" placeholder="123 Business Street" />
                      </div>
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input id="city" placeholder="New York" />
                      </div>
                      <div>
                        <Label htmlFor="state">State/Province</Label>
                        <Input id="state" placeholder="NY" />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                        <Input id="zipCode" placeholder="10001" />
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="pk">Pakistan</SelectItem>
                            <SelectItem value="in">India</SelectItem>
                            <SelectItem value="ae">UAE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Business Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Business Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="employees">Number of Employees</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10</SelectItem>
                            <SelectItem value="11-50">11-50</SelectItem>
                            <SelectItem value="51-200">51-200</SelectItem>
                            <SelectItem value="201-500">201-500</SelectItem>
                            <SelectItem value="500+">500+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="annualRevenue">Annual Revenue (USD)</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-100k">Under $100K</SelectItem>
                            <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                            <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                            <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                            <SelectItem value="5m+">$5M+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="registrationNumber">Business Registration Number</Label>
                        <Input id="registrationNumber" placeholder="REG123456789" />
                      </div>
                      <div>
                        <Label htmlFor="taxId">Tax ID/VAT Number</Label>
                        <Input id="taxId" placeholder="TAX123456789" />
                      </div>
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Document Upload</h3>
                    <div className="space-y-4">
                      <div>
                        <Label>Business Logo</Label>
                        <div className="mt-2 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload or drag and drop your business logo
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
                        </div>
                      </div>

                      <div>
                        <Label>Business Registration Certificate *</Label>
                        <div className="mt-2 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                          <p className="text-sm text-muted-foreground">Upload your business registration certificate</p>
                          <p className="text-xs text-muted-foreground mt-1">PDF, PNG, JPG up to 10MB</p>
                        </div>
                      </div>

                      <div>
                        <Label>Additional Documents</Label>
                        <div className="mt-2 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                          <p className="text-sm text-muted-foreground">
                            Upload tax certificates, licenses, or other relevant documents
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">PDF, PNG, JPG up to 10MB each</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <a href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing" className="text-sm">
                        I agree to receive marketing communications and business opportunities
                      </Label>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Register Business
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Why Register?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Global Reach</h4>
                      <p className="text-sm text-muted-foreground">Connect with buyers from 200+ countries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Verified Network</h4>
                      <p className="text-sm text-muted-foreground">Join 50,000+ verified businesses</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Package className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Product Showcase</h4>
                      <p className="text-sm text-muted-foreground">List unlimited products and services</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
