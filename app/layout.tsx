import type { Metadata } from 'next'
import { Syne, Instrument_Serif, Crimson_Text } from 'next/font/google'

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

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-crimson',
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: 'Y&T Sensory Rooms - Inclusive Accessibility & Sensory Design',
  description: 'Creating inclusive, accessible, and sustainable environments for individuals with sensory, developmental, and physical disabilities. Sensory room design, architectural solutions, and training programs.',
 
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${syne.variable} ${instrumentSerif.variable} ${crimsonText.variable} font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
