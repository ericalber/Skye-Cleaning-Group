import type { ReactNode } from 'react'

export type StepItem = {
  title: string
  description: ReactNode
}

type ServiceStepsProps = {
  title?: string
  eyebrow?: string
  items: StepItem[]
}

export default function ServiceSteps({ title = 'How the Skye concierge flow works', eyebrow = '4-step methodology', items }: ServiceStepsProps) {
  if (!items.length) return null

  return (
    <section className="container-px">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center">
          <span className="slx-section__eyebrow block">{eyebrow}</span>
          <h2 className="slx-section__title">{title}</h2>
        </div>
        <div className="slx-steps">
          {items.map((item, index) => (
            <article key={item.title} className="slx-step">
              <span className="slx-step__badge" aria-hidden="true">{index + 1}</span>
              <h3 className="slx-step__title">{item.title}</h3>
              <p className="slx-step__copy">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
