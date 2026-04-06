"use client"

import type React from "react"
import Link from "next/link" // Added Link import for contact page navigation

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, Star, Zap, Crown, Settings } from "lucide-react"
import { useState } from "react"

export default function PackagesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    services: "",
  })

  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to Calendly with form data as URL parameters
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      a1: formData.business, // Calendly custom field
      a2: formData.services, // Calendly custom field
    })
    window.open(`https://calendly.com/thegriffmethod?${params.toString()}`, "_blank")
  }

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  const handleCustomConsultation = () => {
    const customServices = selectedServices.join(", ")
    const params = new URLSearchParams({
      a1: "Custom Package Request",
      a2: customServices,
    })
    window.open(`https://calendly.com/thegriffmethod?${params.toString()}`, "_blank")
  }

  const availableServices = [
    { id: "posts-20", name: "20 Posts/Month (5 per week)", category: "Content Creation" },
    { id: "posts-32", name: "32 Posts/Month (8 per week)", category: "Content Creation" },
    { id: "static-posts-3", name: "3 Custom Static Posts", category: "Content Creation" },
    { id: "static-posts-5", name: "5 Custom Static Posts", category: "Content Creation" },
    { id: "videos-2", name: "2 Short-form Videos/Reels", category: "Video Content" },
    { id: "videos-3", name: "3 Short-form Videos/Reels", category: "Video Content" },
    { id: "stories-weekly", name: "Instagram Stories 3x per week", category: "Content Creation" },
    { id: "stories-daily", name: "Daily Stories across platforms", category: "Content Creation" },
    { id: "platform-strategy", name: "Platform Strategy Development", category: "Strategy" },
    { id: "performance-report", name: "Monthly Performance Report", category: "Analytics" },
    { id: "scheduling", name: "Scheduling & Automation", category: "Management" },
    { id: "engagement-basic", name: "Basic Community Engagement (1 hour daily)", category: "Management" },
    { id: "engagement-daily", name: "Daily Engagement & DM Management", category: "Management" },
    { id: "additional-platform", name: "Additional Platform Management", category: "Platform Expansion" },
    { id: "meta-ads", name: "Meta Ads Management", category: "Paid Advertising" },
    { id: "ab-testing-paid", name: "A/B Testing (Paid Only)", category: "Optimization" },
    { id: "ab-testing-full", name: "A/B Testing (Organic + Paid)", category: "Optimization" },
    { id: "video-editing-advanced", name: "Advanced Video Editing", category: "Video Content" },
    { id: "video-production", name: "High Quality Video Production", category: "Video Content" },
    { id: "competitor-monitoring", name: "Competitor Monitoring & Reports", category: "Analytics" },
    { id: "campaign-optimization", name: "Campaign Setup & Optimization", category: "Paid Advertising" },
    { id: "dm-automation", name: "Automated DM Responses & Workflows", category: "Automation" },
    { id: "multi-platform", name: "Multi-platform Posting (3-4 platforms)", category: "Platform Expansion" },
    { id: "influencer-strategy", name: "Influencer Strategy", category: "Strategy" },
    { id: "landing-page", name: "Landing Page Service", category: "Web Development" },
    { id: "photography", name: "Professional Photography Session", category: "Content Creation" },
    { id: "advanced-automation", name: "Advanced Automation Workflows", category: "Automation" },
  ]

  const serviceCategories = [...new Set(availableServices.map((service) => service.category))]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Choose Your Social Media <span className="italic animate-pulse -ml-1">Method</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Tailored packages designed to elevate your brand and drive real results across all platforms
          </p>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="relative bg-gradient-to-r from-muted/20 to-muted/10 border-2 border-white/30 rounded-xl p-6 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider">
                *Required Prerequisite*
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Social Media Audit</h3>
                <p className="text-muted-foreground text-sm mb-4 max-w-2xl mx-auto">
                  Before choosing any package, we conduct a comprehensive audit to understand your current position and
                  create the perfect strategy tailored to your business needs.
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-xs text-white/80 mb-6">
                  <span>• Account Analysis</span>
                  <span>• Brand Positioning</span>
                  <span>• Audience Insights</span>
                  <span>• Performance Analytics</span>
                  <span>• Competitive Analysis</span>
                  <span>• Strategy Assessment</span>
                  <span>• SWOT Analysis</span>
                  <span>• Action Plan</span>
                </div>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 group"
                  >
                    <Settings className="h-5 w-5 mr-2 group-hover:animate-spin transition-all duration-300" />
                    Start Your Audit
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
            {/* Starter Pack */}
            <Card className="relative border-2 border-muted hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 flex flex-col">
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <Zap className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">Starter Pack</CardTitle>
                <CardDescription className="text-muted-foreground">Perfect for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">20 posts/month (5 per week)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">3 custom static posts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">2 short-form videos/Reels</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Instagram Stories 3x per week</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Platform strategy development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Monthly performance report</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Scheduling &amp; automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Basic community engagement (1 hour daily)</span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 mt-auto">
                    Unlock Price
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Pack */}
            <Card className="relative border-2 border-white/40 hover:border-white/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 flex flex-col">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <Star className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">Pro Pack</CardTitle>
                <CardDescription className="text-muted-foreground">For established businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Starter Pack </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">+ 1 additional platform </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Meta Ads Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">A/B testing (paid only) </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">{"Advance video editing"} </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Competitor monitoring & reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Campaign setup &amp; optimization </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Automated DM responses & workflows</span>
                  </div>
                  <div className="flex items-center gap-3"></div>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 mt-auto">
                    Unlock Price
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Legendary Pack */}
            <Card className="relative border-2 border-muted hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 flex flex-col">
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <Crown className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">Legendary Pack</CardTitle>
                <CardDescription className="text-muted-foreground">For enterprise-level growth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">32 posts/month (8 per week)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">5 custom static posts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">3 short-from video/Reels </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Multi-platform posting (3-4 platforms)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Daily Stories across platforms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Influencer strategy </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">A/B testing (organic + paid)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">High quality video production </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Daily engagement & DM management</span>
                  </div>

                  <div className="flex items-center gap-3"></div>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 mt-auto">
                    Unlock Price
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Additional Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Landing Page Service */}
            <Card className="border-2 border-muted hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white mb-2">Landing Page Service</CardTitle>
                <Badge className="w-fit bg-white text-black">Pilot Program</Badge>
                <CardDescription className="text-muted-foreground mt-2">
                  Conversion-optimized landing pages designed to capture leads
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Single Landing Page</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Conversion-Optimized with A/B Testing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Monthly Optimization & Reporting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Limited to first 10 clients</span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 mt-auto">
                    Unlock Price
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Power-Up Bundle */}
            <Card className="border-2 border-muted hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white mb-2">Power-Up Bundle</CardTitle>
                <Badge className="w-fit bg-white text-black">Best Value</Badge>
                <CardDescription className="text-muted-foreground mt-2">
                  Starter Pack + Landing Page combination
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Starter Pack </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">1 landing page (pilot pricing)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white">Significant cost savings</span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 mt-auto">
                    Unlock Price
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Build Your Own Service section */}

      {/* Add-Ons Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Add-On Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Custom Bundle */}
            <Card className="border border-muted hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Custom Bundle</h3>
                <p className="text-muted-foreground mb-4">Build your own personalized service package</p>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300">
                    Unlock Price
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Additional Platforms */}
            <Card className="border border-muted hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Additional Platforms</h3>
                <p className="text-muted-foreground mb-4">Expand to more social platforms</p>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300">
                    Unlock Price
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Professional Videography */}
            <Card className="border border-muted hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Professional Videography</h3>
                <p className="text-muted-foreground mb-4">High-end video production services</p>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300">
                    Unlock Price
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Specific Content Piece */}
            <Card className="border border-muted hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Specific Content Piece</h3>
                <p className="text-muted-foreground mb-4">Individual video, reel, or content creation</p>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300">
                    Unlock Price
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Paid Ad Management */}
            <Card className="border border-muted hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Paid Ad Management</h3>
                <p className="text-muted-foreground mb-4">Standalone advertising services</p>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300">
                    Unlock Price
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Photography Session */}
            <Card className="border border-muted hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Photography Session</h3>
                <p className="text-muted-foreground mb-4">Professional brand photography</p>
                <Link href="/contact">
                  <Button className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300">
                    Unlock Price
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Unlock Your <span className="italic animate-pulse -ml-1">Method</span> ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss which package is perfect for your business goals
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300"
              >
                Schedule Free Consultation
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-background border-muted">
              <DialogHeader>
                <DialogTitle className="text-white">Schedule Your Free Consultation</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Tell us about your business and we'll connect you with the perfect package.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted border-muted-foreground text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted border-muted-foreground text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business" className="text-white">
                    Business Name
                  </Label>
                  <Input
                    id="business"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="bg-muted border-muted-foreground text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="services" className="text-white">
                    Services Interested In
                  </Label>
                  <Textarea
                    id="services"
                    value={formData.services}
                    onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                    className="bg-muted border-muted-foreground text-white"
                    placeholder="Tell us which packages or services interest you most..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300"
                >
                  Book My Consultation
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <Footer />
    </main>
  )
}
