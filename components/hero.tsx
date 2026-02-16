'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  isLoaded: boolean
}

export default function Hero({ isLoaded }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const moveX = (x - rect.width / 2) * 0.02
      const moveY = (y - rect.height / 2) * 0.02

      const elements = containerRef.current.querySelectorAll('[data-parallax]')
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax || '1')
        ;(el as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isLoaded
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="space-y-3">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Welcome to Sensory Excellence
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="block">Transform Brands</span>
              <span className="block">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Through Sensation
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
              We create immersive sensory experiences that forge meaningful connections between brands and people. Strategic consultancy meets multisensory innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
              <span>Explore Services</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          data-parallax="0.5"
          className={`relative transition-all duration-1000 ${
            isLoaded
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="relative h-96 md:h-full min-h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-sensory.jpg"
              alt="Y&T Sensory Experience"
              fill
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/30" />
          </div>

          {/* Floating cards */}
          <div className="absolute -bottom-6 -left-6 px-6 py-4 bg-background rounded-xl shadow-xl border border-border backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <p className="text-sm font-semibold text-foreground">Sensory Impact</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              +300%
            </p>
          </div>

          <div className="absolute -top-6 -right-6 px-6 py-4 bg-background rounded-xl shadow-xl border border-border backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <p className="text-sm font-semibold text-foreground">Brand Recall</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              98%
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-foreground/60 font-medium">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-foreground/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
