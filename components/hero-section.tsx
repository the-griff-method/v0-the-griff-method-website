import { ArrowRight } from "lucide-react"
import Image from "next/image"
import ParticleText from "./particle-text"
import ScrollReveal from "./scroll-reveal"
import StaggerContainer from "./stagger-container"
import MagneticButton from "./magnetic-button"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <ScrollReveal direction="fade" duration={1000}>
            <div className="mb-8">
              <Image
                src="/images/griff-logo.png"
                alt="The Griff Method"
                width={500}
                height={167}
                className="mx-auto h-40 w-auto mb-8"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300} duration={1200}>
            <div className="mb-6">
              <ParticleText />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600} duration={1000}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 text-balance">
              Unlock Your Social Media Method
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={900} duration={1000}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Data-driven strategies that transform your social presence into measurable business growth. No fluff, just
              results.
            </p>
          </ScrollReveal>

          <StaggerContainer
            staggerDelay={150}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <MagneticButton
              href="/contact"
              size="lg"
              className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 group"
            >
              Unlock Your<span className="italic animate-pulse -ml-1"> Method</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton
              href="/case-studies"
              size="lg"
              className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 group"
            >
              View Case Studies
            </MagneticButton>
          </StaggerContainer>

          <ScrollReveal direction="up" delay={1200} duration={1000}>
            <StaggerContainer staggerDelay={200} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                  100M+
                </div>
                <div className="text-muted-foreground transition-colors duration-300 group-hover:text-white">
                  Views Garnered
                </div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                  5+
                </div>
                <div className="text-muted-foreground transition-colors duration-300 group-hover:text-white">
                  Years Experience
                </div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                  50x
                </div>
                <div className="text-muted-foreground transition-colors duration-300 group-hover:text-white">
                  Profile Growth
                </div>
              </div>
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
