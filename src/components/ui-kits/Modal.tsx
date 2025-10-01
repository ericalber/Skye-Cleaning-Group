'use client'

import { X } from 'lucide-react'
import type { ReactNode } from 'react'
import { cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'

import Button from './Button'

export type ModalProps = {
  trigger: ReactNode
  title?: string
  description?: string
  children: ReactNode
  size?: 'md' | 'lg'
  className?: string
}

export default function Modal({ trigger, title, description, children, size = 'lg', className }: ModalProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (!open || !dialogRef.current) return
    const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    focusables[0]?.focus()
  }, [open])

  const handleOpen = () => setOpen(true)

  const triggerNode = isValidElement(trigger)
    ? cloneElement(trigger, {
        onClick: (event: React.MouseEvent) => {
          if (typeof trigger.props.onClick === 'function') {
            trigger.props.onClick(event)
          }
          if (!event.defaultPrevented) {
            handleOpen()
          }
        },
      })
    : (
        <span
          role="button"
          tabIndex={0}
          onClick={handleOpen}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              handleOpen()
            }
          }}
          className="inline-flex cursor-pointer"
        >
          {trigger}
        </span>
      )

  return (
    <>
      {triggerNode}
      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
              onClick={handleBackdropClick}
              role="dialog"
              aria-modal="true"
            >
              <div
                ref={dialogRef}
                className={clsx(
                  'relative max-h-[90vh] w-full overflow-hidden rounded-[2rem] border border-[rgba(18,60,84,0.16)] bg-white shadow-[0_32px_96px_rgba(12,32,64,0.26)]',
                  size === 'lg' ? 'max-w-3xl' : 'max-w-xl',
                  className
                )}
              >
                <button
                  type="button"
                  className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full border border-[rgba(18,60,84,0.16)] bg-white text-[var(--skye-700)] shadow-[0_12px_28px_rgba(12,32,64,0.16)] transition hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--skye-200)]"
                  onClick={() => setOpen(false)}
                  aria-label="Close dialog"
                >
                  <X className="size-5" />
                </button>
                <div className="space-y-4 px-8 pb-10 pt-12 text-left">
                  {title ? <h2 className="text-2xl font-semibold text-ink-900">{title}</h2> : null}
                  {description ? <p className="text-sm text-slate-600">{description}</p> : null}
                  <div className="prose prose-slate max-w-none text-sm text-slate-600 prose-headings:text-ink-900 prose-a:text-[var(--skye-700)]">
                    {children}
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  )
}

export function ModalTriggerButton({ children }: { children: React.ReactNode }) {
  return (
    <Button variant="secondary" type="button">
      {children}
    </Button>
  )
}
