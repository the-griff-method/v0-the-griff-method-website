import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import StaggerContainer from "@/components/stagger-container"
import MagneticButton from "@/components/magnetic-button"
import { ArrowRight } from "lucide-react"

const studies = [
  {
    client: "Mad Rabbit",
    platform: "TikTok",
    color: "#ff0050",
    metric: "50M+",
    metricLabel: "Impressions",
    detail: "Viral short-form content strategy built around tattoo culture, trending audio, and authentic brand voice.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    client: "Mad Rabbit",
    platform: "Snapchat",
    color: "#FFFC00",
    metric: "33M+",
    metricLabel: "Impressions",
    detail: "Spotlight and story content that drove explosive reach for Mad Rabbit's e-commerce presence on Snapchat.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.031-.569c-.098-1.626-.225-3.651.304-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
      </svg>
    ),
  },
  {
    client: "Mad Rabbit",
    platform: "Instagram",
    color: "#E1306C",
    metric: "14M+",
    metricLabel: "Impressions",
    detail: "Reels-first content strategy that built brand authority in the tattoo aftercare space and drove consistent profile growth.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.26 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.78-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    client: "Shop 26 Men's Salon",
    platform: "TikTok",
    color: "#ff0050",
    metric: "2M+",
    metricLabel: "Views",
    detail: "Short-form barbershop content that grew Shop 26's TikTok presence through transformation videos, culture, and style.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    client: "Mad Rabbit",
    platform: "YouTube",
    color: "#FF0000",
    metric: "1M+",
    metricLabel: "Views",
    detail: "Long-form series and YouTube Shorts documenting tattoo artistry, care tips, and behind-the-scenes brand storytelling.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-16 text-center px-4">
        <ScrollReveal direction="fade" duration={1000}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 border border-white/10 rounded-full px-4 py-1.5">
            Case Studies
          </span>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150} duration={1000}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            The Numbers
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={300} duration={1000}>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Real results across real platforms. No fluff.
          </p>
        </ScrollReveal>
      </section>

      {/* Total stat */}
      <section className="pb-16 px-4">
        <ScrollReveal direction="up" duration={900}>
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 px-10 py-10 text-center">
              <p className="text-6xl md:text-8xl font-bold text-white mb-3">100M+</p>
              <p className="text-muted-foreground text-lg">Total impressions generated across all clients and platforms</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Case study cards */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer staggerDelay={120} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {studies.map((study) => (
              <div
                key={study.platform}
                className="group relative rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/25 p-8 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-0.5 w-full absolute top-0 left-0" style={{ backgroundColor: study.color }} />

                <div className="flex items-center gap-2 mb-6">
                  <span style={{ color: study.color }}>{study.icon}</span>
                  <span className="text-sm font-medium text-white/60">{study.platform}</span>
                  <span className="text-white/20 mx-1">·</span>
                  <span className="text-sm text-white/60">{study.client}</span>
                </div>

                <p className="text-5xl md:text-6xl font-bold text-white mb-1">{study.metric}</p>
                <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest">{study.metricLabel}</p>

                <p className="text-muted-foreground leading-relaxed text-pretty">{study.detail}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center border-t border-white/5 mt-16">
        <ScrollReveal direction="up" duration={900}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want results like these?</h2>
          <p className="text-xl text-muted-foreground mb-10">Let's talk about your brand.</p>
          <MagneticButton
            href="/contact"
            size="lg"
            className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 group"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  )
}
