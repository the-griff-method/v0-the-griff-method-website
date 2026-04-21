"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MagneticButton from "./magnetic-button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Increased navigation height from h-16 to h-24 to accommodate much larger logo */}
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/">
              {/* Made logo much much larger - increased width from 160 to 320, height from 53 to 107, and className from h-12 to h-20 */}
              <Image
                src="/images/griff-logo.png"
                alt="The Griff Method"
                width={320}
                height={107}
                className="h-20 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <a
                href="/#home"
                className="text-foreground hover:text-muted-foreground transition-all duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link
                href="/packages"
                className="text-foreground hover:text-muted-foreground transition-all duration-300 relative group"
              >
                Packages
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-muted-foreground transition-all duration-300 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/case-studies"
                className="text-foreground hover:text-muted-foreground transition-all duration-300 relative group"
              >
                Case Studies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/portfolio"
                className="text-foreground hover:text-muted-foreground transition-all duration-300 relative group"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-muted-foreground transition-all duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-muted-foreground transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <MagneticButton
              href="/contact"
              variant="outline"
              className="bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300"
            >
              Get Started
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
          <a
            href="/#home"
            className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-all duration-300 hover:translate-x-2"
          >
            Home
          </a>
          <Link
            href="/packages"
            className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-all duration-300 hover:translate-x-2"
          >
            Packages
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-all duration-300 hover:translate-x-2"
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-all duration-300 hover:translate-x-2"
          >
            Case Studies
          </Link>
          <Link
            href="/portfolio"
            className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-all duration-300 hover:translate-x-2"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-all duration-300 hover:translate-x-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-all duration-300 hover:translate-x-2"
          >
            Contact
          </Link>
          <div className="px-3 py-2">
            <MagneticButton
              href="/contact"
              variant="outline"
              className="w-full bg-white text-black hover:bg-muted-foreground hover:text-white transition-all duration-300"
            >
              Get Started
            </MagneticButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
