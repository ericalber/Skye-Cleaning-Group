import clsx from 'clsx'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import Card from '@/components/ui-kits/Card'

export type RelatedLink = {
  title: string
  description?: string
  href: string
}

export type RelatedLinksProps = {
  eyebrow?: string
  title?: string
  description?: string
  links: RelatedLink[]
  className?: string
}

export default function RelatedLinks({ eyebrow, title, description, links, className }: RelatedLinksProps) {
  return (
    <section className={clsx('space-y-6', className)}>
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
      <div className="grid gap-4 md:grid-cols-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="group block h-full">
            <Card padding="p-6" tone="foam" className="flex h-full flex-col">
              <h3 className="text-lg font-semibold text-ink-900">{link.title}</h3>
              {link.description ? <p className="mt-2 text-sm text-slate-600">{link.description}</p> : null}
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--skye-700)]">
                Learn more
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
