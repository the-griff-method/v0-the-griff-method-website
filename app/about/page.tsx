"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Meet Griff</h1>
            
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="w-full aspect-square rounded-2xl bg-white/10 flex items-center justify-center">
                <div className="text-white/50 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-2xl font-bold">G</span>
                  </div>
                  <p className="text-sm">Photo Coming Soon</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-white/10 to-transparent rounded-2xl p-6 border-l-4 border-white">
                  <h2 className="text-2xl font-bold text-white mb-4">The Journey Begins</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    After graduating from Miami University with a degree in marketing and entrepreneurship, Griff
                    stepped into the fast-paced world of social media marketing.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-white/10 to-transparent rounded-2xl p-6 border-l-4 border-white">
                  <h2 className="text-2xl font-bold text-white mb-4">The Breakthrough</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Leading the social media strategy for a{" "}
                    <span className="text-white font-semibold">$56 million tattoo skincare brand</span>, Griff mastered
                    the ins and outs of social media marketing and developed his signature approach.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-white/10 to-transparent rounded-2xl p-6 border-l-4 border-white">
                  <h2 className="text-2xl font-bold text-white mb-4">The Method is Born</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Through trial, testing, and tremendous results,{" "}
                    <span className="text-white font-semibold">The Griff Method</span> was born - a proven system for
                    social media success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Brand?</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Griff now brings his expertise to brands and companies ready to revolutionize their digital presence
                with proven social media marketing strategies.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors"
              >
                <span>Let's work together</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What is The Griff Method?</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                A data-driven approach that combines creative storytelling with strategic growth tactics
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Data-Driven</h3>
                <p className="text-white/70">Every decision backed by analytics and proven performance metrics</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Strategic</h3>
                <p className="text-white/70">Targeted growth tactics designed for maximum impact and engagement</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Creative</h3>
                <p className="text-white/70">Compelling storytelling that connects with audiences and drives results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
