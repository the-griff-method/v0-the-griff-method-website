"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import { ExternalLink } from "lucide-react"

// ─── Platform config ──────────────────────────────────────────────────────────

const platforms = [
  {
    id: "instagram",
    label: "Instagram",
    color: "#E1306C",
    glow: "rgba(225,48,108,0.35)",
    border: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.26 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281-.059 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.78-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: "tiktok",
    label: "TikTok",
    color: "#ff0050",
    glow: "rgba(255,0,80,0.35)",
    border: "from-[#010101] via-[#69C9D0] to-[#ff0050]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    label: "YouTube",
    color: "#FF0000",
    glow: "rgba(255,0,0,0.35)",
    border: "from-[#FF0000] via-[#cc0000] to-[#FF0000]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "snapchat",
    label: "Snapchat",
    color: "#FFFC00",
    glow: "rgba(255,252,0,0.3)",
    border: "from-[#FFFC00] via-[#FFD700] to-[#FFFC00]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.166.5C8.742.5 7.17 2.357 7.17 4.678c0 .516.048 1.055.048 1.055s-.516-.122-1.128-.122c-.757 0-1.543.298-1.543 1.166 0 .75.606 1.26 1.543 1.26.26 0 .478-.048.478-.048s-.5 1.105-.5 2.7c0 2.984 2.226 6.311 6.098 6.311s6.098-3.327 6.098-6.311c0-1.595-.5-2.7-.5-2.7s.218.048.478.048c.937 0 1.543-.51 1.543-1.26 0-.868-.786-1.166-1.543-1.166-.612 0-1.128.122-1.128.122s.048-.539.048-1.055C17.162 2.357 15.59.5 12.166.5zm0 1.5c2.68 0 3.996 1.428 3.996 2.678 0 .3-.024.6-.048.879-.26-.06-.55-.097-.842-.097-.63 0-1.163.194-1.163.194S13.94 4.9 12.166 4.9c-1.775 0-2.943.754-2.943.754s-.533-.194-1.163-.194c-.293 0-.583.037-.842.097-.024-.279-.048-.579-.048-.879C7.17 3.428 8.487 2 12.166 2zm6.27 10.927c-.122.024-.245.048-.366.048-.93 0-1.74-.538-1.74-.538s-.97 1.49-3.964 1.49-3.964-1.49-3.964-1.49-.81.538-1.74.538c-.121 0-.244-.024-.366-.048-.293.665-.47 1.41-.47 2.184 0 2.46 1.775 4.889 4.598 5.311.072.534.427.778.818.778.391 0 .746-.244.818-.778 2.823-.422 4.598-2.851 4.598-5.311 0-.774-.177-1.519-.422-2.184z" />
      </svg>
    ),
  },
]

// ─── Instagram posts data (add post URLs here) ────────────────────────────────

export type InstagramPost = {
  url: string
  views?: string
  label?: string
}

export type InstagramClient = {
  name: string
  handle: string
  posts: InstagramPost[]
}

const instagramClients: InstagramClient[] = [
  {
    name: "Mad Rabbit",
    handle: "@madrabbit",
    posts: [
      { url: "https://www.instagram.com/reel/Cucjun_J_MG/" },
      { url: "https://www.instagram.com/p/DKfZwPqTnfQ/" },
      { url: "https://www.instagram.com/p/DJewtngOtzy/" },
      { url: "https://www.instagram.com/p/DIjibepz5_o/" },
      { url: "https://www.instagram.com/p/DHweAWVSwJn/" },
      { url: "https://www.instagram.com/p/DHZNr4buljt/" },
      { url: "https://www.instagram.com/p/DEXxUS3vMMk/" },
      { url: "https://www.instagram.com/p/DD7rl0rzbPq/" },
      { url: "https://www.instagram.com/reel/DCR8lNSSCLy/" },
      { url: "https://www.instagram.com/reel/DIeqOq8veos/" },
      { url: "https://www.instagram.com/reel/DJuepcFAmyt/" },
      { url: "https://www.instagram.com/p/DDK6mA3TFVp/" },
      { url: "https://www.instagram.com/p/C_lPJNWv4tn/" },
      { url: "https://www.instagram.com/p/C-k9apdPUb5/" },
      { url: "https://www.instagram.com/reel/DAoAeGkp9Ac/" },
      { url: "https://www.instagram.com/reel/DGTf12UO0z-/" },
    ],
  },
  {
    name: "Biggby Coffee",
    handle: "@biggbycoffee",
    posts: [
      { url: "https://www.instagram.com/reel/DTakKGCAGeN/" },
      { url: "https://www.instagram.com/reel/DVgYKduErdu/" },
    ],
  },
]

// ─── Instagram embed component ────────────────────────────────────────────────

function InstagramEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    // Re-process embeds after mount
    const tryProcess = () => {
      if ((window as any).instgrm) {
        ;(window as any).instgrm.Embeds.process()
      }
    }
    // Short delay to let the blockquote render
    const t = setTimeout(tryProcess, 300)
    return () => clearTimeout(t)
  }, [url])

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "transparent",
          border: 0,
          borderRadius: "12px",
          margin: "0 auto",
          maxWidth: "100%",
          minWidth: "280px",
          width: "100%",
          padding: 0,
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer" />
      </blockquote>
    </div>
  )
}

// ─── Post card ────────────────────────────────────────────────────────────────

function InstagramPostCard({ post, index }: { post: InstagramPost; index: number }) {
  return (
    <ScrollReveal direction="up" delay={index * 100} duration={700}>
      <div className="group relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
        {/* Instagram gradient top accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]" />

        {/* Platform badge */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/10">
          <svg className="h-3 w-3 text-[#E1306C]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.26 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281-.059 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.78-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="text-[10px] text-white/70 font-medium">Instagram</span>
        </div>

        {/* Embed */}
        <div className="p-3">
          <InstagramEmbed url={post.url} />
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between px-4 pb-4">
          {post.views && (
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="text-sm font-semibold text-white">{post.views}</span>
              <span className="text-xs text-muted-foreground">views</span>
            </div>
          )}
          {post.label && (
            <span className="text-xs text-muted-foreground">{post.label}</span>
          )}
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1 text-xs text-muted-foreground hover:text-white transition-colors"
          >
            View post <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </ScrollReveal>
  )
}

// ─── Coming soon placeholder ──────────────────────────────────────────────────

function ComingSoon({ platform }: { platform: (typeof platforms)[number] }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-white/10"
        style={{ boxShadow: `0 0 40px ${platform.glow}` }}
      >
        <span style={{ color: platform.color }}>{platform.icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{platform.label} Portfolio</h3>
      <p className="text-muted-foreground max-w-md">
        {platform.label} content is on its way. Check back soon to see viral posts from this platform.
      </p>
    </div>
  )
}

// ─── Empty Instagram state ────────────────────────────────────────────────────

function InstagramEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{
          background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        }}
      >
        <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.26 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281-.059 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.78-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">Instagram Portfolio</h3>
      <p className="text-muted-foreground max-w-md">
        Viral Instagram content is being curated. Drop back soon to see the posts in action.
      </p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [activePlatform, setActivePlatform] = useState<string>("instagram")

  // Load Instagram embed script once
  useEffect(() => {
    if (typeof window === "undefined") return
    if (document.getElementById("instagram-embed-script")) {
      if ((window as any).instgrm) (window as any).instgrm.Embeds.process()
      return
    }
    const script = document.createElement("script")
    script.id = "instagram-embed-script"
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)
  }, [activePlatform])

  const activePlatformData = platforms.find((p) => p.id === activePlatform)!

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* ── Hero ── */}
      <section className="pt-40 pb-16 text-center px-4">
        <ScrollReveal direction="fade" duration={1000}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 border border-white/10 rounded-full px-4 py-1.5">
            Content Portfolio
          </span>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150} duration={1000}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Viral Content,
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #f09433 0%, #dc2743 40%, #bc1888 80%, #69C9D0 100%)",
              }}
            >
              Every Platform
            </span>
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={300} duration={1000}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real posts. Real reach. A curated showcase of viral content created across Instagram, TikTok, YouTube, and
            Snapchat.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Platform tabs ── */}
      <section className="sticky top-24 z-40 bg-background/90 backdrop-blur-md border-b border-white/5 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-4">
          {platforms.map((platform) => {
            const isActive = activePlatform === platform.id
            return (
              <button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border"
                style={
                  isActive
                    ? {
                        backgroundColor: `${platform.color}18`,
                        borderColor: `${platform.color}60`,
                        color: platform.color,
                        boxShadow: `0 0 20px ${platform.glow}`,
                      }
                    : {
                        backgroundColor: "transparent",
                        borderColor: "rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.5)",
                      }
                }
              >
                <span
                  style={isActive ? { color: platform.color } : { color: "rgba(255,255,255,0.4)" }}
                >
                  {platform.icon}
                </span>
                {platform.label}
              </button>
            )
          })}
        </div>
      </section>

      {/* ── Content area ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <ScrollReveal direction="fade" duration={600}>
            <div className="flex items-center gap-3 mb-12">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${activePlatformData.color}20`, color: activePlatformData.color }}
              >
                {activePlatformData.icon}
              </div>
              <h2 className="text-2xl font-bold text-white">{activePlatformData.label}</h2>
              <div
                className="h-px flex-1 max-w-xs"
                style={{
                  background: `linear-gradient(to right, ${activePlatformData.color}60, transparent)`,
                }}
              />
              {activePlatform === "instagram" && instagramClients.length > 0 && (
                <span className="text-sm text-muted-foreground ml-auto">
                  {instagramClients.reduce((acc, c) => acc + c.posts.length, 0)} posts · {instagramClients.length} clients
                </span>
              )}
            </div>
          </ScrollReveal>

          {/* Instagram grid */}
          {activePlatform === "instagram" &&
            (instagramClients.length === 0 ? (
              <InstagramEmpty />
            ) : (
              <div className="space-y-20">
                {instagramClients.map((client) => (
                  <div key={client.name}>
                    {/* Client header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div>
                        <h3 className="text-xl font-bold text-white">{client.name}</h3>
                        <p className="text-sm text-muted-foreground">{client.handle}</p>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                      <span className="text-xs text-muted-foreground border border-white/10 rounded-full px-3 py-1">
                        {client.posts.length} {client.posts.length === 1 ? "post" : "posts"}
                      </span>
                    </div>
                    {/* Posts grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                      {client.posts.map((post, i) => (
                        <div key={i} className="break-inside-avoid">
                          <InstagramPostCard post={post} index={i} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}

          {/* Other platforms — coming soon */}
          {activePlatform !== "instagram" && (
            <ComingSoon platform={activePlatformData} />
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
