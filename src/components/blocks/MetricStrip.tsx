import clsx from 'clsx'

import Card from '@/components/ui-kits/Card'

export type MetricItem = {
  label: string
  value: string
  caption?: string
}

export type MetricStripProps = {
  eyebrow?: string
  title?: string
  description?: string
  items: MetricItem[]
  className?: string
}

export default function MetricStrip({ eyebrow, title, description, items, className }: MetricStripProps) {
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Card key={item.label} tone="foam" padding="p-6" className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color-mix(in_oklab,var(--skye-600)_84%,black)]">
              {item.label}
            </p>
            <p className="mt-2 text-3xl font-black text-ink-900">{item.value}</p>
            {item.caption ? <p className="mt-2 text-sm text-slate-600">{item.caption}</p> : null}
          </Card>
        ))}
      </div>
    </section>
  )
}
