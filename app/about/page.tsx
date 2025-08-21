import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Globe, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="relative h-64 bg-gradient-to-r from-primary to-primary/80 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">About TradeHub</h1>
            <p className="text-xl">Connecting Businesses Worldwide Since 2020</p>
          </div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              TradeHub was founded with a simple mission: to make global B2B trade accessible, transparent, and
              efficient for businesses of all sizes. We recognized that small and medium enterprises often struggled to
              find reliable international partners and navigate complex trade processes.
            </p>
            <p className="text-muted-foreground mb-4">
              Today, we're proud to be one of the world's fastest-growing B2B marketplaces, connecting over 50,000
              verified businesses across 200+ countries. Our platform facilitates billions of dollars in trade annually,
              helping businesses discover new opportunities and expand their global reach.
            </p>
            <p className="text-muted-foreground">
              We believe in the power of technology to break down barriers and create opportunities. Our advanced
              matching algorithms, secure payment systems, and comprehensive verification processes ensure that every
              transaction on our platform is safe, reliable, and profitable.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To democratize global trade by providing a trusted, efficient, and innovative platform that connects
                  businesses worldwide and drives economic growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To become the world's most trusted B2B marketplace, where every business can find the right partners
                  and opportunities to thrive in the global economy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Verified Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">$5B+</div>
            <div className="text-muted-foreground">Trade Volume</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Award className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle>Trust & Transparency</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  We maintain the highest standards of verification and transparency to ensure safe and reliable
                  trading.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <TrendingUp className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  We continuously innovate to provide cutting-edge tools and features that drive business growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Globe className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle>Global Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  We're committed to creating positive economic impact by connecting businesses across borders.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
