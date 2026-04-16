import { ArrowRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import MagneticButton from "./magnetic-button"

export function CtaStrip() {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" duration={900}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            Ready to grow your brand?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's build something viral together.
          </p>
          <MagneticButton
            href="/contact"
            size="lg"
            className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 group"
          >
            Unlock Your<span className="italic animate-pulse -ml-1"> Method</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
