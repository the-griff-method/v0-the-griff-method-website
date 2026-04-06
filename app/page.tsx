import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import LiveMetricsTicker from "@/components/live-metrics-ticker"
import { ServicesSection } from "@/components/services-section"
import { PlatformsTicker } from "@/components/platforms-ticker"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <LiveMetricsTicker />
      <ServicesSection />
      <PlatformsTicker />
      <CaseStudiesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
