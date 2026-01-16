import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { PROFILE_INFO, NAV_ITEMS } from "@/lib/constants/portfolio-data"

export function PortfolioFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column - Updated with new tagline */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-mono">
              {PROFILE_INFO.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{PROFILE_INFO.tagline}</p>
            <p className="text-xs text-muted-foreground">
              {PROFILE_INFO.title} | {PROFILE_INFO.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {PROFILE_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PROFILE_INFO.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {PROFILE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {PROFILE_INFO.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {PROFILE_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={PROFILE_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${PROFILE_INFO.email}&su=Hello%20from%20Portfolio&body=Hi%20Priyanka%2C%0D%0A%0D%0A`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
