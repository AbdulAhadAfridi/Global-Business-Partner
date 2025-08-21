import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Banner */}
        <div className="relative h-48 bg-gradient-to-r from-primary to-primary/80 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl">Last updated: January 2024</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using TradeHub, you accept and agree to be bound by the terms and provision of this
            agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of TradeHub materials for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you
            may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h2>3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at
            all times. You are responsible for safeguarding the password and for all activities that occur under your
            account.
          </p>

          <h2>4. Business Listings</h2>
          <p>
            Users may list their businesses and products on our platform. All listings must be accurate, legal, and
            comply with our community guidelines. We reserve the right to remove any listing that violates our terms.
          </p>

          <h2>5. Payment Terms</h2>
          <p>
            Premium services require payment of fees. All fees are non-refundable unless otherwise stated. We reserve
            the right to change our fees at any time with 30 days notice.
          </p>

          <h2>6. Prohibited Uses</h2>
          <p>You may not use our service:</p>
          <ul>
            <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
            <li>
              To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances
            </li>
            <li>
              To infringe upon or violate our intellectual property rights or the intellectual property rights of others
            </li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>To submit false or misleading information</li>
          </ul>

          <h2>7. Disclaimer</h2>
          <p>
            The information on this website is provided on an "as is" basis. To the fullest extent permitted by law,
            this Company excludes all representations, warranties, conditions and terms.
          </p>

          <h2>8. Limitations</h2>
          <p>
            In no event shall TradeHub or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
            use the materials on TradeHub's website.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States
            and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at legal@tradehub.com or +1 (555)
            123-4567.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
