'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative min-h-screen md:min-h-[60vh] lg:min-h-screen flex items-center justify-start pt-24 md:pt-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/contact-hero.jpg)' }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-block px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm mb-6">
                <span className="crimson-text-regular text-sm font-medium text-white">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white crimson-text-bold mb-6">
                Let's Start a Conversation
              </h1>
              <p className="crimson-text-regular text-lg md:text-xl text-white/90 leading-relaxed">
                Have a question or project in mind? We'd love to hear from you. Reach out and let's discuss how we can help create an inclusive, sensory-friendly space for your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Contact Info Cards */}
              <div className="animate-in fade-in slide-in-from-left-8 duration-700 lg:col-span-1">
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-gradient-to-br from-muted to-muted/50 rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300" style={{ animationDelay: '100ms' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="crimson-text-bold text-foreground mb-2">Phone</h3>
                        <a href="tel:+234 803 312 0248" className="crimson-text-regular text-foreground/70 hover:text-primary transition-colors block">
                          +234 803 312 0248
                        </a>
                        <a href="tel:+234 816 334 1762" className="crimson-text-regular text-foreground/70 hover:text-primary transition-colors block">
                          +234 816 334 1762
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-gradient-to-br from-muted to-muted/50 rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300" style={{ animationDelay: '200ms' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="crimson-text-bold text-foreground mb-2">Email</h3>
                        <a href="mailto:enada@yandtdesgns.com" className="crimson-text-regular text-foreground/70 hover:text-primary transition-colors block text-sm">
                          enada@yandtdesgns.com
                        </a>
                        <a href="mailto:bukky@yandtdesigns.com" className="crimson-text-regular text-foreground/70 hover:text-primary transition-colors block text-sm">
                          bukky@yandtdesigns.com
                        </a>
                        <a href="mailto:info@yandtdesigns.com" className="crimson-text-regular text-foreground/70 hover:text-primary transition-colors block text-sm">
                          info@yandtdesigns.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-gradient-to-br from-muted to-muted/50 rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300" style={{ animationDelay: '300ms' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="crimson-text-bold text-foreground mb-2">Address</h3>
                        <p className="crimson-text-regular text-foreground/70 text-sm leading-relaxed">
                          Lagos, Nigeria
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/2348033120248"
                    className="block w-full px-6 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-in fade-in slide-in-from-right duration-700 lg:col-span-2">
                <div className="bg-gradient-to-br from-background to-muted/50 rounded-2xl border border-border p-8 md:p-10">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
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
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                        placeholder="What is this about?"
                      />
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
                        rows={7}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </button>
                  </form>

                  <p className="text-sm text-foreground/60 mt-6 text-center">
                    We typically respond within 24 business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 rounded-2xl overflow-hidden h-96 bg-gradient-to-br from-muted to-muted/50 border border-border flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                <p className="text-foreground/70 font-medium">
                  Lekki, Lagos, Nigeria
                </p>
                <p className="text-foreground/60 text-sm mt-2">
                  5 Primrose Street, Northern Foreshore Estate
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Ready for a Consultation?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Book a dedicated consultation slot to discuss your project in detail.
            </p>
            <a
              href="/consultation"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
            >
              Book Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
