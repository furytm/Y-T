'use client'

import { useEffect, useRef, useState } from 'react'
import { Lightbulb, Users, Zap, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Assess',
    description: 'We understand your needs, space constraints, user profiles, and accessibility requirements through detailed consultation and site analysis.',
    icon: Lightbulb,
    color: 'bg-primary',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team creates human-centred designs with evidence-based sensory solutions, considering lighting, materials, textures, and spatial layout.',
    icon: Users,
    color: 'bg-accent',
  },
  {
    number: '03',
    title: 'Implement',
    description: 'We source sustainable materials, install systems (lighting, audio, textures), and ensure AODA and global accessibility compliance.',
    icon: Zap,
    color: 'bg-secondary',
  },
  {
    number: '04',
    title: 'Support',
    description: 'Post-launch training for staff, ongoing consultation, and adjustments ensure the space continues to support user wellbeing.',
    icon: Rocket,
    color: 'bg-primary',
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

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
    <section id="process" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 opacity-0 animate-in fade-in duration-1000">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="crimson-text-regular text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Process
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground crimson-text-bold">
            Our Design Process
          </h2>
          <p className="crimson-text-regular text-lg text-foreground/60 max-w-2xl mx-auto">
            From assessment to ongoing support, we create inclusive spaces that truly serve your users
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated line connector */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-30" />

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = activeStep === index

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group relative opacity-0 animate-in fade-in duration-700 ${
                    isActive ? 'scale-105' : 'scale-100'
                  } transition-transform duration-300 cursor-pointer`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card */}
                  <div
                    className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-primary/20 to-secondary/10 border-primary'
                        : 'bg-background border-border hover:border-primary/50'
                    }`}
                  >
                    {/* Number */}
                    <div className={`text-5xl font-bold mb-4 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
                        : 'text-foreground/20'
                    } transition-all duration-300`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`p-3 rounded-xl w-fit mb-4 transition-all duration-300 ${
                      isActive
                        ? `${step.color} text-white`
                        : 'bg-muted text-foreground/40'
                    }`}>
                      <Icon size={24} />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed transition-all duration-300 ${
                      isActive
                        ? 'text-foreground/80'
                        : 'text-foreground/60'
                    }`}>
                      {step.description}
                    </p>

                    {/* Hover indicator */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  </div>

                  {/* Connector dot on desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center opacity-0 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
          <p className="text-lg text-foreground/60 mb-6">
            Ready to create an inclusive, sensory-friendly space?
          </p>
          <button className="group px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white crimson-text-bold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
            <span>Book a Consultation</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
