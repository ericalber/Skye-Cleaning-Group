import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'
import '@/styles/skins/gsx.tokens.css'
import '@/styles/skins/gsx.header.css'
import '@/styles/skins/gsx.buttons.css'
import '@/styles/skins/fsx.sidebar.css'
import '@/styles/skins/gotravel.css'
import '@/styles/skins/service-landing.css'
import '@/styles/skins/map-location.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skye Cleaning Group - Residential & Light Commercial Cleaning',
  description:
    'Skye Cleaning Group delivers premium residential and light commercial cleaning across San Francisco and the North Bay with trusted teams and our Skye Done-Right Guarantee.',
  openGraph: {
    title: 'Skye Cleaning Group',
    description: 'Premium concierge cleaning for San Francisco and the North Bay.',
    url: 'https://www.skyecgroup.com',
    type: 'website',
    images: [
      {
        url: 'https://www.skyecgroup.com/logo-skye.png',
        alt: 'Skye Cleaning Group logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skye Cleaning Group',
    description: 'Premium concierge cleaning for San Francisco and the North Bay.',
    images: ['https://www.skyecgroup.com/logo-skye.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <body className={`${inter.className} with-grandstar with-sidebar-flat fsx-light`}>
        {children}
      </body>
    </html>
  )
}
