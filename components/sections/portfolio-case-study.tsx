import { Shield, Cloud, Lock, CheckCircle2 } from "lucide-react"
import { CASE_STUDY_DATA } from "@/lib/constants/portfolio-data"
import { Badge } from "@/components/ui/badge"

const SOLUTION_ICONS = {
  "API Gateway": Cloud,
  Security: Lock,
  Modernization: Shield,
} as const

export function PortfolioCaseStudy() {
  return (
    <section id="case-study" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-4 mb-12">
          <Badge variant="outline" className="text-primary border-primary/50">
            Featured Case Study
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">{CASE_STUDY_DATA.title}</h2>
          <p className="text-muted-foreground font-mono">
            {CASE_STUDY_DATA.company} | {CASE_STUDY_DATA.role} ({CASE_STUDY_DATA.period})
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Challenge & Solution */}
          <div className="space-y-8">
            {/* The Challenge */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-8 h-8 bg-destructive/10 text-destructive rounded-lg flex items-center justify-center text-sm font-bold">
                  !
                </span>
                The Challenge
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-10">{CASE_STUDY_DATA.challenge}</p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                The Solution
              </h3>
              <div className="space-y-4 pl-10">
                {CASE_STUDY_DATA.solutions.map((solution) => {
                  const Icon = SOLUTION_ICONS[solution.title as keyof typeof SOLUTION_ICONS] || Shield
                  return (
                    <div key={solution.title} className="flex items-start gap-3">
                      <div className="p-2 bg-secondary rounded-lg shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{solution.title}</h4>
                        <p className="text-sm text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">The Results</h3>
            <div className="grid grid-cols-2 gap-4">
              {CASE_STUDY_DATA.results.map((result) => (
                <div
                  key={result.label}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <p className="text-3xl font-bold text-primary font-mono">{result.metric}</p>
                  <p className="text-sm text-muted-foreground mt-1">{result.label}</p>
                </div>
              ))}
            </div>

            {/* Key Projects Delivered */}
            <div className="bg-card border border-border rounded-lg p-6 mt-6">
              <h4 className="font-semibold mb-3">Key Projects Delivered</h4>
              <div className="flex flex-wrap gap-2">
                {["Reflect Neobank", "MOFA Integration", "NPSS", "Open Banking APIs", "PSD2 Compliance"].map(
                  (project) => (
                    <Badge key={project} variant="secondary" className="font-mono text-xs">
                      {project}
                    </Badge>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
