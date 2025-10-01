import clsx from 'clsx'
import Image from 'next/image'
import type { ReactNode } from 'react'

import Card from '@/components/ui-kits/Card'

export type EditorialTwoUpItem = {
  slug?: string
  eyebrow?: string
  title: string
  body: string[]
  image: string
  icon?: ReactNode
}

export type EditorialTwoUpProps = {
  eyebrow?: string
  title?: string
  description?: string
  items: [EditorialTwoUpItem, EditorialTwoUpItem]
  className?: string
}

export default function EditorialTwoUp({ eyebrow, title, description, items, className }: EditorialTwoUpProps) {
  return (
    <section className={clsx('space-y-8', className)}>
      {(eyebrow || title || description) && (
        <div className="space-y-2 text-center md:text-left">
          {eyebrow ? (
            <span className="inline-flex items-center justify-center rounded-full border border-[rgba(18,60,84,0.16)] bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color-mix(in_oklab,var(--skye-700)_82%,black)]">
              {eyebrow}
            </span>
          ) : null}
          {title ? <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">{title}</h2> : null}
          {description ? <p className="text-sm text-slate-600 sm:text-base">{description}</p> : null}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.slug ?? item.title} padding="p-0" className="flex h-full flex-col overflow-hidden" tone="foam">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" loading="lazy" />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              {item.eyebrow ? (
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color-mix(in_oklab,var(--skye-600)_84%,black)]">
                  {item.icon}
                  {item.eyebrow}
                </span>
              ) : null}
              <h3 className="text-xl font-semibold text-ink-900">{item.title}</h3>
              <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                {item.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
