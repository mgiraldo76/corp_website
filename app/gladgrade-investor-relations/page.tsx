import Link from "next/link"
import Image from "next/image"
import { FileText, TrendingUp, Users, DollarSign, Calendar, Building } from "lucide-react"

export default function InvestorRelationsPage() {
  const investorLinks = [
    {
      title: "Why Invest in GladGrade",
      href: "/why-invest-in-glad-grade",
      icon: TrendingUp,
      description: "Discover the investment opportunity",
    },
    {
      title: "GladGrade Financials",
      href: "/glad-grade-financials",
      icon: DollarSign,
      description: "Financial performance and projections",
    },
    {
      title: "Global Customer Satisfaction Grade (GCSG)",
      href: "/global-customer-satisfaction-grade-gcsg",
      icon: Users,
      description: "Our proprietary rating system",
    },
    {
      title: "Corporate Governance",
      href: "/corporate-governance",
      icon: Building,
      description: "Board structure and oversight",
    },
    {
      title: "Shareholder Services",
      href: "/shareholder-services",
      icon: Users,
      description: "Support for our investors",
    },
    {
      title: "Events & Presentations",
      href: "/events-and-presentations",
      icon: Calendar,
      description: "Upcoming investor events",
    },
    {
      title: "Client Portal Terms & Conditions",
      href: "/client-portal-terms-and-conditions",
      icon: FileText,
      description: "Service agreements and policies",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?key=inv01" alt="Investment Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6 text-primary">
              Investor Relations
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              GladGrade Holding Corp – Service Satisfaction Investment
            </p>
          </div>
        </div>
      </section>

      {/* Investor Resources */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
              Investor Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investorLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex flex-col p-6 rounded-lg border border-primary/20 bg-card hover:bg-primary/5 hover:border-primary/40 transition-all hover:shadow-lg"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{link.description}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-primary">You Deserve Better</h2>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-semibold text-foreground">GladGrade Holding Corp</p>
              <p>8306 Mills Dr. Suite 405, Miami, FL 33183</p>
              <p className="text-sm mt-4">© 2025. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
