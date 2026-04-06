"use client"

import { useRef, useEffect, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
}

interface Connection {
  particle1: Particle
  particle2: Particle
  opacity: number
}

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setIsMobile(window.innerWidth < 768)
    }

    updateCanvasSize()

    let particles: Particle[] = []
    let connections: Connection[] = []

    function createParticles() {
      particles = []
      const particleCount = isMobile ? 30 : 60

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          life: Math.random() * 300 + 100,
          maxLife: 400,
        })
      }
    }

    function updateParticles() {
      const { x: mouseX, y: mouseY } = mousePositionRef.current
      const mouseInfluence = 100

      particles.forEach((particle) => {
        // Mouse attraction effect
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseInfluence && mouseX > 0 && mouseY > 0) {
          const force = ((mouseInfluence - distance) / mouseInfluence) * 0.02
          particle.vx += dx * force * 0.001
          particle.vy += dy * force * 0.001
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary collision
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Update life and opacity
        particle.life--
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = particle.maxLife
        }

        // Fade effect based on life
        particle.opacity = Math.min(0.8, (particle.life / particle.maxLife) * 0.6 + 0.2)
      })
    }

    function updateConnections() {
      connections = []
      const maxDistance = isMobile ? 80 : 120

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3
            connections.push({
              particle1: particles[i],
              particle2: particles[j],
              opacity,
            })
          }
        }
      }
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      connections.forEach((connection) => {
        ctx.beginPath()
        ctx.moveTo(connection.particle1.x, connection.particle1.y)
        ctx.lineTo(connection.particle2.x, connection.particle2.y)
        ctx.strokeStyle = `rgba(255, 255, 255, ${connection.opacity})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

        // Subtle glow effect
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`)
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${particle.opacity * 0.3})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.fill()

        // Core particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.8})`
        ctx.fill()
      })
    }

    let animationFrameId: number

    function animate() {
      updateParticles()
      updateConnections()
      render()
      animationFrameId = requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    const handleResize = () => {
      updateCanvasSize()
      createParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    const handleMouseLeave = () => {
      mousePositionRef.current = { x: 0, y: 0 }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  )
}
