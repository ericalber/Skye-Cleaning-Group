import clsx from 'clsx'
import type { ReactNode } from 'react'

import Card from '@/components/ui-kits/Card'

export type ProcessStep = {
  title: string
  description: string
  icon?: ReactNode
}

export type ProcessStepsProps = {
  eyebrow?: string
  title?: string
  description?: string
  steps: ProcessStep[]
  className?: string
}

export default function ProcessSteps({ eyebrow, title, description, steps, className }: ProcessStepsProps) {
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
        {steps.map((step, index) => (
          <Card key={step.title} tone="foam" padding="p-6" className="h-full">
            <div className="flex items-center gap-3 text-[color-mix(in_oklab,var(--skye-600)_82%,black)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color-mix(in_oklab,var(--skye-50)_88%,white)] text-xl font-black shadow-[0_12px_26px_rgba(18,60,84,0.14)]">
                {index + 1}
              </span>
              {step.icon ? <span className="text-ink-900">{step.icon}</span> : null}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-ink-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
