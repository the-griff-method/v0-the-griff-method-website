import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"
import StaggerContainer from "./stagger-container"

const destinations = [
  {
    title: "Portfolio",
    description: "See the viral content — reels, TikToks, YouTube, and Snapchat across real brands.",
    href: "/portfolio",
    accent: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
  },
  {
    title: "Services",
    description: "Content creation, social media management, and growth strategy — all under one roof.",
    href: "/services",
    accent: "from-white/40 via-white/20 to-white/5",
  },
  {
    title: "Case Studies",
    description: "100M+ views generated. See how the work translates into real business results.",
    href: "/case-studies",
    accent: "from-cyan-400/60 via-cyan-400/20 to-transparent",
  },
  {
    title: "Contact",
    description: "Ready to grow? Let's talk about your brand and what we can build together.",
    href: "/contact",
    accent: "from-white/40 via-white/20 to-white/5",
  },
]

export function DestinationCards() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={900}>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Explore</h2>
            <p className="text-muted-foreground text-lg">Find what you're looking for.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={100} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {destinations.map((dest) => (
            <Link
              key={dest.href}
              href={dest.href}
              className="group relative rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/25 p-8 transition-all duration-400 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className={`h-0.5 w-full absolute top-0 left-0 bg-gradient-to-r ${dest.accent}`} />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {dest.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{dest.description}</p>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
