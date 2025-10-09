import { DollarSign, TrendingUp, Users, Zap, BarChart, Target } from "lucide-react"

export default function FinancialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6">GladGrade Financials</h1>
            <p className="text-xl text-muted-foreground text-balance">A Path to Strong Growth and Investor Returns</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Investing in GladGrade is not only about contributing to a better customer experience—it's also about
              sound financial growth. Our business model has been strategically crafted to generate robust revenue
              streams and deliver significant value to our investors. Let's take a closer look at how GladGrade's
              financials stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Multiple Revenue Streams */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">1. Multiple Revenue Streams</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  GladGrade leverages diverse revenue sources, ensuring financial stability and growth potential. These
                  include:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Subscription Model for Businesses:</strong> Companies pay a subscription fee to access
                      insights about their Global Customer Satisfaction Grade (GCSG) and to utilize premium features for
                      tracking and improving customer satisfaction metrics.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Glad Points Sponsorships:</strong> Businesses have the opportunity to sponsor Glad Points
                      and run promotional campaigns, further engaging customers while generating advertising revenue for
                      GladGrade.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Data Analytics as a Service:</strong> Businesses gain access to anonymized data analytics
                      that help them understand market trends and consumer behavior. GladGrade's unique dataset allows
                      us to offer highly valuable business intelligence services.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Advertising Revenue:</strong> Businesses can run targeted ads within the GladGrade
                      platform to reach engaged users. With our customer satisfaction-focused user base, advertisers can
                      effectively promote their products and services to a highly relevant audience, generating
                      additional revenue for GladGrade.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* High Customer Engagement */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  2. High Customer Engagement = Revenue Growth
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  GladGrade's business model is designed to encourage user engagement, which directly contributes to
                  recurring revenue. Users who earn Glad Points by submitting receipts tend to interact frequently,
                  creating a feedback loop that draws in more businesses looking to improve their customer satisfaction
                  scores.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our focus on gamification and loyalty rewards means that users keep returning, which helps us maintain
                  a high level of user engagement. As engagement grows, businesses increasingly see value in subscribing
                  to our services, boosting GladGrade's top line.
                </p>
              </div>
            </div>

            {/* Market Opportunity */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  3. Market Opportunity and Scalability
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  The potential market for GladGrade is vast. We operate in a landscape where customer satisfaction is
                  becoming a critical metric for success across industries. The global market for customer experience
                  management is projected to grow rapidly, and GladGrade's unique focus on customer satisfaction grading
                  positions us to capitalize on this growth.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our scalable platform is well-equipped to accommodate this market growth. As more users and businesses
                  join GladGrade, the network effect strengthens, resulting in higher subscription revenues and
                  increased sponsorship interest.
                </p>
              </div>
            </div>

            {/* Low Operational Costs */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">4. Low Operational Costs</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As a tech-driven platform, GladGrade benefits from relatively low operational overhead. The core of
                  our value proposition lies in our technology—automated data collection, GCSG computation, and scalable
                  infrastructure. With an efficient cost structure, we ensure that a significant portion of our revenue
                  contributes directly to our bottom line, creating attractive profit margins.
                </p>
              </div>
            </div>

            {/* Financial Forecasts */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">5. Financial Forecasts</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  GladGrade is on track for substantial revenue growth over the next few years. We project the following
                  financial milestones:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Year 1:</strong> Building brand recognition, establishing partnerships, and acquiring
                      early adopters. Revenue is primarily driven by early business subscriptions.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Year 2:</strong> Achieving substantial user growth and expanding our subscription base,
                      with a strong emphasis on B2B relationships and data analytics services. Expected revenue growth
                      rate: 150-200%.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Year 3 and Beyond:</strong> Scaling into new markets and expanding features for both
                      businesses and consumers. Profitability is expected to be reached by Year 3, driven by mature
                      subscription and advertising models.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Investor Value Proposition */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">6. Investor Value Proposition</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  By investing in GladGrade, you are investing in:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>A scalable SaaS business model with recurring revenue streams.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      High user engagement through rewards and gamification, which translates into stable growth.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      A company uniquely positioned in the growing customer satisfaction and experience management
                      market.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Strong profit potential with relatively low operational costs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              GladGrade is more than just an app; it's a financial opportunity to be part of a transformative shift in
              how businesses interact with customer feedback. We aim to redefine the customer experience industry while
              providing attractive returns for our investors.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
