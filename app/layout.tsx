import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/providers/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Priyanka Mansuriya | API Infrastructure Architect",
  description:
    "Building the digital nervous system for modern banking. Java & Apigee Specialist with 6+ years expertise. 30,000+ APIs delivered with zero security incidents.",
  keywords: [
    "API Infrastructure Architect",
    "API Developer",
    "Microservices",
    "Java Spring Boot",
    "Apigee",
    "Cloud Native",
    "Banking APIs",
    "Technical Specialist",
    "FinTech",
    "Open Banking",
  ],
  authors: [{ name: "Priyanka Mansuriya" }],
  creator: "Priyanka Mansuriya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Priyanka Mansuriya | API Infrastructure Architect",
    description:
      "Building the digital nervous system for modern banking. 30,000+ APIs delivered with zero security incidents.",
    siteName: "Priyanka Mansuriya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka Mansuriya | API Infrastructure Architect",
    description: "Building the digital nervous system for modern banking. 30,000+ APIs delivered.",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1729" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
