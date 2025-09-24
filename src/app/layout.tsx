import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skye Cleaning Group — Residential & Light Commercial Cleaning',
  description:
    'Skye Cleaning Group delivers premium residential and light commercial cleaning across San Francisco and the North Bay with trusted teams and our Skye Done-Right Guarantee.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
