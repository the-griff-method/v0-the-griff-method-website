"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowRight } from "lucide-react"
import CalendlyWidget from "./calendly-widget"

export function ContactSection() {
  const [showForm, setShowForm] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowCalendly(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            Ready to Find Your{" "}
            <span className="italic animate-pulse text-white text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
              Method?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover how we can unlock the method to your online presence.
          </p>
        </div>

        {!showForm ? (
          <div className="text-center">
            <Button
              onClick={() => setShowForm(true)}
              size="lg"
              className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 group"
            >
              Request Social Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Request Your Free Consultation </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Provide your details below and we'll analyze your current social media presence and provide actionable
                  insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300"
                  >
                    Unlock Your <span className="italic animate-pulse -ml-1">Method</span>
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        <CalendlyWidget
          isOpen={showCalendly}
          onClose={() => setShowCalendly(false)}
          prefillData={{
            name: formData.name,
            email: formData.email,
            business: formData.company,
          }}
        />

        <div className="space-y-6">{/* Additional content can be added here */}</div>
      </div>
    </section>
  )
}
