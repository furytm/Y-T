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
      className="relative min-h-screen md:min-h-[60vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/hero-home-bg.jpg)' }}
    >
      {/* Background overlay with subtle blur for text visibility */}
      <div className="absolute inset-0 bg-black/15 -z-10" />
      <div className="absolute inset-0 backdrop-blur-sm -z-10" style={{ opacity: 0.05 }} />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Left Content */}
        <div
          className={`max-w-2xl space-y-6 transition-all duration-1000 ${
            isLoaded
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="space-y-3">
            <div className="inline-block px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm">
              <span className="crimson-text-regular text-sm text-white">
                Creating Sensory-Friendly Spaces
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Inclusive</span>
              <span className="block">
                Y&T Sensory Rooms
              </span>
            </h1>

            <p className="crimson-text-regular text-lg md:text-xl text-white/90 leading-relaxed">
              Y&T Sensory Rooms is dedicated to creating inclusive, accessible, and sustainable environments for individuals with sensory, developmental, and physical disabilities. We design spaces that promote wellbeing, reduce sensory overload, and support meaningful participation in everyday life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white crimson-text-bold flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
              <span>Book Consultation</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-white text-white crimson-text-bold hover:bg-white/10 transition-all duration-300">
              Explore Services
            </button>
          </div>
        </div>
      </div>


    </section>
  )
}
