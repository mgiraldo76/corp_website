export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6">Privacy & Security</h1>
            <p className="text-xl text-muted-foreground text-balance">Data Protection and User Rights</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Data Collection */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">1. Data Collection</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Telephone Number</h3>
                  <p className="text-muted-foreground">
                    For identity verification, account validation, and location accuracy
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location Data</h3>
                  <p className="text-muted-foreground">
                    Collected only when app is actively in use for nearby recommendations
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Review Data</h3>
                  <p className="text-muted-foreground">
                    Business ratings, tailored question answers, written reviews, photos
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Receipts</h3>
                  <p className="text-muted-foreground">
                    Uploaded as evidence to validate reviews (never shared publicly, internal verification only)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Private Reviews</h3>
                  <p className="text-muted-foreground">
                    Option to flag reviews as private (visible only to business owner/admin)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Contact Us Messages</h3>
                  <p className="text-muted-foreground">
                    Issue categorization (Error, Security, Investment, Other), subject, message, reply flag, contact
                    info
                  </p>
                </div>
              </div>
            </div>

            {/* Data Usage */}
            <div className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-serif text-3xl font-bold mb-6">2. Data Usage</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Provide location-based business recommendations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Enable business grading and review submission</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Calculate Global Customer Satisfaction Grade (GCSG)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Award Glad Points for verified reviews with receipts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Improve service quality and content authenticity</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Provide business insights for improvement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Facilitate user communication via Contact Us</span>
                </li>
              </ul>
            </div>

            {/* Data Storage */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">3. Data Storage</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Uses Google Firebase and Firestore for storage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Google provides storage as a service (no commercial use of data)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Industry-standard security practices</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>No third-party sharing beyond Google Firebase/Firestore</span>
                </li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-serif text-3xl font-bold mb-6">4. Data Retention and Deletion</h2>
              <p className="text-muted-foreground mb-4">
                Data retained as long as necessary for services. Users can request deletion at any time (unless legally
                required).
              </p>

              <div className="bg-background p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Important: Contact Us Messages</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>NOT deleted by default with account deletion</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Must submit separate request (category: Other) to delete prior messages</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Manual process takes up to 30 days</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Must check "Requires a reply" and provide valid email</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-semibold text-lg mb-3">Account Deletion Process:</h3>
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li>Navigate to Profile → Edit profile → Other Options</li>
                <li>Type "delete" in text box → Click Next</li>
                <li>Confirmation window shows what will be deleted and when</li>
                <li>Option to abort by exiting window</li>
              </ol>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">5. User Rights</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Access personal information held</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Correct inaccurate data (name, email, DOB, telephone)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Request account and data deletion</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Contact via app: Profile → Help → Contact Us → Category: Security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
