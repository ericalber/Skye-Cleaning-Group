import { CalendarCheck, Clock, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book',
    description: 'Quick form or WhatsApp with a fast response from our team.',
    accent: 'rose',
  },
  {
    icon: Clock,
    title: 'We arrive on time',
    description: 'A punctual crew shows up with a clear checklist and premium supplies.',
    accent: 'emerald',
  },
  {
    icon: Sparkles,
    title: 'Enjoy your space',
    description: 'Final walk-through plus our Skye Done-Right Guarantee.',
    accent: 'gold',
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
        {steps.map(({ icon: Icon, title, description, accent }) => (
          <div key={title} className="card-premium p-6 text-center text-ink-900">
            <div className="card-premium__body flex flex-col items-center">
              <span className="card-premium__icon" data-variant={accent}>
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
