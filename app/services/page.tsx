import {
  Camera,
  LayoutDashboard,
  TrendingUp,
  Globe,
  Video,
  Megaphone,
  ShoppingBag,
  Users,
  ArrowRight,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import StaggerContainer from "@/components/stagger-container"
import MagneticButton from "@/components/magnetic-button"

const services = [
  {
    icon: Camera,
    title: "Content Creation",
    description: "Scroll-stopping photos, videos, and reels crafted to perform. Built for virality, designed for your brand.",
    bullets: ["Short-form video", "Reels & TikToks", "Photo direction", "Brand storytelling"],
  },
  {
    icon: Video,
    title: "Photography & Videography",
    description: "Professional on-site shoots that elevate your brand. High-quality visuals built for content and campaigns.",
    bullets: ["Brand photography", "Product shoots", "Cinematic video", "Event coverage"],
  },
  {
    icon: LayoutDashboard,
    title: "Social Media Management",
    description: "Full-service management across every platform — consistent posting, community engagement, and brand voice.",
    bullets: ["Daily content posting", "Community management", "Platform optimization", "Brand consistency"],
  },
  {
    icon: TrendingUp,
    title: "Strategy & Growth",
    description: "Data-driven strategy that turns your social presence into measurable growth. No guesswork, just results.",
    bullets: ["Audience targeting", "Content strategy", "Analytics & reporting", "Growth planning"],
  },
  {
    icon: Megaphone,
    title: "Ad Management & Boosting",
    description: "Paid social that amplifies your best content. Targeted ads that drive traffic, leads, and conversions.",
    bullets: ["Meta & TikTok ads", "Content boosting", "Audience targeting", "Performance tracking"],
  },
  {
    icon: ShoppingBag,
    title: "TikTok Shop Management",
    description: "End-to-end TikTok Shop setup and management — from product listings to creator partnerships that convert.",
    bullets: ["Shop setup & optimization", "Product content", "Creator seeding", "Sales analytics"],
  },
  {
    icon: Users,
    title: "Influencer Campaigns",
    description: "Curated influencer partnerships that reach the right audiences and drive real brand awareness and sales.",
    bullets: ["Creator sourcing", "Campaign strategy", "Contract & outreach", "Performance reporting"],
  },
  {
    icon: Globe,
    title: "Website & Landing Pages",
    description: "Clean, conversion-focused websites and landing pages built to turn social traffic into real business.",
    bullets: ["Landing page design", "Website development", "Mobile optimization", "Brand alignment"],
  },
]

const verticals = [
  { name: "Health & Wellness", sub: "DTC brands, supplements, skincare" },
  { name: "Food & Beverage", sub: "Cafes, chains, CPG, restaurants" },
  { name: "Men's Grooming & Lifestyle", sub: "Barbershops, salons, apparel" },
  { name: "Tattoo & Body Art", sub: "Studios, aftercare, accessories" },
  { name: "E-Commerce & Retail", sub: "Shopify, Amazon, TikTok Shop" },
  { name: "Fitness & Sports", sub: "Gyms, athletes, activewear" },
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
            Full-stack social media — from concept and creation to growth, paid ads, and beyond.
          </p>
        </ScrollReveal>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer staggerDelay={100} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/25 p-6 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-0.5 w-full absolute top-0 left-0 rounded-t-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                  <service.icon className="h-5 w-5 text-white group-hover:text-black transition-colors duration-300" />
                </div>

                <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-5 text-pretty leading-relaxed text-sm">{service.description}</p>

                <ul className="space-y-1.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-xs text-muted-foreground">
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

      {/* Verticals */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" duration={900}>
            <div className="mb-14">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 border border-white/10 rounded-full px-4 py-1.5">
                Verticals
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
                Industries I work in
              </h2>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-white/5">
            {verticals.map((v, i) => (
              <ScrollReveal key={v.name} direction="up" delay={i * 60} duration={700}>
                <div className="flex items-center justify-between py-6 group cursor-default">
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs text-white/20 font-mono tabular-nums w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-white group-hover:text-white/80 transition-colors duration-300">
                        {v.name}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">{v.sub}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-white/30">
                    <ArrowRight className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center border-t border-white/5">
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
