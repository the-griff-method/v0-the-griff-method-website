import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import Link from "next/link"

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "Instagram":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.26 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281-.059 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.78-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    case "TikTok":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      )
    case "YouTube":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    case "Snapchat":
      return (
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center p-1">
          <img src="/images/snapchat-ghost-logo.png" alt="Snapchat" className="w-4 h-4 object-contain" />
        </div>
      )
    default:
      return null
  }
}

const caseStudies = [
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
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Proven <span className="text-foreground">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Real clients, real results. See how we've transformed businesses across platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-muted-foreground transition-all duration-300 group h-full flex flex-col"
            >
              <CardHeader className="flex-shrink-0">
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
                <div className="text-2xl font-bold text-white mb-2 min-h-[32px]">{study.result}</div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow min-h-[72px]">{study.description}</p>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white min-h-[28px] flex items-end justify-center mt-3">
                      {study.metrics.impressions}
                    </div>
                    <div className="text-xs text-muted-foreground">Impressions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white min-h-[28px] flex items-end justify-center">
                      {study.metrics.growth}
                    </div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            asChild
          >
            <Link href="/case-studies">
              View All Case Studies
              <TrendingUp className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
