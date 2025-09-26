'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'

type NavItem = {
  href: string
  label: string
  type: 'route' | 'anchor'
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', type: 'route' },
  { href: '/services', label: 'Services', type: 'route' },
  { href: '/portfolio', label: 'Portfolio', type: 'route' },
  { href: '/service-areas', label: 'Service Areas', type: 'route' },
  { href: '/clean-tips', label: 'Clean Tips', type: 'route' },
  { href: '/about', label: 'About Us', type: 'route' },
  { href: '#process', label: 'Process', type: 'anchor' },
  { href: '#reviews', label: 'Reviews', type: 'anchor' },
  { href: '#faq', label: 'FAQ', type: 'anchor' },
  { href: '#areas', label: 'Service Area', type: 'anchor' },
  { href: '#quote', label: 'Request', type: 'anchor' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

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
          {navItems.map(({ href, label, type }) => {
            const targetHref = type === 'anchor' ? (pathname === '/' ? href : `/${href}`) : href
            return (
              <Link key={`${label}-${href}`} href={targetHref} className="hover:text-skye-700">
                {label}
              </Link>
            )
          })}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
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
            {navItems.map(({ href, label, type }) => {
              const targetHref = type === 'anchor' ? (pathname === '/' ? href : `/${href}`) : href
              return (
                <Link
                  key={`${label}-${href}`}
                  href={targetHref}
                  className="text-sm font-medium text-ink-900 hover:text-skye-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              )
            })}
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
