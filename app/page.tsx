'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import ForeshoreShowcase from '@/components/foreshore-showcase'
import Services from '@/components/services'
import SensoryFeatures from '@/components/sensory-features'
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
        <ForeshoreShowcase />
        <SensoryFeatures />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
