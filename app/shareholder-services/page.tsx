export default function ShareholderServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6">Shareholder Services</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              At GladGrade, we value our investors as key partners in our journey to revolutionize customer satisfaction
              management. Whether you are already a shareholder or considering investing in our innovative platform, our
              Shareholder Services are here to provide you with the support and information you need.
            </p>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">How to Become a Shareholder</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                If you are interested in becoming an investor and owning GladGrade stocks, we invite you to reach out to
                our team. Investing in GladGrade means being part of a company that is redefining how businesses value
                customer feedback through our Global Customer Satisfaction Grade (GCSG).
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To learn more about our stock availability, investment opportunities, or any related inquiries, please
                contact us via email at{" "}
                <a href="mailto:investor.relations@gladgrade.com" className="text-primary hover:underline">
                  investor.relations@gladgrade.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Shareholder Support</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our Shareholder Services are dedicated to ensuring you have the information and assistance you need.
                From guidance on stock ownership to updates about our performance and strategic direction, we're
                committed to keeping our shareholders informed every step of the way. Our team is available to address
                your questions and provide personalized support.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Investor Resources</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                As a shareholder, you will have access to a range of investor resources, including:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Financial Reports:</strong> Regular updates on our financial performance, ensuring you have
                    a clear view of how GladGrade is progressing.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>News and Updates:</strong> Stay informed about important company milestones, new features,
                    and our impact in the industry.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Presentations and Events:</strong> Invitations to exclusive investor presentations and
                    industry events where you can connect with our leadership team.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                For any inquiries related to becoming a shareholder, managing your investment, or accessing shareholder
                resources, please do not hesitate to contact our Shareholder Services team at{" "}
                <a href="mailto:investor.relations@gladgrade.com" className="text-primary hover:underline">
                  investor.relations@gladgrade.com
                </a>
                . We are here to assist you and provide any information you need to make informed decisions about your
                investment in GladGrade.
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Join the GladGrade Family</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                By becoming a shareholder of GladGrade, you are investing in the future of customer satisfaction and
                experience management. We invite you to join us on this exciting journey and become part of our mission
                to help businesses grow through improved customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
