'use client'

import { useEffect, useRef } from 'react'
import { Send, Sparkles } from 'lucide-react'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    if (formRef.current) {
      formRef.current.reset()
    }
  }

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-12 opacity-0 animate-in fade-in duration-1000">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ready to Transform Your Brand?
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Let's Create
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Something Extraordinary
              </span>
            </h2>

            <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation with our team of sensory strategists and let's explore how we can elevate your brand through immersive sensory experiences.
            </p>
          </div>

          {/* Form */}
          <div className="bg-background rounded-2xl border border-border p-8 md:p-12 backdrop-blur-sm">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2 opacity-0 animate-in fade-in slide-in-from-left duration-700 delay-200">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 opacity-0 animate-in fade-in slide-in-from-right duration-700 delay-200">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2 opacity-0 animate-in fade-in slide-in-from-left duration-700 delay-300">
                <label htmlFor="company" className="block text-sm font-medium text-foreground">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your Brand"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2 opacity-0 animate-in fade-in slide-in-from-left duration-700 delay-400">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  placeholder="Describe your vision and sensory goals..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full group px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 opacity-0 animate-in fade-in slide-in-from-left duration-700 delay-500"
              >
                <span>Start Your Sensory Journey</span>
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </button>

              <p className="text-center text-sm text-foreground/50 opacity-0 animate-in fade-in duration-700 delay-600">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
