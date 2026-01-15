"use client"

import Link from "next/link"
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Shield, Zap, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PROFILE_INFO, PROFESSIONAL_SUMMARY, STATS_DATA } from "@/lib/constants/portfolio-data"

export function PortfolioHero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full" />
      </div>

      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2314b8a6' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="relative inline-block">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 items-center">
              <div className="p-3 bg-card border border-border rounded-xl animate-float">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </div>
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 items-center">
              <div className="p-3 bg-card border border-border rounded-xl animate-float delay-500">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                {PROFILE_INFO.name}
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="px-4 py-2 bg-card border border-border rounded-full text-lg md:text-xl font-medium font-mono">
              {PROFILE_INFO.title}
            </span>
            <Zap className="h-5 w-5 text-primary" />
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-lg md:text-xl font-medium font-mono text-primary">
              {PROFILE_INFO.subtitle}
            </span>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <span className="absolute -left-4 -top-4 text-6xl text-primary/20 font-serif">"</span>
            <p className="text-lg md:text-xl text-foreground/90 font-medium italic">{PROFESSIONAL_SUMMARY}</p>
            <span className="absolute -right-4 -bottom-4 text-6xl text-primary/20 font-serif">"</span>
          </div>

          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative py-8 px-12 bg-card border-2 border-primary/30 rounded-2xl">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-primary">30,000+</span>
                <div className="text-left">
                  <p className="text-xl md:text-2xl font-bold">APIs Delivered</p>
                  <p className="text-muted-foreground">Zero Security Incidents</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-500 font-medium">100% Security Track Record</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">{PROFILE_INFO.location}</span>
              <span className="text-xs text-muted-foreground">• Open to Remote</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="group relative overflow-hidden px-8" asChild>
              <Link href="#case-study">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-2 hover:border-primary hover:bg-primary/5 bg-transparent"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1WMNTqn9GyVeQLiowFpr5KiqDciGrcB4s/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            {[
              { href: PROFILE_INFO.github, icon: Github, label: "GitHub" },
              { href: PROFILE_INFO.linkedIn, icon: Linkedin, label: "LinkedIn" },
              { href: `https://mail.google.com/mail/?view=cm&to=${PROFILE_INFO.email}&su=Hello%20from%20Portfolio&body=Hi%20Priyanka%2C%0D%0A%0D%0A`, icon: Mail, label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                // target={social.label !== "Email" ? "_blank" : undefined}
                // rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all"
                aria-label={`${social.label} Profile`}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {STATS_DATA.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <p className="relative text-3xl md:text-4xl font-bold text-primary font-mono">{stat.value}</p>
              <p className="relative text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <Link
            href="#case-study"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Scroll to case study section"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}