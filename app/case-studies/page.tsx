"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import Link from "next/link"

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "Instagram":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.26 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.78-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    case "TikTok":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    case "Snapchat":
      return (
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center p-1">
          <img src="/images/snapchat-ghost-logo.png" alt="Snapchat" className="w-4 h-4 object-contain" />
        </div>
      )
    case "X":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    case "YouTube":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    default:
      return null
  }
}

const initialCaseStudies = [
  {
    client: "@madrabbit",
    handle: "@madrabbit.studios",
    platform: "Instagram",
    challenge: "Building brand awareness and engagement",
    result: "14M+ impressions generated",
    metrics: {
      impressions: "14M+",
      growth: "10%",
      platform: "Instagram",
    },
    description:
      "Transformed Mad Rabbit's Instagram presence with strategic content that generated massive reach and consistent profile growth.",
    fullDescription:
      "Mad Rabbit came to us with a need to establish a strong Instagram presence in the competitive tattoo aftercare market. Through strategic content planning, we developed a comprehensive approach that included educational posts about tattoo care, user-generated content campaigns, and influencer partnerships. Our content strategy focused on building trust and authority in the space while maintaining an engaging, visually appealing feed that resonated with their target audience.",
    date: "2023",
    duration: "6 months",
  },
  {
    client: "@madrabbit",
    handle: "@madrabbit",
    platform: "TikTok",
    challenge: "Viral content strategy and audience building",
    result: "50M+ impressions generated",
    metrics: {
      impressions: "50M+",
      growth: "10%",
      platform: "TikTok",
    },
    description:
      "Created viral TikTok content strategy that delivered exceptional reach and steady follower acquisition for Mad Rabbit.",
    fullDescription:
      "TikTok presented a unique opportunity for Mad Rabbit to reach a younger demographic through creative, entertaining content. We developed a content strategy that balanced educational tattoo care tips with trending audio and viral formats. Our approach included behind-the-scenes content, quick tips, and user testimonials that authentically showcased the brand's personality while driving massive organic reach.",
    date: "2023",
    duration: "8 months",
  },
  {
    client: "@shopmadrabbit",
    handle: "@shopmadrabbit",
    platform: "Snapchat",
    challenge: "Snapchat audience engagement and reach",
    result: "33M+ impressions, 50x growth",
    metrics: {
      impressions: "33M+",
      growth: "10%",
      platform: "Snapchat",
    },
    description:
      "Developed targeted Snapchat content strategy that achieved exceptional reach and explosive follower growth through engaging visual storytelling.",
    fullDescription:
      "Snapchat's unique format required a fresh approach to visual storytelling for Mad Rabbit's e-commerce presence. We leveraged Snapchat's AR features and story formats to create immersive product experiences and behind-the-scenes content. Our strategy focused on authentic, in-the-moment content that showcased products in real-world scenarios, resulting in unprecedented growth and engagement rates.",
    date: "2023",
    duration: "4 months",
  },
  {
    client: "@madrabbittattoo",
    handle: "@madrabbittattoo",
    platform: "YouTube",
    challenge: "Professional video content creation and audience growth",
    result: "1M+ views generated",
    metrics: {
      impressions: "1M+",
      growth: "10%",
      platform: "YouTube",
    },
    description:
      "Created professional YouTube series content as well as YouTube shorts that generated over 1 million views and established strong brand presence.",
    fullDescription:
      "Mad Rabbit Tattoo approached us to develop a comprehensive YouTube content strategy that would showcase their artistry and build a loyal subscriber base. We created a multi-format approach combining long-form series content that documented the tattoo process from consultation to completion, alongside engaging YouTube Shorts that captured quick tips, time-lapses, and behind-the-scenes moments. Our content strategy emphasized storytelling, artistic process, and client testimonials to build trust and showcase the studio's expertise in the tattoo community.",
    date: "2024",
    duration: "12 months",
  },
]

export default function CaseStudiesPage() {
  const [caseStudies] = useState(initialCaseStudies)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Complete <span className="text-foreground">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
              Dive deep into our proven strategies and results. See exactly how we've transformed businesses across
              every major social platform.
            </p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300"
                asChild
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-muted-foreground transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-muted/20">
                        <PlatformIcon platform={study.platform} />
                      </div>
                      <div>
                        <CardTitle className="text-card-foreground">{study.client}</CardTitle>
                        <CardDescription className="text-muted-foreground">{study.handle}</CardDescription>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{study.result}</div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Strategy & Execution</h4>
                    <p className="text-muted-foreground text-sm">{study.fullDescription}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/10 rounded-lg">
                      <div className="text-2xl font-bold text-white mb-1">{study.metrics.impressions}</div>
                      <div className="text-xs text-muted-foreground">Impressions</div>
                    </div>
                    <div className="text-center p-4 bg-muted/10 rounded-lg">
                      <div className="text-2xl font-bold text-white mb-1">{study.metrics.growth}</div>
                      <div className="text-xs text-muted-foreground">Growth</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let's discuss how we can achieve similar results for your brand across all social platforms.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300"
            asChild
          >
            <Link href="/contact">
              Start Your Journey
              <TrendingUp className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
