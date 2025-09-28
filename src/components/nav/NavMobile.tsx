'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
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
  isOpen: boolean
  onClose: () => void
}

const MOBILE_QUERY = '(max-width: 1023px)'
const FOCUSABLE_SELECTOR = 'a[href], button, [tabindex]:not([tabindex="-1"])'

const getMenuId = (item: NavItem) => item.menuKey ?? item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')

export default function NavMobile({ items, isOpen, onClose }: NavMobileProps) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [openItem, setOpenItem] = useState<string | null>(null)

  const drawerRef = useRef<HTMLDivElement | null>(null)
  const wasOpenRef = useRef(false)
  const triggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setIsMounted(true)
    const body = document.body
    if (!body.classList.contains('with-navx')) {
      body.classList.add('with-navx')
    }
    triggerRef.current = document.querySelector('[data-navx-toggle="drawer"]') as HTMLElement | null

    return () => {
      body.classList.remove('with-navx')
      document.documentElement.classList.remove('navx-lock')
      document.body.classList.remove('navx-lock')
    }
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const media = window.matchMedia(MOBILE_QUERY)
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [isMounted])

  useEffect(() => {
    if (!isMobile && isOpen) {
      onClose()
    }
  }, [isMobile, isOpen, onClose])

  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const trigger = triggerRef.current ?? (document.querySelector('[data-navx-toggle="drawer"]') as HTMLElement | null)

    if (isOpen && isMobile) {
      wasOpenRef.current = true
      html.classList.add('navx-lock')
      body.classList.add('navx-lock')
      trigger?.setAttribute('aria-expanded', 'true')
      requestAnimationFrame(() => {
        const first = drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)
        first?.focus()
      })
    } else {
      html.classList.remove('navx-lock')
      body.classList.remove('navx-lock')
      trigger?.setAttribute('aria-expanded', 'false')

      if (wasOpenRef.current) {
        setOpenItem(null)
        wasOpenRef.current = false
        if (trigger && typeof trigger.focus === 'function') {
          trigger.focus()
        }
      }
    }
  }, [isMobile, isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
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
  }, [onClose, isOpen])

  const previousPath = useRef(pathname)

  useEffect(() => {
    if (!isOpen) {
      previousPath.current = pathname
      return
    }

    if (previousPath.current !== pathname) {
      previousPath.current = pathname
      onClose()
    }
  }, [pathname, isOpen, onClose])

  const toggleItem = useCallback((id: string) => {
    setOpenItem((current) => (current === id ? null : id))
  }, [])

  const handleParentKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>, id: string) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        if (!isMobile) {
          onClose()
          return
        }
        toggleItem(id)
      }
    },
    [isMobile, onClose, toggleItem],
  )

  const handleParentClick = useCallback(
    (id: string) => {
      if (!isMobile) {
        onClose()
        return
      }
      toggleItem(id)
    },
    [isMobile, onClose, toggleItem],
  )

  const renderChildren = (item: NavItem) => {
    const itemId = getMenuId(item)
    const expanded = openItem === itemId
    const children = item.children ?? []

    return (
      <ul id={`${itemId}-panel`} className={clsx('navx-children', styles.navxChildren)} hidden={!expanded}>
        <li>
          <Link href={item.href} className={clsx('navx-child-link', styles.navxChildLink)} onClick={onClose}>
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
              onClick={onClose}
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
        className={clsx(
          'navx-overlay',
          styles.navxOverlay,
          isOpen && styles.navxOverlayActive,
          isOpen && 'is-active',
        )}
        hidden={!isOpen}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <aside
        ref={drawerRef}
        id="navx-drawer"
        className={clsx('navx-drawer', styles.navxDrawer, isOpen && styles.navxDrawerOpen, isOpen && 'is-open')}
        role="dialog"
        aria-modal="true"
        aria-label="Primary navigation"
        aria-hidden={!isOpen}
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
                      onClick={onClose}
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
        </nav>
      </aside>
    </>
  )
}
