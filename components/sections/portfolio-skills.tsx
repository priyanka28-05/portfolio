import { Code, Database, Cloud, Shield, Building2, Users } from "lucide-react"
import { SKILLS_DATA } from "@/lib/constants/portfolio-data"
import { Badge } from "@/components/ui/badge"

const SKILL_ICONS = {
  apiManagement: Shield,
  backend: Code,
  tools: Database,
  cloud: Cloud,
  banking: Building2,
  soft: Users,
} as const

export function PortfolioSkills() {
  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive toolkit for building secure, scalable API ecosystems and cloud-native solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS_DATA).map(([key, category]) => {
            const Icon = SKILL_ICONS[key as keyof typeof SKILL_ICONS]
            return (
              <div
                key={key}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
