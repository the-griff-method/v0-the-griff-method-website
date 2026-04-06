"use client"

import { Instagram, Facebook, Linkedin } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import StaggerContainer from "./stagger-container"

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
  },
  {
    name: "TikTok",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: Facebook,
  },
  {
    name: "X",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Threads",
    icon: () => <img src="/images/threads-logo.png" alt="Threads" className="w-8 h-8 object-contain" />,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
  },
  {
    name: "Snapchat",
    icon: () => <img src="/images/snapchat-logo.jpg" alt="Snapchat" className="w-8 h-8 object-contain" />,
  },
  {
    name: "Pinterest",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.342-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
      </svg>
    ),
  },
]

export function PlatformsTicker() {
  return (
    <section className="py-16 bg-black border-y border-white/10">
      <ScrollReveal direction="up" duration={1000}>
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">We Master Every Platform</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            From viral TikToks to professional LinkedIn content, we know how to make your brand shine on every social
            media platform.
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto px-4">
        <StaggerContainer
          staggerDelay={80}
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 justify-items-center"
        >
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon
            return (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-gray-100 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/20 transition-all duration-500 ease-out mb-4 group-hover:rotate-6">
                  {typeof IconComponent === "function" ? <IconComponent /> : <IconComponent />}
                </div>
                <span className="text-white font-medium text-sm whitespace-nowrap group-hover:text-gray-300 transition-colors duration-300">
                  {platform.name}
                </span>
              </div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
