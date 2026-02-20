'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Human-Centred Design',
  'Evidence-Based Sensory Solutions',
  'Sustainable & Eco-Friendly Materials',
  'Global Accessibility Compliance',
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
    <section id="about" ref={ref} className="py-20 md:py-32 min-h-screen md:min-h-[60vh] lg:min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative opacity-0 animate-in fade-in slide-in-from-left duration-1000 delay-200">
            <div className="relative h-96 md:h-full min-h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/consultation.jpg"
                alt="Y&T Sensory Team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/20" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 px-6 py-4 bg-background rounded-xl shadow-2xl border border-border backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <p className="crimson-text-regular text-xs font-semibold text-foreground/60 mb-1">Since</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent crimson-text-bold">
                2018
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 opacity-0 animate-in fade-in slide-in-from-right duration-1000 delay-400">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                <span className="crimson-text-regular text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  About Y&T Sensory
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground crimson-text-bold">
                Redefining Brand
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Connection
                </span>
              </h2>

              <p className="crimson-text-regular text-lg text-foreground/70 leading-relaxed">
                Y&T Sensory Rooms is a sensory-focused accessibility and design consultancy dedicated to creating inclusive, accessible, and sustainable environments for individuals with sensory, developmental, and physical disabilities. We improve the quality of life through sensory-friendly design, accessibility innovation, and sustainable architectural solutions.
              </p>

              <p className="crimson-text-regular text-lg text-foreground/70 leading-relaxed">
                We partner with corporate organisations, schools, religious centres, event planners, government agencies, and families to build spaces that promote wellbeing, reduce sensory overload, and support meaningful participation in everyday life.
              </p>

              <p className="text-lg text-foreground/70 leading-relaxed">
                We partner with corporate organisations, schools, religious centres, event planners, government agencies, and families to build spaces that promote wellbeing, reduce sensory overload, and support meaningful participation in everyday life.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${400 + index * 100}ms` }}>
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="crimson-text-regular text-foreground/90 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>

            <button className="group px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white crimson-text-bold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
              Learn About Our Mission
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
