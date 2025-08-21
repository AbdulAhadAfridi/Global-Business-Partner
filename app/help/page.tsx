import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, HelpCircle, Book, MessageCircle, Phone } from "lucide-react"

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I register my business on TradeHub?",
      answer:
        "To register your business, click on 'Register Your Business' button on the homepage. Fill out the required information including business details, contact information, and upload necessary documents for verification.",
    },
    {
      question: "How does the verification process work?",
      answer:
        "Our verification process includes document verification, business registration checks, and sometimes phone verification. This typically takes 2-3 business days. Verified businesses get a 'Verified' badge and higher visibility.",
    },
    {
      question: "What are the fees for using TradeHub?",
      answer:
        "Basic membership is free and includes listing your business and products. Premium memberships offer additional features like priority listing, advanced analytics, and dedicated support. Contact our sales team for pricing details.",
    },
    {
      question: "How can I contact potential buyers or suppliers?",
      answer:
        "You can contact other businesses through our secure messaging system, request quotes, or use the inquiry form on their business profile. All communications are tracked for your security.",
    },
    {
      question: "Is my business information secure?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect your data. We never share your contact information without your permission and comply with international data protection regulations.",
    },
    {
      question: "How do I report a problem or fraudulent activity?",
      answer:
        "You can report issues through our support system, email support@tradehub.com, or use the 'Report' button on any business profile or listing. We investigate all reports promptly.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="relative h-48 bg-gradient-to-r from-primary to-primary/80 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-xl">Find answers to your questions</p>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input placeholder="Search for help articles..." className="pl-10 pr-4 py-3 text-lg" />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">Search</Button>
          </div>
        </div>

        {/* Quick Help Options */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <Book className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-lg mb-2">Getting Started</CardTitle>
              <CardDescription>Learn the basics of using TradeHub</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <HelpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-lg mb-2">Account Help</CardTitle>
              <CardDescription>Manage your account and profile</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <MessageCircle className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-lg mb-2">Trading Guide</CardTitle>
              <CardDescription>Tips for successful B2B trading</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <Phone className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-lg mb-2">Contact Support</CardTitle>
              <CardDescription>Get help from our team</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Still Need Help?</CardTitle>
              <CardDescription>Our support team is available 24/7 to assist you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Live Chat
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Support
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Email: support@tradehub.com | Phone: +1 (555) 123-4567</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
