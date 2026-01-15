import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight, Calendar } from "lucide-react"
import { PROFILE_INFO } from "@/lib/constants/portfolio-data"
import { Button } from "@/components/ui/button"

export function PortfolioContact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Available for Opportunities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {"Let's"} Build Something <span className="text-primary">Amazing</span> Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you need API architecture expertise, cloud infrastructure consulting, or want to discuss the future
            of banking technology — {"I'm"} just a message away.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left Column - Contact Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-primary rounded-full" />
                    Contact Details
                  </h3>

                  <div className="space-y-4">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&to=${PROFILE_INFO.email}&su=Hello%20from%20Portfolio&body=Hi%20Priyanka%2C%0D%0A%0D%0A`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-primary/10 transition-all duration-300"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                        <p className="font-medium group-hover:text-primary transition-colors">{PROFILE_INFO.email}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <a
                      href={`tel:${PROFILE_INFO.phone}`}
                      className="group flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-primary/10 transition-all duration-300"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                        <p className="font-medium group-hover:text-primary transition-colors">{PROFILE_INFO.phone}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                        <p className="font-medium">{PROFILE_INFO.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Social & CTA */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-primary rounded-full" />
                    Connect Online
                  </h3>

                  <div className="space-y-3">
                    <a
                      href={PROFILE_INFO.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-[#0A66C2]/10 rounded-xl hover:bg-[#0A66C2]/20 transition-all duration-300"
                    >
                      <div className="p-3 bg-[#0A66C2]/20 rounded-lg group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Professional Network</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-[#0A66C2] transition-colors" />
                    </a>

                    <a
                      href={PROFILE_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-all duration-300"
                    >
                      <div className="p-3 bg-foreground/10 rounded-lg group-hover:bg-foreground group-hover:text-background transition-colors">
                        <Github className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-muted-foreground">Code & Projects</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl p-6 border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Open to Work</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Currently exploring new opportunities in API architecture and cloud infrastructure roles.
                  </p>
                  <Button asChild className="w-full">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&to=${PROFILE_INFO.email}&su=Job%20Opportunity&body=Hi%20Priyanka%2C%0D%0A%0D%0A`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="..."
                    >
                      Get in Touch
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
              <p className="text-2xl md:text-3xl font-bold text-primary">{"<"}24h</p>
              <p className="text-sm text-muted-foreground mt-1">Response Time</p>
            </div>
            <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
              <p className="text-2xl md:text-3xl font-bold text-primary">6+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
              <p className="text-2xl md:text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
