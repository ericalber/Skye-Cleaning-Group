'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Building, Building2, PartyPopper, RefreshCw, Sparkles, Truck } from 'lucide-react'
import QuoteForm, { type QuoteService } from './QuoteForm'

type Accent = 'emerald' | 'gold' | 'violet' | 'rose'

type Service = {
  icon: typeof RefreshCw
  title: string
  description: string
  features: string[]
  value: QuoteService
  accent: Accent
  slug: string
}

const services: Service[] = [
  {
    icon: RefreshCw,
    title: 'Recurring Cleaning',
    slug: 'recurring-cleaning',
    description: 'The cadence that keeps your home feeling hotel-fresh week after week.',
    features: ['Custom schedule & scope', 'Same trusted crew whenever possible', 'Signature Skye Cleaning checklist'],
    value: 'recurring',
    accent: 'emerald',
  },
  {
    icon: Sparkles,
    title: 'One-Time Deep Clean',
    slug: 'one-time-deep-clean',
    description: 'Detail care for kitchens, baths, and high-touch zones before big moments.',
    features: ['Detailing for fixtures & trim', 'Professional-grade products', 'Special focus on buildup areas'],
    value: 'deep',
    accent: 'rose',
  },
  {
    icon: Truck,
    title: 'Move-In / Move-Out',
    slug: 'move-in-move-out',
    description: 'Deliver or receive a property that is inspection-ready without the stress.',
    features: ['Cabinets & drawers inside', 'Appliance interior detailing', 'Baseboards, doors, and floor edges'],
    value: 'move',
    accent: 'gold',
  },
  {
    icon: Building2,
    title: 'Light Commercial',
    slug: 'light-commercial',
    description: 'Boutique offices, studios, and clinics serviced after-hours with discretion.',
    features: ['Flexible scheduling windows', 'Discreet, uniformed team', 'Usage reports on request'],
    value: 'light',
    accent: 'violet',
  },
  {
    icon: Building,
    title: 'Apartment & Condo',
    slug: 'apartment-condo',
    description: 'Tailored care for high-rise, condo, and pied-à-terre lifestyles.',
    features: ['Optimized visits for compact layouts', 'Finish-safe, low-odor products', 'Compliance with building protocols'],
    value: 'apartment',
    accent: 'emerald',
  },
  {
    icon: PartyPopper,
    title: 'Post-Event Refresh',
    slug: 'post-event-refresh',
    description: 'Reset after gatherings so you can focus on guests, not the cleanup.',
    features: ['Trash removal & reset', 'Spot treating floors & upholstery', 'Light staging of common areas'],
    value: 'event',
    accent: 'rose',
  },
]

const accentSwatch: Record<Accent, string> = {
  emerald: 'bg-emerald-200',
  gold: 'bg-amber-200',
  violet: 'bg-violet-200',
  rose: 'bg-rose-200',
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<QuoteService | null>(null)

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
        {services.map(({ icon: Icon, title, description, features, value, accent, slug }) => {
          const bulletClass = accentSwatch[accent]

          return (
            <div key={title} className="card-premium p-6 text-left text-ink-900">
              <div className="card-premium__body">
                <Link
                  href={`/services/${slug}`}
                  className="card-premium__icon transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-[var(--skye-400)] focus-visible:outline-none"
                  data-variant={accent}
                  aria-label={`${title} service details`}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </Link>
                <h3 className="mt-4 text-xl font-semibold text-ink-900">
                  <Link
                    href={`/services/${slug}`}
                    className="hover:text-[var(--skye-700)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--skye-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
                <div className="card-premium__divider" />
                <ul className="space-y-2 text-sm text-ink-900">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className={`mt-2 h-1.5 w-1.5 rounded-full ${bulletClass}`} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setSelectedService(value)}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[var(--skye-600)] to-[var(--skye-400)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[--skye-700]"
                >
                  Check Availability
                </button>
              </div>
            </div>
          )
        })}
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
              className="card relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white p-5 sm:p-8"
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
