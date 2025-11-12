"use client"

import clsx from 'clsx'
import { useEffect } from 'react'
import type { ReactNode } from 'react'

import FloatingActionBar from './FloatingActionBar'
import Footer from './Footer'
import Header from './Header'
import CookieConsent from './CookieConsent'

type PageShellProps = {
  children: ReactNode
  mainClassName?: string
  bodyClassName?: string
}

export default function PageShell({ children, mainClassName, bodyClassName }: PageShellProps) {
  useEffect(() => {
    if (!bodyClassName) return
    const classes = bodyClassName
      .split(' ')
      .map((cls) => cls.trim())
      .filter(Boolean)

    classes.forEach((cls) => document.body.classList.add(cls))

    return () => {
      classes.forEach((cls) => document.body.classList.remove(cls))
    }
  }, [bodyClassName])

  return (
    <>
      <Header />
      <main className={clsx('mt-16 sm:mt-20', mainClassName)}>{children}</main>
      <Footer />
      <FloatingActionBar />
      <CookieConsent />
    </>
  )
}
