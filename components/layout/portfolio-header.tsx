"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { NAV_ITEMS, PROFILE_INFO } from "@/lib/constants/portfolio-data"
import { Button } from "@/components/ui/button"

export function PortfolioHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="text-xl font-bold tracking-tight hover:text-primary transition-colors font-mono group cursor-pointer"
          >
            <span className="bg-gradient-to-r from-foreground to-foreground group-hover:from-primary group-hover:to-accent bg-clip-text transition-all duration-300">
              {PROFILE_INFO.name.split(" ")[0]}
            </span>
            <span className="text-primary group-hover:text-accent transition-colors">.</span>
          </button>

          {/* Desktop Navigation - Enhanced hover effects */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative px-4 py-2.5 rounded-full group overflow-hidden",
                    activeSection === item.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Active state pill background */}
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full transition-all duration-500 ease-out",
                      activeSection === item.id
                        ? "bg-gradient-to-r from-primary to-accent opacity-100 scale-100"
                        : "bg-primary/0 opacity-0 scale-75",
                    )}
                  />

                  {/* Hover glow effect */}
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full transition-all duration-300",
                      activeSection === item.id
                        ? ""
                        : "bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 opacity-0 group-hover:opacity-100",
                    )}
                  />

                  {/* Shimmer effect on hover */}
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </span>

                  {/* Border glow for non-active items */}
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full transition-all duration-300",
                      activeSection === item.id
                        ? ""
                        : "border border-transparent group-hover:border-primary/30 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.15)]",
                    )}
                  />

                  {/* Text with lift effect */}
                  <span
                    className={cn(
                      "relative z-10 transition-all duration-300 inline-block",
                      activeSection === item.id
                        ? "text-primary-foreground font-semibold"
                        : "group-hover:-translate-y-0.5 group-hover:text-primary",
                    )}
                  >
                    {item.label}
                  </span>

                  {/* Bottom accent line for non-active hover */}
                  <span
                    className={cn(
                      "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300",
                      activeSection === item.id ? "w-0" : "w-0 group-hover:w-1/2",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="relative overflow-hidden group hover:bg-primary/10 transition-all duration-300 rounded-full"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/30" />
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 relative z-10 group-hover:rotate-90 group-hover:text-amber-400 transition-all duration-500" />
                ) : (
                  <Moon className="h-5 w-5 relative z-10 group-hover:-rotate-12 group-hover:text-primary transition-all duration-500" />
                )}
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="relative overflow-hidden group hover:border-primary transition-all duration-300 bg-transparent rounded-full px-5"
            >
              <a href="https://drive.google.com/file/d/1WMNTqn9GyVeQLiowFpr5KiqDciGrcB4s/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </span>
                <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300 font-medium">
                  Resume
                </span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="rounded-full"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="rounded-full"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced mobile menu styling */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-sm font-medium transition-all duration-300 block py-3 px-4 rounded-xl relative group overflow-hidden",
                      activeSection === item.id
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {/* Active background */}
                    <span
                      className={cn(
                        "absolute inset-0 rounded-xl transition-all duration-300",
                        activeSection === item.id
                          ? "bg-gradient-to-r from-primary to-accent opacity-100"
                          : "bg-muted/50 opacity-0 group-hover:opacity-100",
                      )}
                    />
                    <span className="relative z-10">{item.label}</span>
                    {/* Left accent bar */}
                    <span
                      className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-300",
                        activeSection === item.id
                          ? "h-1/2 bg-white/50"
                          : "h-0 bg-gradient-to-b from-primary to-accent group-hover:h-1/3",
                      )}
                    />
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground hover:border-transparent transition-all duration-300 rounded-xl"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/1WMNTqn9GyVeQLiowFpr5KiqDciGrcB4s/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
