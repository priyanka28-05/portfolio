import { TECH_STACK_TICKER } from "@/lib/constants/portfolio-data"

export function PortfolioTechTicker() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTech = [...TECH_STACK_TICKER, ...TECH_STACK_TICKER]

  return (
    <section className="py-8 border-y border-border bg-card/50 overflow-hidden">
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex animate-scroll-left">
          {duplicatedTech.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="flex items-center gap-4 px-6 text-muted-foreground font-mono text-sm whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-primary/50" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
