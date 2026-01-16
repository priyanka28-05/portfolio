import { Award, ExternalLink, GraduationCap, Globe, BadgeCheck } from "lucide-react"
import { CERTIFICATIONS_DATA, EDUCATION_DATA, LANGUAGES_DATA } from "@/lib/constants/portfolio-data"
import { Badge } from "@/components/ui/badge"

export function PortfolioCertifications() {
  const featuredCerts = CERTIFICATIONS_DATA.filter((cert) => cert.featured)
  const otherCerts = CERTIFICATIONS_DATA.filter((cert) => !cert.featured)

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications & Education</h2>
          <p className="text-muted-foreground max-w-2xl">
            Continuous learning and professional development in cloud technologies and API management.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <BadgeCheck className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Featured Credentials</h3>
            <Badge variant="outline" className="ml-2 text-primary border-primary/50 font-mono text-xs">
              2025
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {featuredCerts.map((cert) => (
              // <div
              //   key={cert.id}
              //   className="bg-gradient-to-br from-primary/10 via-card to-card border-2 border-primary/30 rounded-lg p-6 hover:border-primary/60 transition-all hover:-translate-y-1"
              // >
              <a
                key={cert.id}
                href={cert.hasCredential && cert.credentialUrl ? cert.credentialUrl : undefined}
                target={cert.hasCredential && cert.credentialUrl ? "_blank" : undefined}
                rel={cert.hasCredential && cert.credentialUrl ? "noopener noreferrer" : undefined}
                className="bg-gradient-to-br from-primary/10 via-card to-card border-2 border-primary/30 rounded-lg p-6 hover:border-primary/60 transition-all hover:-translate-y-1 block cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground font-mono">{cert.year}</p>
                    </div>
                  </div>
                  {cert.hasCredential && (
                    <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Verified
                    </Badge>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Other Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Other Certifications</h3>
            </div>
            <div className="grid gap-4">
              {otherCerts.map((cert) => (
                // <div
                //   key={cert.id}
                //   className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors flex items-center justify-between"
                // >
                <a
                  key={cert.id}
                  href={cert.hasCredential && cert.credentialUrl ? cert.credentialUrl : undefined}
                  target={cert.hasCredential && cert.credentialUrl ? "_blank" : undefined}
                  rel={cert.hasCredential && cert.credentialUrl ? "noopener noreferrer" : undefined}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <div className="space-y-1">
                    <h4 className="font-medium text-sm">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground font-mono">{cert.year}</p>
                  </div>
                  {cert.hasCredential && (
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Credential
                    </Badge>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="space-y-8">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {EDUCATION_DATA.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-medium">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES_DATA.map((language) => (
                  <Badge key={language} variant="outline" className="text-sm py-1 px-3">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
