"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, CheckCircle, X } from "lucide-react"

interface CalendlyWidgetProps {
  isOpen: boolean
  onClose: () => void
  prefillData?: {
    name?: string
    email?: string
    business?: string
    services?: string
  }
}

const mockTimeSlots = [
  { id: 1, date: "2025-01-20", time: "10:00 AM", available: true },
  { id: 2, date: "2025-01-20", time: "2:00 PM", available: true },
  { id: 3, date: "2025-01-20", time: "4:00 PM", available: false },
  { id: 4, date: "2025-01-21", time: "9:00 AM", available: true },
  { id: 5, date: "2025-01-21", time: "11:00 AM", available: true },
  { id: 6, date: "2025-01-21", time: "3:00 PM", available: true },
  { id: 7, date: "2025-01-22", time: "10:00 AM", available: true },
  { id: 8, date: "2025-01-22", time: "1:00 PM", available: false },
  { id: 9, date: "2025-01-23", time: "9:00 AM", available: true },
  { id: 10, date: "2025-01-23", time: "2:00 PM", available: true },
]

export default function CalendlyWidget({ isOpen, onClose, prefillData }: CalendlyWidgetProps) {
  const [step, setStep] = useState<"form" | "slots" | "confirmation">("form")
  const [selectedSlot, setSelectedSlot] = useState<(typeof mockTimeSlots)[0] | null>(null)
  const [formData, setFormData] = useState({
    name: prefillData?.name || "",
    email: prefillData?.email || "",
    business: prefillData?.business || "",
    budget: "",
    timeline: "",
    goals: "",
    services: prefillData?.services || "",
  })

  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("slots")
  }

  const handleSlotSelect = (slot: (typeof mockTimeSlots)[0]) => {
    if (!slot.available) return
    setSelectedSlot(slot)
  }

  const handleBooking = () => {
    console.log("Booking confirmed:", { formData, selectedSlot })
    setStep("confirmation")

    // Auto-close after 3 seconds
    setTimeout(() => {
      onClose()
      setStep("form")
      setSelectedSlot(null)
    }, 3000)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card
        className={`w-full max-w-2xl bg-background border-white/20 transform transition-all duration-500 ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 text-white hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </Button>

          {step === "form" && (
            <>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                Schedule Your Free Consultation
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Tell us about your business and we'll find the perfect time to discuss your social media strategy.
              </CardDescription>
            </>
          )}

          {step === "slots" && (
            <>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <Clock className="h-6 w-6" />
                Choose Your Time Slot
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Select from our available consultation times over the next 7 days.
              </CardDescription>
            </>
          )}

          {step === "confirmation" && (
            <>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                Booking Confirmed!
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Your consultation has been scheduled successfully.
              </CardDescription>
            </>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          {step === "form" && (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business" className="text-white">
                  Business Name *
                </Label>
                <Input
                  id="business"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Your business name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-white">
                    Monthly Budget Range
                  </Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="e.g., $2,000-$5,000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-white">
                    Timeline to Start
                  </Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="e.g., Within 2 weeks"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals" className="text-white">
                  Primary Goals
                </Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="What are your main objectives for social media marketing?"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 transition-all duration-300"
                size="lg"
              >
                Continue to Time Selection
              </Button>
            </form>
          )}

          {step === "slots" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                {mockTimeSlots.map((slot) => (
                  <Button
                    key={slot.id}
                    variant={selectedSlot?.id === slot.id ? "default" : "outline"}
                    className={`p-4 h-auto flex flex-col items-start gap-1 transition-all duration-300 ${
                      slot.available
                        ? selectedSlot?.id === slot.id
                          ? "bg-white text-black border-white"
                          : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                        : "bg-white/5 border-white/10 text-white/40 cursor-not-allowed"
                    }`}
                    onClick={() => handleSlotSelect(slot)}
                    disabled={!slot.available}
                  >
                    <div className="font-semibold">{formatDate(slot.date)}</div>
                    <div className="text-sm opacity-80">{slot.time}</div>
                    {!slot.available && <div className="text-xs text-red-400">Unavailable</div>}
                  </Button>
                ))}
              </div>

              {selectedSlot && (
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-white mb-2">Selected Time:</h4>
                  <p className="text-white/80">
                    {formatDate(selectedSlot.date)} at {selectedSlot.time}
                  </p>
                  <p className="text-sm text-white/60 mt-2">Duration: 30 minutes • Free consultation</p>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setStep("form")}
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  Back to Form
                </Button>
                <Button
                  onClick={handleBooking}
                  disabled={!selectedSlot}
                  className="flex-1 bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Booking
                </Button>
              </div>
            </div>
          )}

          {step === "confirmation" && (
            <div className="text-center space-y-4">
              <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-6">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Your consultation is booked!</h3>
                <p className="text-white/80 mb-4">
                  {selectedSlot && `${formatDate(selectedSlot.date)} at ${selectedSlot.time}`}
                </p>
                <div className="text-sm text-white/60 space-y-1">
                  <p>📧 Confirmation email sent to {formData.email}</p>
                  <p>📅 Calendar invite included</p>
                  <p>🔗 Meeting link will be provided</p>
                </div>
              </div>
              <p className="text-white/60 text-sm">This window will close automatically...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
