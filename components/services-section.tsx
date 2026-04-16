import { Camera, LayoutDashboard, TrendingUp } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import StaggerContainer from "./stagger-container"

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

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={1000}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end social media that moves the needle.
            </p>
          </div>
        </ScrollReveal>

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
  )
}
