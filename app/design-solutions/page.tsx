'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Building2, Leaf, Accessibility, Lightbulb } from 'lucide-react'
import Image from 'next/image'

const designServices = [
  {
    icon: Building2,
    title: 'Inclusive Architectural Design',
    description: 'We design buildings and spaces that support universal access, mobility needs, visual and auditory comfort, and sensory-friendly layouts for all users.',
    features: ['Universal Access', 'Mobility Support', 'Sensory-Safe Design', 'Safety & Navigation']
  },
  {
    icon: Accessibility,
    title: 'Universal Design Assessments',
    description: 'Comprehensive accessibility audits of existing structures with detailed gap analysis and compliance guidance for global accessibility standards.',
    features: ['Accessibility Audits', 'Compliance Reports', 'Improvement Plans', 'Upgrade Recommendations']
  },
  {
    icon: Leaf,
    title: 'Sustainable Design',
    description: 'Eco-friendly architectural solutions incorporating natural lighting, energy-efficient systems, and sustainable materials throughout.',
    features: ['Natural Lighting', 'Energy Efficiency', 'Eco-Materials', 'Green Spaces']
  },
  {
    icon: Lightbulb,
    title: 'Renovation & Retrofitting',
    description: 'Transform existing structures into accessible environments with adaptive solutions like ramps, lifts, accessible restrooms, and sensory-safe corridors.',
    features: ['Adaptive Ramps & Lifts', 'Accessible Restrooms', 'Wide-Door Access', 'Sensory Corridors']
  }
]

export default function DesignSolutions() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen md:min-h-[60vh] lg:min-h-screen flex items-center justify-start pt-24 md:pt-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/hero-design-solutions.jpg)' }}>
          <div className="absolute inset-0 bg-black/30" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-block px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm">
                <span className="crimson-text-regular text-sm font-medium text-white">
                  Design Solutions
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white crimson-text-bold">
                Inclusive Architectural Design
              </h1>
              <p className="crimson-text-regular text-lg md:text-xl text-white/90 leading-relaxed">
                We transform spaces into inclusive environments that support diverse needs through sustainable, accessible design solutions
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {designServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group p-8 rounded-2xl border border-border hover:border-primary/50 bg-muted/30 hover:bg-primary/5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-secondary/70 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3 crimson-text-bold">
                      {service.title}
                    </h3>
                    <p className="crimson-text-regular text-foreground/70 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-foreground/80">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                          <span className="crimson-text-regular">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Design Specifications */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 crimson-text-bold">
                Real-World Design Examples
              </h2>
              <p className="crimson-text-regular text-lg text-foreground/70 max-w-2xl mx-auto">
                Technical layouts and specifications from our award-winning sensory room projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Floor Layout */}
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-96 md:h-full min-h-[400px] bg-muted overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0vyRYykFadg8ovNp62kr46itUHoZDV.png"
                    alt="Sensory Room Floor Layout"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-background border-t border-border">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3 crimson-text-bold">
                    Space Planning & Layout
                  </h3>
                  <p className="crimson-text-regular text-foreground/70">
                    Comprehensive floor plans showing optimal positioning of sensory stations, safety zones, and interactive elements for maximum engagement and accessibility.
                  </p>
                </div>
              </div>

              {/* Ceiling & Lighting Design */}
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-96 md:h-full min-h-[400px] bg-muted overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WH6v6xbtW6rVravoSB0OZJJKytBJRn.png"
                    alt="Ceiling and Lighting Design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-background border-t border-border">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3 crimson-text-bold">
                    Lighting & Ceiling Systems
                  </h3>
                  <p className="crimson-text-regular text-foreground/70">
                    Advanced lighting specifications including cylindrical mood lights, recessed LED spotlights, and flexible ceiling designs for creating multiple ambiance settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground crimson-text-bold">
                Ready to Transform Your Space?
              </h2>
              <p className="crimson-text-regular text-lg text-foreground/70 max-w-2xl mx-auto">
                Let's discuss how we can help you create an inclusive, accessible environment for your organization
              </p>
              <button className="group px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
                Book a Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
