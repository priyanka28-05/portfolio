import { PortfolioHeader } from "@/components/layout/portfolio-header"
import { PortfolioFooter } from "@/components/layout/portfolio-footer"
import { PortfolioHero } from "@/components/sections/portfolio-hero"
import { PortfolioAbout } from "@/components/sections/portfolio-about"
import { PortfolioTechTicker } from "@/components/sections/portfolio-tech-ticker"
import { PortfolioExperience } from "@/components/sections/portfolio-experience"
import { PortfolioCaseStudy } from "@/components/sections/portfolio-case-study"
import { PortfolioProjects } from "@/components/sections/portfolio-projects"
import { PortfolioSkills } from "@/components/sections/portfolio-skills"
import { PortfolioCertifications } from "@/components/sections/portfolio-certifications"
import { PortfolioContact } from "@/components/sections/portfolio-contact"

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHeader />
      <main>
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioTechTicker />
        <PortfolioExperience />
        <PortfolioCaseStudy />
        <PortfolioProjects />
        <PortfolioSkills />
        <PortfolioCertifications />
        <PortfolioContact />
      </main>
      <PortfolioFooter />
    </>
  )
}
