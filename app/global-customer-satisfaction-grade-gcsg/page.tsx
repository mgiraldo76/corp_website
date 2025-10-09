import Link from "next/link"

export default function GCSGPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6">
              Global Customer Satisfaction Grade (GCSG)
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              A new standard for evaluating how well businesses serve their clients
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold mb-6">Structure Overview</h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <Link href="#executive-summary" className="hover:text-primary transition-colors">
                Executive Summary
              </Link>
              <Link href="#introduction" className="hover:text-primary transition-colors">
                Section 1: Introduction
              </Link>
              <Link href="#what-is-gcsg" className="hover:text-primary transition-colors">
                Section 2: What is GCSG
              </Link>
              <Link href="#how-it-works" className="hover:text-primary transition-colors">
                Section 3: How it Works
              </Link>
              <Link href="#benefits" className="hover:text-primary transition-colors">
                Section 4: Benefits
              </Link>
              <Link href="#credibility" className="hover:text-primary transition-colors">
                Section 5: Credibility
              </Link>
              <Link href="#use-cases" className="hover:text-primary transition-colors">
                Section 6: Use Cases
              </Link>
              <Link href="#roadmap" className="hover:text-primary transition-colors">
                Section 7: Roadmap
              </Link>
              <Link href="#business-strategy" className="hover:text-primary transition-colors">
                Section 9: Business Strategy & IP
              </Link>
              <Link href="#vision" className="hover:text-primary transition-colors">
                Section 10: Vision
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Executive Summary</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              The Global Customer Satisfaction Grade (GCSG) is a new standard for evaluating how well businesses and
              institutions serve their clients. Like a FICO score for customer experience, GCSG translates real consumer
              feedback into a dynamic score ranging from 300 to 850.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Powered by GladGrade, this system introduces transparency, accountability, and actionable insight into a
              space previously dominated by fragmented and often biased reviews. This white paper outlines the problem
              GCSG solves, how it works, and why its adoption benefits everyone—consumers, businesses, regulators, and
              institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              1. Introduction: The Need for a Universal Standard
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              In today's digital landscape, review platforms are abundant, but trust in their accuracy and fairness is
              deteriorating. Most businesses can curate, filter, or even pay to boost their reputation. At the same
              time, consumers lack a reliable, unified way to assess service quality across industries.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              GCSG addresses this gap. Built on verified consumer experiences and reinforced by tools that allow
              businesses to respond and improve, the GCSG becomes a credible, evolving benchmark. As ESG and DEI measure
              corporate ethics and impact, GCSG brings similar clarity to service delivery.
            </p>
            <h3 className="font-serif text-2xl font-bold mb-4 mt-8">1.5 The Market Need for GCSG</h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Despite the rise of digital reviews, there is no standard for interpreting what those ratings mean across
              sectors. NPS (Net Promoter Score) is widely used but often skewed by non-response bias and lacks
              transparency. Platforms like Yelp, Google Reviews, and Trustpilot are easily manipulated, gamified, or
              riddled with unverified content.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              What is missing is a neutral, auditable, and weighted scoring system that reflects not just opinion, but
              validated consumer experience. GCSG fills that gap.
            </p>
          </div>
        </div>
      </section>

      {/* What is GCSG */}
      <section id="what-is-gcsg" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">2. What Is GCSG?</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              The Global Customer Satisfaction Grade (GCSG) is a numeric score (300–850) reflecting how well a business
              or institution meets consumer expectations. It is calculated from real-time data submitted by consumers
              and soon, employees. This includes satisfaction grades (0–10), review content, and optional receipt
              validation.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Each business location receives its own GCSG, and franchise parent companies are assigned a
              corporate-level average of all their child's locations. The GCSG recalculates with each new submission,
              providing a constantly evolving reflection of public perception.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">3. How GCSG Works</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">User Input:</h3>
                <p className="text-muted-foreground">Consumers grade their experience on a scale of 0 to 10.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Proof of Interaction:</h3>
                <p className="text-muted-foreground">
                  Consumers are encouraged, but not required, to upload a receipt or photo to validate their review. In
                  future updates, reviews without receipts will carry a lower weight.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Survey Questions:</h3>
                <p className="text-muted-foreground">
                  Tailored to each industry (e.g., food quality for restaurants, Wi-Fi speed for universities).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Review Content:</h3>
                <p className="text-muted-foreground">Optional written review and images add qualitative context.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Weighting & Recalculation:</h3>
                <p className="text-muted-foreground">
                  GCSG is recalculated every time a new valid review is submitted. In future iterations, verified
                  reviews (with receipts) will carry more weight. Time-decay logic and expanded AI moderation are
                  planned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">4. Benefits of GCSG</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-bold mb-3">a. For Consumers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Instantly view a business's GCSG before engaging.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Trust that scores are based on verified, unbiased user input.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Use GCSG as a FICO score to make informed decisions.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-3">b. For Businesses</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Gain access to dashboards showing categorized feedback and AI-driven insights.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Publicly display their GCSG to build trust and improve reputation.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Resolve issues and improve scores in real time through the GladGrade Portal.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Connect with recommended solution providers.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-3">c. For Regulators and Policy Makers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Monitor industry trends and public satisfaction during emergencies (e.g., COVID-19, hurricanes).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Identify underperforming regions or sectors quickly and clearly.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-3">d. For Higher Education Institutions</h3>
                <p className="text-muted-foreground mb-2">
                  GladGrade's Higher Ed Module lets students and faculty rate schools across 10 dimensions: institution,
                  dorms, professors, food, internet, security, entertainment, social, location, and remote learning.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Universities receive insights, feedback, and the same portal tools as businesses.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Families can compare schools with real-world feedback.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section id="credibility" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">5. Ensuring Credibility & Fairness</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Consumer-Only Impact:</strong> Only real consumer actions (and validated resolutions) impact
                  GCSG.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Moderation & Sanitation:</strong> Reviews go through AI and human moderation.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Portal Oversight:</strong> Admins and moderators monitor flagged cases manually.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Platform Neutrality:</strong> GladGrade has no financial interest in influencing GCSG
                  outcomes.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">6. Use Cases</h2>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-serif text-xl font-bold mb-3">Local Restaurant Example</h3>
              <p className="text-muted-foreground">
                Low GCSG due to long wait times. Restaurant owner uses GladGrade Portal to identify the issue,
                implements fixes, and watches their GCSG improve in real-time as new positive reviews come in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
