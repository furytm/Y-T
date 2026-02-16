'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import About from '@/components/about'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero isLoaded={isLoaded} />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
