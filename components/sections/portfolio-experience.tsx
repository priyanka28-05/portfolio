import { Calendar, MapPin, ChevronRight, Building2 } from "lucide-react"
import { EXPERIENCE_DATA } from "@/lib/constants/portfolio-data"

export function PortfolioExperience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-primary border border-primary/30 rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering secure, scalable API solutions across banking and fintech domains.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-border" />

            {/* Experience Items */}
            <div className="space-y-8">
              {EXPERIENCE_DATA.map((experience, index) => (
                <div key={experience.id} className="relative pl-12 md:pl-20 group">
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-8 top-6 -translate-x-1/2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        index === 0
                          ? "bg-primary border-primary ring-4 ring-primary/20"
                          : "bg-background border-primary/50 group-hover:border-primary group-hover:bg-primary/20"
                      }`}
                    />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${
                      index === 0
                        ? "border-primary/50 shadow-lg shadow-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    {/* Header */}
                    <div className={`p-6 ${index === 0 ? "bg-gradient-to-r from-primary/10 to-transparent" : ""}`}>
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            {index === 0 && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded">
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold">{experience.role}</h3>
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-primary" />
                            <span className="text-primary font-semibold">{experience.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full">
                            <Calendar className="h-3.5 w-3.5" />
                            <span className="font-mono text-xs">{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full">
                            <MapPin className="h-3.5 w-3.5" />
                            <span className="text-xs">{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-border">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-mono">
                          Key Achievements
                        </p>
                        <ul className="space-y-3">
                          {experience.highlights.map((highlight, hIndex) => {
                            const colonIndex = highlight.indexOf(":")
                            const hasTitle = colonIndex > -1 && colonIndex < 30
                            const title = hasTitle ? highlight.substring(0, colonIndex) : null
                            const content = hasTitle ? highlight.substring(colonIndex + 1).trim() : highlight

                            return (
                              <li key={hIndex} className="flex items-start gap-3 group/item">
                                <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0 group-hover/item:translate-x-0.5 transition-transform" />
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                  {hasTitle ? (
                                    <>
                                      <span className="text-foreground font-medium">{title}:</span> {content}
                                    </>
                                  ) : (
                                    highlight
                                  )}
                                </span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
