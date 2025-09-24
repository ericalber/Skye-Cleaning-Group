import { Building, Building2, PartyPopper, RefreshCw, Sparkles, Truck } from 'lucide-react'

const services = [
  {
    icon: RefreshCw,
    title: 'Recurring Cleaning',
    description: 'The cadence that keeps your home feeling hotel-fresh week after week.',
    features: ['Custom schedule & scope', 'Same trusted crew whenever possible', 'Signature Skye Cleaning checklist'],
    value: 'recurring',
  },
  {
    icon: Sparkles,
    title: 'One-Time Deep Clean',
    description: 'Detail care for kitchens, baths, and high-touch zones before big moments.',
    features: ['Detailing for fixtures & trim', 'Professional-grade products', 'Special focus on buildup areas'],
    value: 'deep',
  },
  {
    icon: Truck,
    title: 'Move-In / Move-Out',
    description: 'Deliver or receive a property that is inspection-ready without the stress.',
    features: ['Cabinets & drawers inside', 'Appliance interior detailing', 'Baseboards, doors, and floor edges'],
    value: 'move',
  },
  {
    icon: Building2,
    title: 'Light Commercial',
    description: 'Boutique offices, studios, and clinics serviced after-hours with discretion.',
    features: ['Flexible scheduling windows', 'Discreet, uniformed team', 'Usage reports on request'],
    value: 'light',
  },
  {
    icon: Building,
    title: 'Apartment & Condo',
    description: 'Tailored care for high-rise, condo, and pied-à-terre lifestyles.',
    features: ['Optimized visits for compact layouts', 'Finish-safe, low-odor products', 'Compliance with building protocols'],
    value: 'apartment',
  },
  {
    icon: PartyPopper,
    title: 'Post-Event Refresh',
    description: 'Reset after gatherings so you can focus on guests, not the cleanup.',
    features: ['Trash removal & reset', 'Spot treating floors & upholstery', 'Light staging of common areas'],
    value: 'event',
  },
]

export default function Services() {
  return (
    <section id="services" className="container-px py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="chip">Skye Cleaning Group service menu</span>
        <h2 className="mt-4 text-3xl font-black sm:text-4xl">Every visit, boutique-hotel polish.</h2>
        <p className="mt-3 text-slate-600">
          Choose the visit that fits your home or workspace in the Bay Area. We tailor the checklist, cadence, and
          materials to match your lifestyle.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description, features, value }) => (
          <div key={title} className="surface surface--white p-6 text-left">
            <Icon className="mb-4 size-8 text-skye-600" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-ink-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-900">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-skye-500" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={`/?service=${value}#quote`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-skye-200 bg-white px-5 py-3 text-sm font-semibold text-skye-700 hover:border-skye-400"
            >
              Check Availability
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
