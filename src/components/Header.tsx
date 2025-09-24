'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, Phone, MessageCircle, X } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#areas', label: 'Service Area' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled ? 'bg-white/85 backdrop-blur-md shadow-sm' : 'bg-white/70 backdrop-blur'
      }`}
    >
      <div className="px-0 sm:px-2 lg:px-4 flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-skye-700">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="https://wa.me/14154978008"
            className="btn btn-secondary"
            aria-label="Text us on WhatsApp"
          >
            <MessageCircle className="mr-2 size-4" aria-hidden="true" />
            Talk on WhatsApp
          </Link>
          <Link href="tel:+14154978008" className="btn btn-primary" aria-label="Call us now">
            <Phone className="mr-2 size-4" aria-hidden="true" />
            Call Now
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 sm:hidden"
          onClick={() => setMenuOpen((state) => !state)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t bg-white py-4 sm:hidden">
          <div className="container-px flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-900 hover:text-skye-700"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="https://wa.me/14154978008"
              className="btn btn-secondary"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle className="mr-2 size-4" aria-hidden="true" />
              Talk on WhatsApp
            </Link>
            <Link
              href="tel:+14154978008"
              className="btn btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              <Phone className="mr-2 size-4" aria-hidden="true" />
              Call Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
