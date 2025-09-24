'use client'

import { Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import QuoteForm from './QuoteForm'

export default function ModalQuote() {
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
      <button onClick={() => setOpen(true)} className="btn btn-secondary">
        Request a Quote
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
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 rounded-full bg-black/5 px-2 py-1 text-sm font-semibold"
                aria-label="Close quote modal"
              >
                ✕
              </button>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-3">Get your free quote</h3>
                <Suspense fallback={null}>
                  <QuoteForm compact />
                </Suspense>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
