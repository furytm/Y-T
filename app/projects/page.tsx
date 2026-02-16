'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Clock, Lightbulb, Target, Award } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-background to-muted/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance mb-6">
                Our Projects
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
                Explore our latest case studies showcasing transformative sensory and design solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Sensory Room Case Study */}
        <section className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Image */}
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 rounded-2xl overflow-hidden mb-16 h-96 md:h-[500px] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
              <Lightbulb className="w-32 h-32 text-primary/30" />
            </div>

            {/* Case Study Content */}
            <div className="grid lg:grid-cols-3 gap-12 mb-20">
              {/* Main Content */}
              <div className="lg:col-span-2 animate-in fade-in slide-in-from-left duration-700">
                <div className="mb-8">
                  <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wide">Case Study</p>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                    Sensory Room
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                    The Foreshore School
                  </p>
                </div>

                {/* Overview */}
                <div className="mb-12">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Overview</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    We designed and created a functional sensory room to accommodate special education at The Foreshore School, employing unique finishing and strategies in a harmonized manner to engage users while invoking a sense of beauty.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    The space was thoughtfully designed to stimulate multiple senses through carefully selected finishes, colors, textures, and interactive elements.
                  </p>
                </div>

                {/* Challenge */}
                <div className="mb-12">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Challenge</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Create a functional, sensory-rich environment that supports special education needs while maintaining aesthetic excellence and promoting student engagement through multi-sensory stimulation.
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-12">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Design Solution</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Interactive Surfaces & Materials</h4>
                      <ul className="space-y-2 text-foreground/70">
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span><strong>LEGO Walls:</strong> Tactile building surfaces for interactive play and engagement</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span><strong>Padded Walls:</strong> Soft, cushioned surfaces providing comfort and safety</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span><strong>Tactile Boards:</strong> Various textured surfaces for sensory exploration</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span><strong>Foam Pit:</strong> Safe, cushioned play area for movement exploration</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span><strong>Gel Floors:</strong> Responsive, sensory-stimulating floor surfaces</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Visual Elements</h4>
                      <ul className="space-y-2 text-foreground/70">
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span><strong>Colorful Floors:</strong> Vibrant, engaging floor designs</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span><strong>Murals:</strong> Inspiring artwork throughout the space</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span><strong>Mirrors:</strong> Visual feedback and spatial expansion</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Lighting */}
                <div className="mb-12">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Lighting Strategy</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    A comprehensive lighting system was integrated to create versatile mood settings and sensory experiences:
                  </p>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>General Mood Lighting:</strong> Adjustable ambient illumination</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>LED Spotlights:</strong> 100mm diameter medium-sized units for focused illumination</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Cylindrical Mood Lighting:</strong> Specialized fixtures for creating atmospheric effects</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Recessed Ceiling Elements:</strong> Flexible spotlights for dynamic lighting adjustments</span>
                    </li>
                  </ul>
                </div>

                {/* Space Features */}
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Space Features</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    The room layout was carefully planned to maximize functionality and sensory engagement:
                  </p>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Flat POP ceiling design with integrated lighting systems</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Hammock installation with ceiling hangers for suspended play</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Organized storage solutions maintaining visual harmony</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Flexible furniture and equipment arrangement</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Side Stats */}
              <div className="animate-in fade-in slide-in-from-right duration-700">
                <div className="sticky top-32 space-y-6">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-start gap-4">
                      <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-foreground/70 mb-1">Project Type</p>
                        <p className="font-semibold text-foreground">Sensory Space Design</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-start gap-4">
                      <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-foreground/70 mb-1">Timeline</p>
                        <p className="font-semibold text-foreground">4-8 Weeks Execution</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-start gap-4">
                      <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-foreground/70 mb-1">Budget Range</p>
                        <p className="font-semibold text-foreground">₦20M - ₦25M</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                    <div>
                      <p className="text-sm font-medium text-foreground/70 mb-3">Client</p>
                      <p className="font-semibold text-foreground mb-4">The Foreshore School</p>
                      <p className="text-sm text-foreground/70">
                        5 Primrose Street, Northern Foreshore Estate, Off Chevron Drive, Lekki, Lagos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-20" />

            {/* Impact */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="animate-in fade-in slide-in-from-left duration-700">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Impact & Results</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  The completed sensory room provides The Foreshore School with a dedicated space that supports special education through:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground/80"><strong>Enhanced Learning:</strong> Multi-sensory engagement promoting better educational outcomes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground/80"><strong>Safe Environment:</strong> Thoughtfully designed with student safety and comfort as priorities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground/80"><strong>Aesthetic Excellence:</strong> Beautiful design that inspires and motivates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground/80"><strong>Flexible Use:</strong> Dynamic lighting and modular design for varied activities</span>
                  </li>
                </ul>
              </div>

              <div className="animate-in fade-in slide-in-from-right duration-700">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Key Deliverables</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 border border-border">
                    <p className="font-semibold text-foreground mb-2">Space Planning</p>
                    <p className="text-sm text-foreground/70">Complete floor layout with strategic positioning of all elements</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 border border-border">
                    <p className="font-semibold text-foreground mb-2">Material Specifications</p>
                    <p className="text-sm text-foreground/70">Detailed selection of all finishes, textures, and materials</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 border border-border">
                    <p className="font-semibold text-foreground mb-2">Lighting Design</p>
                    <p className="text-sm text-foreground/70">Comprehensive mood lighting system with multiple setting options</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 border border-border">
                    <p className="font-semibold text-foreground mb-2">Color & Visual Strategy</p>
                    <p className="text-sm text-foreground/70">Coordinated color palette and artistic elements throughout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Interested in Creating Your Sensory Space?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Let's discuss your project and design goals.
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
