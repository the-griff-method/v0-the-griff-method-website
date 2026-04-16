"use client"

import { useEffect } from "react"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"
import StaggerContainer from "./stagger-container"
import MagneticButton from "./magnetic-button"

const featuredPosts = [
  {
    platform: "TikTok",
    color: "#ff0050",
    glow: "rgba(255,0,80,0.2)",
    url: "https://www.tiktok.com/@madrabbit/video/7243916416238521646",
    videoId: "7243916416238521646",
    type: "tiktok" as const,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    platform: "Instagram",
    color: "#E1306C",
    glow: "rgba(225,48,108,0.2)",
    url: "https://www.instagram.com/p/DEXxUS3vMMk/",
    type: "instagram" as const,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.26 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281-.059 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.78-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
]

function TikTokPreview({ videoId, url }: { videoId: string; url: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (!(window as any).tiktokEmbed) return
    const t = setTimeout(() => (window as any).tiktokEmbed.lib.render(), 300)
    return () => clearTimeout(t)
  }, [videoId])

  return (
    <blockquote
      className="tiktok-embed"
      cite={url}
      data-video-id={videoId}
      style={{ maxWidth: "100%", minWidth: "280px" }}
    >
      <section />
    </blockquote>
  )
}

function InstagramPreview({ url }: { url: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return
    const t = setTimeout(() => {
      if ((window as any).instgrm) (window as any).instgrm.Embeds.process()
    }, 300)
    return () => clearTimeout(t)
  }, [url])

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ background: "transparent", border: 0, margin: "0 auto", maxWidth: "100%", minWidth: "280px", width: "100%", padding: 0 }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" />
    </blockquote>
  )
}

export function PortfolioTeaser() {
  useEffect(() => {
    if (typeof window === "undefined") return

    if (!document.getElementById("instagram-embed-script")) {
      const s = document.createElement("script")
      s.id = "instagram-embed-script"
      s.src = "https://www.instagram.com/embed.js"
      s.async = true
      document.body.appendChild(s)
    }

    if (!document.getElementById("tiktok-embed-script")) {
      const s = document.createElement("script")
      s.id = "tiktok-embed-script"
      s.src = "https://www.tiktok.com/embed.js"
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={1000}>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 border border-white/10 rounded-full px-4 py-1.5">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
              Content That Performs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A taste of what's possible. See the full portfolio for every platform.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {featuredPosts.map((post) => (
            <div
              key={post.url}
              className="group relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Platform accent bar */}
              <div className="h-0.5 w-full" style={{ backgroundColor: post.color }} />

              {/* Platform badge */}
              <div className="flex items-center gap-2 px-4 pt-4 pb-2">
                <span style={{ color: post.color }}>{post.icon}</span>
                <span className="text-sm font-medium text-white">{post.platform}</span>
              </div>

              {/* Embed */}
              <div className="px-3 pb-3">
                {post.type === "tiktok" && post.videoId && (
                  <TikTokPreview videoId={post.videoId} url={post.url} />
                )}
                {post.type === "instagram" && (
                  <InstagramPreview url={post.url} />
                )}
              </div>

              {/* Footer */}
              <div className="px-4 pb-4 flex justify-end">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-white transition-colors"
                >
                  View post <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </StaggerContainer>

        <ScrollReveal direction="up" delay={300} duration={800}>
          <div className="text-center">
            <MagneticButton
              href="/portfolio"
              size="lg"
              className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300 group"
            >
              See Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
