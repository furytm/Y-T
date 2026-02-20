'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
          : 'lg:bg-white lg:border-b lg:border-border bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/images/logo.png"
              alt="Y&T Sensory"
              width={80}
              height={80}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: 'Services', href: '/services' },
            { label: 'Design Solutions', href: '/design-solutions' },
            { label: 'Projects', href: '/projects' },
            { label: 'Training', href: '/training' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="crimson-text-regular text-black hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/consultation" className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:bg-background hover:text-primary transition-all duration-300 transform hover:scale-105">
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
              { label: 'Design Solutions', href: '/design-solutions' },
              { label: 'Projects', href: '/projects' },
              { label: 'Training', href: '/training' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="crimson-text-regular text-black hover:text-primary transition-colors duration-200 px-4 py-2"
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
