'use client'

import clsx from 'clsx'
import { Suspense, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

import QuoteForm, { type QuoteService } from './QuoteForm'

type ModalQuoteProps = {
  triggerLabel?: string
  triggerClassName?: string
  initialService?: QuoteService
  title?: string
  description?: string
  compact?: boolean
  titleClassName?: string
  descriptionClassName?: string
  cardClassName?: string
}

export default function ModalQuote({
  triggerLabel = 'Request a Quote',
  triggerClassName = 'btn btn-secondary',
  initialService,
  title = 'Get your free quote',
  description = 'Share the details of your space and we will respond within one business day.',
  compact = false,
  titleClassName = 'text-2xl font-bold text-[--ink-900]',
  descriptionClassName = 'text-sm text-slate-600',
  cardClassName,
}: ModalQuoteProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

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

  const closeModal = () => setOpen(false)

  const modalContent = (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-[75] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close quote modal"
            onClick={closeModal}
          />
          <div className="fixed inset-0 z-[80] overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-4 py-10 sm:px-6">
              <motion.div
                role="dialog"
                aria-modal="true"
                initial={{ y: 24, opacity: 0.6 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={clsx(
                  'surface isolation-auto w-full max-w-xl rounded-2xl p-6 sm:p-8 shadow-xl',
                  cardClassName,
                  !cardClassName && 'surface--white text-[--ink-900]'
                )}
                style={{ WebkitOverflowScrolling: 'touch' }}
                onClick={(event) => event.stopPropagation()}
              >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 z-[85] rounded-full bg-black/5 px-2 py-1 text-sm font-semibold text-current"
                aria-label="Close quote modal"
              >
                ✕
              </button>
              {(title || description) && (
                <div className="mb-4 space-y-1 text-center">
                  {title && <h3 className={clsx(titleClassName)}>{title}</h3>}
                  {description && <p className={clsx(descriptionClassName)}>{description}</p>}
                </div>
              )}
              <Suspense fallback={null}>
                <QuoteForm compact={compact} initialService={initialService} />
              </Suspense>
            </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClassName}>
        {triggerLabel}
      </button>
      {mounted ? createPortal(modalContent, document.body) : null}
    </>
  )
}
