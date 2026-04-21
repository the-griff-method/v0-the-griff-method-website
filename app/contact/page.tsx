import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-xl mx-auto">
          <ScrollReveal direction="fade" duration={1000}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6 border border-white/10 rounded-full px-4 py-1.5">
              Contact
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150} duration={1000}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              Let's Talk
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300} duration={1000}>
            <p className="text-xl text-muted-foreground mb-10 text-pretty">
              Book a free consultation and let's figure out how to grow your brand.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={450} duration={1000}>
            <a
              href="https://calendly.com/thegriffmethod/client-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full text-base hover:bg-muted-foreground hover:text-white transition-all duration-300 group cursor-pointer"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
