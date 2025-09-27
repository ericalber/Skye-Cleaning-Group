'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'

import clsx from 'clsx'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import { serviceDetails } from '@/data/servicePages'

import Logo from './Logo'

type NavItem = {
  href: string
  label: string
  children?: NavItem[]
  menuKey?: 'services' | 'about'
}

const servicesNav: NavItem[] = serviceDetails.map(({ slug, navLabel }) => ({
  href: `/services/${slug}`,
  label: navLabel,
}))

const aboutNav: NavItem[] = [
  { href: '/about', label: 'About Us' },
  { href: '/about/licensed-insured', label: 'Licensed & Insured' },
  { href: '/about/products', label: 'Safer Products' },
  { href: '/about/trusted-crew', label: 'Trusted Crew' },
  { href: '/about/gallery', label: 'Gallery' },
  { href: '/about/faq', label: 'FAQ' },
  { href: '/about/service-areas', label: 'Service Areas' },
]

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', children: servicesNav, menuKey: 'services' },
  { href: '/about', label: 'About', children: aboutNav, menuKey: 'about' },
  { href: '/clean-tips', label: 'Clean Tips' },
]

const getMenuId = (item: NavItem) => item.menuKey ?? item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return isDesktop
}

export default function Header() {
  const pathname = usePathname()
  const isDesktop = useIsDesktop()

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  const [openDesktopItem, setOpenDesktopItem] = useState<string | null>(null)

  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMobileDropdown(null)
    setOpenDesktopItem(null)
  }, [pathname])

  useEffect(() => {
    if (isDesktop || !menuOpen) return

    const handleOutside = (event: Event) => {
      if (!headerRef.current) return
      const target = event.target as Node | null
      if (!target || headerRef.current.contains(target)) return
      setMobileDropdown(null)
      setMenuOpen(false)
    }

    const handleKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileDropdown(null)
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', handleOutside, true)
    document.addEventListener('touchstart', handleOutside, true)
    document.addEventListener('pointerdown', handleOutside, true)
    document.addEventListener('keydown', handleKey, true)

    return () => {
      document.removeEventListener('click', handleOutside, true)
      document.removeEventListener('touchstart', handleOutside, true)
      document.removeEventListener('pointerdown', handleOutside, true)
      document.removeEventListener('keydown', handleKey, true)
    }
  }, [isDesktop, menuOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const toggleMobileDropdown = (id: string) => {
    setMobileDropdown((current) => (current === id ? null : id))
  }

  const handleParentKeyDown = (event: ReactKeyboardEvent<HTMLElement>, id: string) => {
    if (event.key === 'Escape') {
      setMobileDropdown(null)
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleMobileDropdown(id)
    }
  }

  const topNavItems = useMemo(() => navItems, [])

  const renderDesktopNav = () => (
    <NavigationMenu.Root
      className="relative hidden items-center gap-4 text-sm lg:flex"
      value={openDesktopItem ?? undefined}
      onValueChange={(value) => setOpenDesktopItem(value || null)}
      delayDuration={75}
      skipDelayDuration={150}
    >
      <NavigationMenu.List className="flex items-center gap-4">
        {topNavItems.map((item) => {
          if (!item.children?.length) {
            return (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={item.href}
                    className={`rounded-full px-3 py-1.5 font-medium transition ${
                      isActive(item.href) ? 'bg-[var(--skye-100)] text-[var(--skye-700)]' : 'hover:text-[var(--skye-700)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            )
          }

          const itemId = getMenuId(item)

          const desktopItemOpen = openDesktopItem === itemId

          return (
            <NavigationMenu.Item
              key={item.href}
              value={itemId}
              className="relative"
              onPointerLeave={() => setOpenDesktopItem(null)}
            >
              <NavigationMenu.Trigger asChild>
                <Link
                  href={item.href}
                  data-menu={item.menuKey}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-medium transition ${
                    isActive(item.href) || desktopItemOpen
                      ? 'bg-[var(--skye-100)] text-[var(--skye-700)]'
                      : 'hover:text-[var(--skye-700)]'
                  }`}
                  onMouseEnter={() => {
                    if (isDesktop) setOpenDesktopItem(itemId)
                  }}
                  onFocus={() => {
                    if (isDesktop) setOpenDesktopItem(itemId)
                  }}
                  onClick={(event) => {
                    if (isDesktop && !desktopItemOpen && !event.metaKey && !event.ctrlKey && event.button === 0) {
                      event.preventDefault()
                      setOpenDesktopItem(itemId)
                    }
                  }}
                  onKeyDown={(event) => {
                    if ((event.key === 'Enter' || event.key === ' ') && !desktopItemOpen) {
                      event.preventDefault()
                      setOpenDesktopItem(itemId)
                    }
                    if (event.key === 'Escape') {
                      setOpenDesktopItem(null)
                    }
                  }}
                >
                  {item.label}
                  <ChevronDown
                    className={`size-4 transition-transform ${desktopItemOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </Link>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content asChild>
                <div
                  className="absolute left-0 top-full z-[60] mt-1 w-64 max-h-[70vh] overflow-y-auto rounded-2xl border border-black/5 bg-white p-4 shadow-[0_16px_40px_rgba(15,30,45,0.14)]"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                  role="menu"
                  onMouseLeave={() => setOpenDesktopItem(null)}
                >
                  <div className="flex flex-col gap-2 text-sm">
                    <Link
                      href={item.href}
                      className={`rounded-xl px-3 py-2 font-semibold transition hover:bg-[var(--foam)] ${
                        isActive(item.href) ? 'bg-[var(--foam)] text-[var(--skye-700)]' : 'text-[var(--skye-700)]'
                      }`}
                    >
                      {item.label} Overview
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className={`rounded-xl px-3 py-2 transition hover:bg-[var(--foam)] ${
                          isActive(child.href) ? 'bg-[var(--foam)] font-semibold text-[var(--skye-700)]' : ''
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          )
        })}
      </NavigationMenu.List>
      <NavigationMenu.Viewport asChild>
        <div className="absolute left-0 top-full z-[59] mt-1 hidden h-0 w-0" aria-hidden="true" />
      </NavigationMenu.Viewport>
    </NavigationMenu.Root>
  )

  const renderMobileNav = () => (
    <div className="border-t bg-white py-4 lg:hidden" aria-label="Mobile navigation">
      <div className="container-px flex flex-col gap-4">
        {topNavItems.map((item) => {
          if (!item.children?.length) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-black/5 px-4 py-3 text-sm font-semibold text-ink-900 hover:bg-[var(--foam)] hover:text-[var(--skye-700)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          }

          const itemId = getMenuId(item)
          const isOpen = mobileDropdown === itemId
          const menuId = `${itemId}-menu-mobile`

          return (
            <div key={item.href} className="flex flex-col gap-2">
              <button
                type="button"
                className="flex items-center justify-between rounded-xl border border-black/5 px-4 py-3 text-left text-sm font-semibold text-ink-900"
                data-menu={item.menuKey}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                aria-controls={menuId}
                onClick={(event) => {
                  if (isDesktop) return
                  event.preventDefault()
                  toggleMobileDropdown(itemId)
                }}
                onKeyDown={(event) => handleParentKeyDown(event, itemId)}
              >
                {item.label}
                <ChevronDown className={`size-4 transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              <div
                id={menuId}
                role="menu"
                className={clsx(
                  'ml-3 flex max-h-0 flex-col gap-2 overflow-hidden border-l border-black/10 pl-3 transition-all duration-200 ease-out',
                  isOpen
                    ? 'max-h-[60vh] translate-y-0 opacity-100 pointer-events-auto overflow-y-auto visible'
                    : 'translate-y-2 opacity-0 pointer-events-none invisible'
                )}
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                <Link
                  href={item.href}
                  role="menuitem"
                  className="rounded-lg px-3 py-1.5 text-sm font-semibold text-[var(--skye-700)] hover:bg-[var(--foam)]"
                  onClick={() => {
                    setMenuOpen(false)
                    setMobileDropdown(null)
                  }}
                >
                  {item.label} Overview
                </Link>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    role="menuitem"
                    className="rounded-lg px-3 py-1.5 text-sm text-slate-600 hover:bg-[var(--foam)] hover:text-[var(--skye-700)]"
                    onClick={() => {
                      setMenuOpen(false)
                      setMobileDropdown(null)
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
        <Link href="tel:+14154978008" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          <Phone className="mr-2 size-4" aria-hidden="true" />
          Call Now
        </Link>
      </div>
    </div>
  )

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled ? 'bg-white/85 backdrop-blur-md shadow-sm' : 'bg-white/70 backdrop-blur'
      }`}
      style={{ overflow: 'visible' }}
    >
      <div className="px-0 sm:px-2 lg:px-4 flex h-16 items-center justify-between" ref={headerRef}>
        <Link href="/" aria-label="Skye Cleaning Group home" className="flex-shrink-0">
          <Logo />
        </Link>
        {renderDesktopNav()}
        <div className="hidden items-center gap-2 sm:flex">
          <Link href="tel:+14154978008" className="btn btn-primary" aria-label="Call us now">
            <Phone className="mr-2 size-4" aria-hidden="true" />
            Call Now
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 lg:hidden"
          onClick={() => setMenuOpen((state) => !state)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && renderMobileNav()}
    </header>
  )
}
