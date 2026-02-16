'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, Lightbulb, Palette, Home, Layers } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: 'Brand Development & Strategy',
      description: 'Crafting compelling brand identities that resonate with your audience through thoughtful design and strategic positioning.',
      features: [
        'Brand identity design',
        'Market positioning',
        'Visual language systems',
        'Brand guidelines'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Sensory Experience Design',
      description: 'Creating immersive experiences that engage multiple senses, building deeper connections between brands and their users.',
      features: [
        'Sensory mapping',
        'Experience prototyping',
        'Multi-sensory environments',
        'User research & testing'
      ]
    },
    {
      icon: Home,
      title: 'Interior & Space Design',
      description: 'Designing functional, beautiful spaces that enhance human wellbeing and support special needs environments.',
      features: [
        'Space planning',
        'Lighting design',
        'Material selection',
        'Accessibility compliance'
      ]
    },
    {
      icon: Layers,
      title: 'Design Consulting',
      description: 'Expert guidance on design strategy, implementation, and optimization to bring your vision to life.',
      features: [
        'Project consultation',
        'Design strategy',
        'Implementation support',
        'Quality assurance'
      ]
    }
  ]

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-background to-muted/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance mb-6">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
                Comprehensive design solutions that transform brands and spaces through innovative sensory experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 md:space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                      {/* Content */}
                      <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                            {service.title}
                          </h2>
                        </div>
                        
                        <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mb-8 space-y-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-foreground/80">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <button className="w-fit px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
                          Enquire About This Service
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      {/* Image Placeholder */}
                      <div className={`relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent opacity-50" />
                        <Icon className="w-24 h-24 text-primary/30" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Let's discuss how our services can help achieve your design goals.
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
