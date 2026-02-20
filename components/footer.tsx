'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  Services: [
    { name: 'Sensory Room Design', href: '/services' },
    { name: 'Design Solutions', href: '/design-solutions' },
    { name: 'Training Programs', href: '/training' },
    { name: 'Consultations', href: '/consultation' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Approach', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  Resources: [
    { name: 'Design Services', href: '/design-solutions' },
    { name: 'Case Studies', href: '/projects' },
    { name: 'Training', href: '/training' },
    { name: 'Accessibility', href: '/design-solutions' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted relative overflow-hidden pt-20 pb-10">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Y&T
                  </span>
                </div>
              </div>
              <span className="font-serif text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sensory
              </span>
            </Link>
            <p className="crimson-text-regular text-foreground/60 leading-relaxed">
              Creating inclusive, accessible, and sustainable environments for individuals with sensory, developmental, and physical disabilities.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="crimson-text-bold text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="crimson-text-regular text-foreground/60 hover:text-primary transition-colors duration-200 relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="crimson-text-regular text-foreground/50">
            <p>&copy; 2024 Y&T Sensory. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-8">
            <Link href="#" className="crimson-text-regular text-foreground/50 hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
