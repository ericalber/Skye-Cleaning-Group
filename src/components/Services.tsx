'use client'

import { Suspense, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Building, Building2, PartyPopper, RefreshCw, Sparkles, Truck } from 'lucide-react'
import QuoteForm from './QuoteForm'

const services = [
  {
    icon: RefreshCw,
    title: 'Recurring Cleaning',
    description: 'The cadence that keeps your home feeling hotel-fresh week after week.',
    features: ['Custom schedule & scope', 'Same trusted crew whenever possible', 'Signature Skye Cleaning checklist'],
    value: 'recurring',
    iconColor: 'text-emerald-300',
  },
  {
    icon: Sparkles,
    title: 'One-Time Deep Clean',
    description: 'Detail care for kitchens, baths, and high-touch zones before big moments.',
    features: ['Detailing for fixtures & trim', 'Professional-grade products', 'Special focus on buildup areas'],
    value: 'deep',
    iconColor: 'text-sky-200',
  },
  {
    icon: Truck,
    title: 'Move-In / Move-Out',
    description: 'Deliver or receive a property that is inspection-ready without the stress.',
    features: ['Cabinets & drawers inside', 'Appliance interior detailing', 'Baseboards, doors, and floor edges'],
    value: 'move',
    iconColor: 'text-amber-300',
  },
  {
    icon: Building2,
    title: 'Light Commercial',
    description: 'Boutique offices, studios, and clinics serviced after-hours with discretion.',
    features: ['Flexible scheduling windows', 'Discreet, uniformed team', 'Usage reports on request'],
    value: 'light',
    iconColor: 'text-violet-200',
  },
  {
    icon: Building,
    title: 'Apartment & Condo',
    description: 'Tailored care for high-rise, condo, and pied-à-terre lifestyles.',
    features: ['Optimized visits for compact layouts', 'Finish-safe, low-odor products', 'Compliance with building protocols'],
    value: 'apartment',
    iconColor: 'text-cyan-200',
  },
  {
    icon: PartyPopper,
    title: 'Post-Event Refresh',
    description: 'Reset after gatherings so you can focus on guests, not the cleanup.',
    features: ['Trash removal & reset', 'Spot treating floors & upholstery', 'Light staging of common areas'],
    value: 'event',
    iconColor: 'text-rose-300',
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<(typeof services)[number]['value'] | null>(null)

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
        {services.map(({ icon: Icon, title, description, features, value, iconColor }) => (
          <div key={title} className="surface surface--navy surface--metal p-6 text-left text-white">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Icon className={`size-6 ${iconColor}`} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/80">{description}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setSelectedService(value)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Check Availability
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="card relative w-full max-w-xl overflow-hidden bg-white p-6 sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 rounded-full bg-black/5 px-2 py-1 text-sm font-semibold"
                aria-label="Close availability form"
              >
                ✕
              </button>
              <h3 className="mb-2 text-2xl font-bold text-ink-900">Reserve your Skye clean</h3>
              <p className="mb-5 text-sm text-slate-600">
                Complete the form and our concierge team will confirm availability for the selected service.
              </p>
              <Suspense fallback={null}>
                <QuoteForm compact initialService={selectedService} />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
