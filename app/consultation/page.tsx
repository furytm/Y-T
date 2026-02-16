'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to a server
    alert('Thank you for your inquiry! We will be in touch soon.')
    setFormData({ name: '', organisation: '', email: '', phone: '', projectType: '', message: '' })
  }

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-background to-muted/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance mb-6">
                Book a Consultation
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
                Let's discuss your vision and explore how our sensory design expertise can bring your project to life.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Form */}
              <div className="animate-in fade-in slide-in-from-left duration-700">
                <div className="bg-gradient-to-br from-background to-muted/50 rounded-2xl border border-border p-8 md:p-10">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                    Tell Us About Your Project
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="organisation" className="block text-sm font-medium text-foreground mb-2">
                        Organisation / Company
                      </label>
                      <input
                        type="text"
                        id="organisation"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                        placeholder="Your organisation"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                        placeholder="+234 800 000 0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                      >
                        <option value="">Select a project type</option>
                        <option value="brand-development">Brand Development & Strategy</option>
                        <option value="sensory-experience">Sensory Experience Design</option>
                        <option value="space-design">Interior & Space Design</option>
                        <option value="consulting">Design Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                        placeholder="Tell us about your project, vision, and goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
                    >
                      Schedule Consultation
                    </button>
                  </form>

                  <p className="text-sm text-foreground/60 mt-6 text-center">
                    We typically respond within 24 business hours.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="animate-in fade-in slide-in-from-right duration-700">
                <div className="space-y-6 h-full flex flex-col justify-center">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                      Get In Touch
                    </h3>

                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-medium text-foreground/70 mb-1">Phone</p>
                          <a href="tel:+234 803 312 0248" className="text-foreground font-medium hover:text-primary transition-colors">
                            +234 803 312 0248
                          </a>
                          <br />
                          <a href="tel:+234 816 334 1762" className="text-foreground font-medium hover:text-primary transition-colors">
                            +234 816 334 1762
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-medium text-foreground/70 mb-1">Email</p>
                          <a href="mailto:enada@yandtdesgns.com" className="text-foreground font-medium hover:text-primary transition-colors block">
                            enada@yandtdesgns.com
                          </a>
                          <a href="mailto:bukky@yandtdesigns.com" className="text-foreground font-medium hover:text-primary transition-colors block">
                            bukky@yandtdesigns.com
                          </a>
                          <a href="mailto:info@yandtdesigns.com" className="text-foreground font-medium hover:text-primary transition-colors block">
                            info@yandtdesigns.com
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-medium text-foreground/70 mb-1">Address</p>
                          <p className="text-foreground font-medium">
                            5 Primrose Street
                            <br />
                            Northern Foreshore Estate
                            <br />
                            Off Chevron Drive
                            <br />
                            Lekki, Lagos
                            <br />
                            Nigeria
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4 border-t border-primary/20">
                        <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-medium text-foreground/70 mb-1">Response Time</p>
                          <p className="text-foreground font-medium">
                            Within 24 business hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 border border-secondary/20">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-4">
                      Preferred Communication
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      WhatsApp for quick inquiries and discussions. Email for detailed project information and proposals.
                    </p>
                    <a
                      href="https://wa.me/2348033120248"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
