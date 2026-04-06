"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  strength?: number
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  size = "default",
  variant = "default",
  strength = 0.3,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength

    buttonRef.current.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${isHovered ? 1.05 : 1})`
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (buttonRef.current) {
      buttonRef.current.style.transition = "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (buttonRef.current) {
      buttonRef.current.style.transform = "translate3d(0, 0, 0) scale(1)"
      buttonRef.current.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    }
  }

  if (href) {
    return (
      <a href={href}>
        <Button
          ref={buttonRef}
          className={`${className} will-change-transform`}
          size={size}
          variant={variant}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ willChange: "transform" }}
        >
          {children}
        </Button>
      </a>
    )
  }

  return (
    <Button
      ref={buttonRef}
      className={`${className} will-change-transform`}
      size={size}
      variant={variant}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: "transform" }}
    >
      {children}
    </Button>
  )
}
