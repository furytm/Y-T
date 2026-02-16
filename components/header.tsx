'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
              <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Y&T
              </span>
            </div>
          </div>
          <span className="hidden sm:block font-serif text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sensory
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: 'Services', href: '/services' },
            { label: 'Projects', href: '/projects' },
            { label: 'About', href: '/about' },
            { label: 'Consultation', href: '/consultation' },
            { label: 'Contact', href: '/contact' }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/consultation" className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
          Book Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-4 space-y-3 flex flex-col">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Projects', href: '/projects' },
              { label: 'About', href: '/about' },
              { label: 'Consultation', href: '/consultation' },
              { label: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/consultation" className="w-full px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium mt-4 text-center block">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
