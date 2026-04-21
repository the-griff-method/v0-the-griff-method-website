import { ArrowRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import StaggerContainer from "./stagger-container"
import MagneticButton from "./magnetic-button"

const destinations = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
]

export function DestinationCards() {
  return (
    <section className="py-20 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" duration={900}>
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">
            Explore
          </p>
        </ScrollReveal>
        <StaggerContainer staggerDelay={80} className="flex flex-wrap justify-center gap-4">
          {destinations.map((dest) => (
            <MagneticButton
              key={dest.href}
              href={dest.href}
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 group"
            >
              {dest.label}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
