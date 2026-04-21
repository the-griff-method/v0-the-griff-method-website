"use client"

import React from "react"

import type { ReactNode } from "react"

import { useEffect, useRef, useState } from "react"

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
  childClassName?: string
}

export default function StaggerContainer({ children, staggerDelay = 100, className = "", childClassName = "" }: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={childClassName}
          style={{
            transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
            opacity: isVisible ? 1 : 0,
            transition: `all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            transitionDelay: `${index * staggerDelay}ms`,
            willChange: "transform, opacity",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
