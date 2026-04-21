import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PortfolioTeaser } from "@/components/portfolio-teaser"
import { CtaStrip } from "@/components/cta-strip"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PortfolioTeaser />
      <CtaStrip />
      <Footer />
    </main>
  )
}
