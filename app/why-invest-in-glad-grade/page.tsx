import { TrendingUp, Users, Award, Target, Globe, Zap } from "lucide-react"

export default function WhyInvestPage() {
  const reasons = [
    {
      icon: Award,
      title: "A Pioneering Metric: The GCSG",
      content:
        "GladGrade offers the Global Customer Satisfaction Grade (GCSG), a critical metric for evaluating how well businesses meet customer needs. GCSG is the equivalent of a FICO score for customer satisfaction, allowing companies to benchmark their performance against peers and for consumers to make informed choices. This unique positioning places GladGrade at the forefront of a new wave of metrics that redefine success beyond financials.",
    },
    {
      icon: TrendingUp,
      title: "Growing Demand for Transparency and Accountability",
      content:
        "Consumers today want transparency. They seek authentic experiences, and they value the insights that come from genuine customer feedback. GladGrade empowers users to grade their experiences and submit reviews, creating an open platform that businesses must respond to. Investing in GladGrade means tapping into this strong demand for transparency and accountability—a trend that will only grow stronger as consumer preferences continue to evolve.",
    },
    {
      icon: Users,
      title: "Engaged Users and Rewarding Loyalty",
      content:
        "GladGrade is not just a feedback platform—it's a community. By incentivizing users with Glad Points when they submit receipts and reviews, we keep customers engaged and active. This loyalty system adds value to the user experience, promoting repeat usage and brand advocacy. As an investor, you are entering a space where customer engagement and brand loyalty are actively fostered, leading to sustainable growth.",
    },
    {
      icon: Target,
      title: "B2B Opportunity for Businesses",
      content:
        "Beyond being a consumer tool, GladGrade provides a powerful solution for businesses. Companies can leverage GladGrade to understand their GCSG, identify areas for improvement, and make data-driven decisions to enhance customer experiences. Investing in GladGrade means contributing to a platform that serves businesses seeking to excel in customer experience management, a space ripe for growth as companies prioritize customer-centricity.",
    },
    {
      icon: Globe,
      title: "Alignment with Societal Trends",
      content:
        "In an era where societal values are driving corporate behavior, GladGrade aligns perfectly with the demand for accountability, equity, and service excellence. Consumers now value businesses that prioritize customer care, and GladGrade serves as a bridge that connects companies with consumer insights—promoting better service, improved customer loyalty, and stronger reputational value.",
    },
    {
      icon: Zap,
      title: "Potential for Market Disruption",
      content:
        "GladGrade's approach to quantifying customer satisfaction as a standardized metric positions it to disrupt the current market. Much like ESG has reshaped investment strategies, GCSG can redefine how businesses are perceived by both consumers and stakeholders, turning GladGrade into a go-to reference for gauging customer satisfaction excellence.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6">Why Invest in GladGrade</h1>
            <p className="text-xl text-muted-foreground text-balance">
              In today's competitive landscape, businesses are increasingly judged not only by their products or
              services but by their ability to satisfy customers.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Just as metrics like ESG (Environmental, Social, Governance) or DEI (Diversity, Equity, Inclusion) are
              reshaping corporate behavior, GladGrade introduces a transformative approach to measuring customer
              satisfaction through the Global Customer Satisfaction Grade (GCSG). Here's why investing in GladGrade is
              not just financially sound but also timely and impactful.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-4">{reason.title}</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">{reason.content}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-6">
              Invest in the Future of Customer Satisfaction
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              GladGrade offers a rare opportunity to invest in a platform that brings transparency, accountability, and
              value to both consumers and businesses. By redefining how we measure and enhance customer satisfaction,
              GladGrade is poised to become an essential part of how companies operate and how consumers choose where to
              spend their money.
            </p>
            <p className="text-xl font-semibold text-primary">
              Invest in GladGrade, and be part of the future of customer-centric business.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
