"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Lightbulb, Rocket, Camera, Calendar, Users, Star, BarChart3 } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import StaggerContainer from "./stagger-container"

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: "Social Media Audit",
    description: "Comprehensive analysis of your current social presence and opportunities.",
    benefits: [
      "Competitor analysis",
      "Performance benchmarking",
      "Growth opportunity identification",
      "Platform optimization recommendations",
    ],
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Content Strategy",
    description: "Strategic content planning tailored to your brand and audience.",
    benefits: [
      "Brand voice development",
      "Content pillar creation",
      "Audience persona mapping",
      "Editorial calendar planning",
    ],
  },
  {
    id: 3,
    icon: Rocket,
    title: "Campaign Development",
    description: "High-converting campaign creation and launch strategies.",
    benefits: [
      "Campaign concept development",
      "Multi-platform coordination",
      "Launch timeline planning",
      "Performance optimization",
    ],
  },
  {
    id: 4,
    icon: Camera,
    title: "Content Studio",
    description: "Professional content production in our dedicated studio.",
    benefits: ["Professional photography", "Video production", "Graphic design", "Brand asset creation"],
  },
  {
    id: 5,
    icon: Calendar,
    title: "Social Media Management",
    description: "Full-service management with consistent posting and brand voice.",
    benefits: ["Daily content posting", "Brand voice consistency", "Platform optimization", "Content scheduling"],
  },
  {
    id: 6,
    icon: Users,
    title: "Community Management",
    description: "Active community building and engagement management.",
    benefits: ["Real-time engagement", "Community building", "Customer support", "Reputation management"],
  },
  {
    id: 7,
    icon: Star,
    title: "Influencer Marketing",
    description: "Strategic influencer partnerships to amplify your reach.",
    benefits: ["Influencer identification", "Partnership negotiation", "Campaign coordination", "Performance tracking"],
  },
  {
    id: 8,
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Detailed performance tracking and transparent ROI reporting.",
    benefits: ["Performance analytics", "ROI measurement", "Growth insights", "Strategic recommendations"],
  },
]

export function ServicesSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const activeStepData = activeStep ? processSteps.find((step) => step.id === activeStep) : null

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-white animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-white animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" duration={1000}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Social Media <span className="text-muted-foreground">Services Hub</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover our comprehensive 8-service ecosystem designed to transform your social presence.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col items-center gap-8 lg:gap-12">
          <div className="block lg:hidden w-full max-w-md space-y-4">
            <StaggerContainer staggerDelay={100}>
              {processSteps.map((step) => {
                const isActive = activeStep === step.id
                return (
                  <Card
                    key={step.id}
                    className={`cursor-pointer transition-all duration-500 backdrop-blur-sm bg-white/5 border-white/20 hover:bg-white/10 hover:scale-105 hover:shadow-xl hover:shadow-white/20 ${
                      isActive ? "bg-white/15 border-white/40 shadow-xl shadow-white/20 scale-105" : ""
                    }`}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isActive}
                    aria-label={`${step.title} service details`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        setActiveStep(activeStep === step.id ? null : step.id)
                      }
                    }}
                    style={{ minHeight: "44px" }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-6 w-6 text-black" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground font-medium">SERVICE {step.id}</div>
                          <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                        </div>
                        <div className={`transform transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </CardHeader>
                    {isActive && (
                      <CardContent className="pt-0 animate-in slide-in-from-top-2 duration-300">
                        <CardDescription className="text-gray-300 mb-4">{step.description}</CardDescription>
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Key Benefits:</h4>
                          <ul className="space-y-1">
                            {step.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </StaggerContainer>
          </div>

          <div className="hidden lg:flex lg:flex-row items-center gap-12 w-full">
            <div className="relative w-[500px] h-[500px] mx-auto lg:mx-0 flex-shrink-0">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 500 500"
                aria-hidden="true"
              >
                {processSteps.map((step, index) => {
                  const angle = index * 45 - 90
                  const radian = (angle * Math.PI) / 180
                  const radius = 180
                  const x = 250 + Math.cos(radian) * radius
                  const y = 250 + Math.sin(radian) * radius

                  const isActive = hoveredStep === step.id || activeStep === step.id

                  return (
                    <g key={`connection-${step.id}`}>
                      <line
                        x1="250"
                        y1="250"
                        x2={x}
                        y2={y}
                        stroke="white"
                        strokeWidth={isActive ? "3" : "1"}
                        opacity={isActive ? "0.8" : "0.3"}
                        className="transition-all duration-300"
                      />

                      <circle
                        cx="250"
                        cy="250"
                        r="2"
                        fill="white"
                        opacity={isActive ? "1" : "0.5"}
                        className="transition-all duration-300"
                      >
                        <animateMotion dur="3s" repeatCount="indefinite" path={`M 0,0 L ${x - 250},${y - 250}`} />
                      </circle>
                    </g>
                  )
                })}

                {processSteps.map((step, index) => {
                  const nextIndex = (index + 1) % processSteps.length
                  const angle1 = index * 45 - 90
                  const angle2 = nextIndex * 45 - 90
                  const radian1 = (angle1 * Math.PI) / 180
                  const radian2 = (angle2 * Math.PI) / 180
                  const radius = 180
                  const x1 = 250 + Math.cos(radian1) * radius
                  const y1 = 250 + Math.sin(radian1) * radius
                  const x2 = 250 + Math.cos(radian2) * radius
                  const y2 = 250 + Math.sin(radian2) * radius

                  return (
                    <line
                      key={`flow-${step.id}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="white"
                      strokeWidth="1"
                      opacity="0.1"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  )
                })}
              </svg>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-black border-4 border-white flex items-center justify-center z-20 shadow-2xl">
                <img src="/images/griff-logo.png" alt="The Griff Method Logo" className="w-16 h-16 object-contain" />
                <div className="absolute inset-0 rounded-full bg-black opacity-20 animate-ping"></div>
              </div>

              {processSteps.map((step, index) => {
                const angle = index * 45 - 90
                const radian = (angle * Math.PI) / 180
                const radius = 180
                const x = Math.cos(radian) * radius
                const y = Math.sin(radian) * radius

                const isHovered = hoveredStep === step.id
                const isActive = activeStep === step.id

                return (
                  <div
                    key={step.id}
                    className="absolute top-1/2 left-1/2 cursor-pointer transition-all duration-500 z-10"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${isHovered ? "scale(1.2)" : "scale(1)"}`,
                      minWidth: "44px",
                      minHeight: "44px",
                    }}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${step.title} - ${step.description}`}
                    aria-expanded={isActive}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        setActiveStep(activeStep === step.id ? null : step.id)
                      }
                    }}
                    onFocus={() => setHoveredStep(step.id)}
                    onBlur={() => setHoveredStep(null)}
                  >
                    {isHovered && (
                      <div className="absolute inset-0 w-16 h-16 rounded-full bg-white opacity-20 animate-pulse -m-1"></div>
                    )}

                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2 relative backdrop-blur-sm ${
                        isActive
                          ? "bg-white border-white shadow-2xl shadow-white/50"
                          : isHovered
                            ? "bg-white/90 border-white shadow-xl shadow-white/30"
                            : "bg-white/80 border-white/60 hover:bg-white/90 focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                      }`}
                    >
                      <step.icon className="h-5 w-5 transition-colors duration-300 text-black" />

                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 bg-black text-white">
                        {step.id}
                      </div>

                      <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-black flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-white animate-pulse"></div>
                      </div>
                    </div>

                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="text-xs font-medium text-white whitespace-nowrap bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                        {step.title}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex-1 max-w-lg">
              {activeStepData ? (
                <Card className="bg-card border-border h-full backdrop-blur-sm bg-white/5 border-white/20">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <activeStepData.icon className="h-6 w-6 text-black" />
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">SERVICE {activeStepData.id}</div>
                    </div>
                    <CardTitle className="text-white text-2xl text-balance">{activeStepData.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-lg mb-6 text-pretty">
                      {activeStepData.description}
                    </CardDescription>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Key Benefits:</h4>
                      <ul className="space-y-2" role="list">
                        {activeStepData.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" aria-hidden="true"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card border-border h-full backdrop-blur-sm bg-white/5 border-white/20">
                  <CardContent className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="text-white text-xl mb-2">Interactive Services Hub</div>
                      <p className="text-gray-400 text-pretty">
                        Click on any service node to explore our comprehensive offerings
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
