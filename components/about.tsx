'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Multisensory Brand Strategy',
  'Premium Experience Design',
  'Emotional Engagement Focus',
  'Data-Driven Innovation',
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative opacity-0 animate-in fade-in slide-in-from-left duration-1000 delay-200">
            <div className="relative h-96 md:h-full min-h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/consultation.jpg"
                alt="Y&T Sensory Team"
                fill
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/20" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 px-6 py-4 bg-background rounded-xl shadow-2xl border border-border backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <p className="text-xs font-semibold text-foreground/60 mb-1">Since</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                2018
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 opacity-0 animate-in fade-in slide-in-from-right duration-1000 delay-400">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  About Y&T Sensory
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Redefining Brand
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Connection
                </span>
              </h2>

              <p className="text-lg text-foreground/70 leading-relaxed">
                We believe that the most powerful brands engage all the senses. Founded on the principle that authentic human connections drive business success, Y&T Sensory pioneers immersive brand experiences that transcend traditional marketing.
              </p>

              <p className="text-lg text-foreground/70 leading-relaxed">
                Our multidisciplinary team of sensory designers, strategists, and creatives work with visionary brands to craft experiences that resonate on a deeper level.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="flex items-center space-x-3 opacity-0 animate-in fade-in slide-in-from-left duration-500"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-20 blur" />
                    <div className="relative bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                  </div>
                  <span className="text-base font-medium text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <button className="group px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
              Discover Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
    </section>
  )
}
