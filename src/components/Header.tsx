'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import { serviceDetails } from '@/data/servicePages'

import Logo from './Logo'
import NavMobile from './nav/NavMobile'

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

export default function Header() {
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openDesktopItem, setOpenDesktopItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpenDesktopItem(null)
  }, [pathname])

  const topNavItems = useMemo(() => navItems, [])

  const handleMobileClose = useCallback(() => {
    setDrawerOpen(false)
  }, [])

  const handleMobileToggle = useCallback(() => {
    setDrawerOpen((prev) => !prev)
  }, [])

  const renderDesktopNav = () => (
    <NavigationMenu.Root
      className="relative hidden items-center text-sm lg:flex"
      value={openDesktopItem ?? undefined}
      onValueChange={(value) => setOpenDesktopItem(value || null)}
      delayDuration={75}
      skipDelayDuration={150}
    >
      <NavigationMenu.List className="flex items-center gap-1 rounded-full border border-white/60 bg-white/90 px-1.5 py-1 shadow-[0_16px_44px_rgba(12,32,64,0.16)] backdrop-blur-xl transition">
        {topNavItems.map((item) => {
          if (!item.children?.length) {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={item.href}
                    className={`rounded-full px-4 py-2 font-medium tracking-[0.01em] transition-all duration-200 ${
                      active
                        ? 'bg-white text-[var(--skye-700)] shadow-[0_6px_16px_rgba(12,32,64,0.16)]'
                        : 'text-[var(--ink-900)] hover:-translate-y-[1px] hover:bg-white/80 hover:text-[var(--skye-700)] hover:shadow-[0_10px_24px_rgba(12,32,64,0.14)]'
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
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

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
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 font-medium tracking-[0.01em] transition-all duration-200 ${
                    active || desktopItemOpen
                      ? 'bg-white text-[var(--skye-700)] shadow-[0_6px_16px_rgba(12,32,64,0.16)]'
                      : 'text-[var(--ink-900)] hover:-translate-y-[1px] hover:bg-white/80 hover:text-[var(--skye-700)] hover:shadow-[0_10px_24px_rgba(12,32,64,0.14)]'
                  }`}
                  onMouseEnter={() => setOpenDesktopItem(itemId)}
                  onFocus={() => setOpenDesktopItem(itemId)}
                  onClick={(event) => {
                    if (!desktopItemOpen && !event.metaKey && !event.ctrlKey && event.button === 0) {
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
                  <ChevronDown className={`size-4 transition-transform ${desktopItemOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </Link>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content asChild>
                <div
                  className="absolute left-0 top-full z-[60] mt-2 w-72 max-h-[70vh] overflow-y-auto rounded-3xl border border-white/70 bg-white/95 p-5 shadow-[0_26px_60px_rgba(12,32,64,0.18)] backdrop-blur"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                  role="menu"
                  onMouseLeave={() => setOpenDesktopItem(null)}
                >
                  <div className="flex flex-col gap-2 text-sm">
                    <Link
                      href={item.href}
                      className={`rounded-2xl px-3 py-2 font-semibold transition-all duration-200 hover:bg-[var(--foam)] hover:text-[var(--skye-700)] ${
                        active ? 'bg-[var(--foam)] text-[var(--skye-700)]' : 'text-[var(--skye-700)]'
                      }`}
                    >
                      {item.label} Overview
                    </Link>
                    {item.children.map((child) => {
                      const childActive = pathname === child.href
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={`rounded-2xl px-3 py-2 transition-all duration-200 hover:bg-[var(--foam)] ${
                            childActive ? 'bg-[var(--foam)] font-semibold text-[var(--skye-700)]' : 'text-[var(--skye-700)]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      )
                    })}
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

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-white transition-all duration-300 ${
          scrolled
            ? 'shadow-[0_18px_60px_rgba(12,32,64,0.12)]'
            : 'shadow-[0_24px_68px_rgba(12,32,64,0.08)]'
        }`}
      >
        <div className="container-px h-16 sm:h-20">
          <div
            className="flex h-full w-full items-center gap-4 px-3 py-2 transition-all duration-300 sm:px-5"
            data-navx-header
          >
            <Logo className="-ml-2 sm:-ml-3" />
            <div className="hidden flex-1 justify-center lg:flex">
              {renderDesktopNav()}
            </div>
            <div className="ml-auto hidden items-center lg:flex">
              <Link href="tel:+14154978008" className="header-cta header-cta--primary" aria-label="Call us now">
                <Phone className="mr-2 size-4" aria-hidden="true" />
                Call Now
              </Link>
            </div>
            <button
              type="button"
              className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(18,60,84,0.16)] bg-white/90 text-[var(--skye-800)] shadow-[0_16px_38px_rgba(12,32,64,0.14)] transition hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--skye-200)] lg:hidden"
              data-navx-toggle="drawer"
              aria-expanded={drawerOpen}
              aria-controls="navx-drawer"
              aria-label="Toggle navigation menu"
              onClick={handleMobileToggle}
            >
              {drawerOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      <NavMobile items={topNavItems} isOpen={drawerOpen} onClose={handleMobileClose} />
    </>
  )
}
