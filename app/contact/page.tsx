"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CalendlyWidget from "@/components/calendly-widget"
import { useState } from "react"

export default function ContactPage() {
  const [showCalendly, setShowCalendly] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
  })

  const handleBookConsultation = () => {
    setShowCalendly(true)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Book Your Free Consultation</h1>
          <p className="text-xl text-white/80 mb-8 text-pretty">
            Ready to unlock your social media potential? Let's discuss how The Griff Method can transform your digital
            presence and drive real results for your business.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Your Name</label>
              <Input
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address</label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Business Name</label>
              <Input
                placeholder="Your business name"
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <Button
              onClick={handleBookConsultation}
              size="lg"
              className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300"
            >
              Book My Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <CalendlyWidget isOpen={showCalendly} onClose={() => setShowCalendly(false)} prefillData={formData} />

      <Footer />
    </div>
  )
}
