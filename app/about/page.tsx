import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6 text-primary">
              You Deserve Better
            </h1>
            <p className="text-xl text-muted-foreground">GladGrade - Transforming Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-primary">Our Mission</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  We empower both consumers and businesses by redefining customer satisfaction. Our platform provides a
                  transparent space where consumers can grade experiences, share reviews, and contribute to meaningful
                  change.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  We help businesses gain insights to improve their services and set a new standard through the Global
                  Customer Satisfaction Grade (GCSG). Together, we help businesses grow and create better experiences
                  for all.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/diverse-team-collaborating-on-customer-satisfactio.jpg" alt="Team Collaboration" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image src="/business-growth-chart-analytics-dashboard-golden-t.jpg" alt="Business Growth" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-primary">Our Vision</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  To become the <strong className="text-primary">LEADING entity</strong> in Customer Service Analytics
                  and Global Customer Satisfaction Grading (GCSG).
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Generate <strong className="text-primary">MAXIMUM revenue</strong> in the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-primary">Our Team</h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Our leadership team brings decades of expertise in technology, operations, and marketing. With a proven
                track record across Fortune 5000 companies, government entities, and startups, we are committed to
                building a platform that transforms how businesses understand and improve customer satisfaction.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Innovation, strategy, and customer satisfaction drive everything we do.
              </p>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/leadership">
                Meet Our Leadership <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
