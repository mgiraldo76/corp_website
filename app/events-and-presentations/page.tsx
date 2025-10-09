export default function EventsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6">Events & Presentations</h1>
            <p className="text-xl text-muted-foreground text-balance">Connect and Engage with Us</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              At GladGrade, we believe in transparency and fostering strong relationships with our investors. We
              actively participate in industry events and host presentations to share insights, discuss our growth
              strategies, and keep our stakeholders informed about our progress and impact in the market.
            </p>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Personalized Investor Presentations</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                We understand the importance of providing personalized information to our investors. To ensure you have
                all the insights you need, we offer one-on-one presentations tailored to your interests. During these
                sessions, our leadership team will guide you through GladGrade's business model, financial outlook, and
                strategic initiatives, helping you understand why GladGrade is uniquely positioned for growth in the
                customer experience industry.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To schedule an investment opportunity presentation, simply email us at{" "}
                <a href="mailto:investor.relations@gladgrade.com" className="text-primary hover:underline">
                  investor.relations@gladgrade.com
                </a>{" "}
                and provide us with your availability.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Industry Events</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                GladGrade is committed to staying at the forefront of the customer satisfaction and experience
                management landscape. We regularly attend and present at industry conferences, seminars, and other
                significant events. These events are excellent opportunities for investors and partners to engage with
                us, learn about the latest trends, and understand how GladGrade is shaping the future of customer
                satisfaction.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                We want you to stay informed about all our upcoming events and presentations. By attending these
                sessions, you'll gain valuable insights into our ongoing initiatives, market positioning, and growth
                potential. Whether you're an investor, a business partner, or simply interested in the future of
                customer satisfaction, GladGrade's events provide the opportunity to connect directly with our
                leadership team.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                For more information about our upcoming events or to inquire about our presentations, please feel free
                to reach out at{" "}
                <a href="mailto:investor.relations@gladgrade.com" className="text-primary hover:underline">
                  investor.relations@gladgrade.com
                </a>
                .
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Engage with GladGrade</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                GladGrade's events and presentations are designed to provide meaningful opportunities for our investors
                and partners to understand our vision, growth strategies, and impact in the customer satisfaction
                industry. We invite you to connect with us, ask questions, and become a part of our journey as we
                transform the way businesses prioritize customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
