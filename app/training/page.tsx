'use client'

import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Users, BookOpen, Shield, Target } from 'lucide-react'

const trainingPrograms = [
  {
    icon: BookOpen,
    title: 'Sensory Awareness Training',
    description: 'Help teams understand sensory processing, neurodiversity, and inclusive support strategies.',
    audience: ['Teachers', 'Caregivers', 'Staff', 'Support Teams'],
  },
  {
    icon: Users,
    title: 'Workplace Inclusion Workshops',
    description: 'Build inclusive cultures through training on disability etiquette, communication strategies, and workplace accommodations.',
    audience: ['HR Teams', 'Managers', 'All Staff', 'Leadership'],
  },
  {
    icon: Shield,
    title: 'Accessibility Policy Development',
    description: 'We help organisations design comprehensive accessibility frameworks, emergency access plans, and workplace accommodation guides.',
    audience: ['Management', 'Policy Makers', 'HR Departments', 'Organizations'],
  },
  {
    icon: Target,
    title: 'Community & Corporate Programs',
    description: 'Tailored training programs for schools, NGOs, government agencies, hotels, retail, and healthcare centres.',
    audience: ['Educational Institutions', 'Healthcare', 'Corporate', 'Community Groups'],
  },
]

export default function Training() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen md:min-h-[60vh] lg:min-h-screen flex items-center justify-start pt-24 md:pt-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/training-hero.jpg)' }}>
          <div className="absolute inset-0 bg-black/30" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-block px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm">
                <span className="crimson-text-regular text-sm font-medium text-white">
                  Training & Awareness
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white crimson-text-bold">
                Building Inclusive Communities
              </h1>
              <p className="crimson-text-regular text-lg md:text-xl text-white/90 leading-relaxed">
                Empower your organization with knowledge and skills to support people with disabilities and sensory needs
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {trainingPrograms.map((program, index) => {
                const Icon = program.icon
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
                      {program.title}
                    </h3>
                    <p className="crimson-text-regular text-foreground/70 mb-6">
                      {program.description}
                    </p>
                    <div className="space-y-2">
                      <p className="crimson-text-bold text-sm font-semibold text-foreground">Ideal for:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.audience.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 md:py-32 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 crimson-text-bold">
                Why Training Matters
              </h2>
              <p className="crimson-text-regular text-lg text-foreground/70 max-w-2xl mx-auto">
                Equip your team with the knowledge and empathy needed to create truly inclusive environments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Improve Understanding',
                  description: 'Build awareness about sensory processing, neurodiversity, and disability experiences'
                },
                {
                  title: 'Create Inclusion',
                  description: 'Develop strategies to make your organization more welcoming and accessible to all'
                },
                {
                  title: 'Support Growth',
                  description: 'Enable employees and community members to thrive through better accommodations'
                },
              ].map((benefit, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-background">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Ready to Build an Inclusive Culture?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Let's design a customized training program for your organization
              </p>
              <button className="group px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
                Schedule Training
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
