'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Eye, Ear, Hand, Heart } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Sensory Room Design',
    description: 'Custom-designed calming and therapeutic sensory rooms for schools, homes, clinics, and therapy centres with personalized lighting, sound control, and textures.',
    icon: Eye,
    image: '/images/visual-harmony.jpg',
    color: 'from-primary',
  },
  {
    id: 2,
    title: 'Inclusive Architecture',
    description: 'Universal design assessments and architectural renovations supporting accessibility, mobility needs, and sensory-friendly layouts.',
    icon: Hand,
    image: '/images/sensory-touch.jpg',
    color: 'from-accent',
  },
  {
    id: 3,
    title: 'Workplace Accessibility',
    description: 'Transforming office environments with quiet rooms, sensory-safe meeting spaces, and adaptive lighting for neurodiverse employees.',
    icon: Heart,
    image: '/images/brand-connection.jpg',
    color: 'from-secondary',
  },
  {
    id: 4,
    title: 'Assistive Technology',
    description: 'Integration of smart adaptive lighting, sensory-trigger systems, and interactive panels that enhance accessibility and independence.',
    icon: Ear,
    image: '/images/sound-waves.jpg',
    color: 'from-primary',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt((entry.target as HTMLElement).dataset.id || '0')
            setVisibleCards((prev) => [...new Set([...prev, id])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = document.querySelectorAll('[data-service-card]')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="crimson-text-regular text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground crimson-text-bold">
            Accessibility & Sensory Solutions
          </h2>
          <p className="crimson-text-regular text-lg text-foreground/60 max-w-2xl mx-auto">
            We create inclusive environments designed with human-centered design, evidence-based sensory solutions, and global accessibility standards
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(service.id)

            return (
              <div
                key={service.id}
                data-service-card
                data-id={service.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-96 p-8 flex flex-col justify-between">
                  <div>
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} to-secondary/70 text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-white/90 text-base mb-6 group-hover:text-white transition-colors">
                      {service.description}
                    </p>
                    <button className="inline-flex items-center space-x-2 text-white font-medium group/btn hover:translate-x-1 transition-transform duration-300">
                      <span>Explore</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
    </section>
  )
}
