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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 text-balance">
              Unlock Your Social Media Method
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={750} duration={1000}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto text-pretty">
              No fluff. Just content that converts and audiences that grow.
            </p>
          </ScrollReveal>

          <StaggerContainer
            staggerDelay={150}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
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
              href="/portfolio"
              size="lg"
              className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 group"
            >
              View Portfolio
            </MagneticButton>
          </StaggerContainer>

          <ScrollReveal direction="up" delay={1000} duration={1000}>
            <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-20">
              <div className="text-center group cursor-default">
                <div className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                  100M+
                </div>
                <div className="text-muted-foreground transition-colors duration-300 group-hover:text-white">
                  Views Garnered
                </div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                  3+
                </div>
                <div className="text-muted-foreground transition-colors duration-300 group-hover:text-white">
                  Years Experience
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
