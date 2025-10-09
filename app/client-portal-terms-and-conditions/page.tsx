export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6">
              Client Portal Terms & Conditions
            </h1>
            <p className="text-xl text-muted-foreground">GladGrade Holding Corporation</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground">Effective Date: Jan 01, 2025</p>
              <p className="text-sm text-muted-foreground">Last Updated: Aug 20 2025</p>
            </div>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing or using any services provided by GladGrade Holding Corporation ("GladGrade," "we," "us," or
              "our"), you ("Customer," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you
              are entering into these Terms on behalf of a company or other legal entity, you represent that you have
              the authority to bind such entity to these Terms.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mb-6">
              <p className="font-semibold mb-2">Company Information:</p>
              <p className="text-muted-foreground mb-1">Legal Entity: GladGrade Holding Corporation</p>
              <p className="text-muted-foreground mb-1">Address: 8306 Mills Dr. Suite 405, Miami, FL 33183</p>
              <p className="text-muted-foreground">Customer Support: customer.support@gladgrade.com</p>
            </div>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">2. DESCRIPTION OF SERVICES</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GladGrade provides software-as-a-service (SaaS) solutions for customer satisfaction analytics, review
              management, and business intelligence. Our services include but are not limited to:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Consulting Services: Business consultation, custom reports, data analytics</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Dashboard & Analytics: Business metrics and customer feedback overview tools</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Integration Services: API access and third-party system integrations</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Marketing & Advertising: Social media integration, sponsored listings, advertising campaigns
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Premium Features: Custom dashboards, branded surveys, competitor analysis</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>QR Code Services: QR code generation and management tools</span>
              </li>
            </ul>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">2.1 Service Categories and Tiers</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Services are offered in different tiers (Tier 1, Tier 2, Tier 3) and categories (Standard, Premium,
              Enterprise, Add-on) with varying features, pricing, and service levels as detailed in our current service
              catalog.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">2.2 Free Services</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Certain services may be offered at no charge ("Freemium Services"). These free services are provided
              "as-is" and may have limited features, support, or availability compared to paid services.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">3. ACCOUNT REGISTRATION AND ELIGIBILITY</h2>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">3.1 Account Creation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To use our services, you must create an account by providing accurate, current, and complete information.
              You are responsible for maintaining the confidentiality of your account credentials and for all activities
              under your account.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">3.2 Eligibility</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You must be at least 18 years old and have the legal capacity to enter into contracts. If you are using
              our services on behalf of a business, you represent that you are authorized to bind that business to these
              Terms.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">3.3 Account Verification</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may require verification of your business information before activating certain services. Verification
              typically occurs within 24-72 hours of account creation.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">4. PAYMENT TERMS AND BILLING</h2>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">4.1 Payment Required Before Service</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All services require payment in full before activation. This applies to setup fees, monthly recurring
              charges, and one-time payments.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">4.2 Billing Cycles</h3>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>On-Demand Services: Payment processed within 24 hours of service request</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Monthly Services: Billed monthly in advance</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Annual Services: Billed annually in advance</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Setup Fees: One-time charges due before service activation</span>
              </li>
            </ul>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">4.3 Payment Methods</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We accept major credit cards, debit cards, and other payment methods as available through our payment
              processors. All payments are processed in U.S. Dollars.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">5. CANCELLATION AND REFUNDS</h2>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">5.1 Cancellation Policy</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You may cancel your services at any time by contacting customer support. Cancellation takes effect
              immediately upon processing.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">5.2 Refund Policy</h3>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Pro-rated Refunds: Available for prepaid services, calculated from cancellation date</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Cancellation Fees: May apply as specified in your service agreement and vary by service type
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Refund Timeline: Refunds processed within 5-10 business days after cancellation fees (if applicable)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Refund Eligibility: Refunds must be requested within the current service period</span>
              </li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">6. DATA OWNERSHIP AND PRIVACY</h2>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">6.1 Data Ownership</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GladGrade owns all data, reviews, analytics, and information generated through or collected by our
              platform. This includes but is not limited to customer feedback, business analytics, review data, and
              platform usage information.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">6.2 Data Retention and Deletion</h3>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Active Accounts: Data retained for operational and analytical purposes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Cancelled Accounts: Data retained for up to seven (7) days after cancellation, then permanently
                  deleted
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  User Deletion Requests: We will comply with end-user requests to delete their reviews or account data
                </span>
              </li>
            </ul>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">6.3 Privacy Compliance</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to protecting personal information in accordance with applicable privacy laws and
              regulations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
