import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-lg font-bold mb-4">GladGrade Holding Corp</h3>
            <p className="text-sm text-muted-foreground mb-2">8306 Mills Dr. Suite 405</p>
            <p className="text-sm text-muted-foreground mb-4">Miami, FL 33183</p>
            <p className="text-sm font-semibold text-foreground">You Deserve Better</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-muted-foreground hover:text-primary transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-governance"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Corporate Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Investor Links */}
          <div>
            <h4 className="font-semibold mb-4">Investors</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/gladgrade-investor-relations"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link
                  href="/glad-grade-financials"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Financials
                </Link>
              </li>
              <li>
                <Link
                  href="/shareholder-services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Shareholder Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 GladGrade Holding Corp. All rights reserved.</p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
