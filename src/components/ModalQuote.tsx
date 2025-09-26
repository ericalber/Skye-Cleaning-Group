'use client'

import { Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import QuoteForm, { type QuoteService } from './QuoteForm'

type ModalQuoteProps = {
  triggerLabel?: string
  triggerClassName?: string
  initialService?: QuoteService
  title?: string
  description?: string
}

export default function ModalQuote({
  triggerLabel = 'Request a Quote',
  triggerClassName = 'btn btn-secondary',
  initialService,
  title = 'Get your free quote',
  description = 'Share the details of your space and we will respond in one business day.',
}: ModalQuoteProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    if (open) {
      window.addEventListener('keyup', handleKeyUp)
    }

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
      >
        {triggerLabel}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className="card relative w-full max-w-xl overflow-hidden p-0"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 rounded-full bg-black/5 px-2 py-1 text-sm font-semibold"
                aria-label="Close quote modal"
              >
                ✕
              </button>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-ink-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{description}</p>
                <div className="mt-4">
                  <Suspense fallback={null}>
                    <QuoteForm compact initialService={initialService} />
                  </Suspense>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
