import {
  ABOUT_CONTENT,
  PROFILE_INFO,
  LANGUAGES_DATA,
  INTERESTS_DATA,
  EDUCATION_DATA,
} from "@/lib/constants/portfolio-data"
import { MapPin, Shield, Cloud, Code2, GraduationCap, Globe, Heart } from "lucide-react"

const EXPERTISE_PILLARS = [
  {
    icon: Shield,
    title: "Security First",
    description: "OAuth 2.0, OIDC, JWT, HMAC, PKCE implementations ensuring zero security incidents.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "GCP, Anthos, Kubernetes expertise for scalable banking infrastructure.",
  },
  {
    icon: Code2,
    title: "API Excellence",
    description: "30,000+ APIs managed with Apigee Edge & X, developer portals, and governance.",
  },
]

export function PortfolioAbout() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-primary border border-primary/30 rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Engineering Secure Systems for <span className="text-primary">Modern Banking</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Bridging legacy systems and cloud-native architectures with a security-first mindset.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />

              <div className="relative">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-primary">PM</span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{PROFILE_INFO.name}</h3>
                <p className="text-primary font-medium mb-4">{PROFILE_INFO.title}</p>

                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{PROFILE_INFO.location}</span>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">6+</div>
                    <div className="text-xs text-muted-foreground">Years Exp</div>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-xs text-muted-foreground">Companies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">Education</h4>
              </div>
              <div className="space-y-4">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-primary/30 pl-4">
                    <p className="font-medium text-sm">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-primary/70 font-mono">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Interests */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-sm">Languages</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {LANGUAGES_DATA.map((lang) => (
                    <span key={lang} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-sm">Interests</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {INTERESTS_DATA.map((interest) => (
                    <span key={interest} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Story & Expertise */}
          <div className="lg:col-span-3 space-y-6">
            {/* Story Card */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full" />
                My Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">{ABOUT_CONTENT.intro}</p>
                <p>{ABOUT_CONTENT.focus}</p>
              </div>
            </div>

            {/* Expertise Pillars */}
            <div className="grid md:grid-cols-3 gap-4">
              {EXPERTISE_PILLARS.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{pillar.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

            {/* Journey Highlight */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-mono">Career Journey</p>
              <div className="flex items-center gap-4 overflow-x-auto pb-2">
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
                  <div>
                    <p className="text-xs font-medium">Hexaware</p>
                    <p className="text-xs text-muted-foreground">2018-2019</p>
                  </div>
                </div>
                <div className="w-12 h-px bg-border shrink-0" />
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/70" />
                  <div>
                    <p className="text-xs font-medium">ZerOnes</p>
                    <p className="text-xs text-muted-foreground">2020-2021</p>
                  </div>
                </div>
                <div className="w-12 h-px bg-border shrink-0" />
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20" />
                  <div>
                    <p className="text-xs font-medium text-primary">Arab Bank</p>
                    <p className="text-xs text-muted-foreground">2021-2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
