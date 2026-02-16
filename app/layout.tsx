import type { Metadata } from 'next'
import { Syne, Instrument_Serif } from 'next/font/google'

import './globals.css'

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700']
})

const instrumentSerif = Instrument_Serif({ 
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Y&T Sensory - Premium Sensory Consultancy',
  description: 'Transform brands through immersive sensory experiences. We create meaningful human connections through multisensory design and strategic consultancy.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${instrumentSerif.variable} font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
