'use client'

import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'

import Card from './Card'

type AccordionItem = {
  id?: string
  title: string
  description?: string
  content: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
  defaultOpenIds?: string[]
}

function normaliseId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function Accordion({ items, allowMultiple, className, defaultOpenIds }: AccordionProps) {
  const mapped = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        id: item.id ?? normaliseId(item.title),
      })),
    [items]
  )

  const [openIds, setOpenIds] = useState<string[]>(() => {
    if (defaultOpenIds?.length) {
      return defaultOpenIds
    }
    return allowMultiple ? [mapped[0]?.id].filter(Boolean) : mapped.slice(0, 1).map((item) => item.id)
  })

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id)
      if (allowMultiple) {
        return isOpen ? prev.filter((itemId) => itemId !== id) : [...prev, id]
      }
      return isOpen ? [] : [id]
    })
  }

  return (
    <div className={clsx('space-y-4', className)}>
      {mapped.map(({ id, title, description, content }) => {
        const open = openIds.includes(id)
        return (
          <Card
            key={id}
            as="div"
            className={clsx('px-0 py-0', open ? 'border-[var(--skye-300)]' : 'border-[rgba(18,60,84,0.12)]')}
            padding="p-0"
            active={open}
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 rounded-[2.25rem] px-6 py-5 text-left"
              onClick={() => toggle(id)}
              aria-expanded={open}
              aria-controls={`${id}-content`}
            >
              <div className="flex-1 space-y-1">
                <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
                {description ? <p className="text-sm text-slate-600">{description}</p> : null}
              </div>
              <span
                className={clsx(
                  'mt-1 ml-auto inline-flex size-10 shrink-0 items-center justify-center self-start rounded-2xl border border-[rgba(18,60,84,0.16)] bg-white text-[var(--skye-700)] shadow-[0_12px_26px_rgba(12,32,64,0.16)] transition-transform duration-200',
                  open ? 'rotate-180' : 'rotate-0'
                )}
                aria-hidden="true"
              >
                <ChevronDown className="size-5" />
              </span>
            </button>
            <div
              id={`${id}-content`}
              className={clsx(
                'grid overflow-hidden px-6 transition-[grid-template-rows,opacity] duration-300 ease-out',
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="min-h-0 py-0 text-sm text-slate-600">{content}</div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
