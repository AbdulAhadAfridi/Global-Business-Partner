import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create an account on TradeHub?",
          answer:
            "Click on 'Sign Up' in the top right corner, fill out the registration form with your business details, and verify your email address. Once verified, you can start using all our features.",
        },
        {
          question: "Is TradeHub free to use?",
          answer:
            "Yes, basic membership is completely free and includes business listing, product catalog, and basic messaging. Premium memberships offer additional features like priority listing and advanced analytics.",
        },
        {
          question: "How long does business verification take?",
          answer:
            "Business verification typically takes 2-3 business days. We review your submitted documents and may contact you for additional information if needed.",
        },
      ],
    },
    {
      category: "Business Listings",
      questions: [
        {
          question: "How do I list my products?",
          answer:
            "After creating your business profile, go to your dashboard and click 'Add Products'. Fill in product details, upload high-quality images, and set your pricing and minimum order quantities.",
        },
        {
          question: "Can I edit my business information after registration?",
          answer:
            "Yes, you can update your business information, contact details, and product listings anytime through your dashboard. Some changes may require re-verification.",
        },
        {
          question: "How many products can I list?",
          answer:
            "Free accounts can list up to 50 products. Premium accounts have unlimited product listings along with enhanced visibility features.",
        },
      ],
    },
    {
      category: "Trading & Orders",
      questions: [
        {
          question: "How do I contact suppliers?",
          answer:
            "You can contact suppliers through our secure messaging system, request quotes directly from product pages, or use the inquiry form on their business profile.",
        },
        {
          question: "Is payment processing secure?",
          answer:
            "Yes, we use industry-standard encryption and work with trusted payment processors. We also offer trade assurance services for added security on larger orders.",
        },
        {
          question: "What if I have a dispute with a supplier?",
          answer:
            "We offer dispute resolution services. Contact our support team with details of your issue, and we'll help mediate between you and the supplier to find a fair solution.",
        },
      ],
    },
    {
      category: "Account & Billing",
      questions: [
        {
          question: "How do I upgrade to premium?",
          answer:
            "Go to your account settings and click 'Upgrade Account'. Choose your preferred plan and complete the payment process. Premium features will be activated immediately.",
        },
        {
          question: "Can I cancel my premium subscription?",
          answer:
            "Yes, you can cancel your premium subscription anytime from your account settings. You'll continue to have premium access until the end of your billing period.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 30-day money-back guarantee for premium subscriptions. If you're not satisfied, contact our support team within 30 days of purchase.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="relative h-48 bg-gradient-to-r from-primary to-primary/80 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl">Find quick answers to common questions</p>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input placeholder="Search FAQ..." className="pl-10 pr-4 py-3 text-lg" />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">Search</Button>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Support</Button>
              <Button variant="outline" size="lg">
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
