"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Target, Award } from "lucide-react"

interface MetricData {
  id: string
  icon: React.ComponentType<{ className?: string }>
  value: number
  suffix: string
  label: string
  color: string
}

const metricsData: MetricData[] = [
  {
    id: "reach",
    icon: TrendingUp,
    value: 500,
    suffix: "M+",
    label: "Total Views and Impressions",
    color: "from-white to-gray-300",
  },
  {
    id: "followers",
    icon: Users,
    value: 100,
    suffix: "K+",
    label: "Followers Generated",
    color: "from-white to-gray-300",
  },
  {
    id: "campaigns",
    icon: Target,
    value: 50,
    suffix: "+",
    label: "Campaigns Launched",
    color: "from-white to-gray-300",
  },
  {
    id: "monitoring",
    icon: Award,
    value: 24,
    suffix: "/7",
    label: "Algorithm Monitoring",
    color: "from-white to-gray-300",
  },
]

function AnimatedCounter({
  value,
  suffix,
  duration = 2000,
}: {
  value: number
  suffix: string
  duration?: number
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = startValue + (value - startValue) * easeOutQuart

      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate)
    }, 200) // Small delay for better UX

    return () => clearTimeout(timeoutId)
  }, [isVisible, value, duration])

  const formatValue = (val: number) => {
    return Math.floor(val).toString()
  }

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold">
      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {formatValue(displayValue)}
        {suffix}
      </span>
    </div>
  )
}

export default function LiveMetricsTicker() {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null)

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-white animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-white animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            Proven Results That <span className="italic animate-pulse">Speak</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Real metrics from real clients. These numbers represent the transformative power of The Griff Method.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metricsData.map((metric, index) => {
            const IconComponent = metric.icon
            const isHovered = hoveredMetric === metric.id

            return (
              <Card
                key={metric.id}
                className={`relative group cursor-pointer transition-all duration-500 backdrop-blur-sm bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/40 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 ${
                  isHovered ? "bg-white/15 border-white/50 scale-105 shadow-2xl shadow-white/30" : ""
                }`}
                onMouseEnter={() => setHoveredMetric(metric.id)}
                onMouseLeave={() => setHoveredMetric(null)}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                    isHovered ? "bg-white/10 animate-pulse" : ""
                  }`}
                ></div>

                <CardContent className="p-6 text-center relative z-10">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
                        isHovered ? "scale-110 shadow-lg shadow-white/30" : ""
                      }`}
                    >
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      duration={2000 + index * 300} // Stagger animation timing
                    />
                  </div>

                  <p className="text-white/80 font-medium text-sm md:text-base text-balance">{metric.label}</p>
                </CardContent>

                <div className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm font-medium">Updated monthly with real client data</span>
          </div>
        </div>
      </div>
    </section>
  )
}
