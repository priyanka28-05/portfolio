import { ExternalLink, Github, Folder } from "lucide-react"
import { PROJECTS_DATA } from "@/lib/constants/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function PortfolioProjects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of personal projects showcasing my technical skills and problem-solving approach.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Folder className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/priyanka28-05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View More on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
