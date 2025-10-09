import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
                Earn Glad Points and Improve Business Ratings
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8">
                Submit receipts to share experiences and earn rewards instantly. Post reviews and photos to enhance
                business ratings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/gladgrade-investor-relations">
                    Investor Relations <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/happy-customers-using-mobile-app-for-reviews-and-r.jpg" alt="GladGrade App Experience" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-6">
              Empowering Consumer Satisfaction
            </h2>
            <p className="text-lg md:text-xl text-balance opacity-95">
              Join us in transforming service experiences with transparent feedback and innovative grading through our
              GladGrade app
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-b from-primary/10 to-background border border-primary/20 hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-md">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-primary">Earn Glad Points</h3>
              <p className="text-muted-foreground">
                Submit receipts and earn points while sharing personal reviews and experiences
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-b from-primary/10 to-background border border-primary/20 hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-md">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-primary">Global Customer Satisfaction Grade</h3>
              <p className="text-muted-foreground">Shows how businesses are evaluated based on customer satisfaction</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-b from-primary/10 to-background border border-primary/20 hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-md">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-primary">Service Satisfaction</h3>
              <p className="text-muted-foreground">Consumers grade their experiences and earn Glad Points</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/business-owner-reviewing-customer-feedback-analyti.jpg" alt="Business Analytics" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-6">
                Transform Your Business with Real Feedback
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                GladGrade provides businesses with authentic customer insights through our Global Customer Satisfaction
                Grade (GCSG) system. Understand what your customers truly think and make data-driven improvements.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/global-customer-satisfaction-grade-gcsg">
                  Learn About GCSG <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-6 text-primary">
              You Deserve Better
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Share your experience and earn glad points today</p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/about">
                Discover Our Mission <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
