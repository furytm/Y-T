'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Luxury Retail Experience',
    category: 'Retail Design',
    image: '/images/sensory-touch.jpg',
    description: 'Created immersive in-store sensory experience',
  },
  {
    id: 2,
    title: 'Audio Brand Identity',
    category: 'Sound Design',
    image: '/images/sound-waves.jpg',
    description: 'Developed signature sonic branding',
  },
  {
    id: 3,
    title: 'Premium Hospitality',
    category: 'Experience Design',
    image: '/images/visual-harmony.jpg',
    description: 'Holistic sensory environment design',
  },
  {
    id: 4,
    title: 'Digital Experience',
    category: 'Tech Integration',
    image: '/images/brand-connection.jpg',
    description: 'Multisensory digital touchpoints',
  },
]

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
    <section id="portfolio" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 opacity-0 animate-in fade-in duration-1000">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Featured Works
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore our collection of transformative sensory brand experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer opacity-0 animate-in fade-in duration-700 ${
                hoveredId === project.id ? 'md:scale-105' : ''
              } transition-transform duration-300`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top badge */}
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Hover overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16 opacity-0 animate-in fade-in slide-in-from-bottom duration-700 delay-600">
          <button className="group px-10 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
            <span>View All Projects</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
    </section>
  )
}
