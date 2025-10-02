import Link from 'next/link'
import Image from 'next/image'
import { Compass, ShieldCheck, Clock3, Sparkles, MapPin } from 'lucide-react'

import { tripTakerMotion } from './ui-kits/Motion'

const fieldJourneys = [
  {
    title: 'Presidio penthouse takeover',
    excerpt:
      'Mobilized within forty-eight hours to welcome investors. Marble-safe restoration, turndown staging, and executive reporting happen before wheels touch the runway.',
    bullets: [
      'Dedicated liaison with zone-by-zone checklists',
      'Closet steaming and floral staging pre-arrival',
      'Confidential photo recap with brightness indicators',
    ],
  },
  {
    title: 'Napa harvest hospitality',
    excerpt:
      'Seasonal villa resets for private tastings. Terrace polishing, wine cellar climate checks, and suite rotations stay in sync with the harvest calendar.',
    bullets: [
      'Porous stone care and heated pool balancing',
      'Daily linen rotations with seasonal amenities',
      'Coordination with concierge for private tastings',
    ],
  },
  {
    title: 'Peninsula boardroom reset',
    excerpt:
      'Conference suites ready by 6 AM with electrostatic sanitizing, calibrated diffusers, and real-time dashboards for leadership.',
    bullets: [
      'Low-noise overnight logistics',
      'Scent and security audits every pass',
      'Digital dashboard delivered in under thirty minutes',
    ],
  },
]

const logisticPillars = [
  {
    title: 'Strategic dispatch hubs',
    copy: 'Crews stage from San Francisco and Corte Madera to keep arrival windows tight even during bridge traffic and fog delays.',
    icon: Clock3,
  },
  {
    title: 'Quality controllers on-site',
    copy: 'Supervisors run scent, surface, and safety audits with photographic proof so stakeholders trust that every standard was met.',
    icon: ShieldCheck,
  },
  {
    title: 'Trusted partner network',
    copy: 'Stone restoration, window detailing, floral design, and landscaping partners remain on call to extend the concierge experience beyond cleaning.',
    icon: Compass,
  },
]

const expansionBullets = [
  'Same-day support for real-estate teams prepping photo-ready listings',
  'Recovery coordination with ozone, drying, and specialty vendors',
  'Event strike teams for galas, summits, and hospitality lounges',
  'Yacht and aircraft detailing managed with vetted partners',
  'ESG-focused supply audits with responsible disposal tracking',
]

export default function ServiceAreasEditorial() {
  return (
    <section className="bg-white" aria-labelledby="service-areas-editorial">
      <div className="relative mx-auto max-w-7xl space-y-24 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(18,60,84,0.12)] bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color-mix(in_oklab,var(--skye-700)_82%,black)]">
              Neighbourhood field journeys
            </p>
            <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">The concierge playbook behind our most requested enclaves.</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Every territory receives premium cards, aligned cadence, and a hospitality playbook so the Skye standard stays consistent from tower penthouses to vineyard retreats.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {fieldJourneys.map((journey) => (
              <article
                key={journey.title}
                className={`group relative flex h-full flex-col rounded-3xl border border-white/70 bg-white/90 p-6 text-left text-sm text-slate-600 shadow-[0_24px_60px_rgba(12,32,64,0.14)] backdrop-blur-md transition-all ${tripTakerMotion}`}
              >
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(18,60,84,0.12)] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color-mix(in_oklab,var(--skye-600)_84%,black)]">
                  Field report
                </span>
                <h3 className="text-lg font-semibold text-ink-900">{journey.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{journey.excerpt}</p>
                <ul className="mt-4 space-y-2 text-[0.92rem] leading-snug text-slate-700">
                  {journey.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <Sparkles className="mt-0.5 size-4 text-[var(--skye-500)]" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(18,60,84,0.12)] bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color-mix(in_oklab,var(--skye-700)_82%,black)]">
              Logistics that keep promises
            </p>
            <p className="text-sm text-slate-600 sm:text-base">
              Operations choreographed to deliver punctuality, confidentiality, and audit-ready reporting no matter which side of the bridge you call home.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {logisticPillars.map(({ title, copy, icon: Icon }) => (
              <article
                key={title}
                className={`group relative flex h-full flex-col rounded-3xl border border-white/70 bg-white/90 p-6 text-left text-sm text-slate-600 shadow-[0_24px_60px_rgba(12,32,64,0.14)] backdrop-blur-md transition-all ${tripTakerMotion}`}
              >
                <span className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-[color-mix(in_oklab,var(--skye-100)_86%,white)] text-[var(--skye-700)] shadow-[0_14px_28px_rgba(18,60,84,0.16)]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-10 rounded-[2rem] border border-[rgba(18,60,84,0.12)] bg-white/92 p-8 shadow-[0_30px_80px_rgba(12,32,64,0.16)] backdrop-blur-lg lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(18,60,84,0.12)] bg-[color-mix(in_oklab,var(--skye-50)_88%,white)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color-mix(in_oklab,var(--skye-700)_82%,black)]">
              Need coverage outside the map?
            </p>
            <p className="text-sm text-slate-600 sm:text-base">
              Share your property brief, discretion level, and timeline. We mobilize preview visits or travel crews within forty-eight hours for qualified projects.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              {expansionBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <MapPin className="mt-1 size-4 text-[var(--skye-500)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/60 shadow-[0_26px_72px_rgba(12,32,64,0.18)]">
            <div className="relative h-72 w-full">
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
                alt="Concierge planning coverage across the Bay Area"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="space-y-4 px-6 pb-6 pt-5 text-center text-sm text-slate-600">
              <p>Prefer to talk now? Our concierge replies within one business hour.</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link href="tel:+14154978008" className="btn btn-primary sm:min-w-[14rem]">
                  Call +1 (415) 497-8008
                </Link>
                <a
                  href="mailto:contact@skyecgroup.com?subject=Request%20a%20Planning%20-%20Skye%20Cleaning%20Group&body=Hello%20team,%20I%20would%20like%20to%20request%20a%20planning%20session%20for%20cleaning%20services."
                  className="btn btn-secondary sm:min-w-[14rem]"
                >
                  Request a planning session
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
