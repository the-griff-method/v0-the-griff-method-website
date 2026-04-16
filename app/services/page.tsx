import { Camera, LayoutDashboard, TrendingUp } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import StaggerContainer from "@/components/stagger-container"
import MagneticButton from "@/components/magnetic-button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Content Creation",
    description:
      "Scroll-stopping photos, videos, and reels crafted to perform. Built for virality, designed for your brand.",
    bullets: ["Short-form video", "Reels & TikToks", "Photo direction", "Brand storytelling"],
  },
  {
    icon: LayoutDashboard,
    title: "Social Media Management",
    description:
      "Full-service management across every platform — consistent posting, community engagement, and brand voice.",
    bullets: ["Daily content posting", "Community management", "Platform optimization", "Brand consistency"],
  },
  {
    icon: TrendingUp,
    title: "Strategy & Growth",
    description:
      "Data-driven strategy that turns your social presence into measurable growth. No guesswork, just results.",
    bullets: ["Audience targeting", "Content strategy", "Analytics & reporting", "Growth planning"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-16 text-center px-4">
        <ScrollReveal direction="fade" duration={1000}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 border border-white/10 rounded-full px-4 py-1.5">
            Services
          </span>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150} duration={1000}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            What I Do
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={300} duration={1000}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            End-to-end social media that moves the needle. From concept to creation to growth.
          </p>
        </ScrollReveal>
      </section>

      {/* Services cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer staggerDelay={150} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/25 p-8 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-0.5 w-full absolute top-0 left-0 rounded-t-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <ScrollReveal direction="up" duration={900}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-10">Let's figure out which services fit your brand.</p>
          <MagneticButton
            href="/contact"
            size="lg"
            className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 group"
          >
            Unlock Your<span className="italic animate-pulse -ml-1"> Method</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  )
}
