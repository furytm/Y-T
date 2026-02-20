'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Heart, Globe, Leaf, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center pt-24 md:pt-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/about-hero.jpg)' }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-block px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm mb-6">
                <span className="crimson-text-regular text-sm font-medium text-white">
                  About Y&T Sensory
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white crimson-text-bold mb-6">
                Dedicated to Inclusive Design
              </h1>
              <p className="crimson-text-regular text-lg md:text-xl text-white/90 leading-relaxed">
                Creating inclusive, accessible, and sustainable environments for individuals with sensory, developmental, and physical disabilities. We believe that every space has the power to enhance quality of life.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Who We Are</h2>
              <div className="prose prose-lg max-w-3xl">
                <p className="crimson-text-regular text-lg text-foreground/70 leading-relaxed">
                  Y&T Sensory Rooms is a sensory-focused accessibility and design consultancy dedicated to improving the quality of life for individuals with sensory, developmental, and physical disabilities. We partner with corporate organisations, schools, religious centres, event planners, government agencies, and families to build spaces that promote wellbeing and reduce sensory overload.
                </p>
                <p className="crimson-text-regular text-lg text-foreground/70 leading-relaxed mt-4">
                  Our approach is rooted in human-centred design, evidence-based sensory solutions, sustainability, and global accessibility compliance. We work with occupational therapists, architects, designers, and behaviour specialists to create thoughtful, inclusive environments that support meaningful participation in everyday life.
                </p>
                <p className="crimson-text-regular text-lg text-foreground/70 leading-relaxed mt-4">
                  Whether designing sensory rooms for schools, inclusive architectures for offices, therapeutic spaces for clinics, or accessible public environments, we bring the same commitment to excellence, dignity, and inclusion to every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center crimson-text-bold">
              Mission & Vision
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-in fade-in slide-in-from-left duration-700 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="flex items-start gap-4 mb-4">
                  <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-2xl font-serif font-bold text-foreground crimson-text-bold">Our Mission</h3>
                </div>
                <p className="crimson-text-regular text-foreground/70 leading-relaxed">
                  To improve the quality of life for individuals with disabilities through sensory-friendly design, accessibility innovation, and sustainable architectural solutions.
                </p>
              </div>

              <div className="animate-in fade-in slide-in-from-right duration-700 p-8 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20">
                <div className="flex items-start gap-4 mb-4">
                  <Globe className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <h3 className="text-2xl font-serif font-bold text-foreground crimson-text-bold">Our Vision</h3>
                </div>
                <p className="crimson-text-regular text-foreground/70 leading-relaxed">
                  A society where every space—homes, workplaces, schools, and public environments—is designed with inclusion, dignity, and universal access at its core.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center crimson-text-bold">
              Our Approach
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: 'Human-Centred Design',
                  description: 'We place people at the heart of every decision, designing with empathy and deep user understanding.'
                },
                {
                  icon: CheckCircle,
                  title: 'Evidence-Based Sensory Solutions',
                  description: 'Our designs are grounded in occupational therapy, sensory science, and proven accessibility research.'
                },
                {
                  icon: Leaf,
                  title: 'Sustainable & Eco-Friendly',
                  description: 'We use durable, eco-responsible materials that support long-term wellbeing and environmental care.'
                },
                {
                  icon: Globe,
                  title: 'Global Accessibility Standards',
                  description: 'All solutions meet AODA, ADA, and international accessibility and inclusive design standards.'
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="animate-in fade-in slide-in-from-bottom-8 duration-700 p-8 rounded-xl bg-gradient-to-br from-muted to-muted/50 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
              Our Core Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  value: 'Inclusion First',
                  description: 'Every design decision prioritizes accessibility and meaningful participation for people with diverse abilities.'
                },
                {
                  value: 'Dignity & Respect',
                  description: 'We design spaces where every person feels valued, supported, and empowered to thrive.'
                },
                {
                  value: 'Evidence-Based',
                  description: 'Our solutions are grounded in occupational therapy, sensory science, and lived experience research.'
                },
                {
                  value: 'Collaboration',
                  description: 'We work with users, families, therapists, and specialists to co-design truly responsive spaces.'
                },
                {
                  value: 'Sustainability',
                  description: 'We design for long-term wellbeing and environmental responsibility using eco-friendly, durable materials.'
                },
                {
                  value: 'Real Impact',
                  description: 'We measure success by the quality of life improvements and positive changes we create for our users.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="animate-in fade-in slide-in-from-bottom-8 duration-700 p-8 rounded-xl bg-background/50 border border-border"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    {item.value}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Let's Create an Inclusive Space Together
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Ready to build an accessible, sensory-friendly environment that supports everyone?
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
