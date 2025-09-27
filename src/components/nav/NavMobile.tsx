'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Phone } from 'lucide-react'
import clsx from 'clsx'

import styles from './navmobile.module.css'

type NavItem = {
  href: string
  label: string
  children?: NavItem[]
  menuKey?: 'services' | 'about'
}

type NavMobileProps = {
  items: NavItem[]
}

const MOBILE_QUERY = '(max-width: 1023px)'
const FOCUSABLE_SELECTOR = 'a[href], button, [tabindex]:not([tabindex="-1"])'

const getMenuId = (item: NavItem) => item.menuKey ?? item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')

export default function NavMobile({ items }: NavMobileProps) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [openItem, setOpenItem] = useState<string | null>(null)

  const drawerRef = useRef<HTMLDivElement | null>(null)
  const burgerRef = useRef<HTMLElement | null>(null)
  const isOpenRef = useRef(false)

  useEffect(() => {
    setIsMounted(true)
    const body = document.body
    if (!body.classList.contains('with-navx')) {
      body.classList.add('with-navx')
    }
    return () => {
      body.classList.remove('with-navx')
      document.documentElement.classList.remove('navx-lock')
      document.body.classList.remove('navx-lock')
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY)
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const dispatchDrawerEvent = useCallback((type: 'open' | 'close') => {
    document.dispatchEvent(new CustomEvent(`navx-${type}`))
  }, [])

  const closeDrawer = useCallback(
    (returnFocus = true) => {
      if (!isOpenRef.current) return
      isOpenRef.current = false
      setIsOpen(false)
      setOpenItem(null)
      document.documentElement.classList.remove('navx-lock')
      document.body.classList.remove('navx-lock')
      dispatchDrawerEvent('close')
      burgerRef.current?.setAttribute('aria-expanded', 'false')
      if (returnFocus) {
        burgerRef.current?.focus()
      }
    },
    [dispatchDrawerEvent],
  )

  const openDrawer = useCallback(() => {
    if (!isMobile || isOpenRef.current) return
    isOpenRef.current = true
    setIsOpen(true)
    document.documentElement.classList.add('navx-lock')
    document.body.classList.add('navx-lock')
    dispatchDrawerEvent('open')
    burgerRef.current?.setAttribute('aria-expanded', 'true')
    requestAnimationFrame(() => {
      const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)
      firstFocusable?.focus()
    })
  }, [dispatchDrawerEvent, isMobile])

  useEffect(() => {
    if (!isMobile) {
      closeDrawer(false)
    }
  }, [closeDrawer, isMobile])

  useEffect(() => {
    isOpenRef.current = isOpen
  }, [isOpen])

  useEffect(() => {
    burgerRef.current = document.querySelector('[data-navx-toggle="drawer"]') as HTMLElement | null
    if (burgerRef.current) {
      burgerRef.current.setAttribute('aria-expanded', 'false')
    }
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleTrigger = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const trigger = target?.closest('[data-navx-toggle="drawer"]') as HTMLElement | null
      if (!trigger) return
      burgerRef.current = trigger
      if (!isMobile) return
      event.preventDefault()
      if (isOpenRef.current) {
        closeDrawer()
      } else {
        openDrawer()
      }
    }

    document.addEventListener('click', handleTrigger)
    return () => document.removeEventListener('click', handleTrigger)
  }, [closeDrawer, openDrawer, isMobile, isMounted])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeDrawer()
        return
      }

      if (event.key !== 'Tab' || !drawerRef.current) return

      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const current = document.activeElement as HTMLElement | null

      if (event.shiftKey) {
        if (current === first || !current) {
          event.preventDefault()
          last.focus()
        }
      } else if (current === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeDrawer, isOpen])

  useEffect(() => {
    if (!isOpen) return
    closeDrawer(false)
  }, [closeDrawer, isOpen, pathname])

  const toggleItem = useCallback((id: string) => {
    setOpenItem((current) => (current === id ? null : id))
  }, [])

  const handleParentKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>, id: string) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeDrawer()
        return
      }

      if (event.key === 'Enter' || event.key === ' ') {
        if (!isMobile) return
        event.preventDefault()
        toggleItem(id)
      }
    },
    [closeDrawer, isMobile, toggleItem],
  )

  const handleParentClick = useCallback(
    (id: string) => {
      toggleItem(id)
    },
    [toggleItem],
  )

  const renderChildren = (item: NavItem) => {
    const itemId = getMenuId(item)
    const expanded = openItem === itemId
    const children = item.children ?? []

    return (
      <ul
        id={`${itemId}-panel`}
        className={clsx('navx-children', styles.navxChildren)}
        hidden={!expanded}
      >
        <li>
          <Link
            href={item.href}
            className={clsx('navx-child-link', styles.navxChildLink)}
            onClick={() => closeDrawer(false)}
          >
            {item.label} Overview
          </Link>
        </li>
        {children.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              className={clsx(
                'navx-child-link',
                styles.navxChildLink,
                (pathname === child.href || pathname.startsWith(`${child.href}/`)) && styles.navxChildLinkActive,
              )}
              onClick={() => closeDrawer(false)}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  if (!isMounted) {
    return null
  }

  return (
    <>
      <div
        className={clsx('navx-overlay', styles.navxOverlay, isOpen && styles.navxOverlayActive)}
        onClick={() => closeDrawer()}
        aria-hidden={!isOpen}
      />
      <aside
        ref={drawerRef}
        id="navx-drawer"
        className={clsx('navx-drawer', styles.navxDrawer, isOpen && styles.navxDrawerOpen)}
        role="dialog"
        aria-modal="true"
        aria-label="Primary navigation"
      >
        <nav className={styles.navxNav}>
          <ul className={styles.navxList}>
            {items.map((item) => {
              if (!item.children?.length) {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
                return (
                  <li key={item.href} className={clsx('navx-item', styles.navxItem)}>
                    <Link
                      href={item.href}
                      className={clsx('navx-link', styles.navxLink, active && styles.navxLinkActive)}
                      onClick={() => closeDrawer(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              }

              const itemId = getMenuId(item)
              const expanded = openItem === itemId

              return (
                <li key={item.href} className={clsx('navx-item', styles.navxItem, styles.navxItemHasChildren)}>
                  <button
                    type="button"
                    data-menu={item.menuKey}
                    className={clsx('navx-parent', styles.navxParent)}
                    aria-expanded={expanded}
                    aria-controls={`${itemId}-panel`}
                    onClick={() => handleParentClick(itemId)}
                    onKeyDown={(event) => handleParentKeyDown(event, itemId)}
                  >
                    <span>{item.label}</span>
                    <span className={clsx('navx-caret', styles.navxCaret)} aria-hidden="true">
                      <ChevronDown className="size-4" />
                    </span>
                  </button>
                  {renderChildren(item)}
                </li>
              )
            })}
          </ul>
          <div className={styles.navxFooter}>
            <Link
              href="tel:+14154978008"
              className={clsx('navx-link', styles.navxCall)}
              onClick={() => closeDrawer(false)}
            >
              <Phone className="mr-2 size-4" aria-hidden="true" />
              Call Now
            </Link>
          </div>
        </nav>
      </aside>
    </>
  )
}
