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
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-background to-muted/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance mb-6">
                About Y&T Sensory
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
                Transforming brands and spaces through innovative sensory experiences and human-centered design.
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
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Y&T Sensory is a boutique consultancy specializing in transforming brands and spaces through immersive sensory experiences. We believe that meaningful design goes beyond aesthetics—it engages all senses and creates lasting emotional connections.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed mt-4">
                  Our approach combines strategic thinking, creative excellence, and deep research to develop solutions that resonate with audiences on multiple levels. We work with forward-thinking organizations that understand the power of sensory-driven design.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed mt-4">
                  Whether designing brand experiences, special education spaces, or commercial environments, we bring the same commitment to excellence and attention to detail to every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
              Mission & Vision
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-in fade-in slide-in-from-left duration-700 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="flex items-start gap-4 mb-4">
                  <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-2xl font-serif font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  To create transformative sensory experiences that strengthen human connections and enhance brand perception through thoughtfully designed environments and strategic sensory innovation.
                </p>
              </div>

              <div className="animate-in fade-in slide-in-from-right duration-700 p-8 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20">
                <div className="flex items-start gap-4 mb-4">
                  <Globe className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <h3 className="text-2xl font-serif font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  To be the leading consultancy in sensory-driven design, recognized globally for pioneering innovative approaches that make spaces and brands more human-centered, inclusive, and memorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
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
                  title: 'Evidence-Based Solutions',
                  description: 'Our designs are grounded in research, testing, and proven sensory science principles.'
                },
                {
                  icon: Leaf,
                  title: 'Sustainable Materials',
                  description: 'We prioritize eco-friendly, high-quality materials that are both beautiful and responsible.'
                },
                {
                  icon: Globe,
                  title: 'Global Compliance',
                  description: 'All solutions meet international standards for accessibility, safety, and design excellence.'
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
                  value: 'Excellence',
                  description: 'We are committed to the highest standards in every aspect of our work, from initial concept to final execution.'
                },
                {
                  value: 'Innovation',
                  description: 'We continuously explore new approaches, materials, and technologies to push the boundaries of sensory design.'
                },
                {
                  value: 'Integrity',
                  description: 'We operate with transparency, honesty, and a deep commitment to ethical design practices.'
                },
                {
                  value: 'Collaboration',
                  description: 'We believe the best solutions emerge from partnership, listening, and co-creation with our clients.'
                },
                {
                  value: 'Inclusivity',
                  description: 'We design for everyone, ensuring our solutions are accessible and meaningful for diverse user groups.'
                },
                {
                  value: 'Impact',
                  description: 'We measure success not just by aesthetics, but by the real, positive impact our designs have on people\'s lives.'
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
              Let's Create Something Remarkable Together
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Ready to transform your brand or space through sensory experience design?
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
