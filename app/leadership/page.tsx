export default function LeadershipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6">Leadership</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Our experienced team, comprising highly acclaimed industry experts and accomplished tech pioneers, is
              fully committed to revolutionizing customer service analytics and delivering exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Miguel A. Giraldo */}
            <div className="border-l-4 border-primary pl-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">MIGUEL A. GIRALDO</h2>
              <p className="text-lg text-primary font-semibold mb-4">Founder & Chief Executive Officer</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With over 27 years of experience in Information Technology, Mr. Giraldo has built a dynamic career
                spanning software development, data science, and executive leadership. He holds certifications in
                database administration (DBA) and extreme catastrophe modeling (CEEM), demonstrating his expertise in
                data-driven decision-making. Throughout his career, he has led high-stakes operations as Director of
                Operations and Director of Risk & Incident Management, ensuring business continuity and resilience. As a
                board member for multiple corporations, Mr. Giraldo brings strategic insight and innovation to every
                venture he undertakes.
              </p>
            </div>

            {/* Patrick J. Doliny */}
            <div className="border-l-4 border-primary pl-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">PATRICK J. DOLINY</h2>
              <p className="text-lg text-primary font-semibold mb-4">Chief Commercial Officer</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With 27 years of experience in Information Technology and a distinguished background in the U.S. Armed
                Forces, Mr. Doliny combines strategic leadership with a deep understanding of innovation and execution.
                He has led C-level strategies across startups, government entities, and major corporations, driving
                growth and transformation. A recipient of the prestigious NASCIO award in 2006 for Leading Innovations,
                Mr. Doliny is a recognized industry expert committed to advancing technology and business excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
