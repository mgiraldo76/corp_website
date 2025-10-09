export default function CorporateGovernancePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6">Corporate Governance</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              GLADGRADE is a leader in corporate governance, and good corporate governance is key to our business. A
              cornerstone of governance at GLADGRADE is our shareholder outreach program, through which we regularly
              engage with our investors and stakeholders around the world to gain insight into the burgeoning issues at
              the forefront of their business policies and guidelines.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our Board of Directors is comprised entirely of independent directors other than our Chairman and CEO,
              Miguel A. Giraldo. Each Director provides a unique business perspective, experience and skills, all
              essential to the our company.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The board plays a vital oversight role, which fosters shareholder value and affects stakeholder
              confidence, through discussions with senior leaders and external advisers covering a wide range of matters
              including strategy, financial performance, compliance, and public policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
