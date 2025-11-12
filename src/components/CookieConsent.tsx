'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'skye-cookie-consent-v1'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        setVisible(true)
      }
    } catch {
      // If storage fails (Safari private mode), still show the banner once.
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ acceptedAt: new Date().toISOString() }))
    } catch {
      // ignore storage errors
    }
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-6 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[rgba(18,60,84,0.18)] bg-white/95 p-5 shadow-[0_18px_48px_rgba(12,32,64,0.18)] backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2 text-sm text-slate-700">
            <p className="font-semibold text-ink-900">We use cookies to deliver a concierge experience.</p>
            <p>
              By selecting “Accept”, you agree to our use of cookies for analytics and personalization. Review how we handle data in our{' '}
              <Link href="/privacy-policy" className="font-semibold text-[var(--skye-700)] underline decoration-dotted">
                privacy policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handleAccept}
              className="inline-flex items-center justify-center rounded-full bg-[var(--skye-700)] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(18,60,84,0.18)] transition hover:bg-[var(--skye-800)]"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
