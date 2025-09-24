import { CalendarCheck, Clock, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book',
    description: 'Quick form or WhatsApp with a fast response from our team.',
  },
  {
    icon: Clock,
    title: 'We arrive on time',
    description: 'A punctual crew shows up with a clear checklist and premium supplies.',
  },
  {
    icon: Sparkles,
    title: 'Enjoy your space',
    description: 'Final walk-through plus our Skye Done-Right Guarantee.',
  },
]

export default function Process() {
  return (
    <section id="process" className="container-px py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-black sm:text-4xl">How Skye Cleaning Group works</h2>
        <p className="mt-3 text-slate-600">
          From first contact to the final inspection, every step is designed to be simple, transparent, and friction-free.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, description }) => (
          <div key={title} className="surface surface--white p-6 text-center">
            <Icon className="mx-auto mb-4 size-8 text-skye-600" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
