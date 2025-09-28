import Image from 'next/image'
import Link from 'next/link'

import ModalQuote from '@/components/ModalQuote'
import PageShell from '@/components/PageShell'
import ServiceAreaMap from '@/components/ServiceAreaMap'

const coverageRegions = [
  {
    name: 'San Francisco Proper',
    summary: 'Ultra-prime residences and executive suites across the city receive rapid crews staged minutes away.',
    cities: ['Pacific Heights', 'Russian Hill', 'Nob Hill', 'Presidio Heights', 'Sea Cliff', 'Mission Bay'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Marin County',
    summary: 'Estate housekeeping for Tiburon coastlines to Ross valley retreats with yacht and guesthouse add-ons.',
    cities: ['Mill Valley', 'Tiburon', 'Sausalito', 'Larkspur', 'Corte Madera', 'Ross'],
    image: 'https://images.unsplash.com/photo-1504435364-3c5d3cffe4a3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Peninsula Corridor',
    summary: 'Founders, families, and venture hubs enjoy synchronised home and office care from Burlingame to Menlo Park.',
    cities: ['Burlingame', 'Hillsborough', 'San Mateo', 'Menlo Park', 'Redwood City', 'Atherton'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'North Bay',
    summary: 'Winery villas and weekend escapes stay showcase-ready with seasonal resets and guest changeovers.',
    cities: ['Petaluma', 'Santa Rosa', 'Healdsburg', 'Sebastopol', 'Glen Ellen'],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Napa Valley',
    summary: 'Private tastings and investor tours sparkle thanks to finish-safe polishing before and after every harvest event.',
    cities: ['Napa', 'Yountville', 'St. Helena', 'Rutherford', 'Calistoga'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Sonoma Coast',
    summary: 'Coastal residences and hospitality venues receive salt-air protection, terrace resets, and concierge amenity staging.',
    cities: ['Sonoma', 'Bodega Bay', 'Kenwood', 'Occidental', 'Tomales'],
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80',
  },
]

const fieldStories = [
  {
    title: 'Presidio penthouse takeover',
    copy: '48-hour mobilisation with marble-safe restoration, wardrobe steaming, and amenity staging before investor arrival.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Napa harvest hospitality',
    copy: 'Seasonal villa resets with climate-controlled wine storage, terrace polishing, and guest suite rotation.',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Peninsula boardroom reset',
    copy: 'Nightly concierge crews restore venture suites with electrostatic sanitising, scent curation, and readiness reporting by 6am.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80',
  },
]

const logisticPillars = [
  {
    title: 'Strategic dispatch hubs',
    copy: 'Crews stage from San Francisco and Corte Madera, keeping arrival windows tight even on bridge traffic days.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Quality controllers on-site',
    copy: 'Supervisors perform scent, surface, and safety audits, capturing photographic proof for every project.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Trusted partner network',
    copy: 'Stone restoration, window detailing, and landscape teams are on-call to back our concierge experience.',
    image: 'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=800&q=80',
  },
]

const expansionServices = [
  'Same-day support for real estate brokers preparing photo-ready listings',
  'Disaster recovery coordination with ozone, drying, and specialty vendors',
  'Event reset crews for galas, summits, and high-profile hospitality suites',
  'Yacht and aircraft detailing managed with vetted luxury partners',
  'Sustainable supply audits with carbon tracking for ESG-focused owners',
]

export default function ServiceAreasPage() {
  return (
    <PageShell bodyClassName="with-map-location with-gotravel with-service-landing" mainClassName="space-y-24 pb-24">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-85"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(5,15,25,0.55), rgba(12,34,52,0.82)), url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-[1] container-px py-24 text-white sm:py-32">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              Service Areas
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">From the Golden Gate to wine country, Skye keeps your spaces inspection-ready.</h1>
            <p className="mx-auto max-w-3xl text-sm text-white/85 sm:text-base">
              Select a region for coverage notes and priority arrivals. Need a concierge crew outside the map? Tap request expansion and we mobilise travel teams or vetted partners.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="#coverage" className="btn btn-primary">Explore coverage</Link>
              <ModalQuote
                triggerLabel="Request expansion visit"
                triggerClassName="btn btn-secondary-ghost"
                initialService="light"
                title="Plan your expansion visit"
                description="Tell us about the neighbourhood and arrival windows you need."
                compact
              />
            </div>
          </div>
        </div>
      </section>

      <section id="coverage" className="container-px">
        <ServiceAreaMap regions={coverageRegions} />
      </section>

      <section id="zones" className="container-px">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Field concierge snapshots</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              A glimpse into the high-touch playbooks we execute across the Bay Area&apos;s most requested enclaves.
            </p>
          </div>
          <div className="gtx-grid -columns-3">
            {fieldStories.map(({ title, copy, image }) => (
              <article key={title} className="gtx-card">
                <div className="gtx-card__media">
                  <Image src={image} alt={title} fill className="object-cover" />
                </div>
                <div className="gtx-card__body text-left">
                  <span className="gtx-card__meta">Concierge case study</span>
                  <h3 className="gtx-card__title">{title}</h3>
                  <p className="gtx-card__excerpt">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Logistics that keep promises</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Hospitality-grade routing, reporting, and partner alignment keep every visit punctual and discreet.
            </p>
          </div>
          <div className="gtx-grid -columns-3">
            {logisticPillars.map(({ title, copy, image }) => (
              <article key={title} className="gtx-card">
                <div className="gtx-card__media">
                  <Image src={image} alt={title} fill className="object-cover" />
                </div>
                <div className="gtx-card__body">
                  <h3 className="gtx-card__title">{title}</h3>
                  <p className="gtx-card__excerpt">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="consult" className="container-px">
        <div className="mx-auto max-w-5xl space-y-8 rounded-[2rem] bg-white px-8 py-12 text-ink-900 shadow-[0_24px_60px_rgba(18,60,84,0.14)]">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-black">Need coverage outside the map?</h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Share your property style, timeline, and preferred level of discretion. We stage preview visits or travel crews in under 48 hours for qualified projects.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 rounded-3xl border border-[var(--skye-100)] bg-[var(--foam)] p-6 shadow-[0_18px_36px_rgba(18,60,84,0.12)]">
                {expansionServices.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--skye-500)]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-premium overflow-hidden">
              <div className="card-premium__body">
                <div className="relative h-72 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
                    alt="Skye Cleaning Group team reviewing coverage map"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 p-6 text-center">
                  <p className="text-sm text-slate-600">
                    Prefer to talk? Call or send the form—we respond within one business hour.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href="tel:+14154978008" className="btn btn-primary">
                      Call +1 (415) 497-8008
                    </Link>
                    <ModalQuote
                      triggerLabel="Request a planning session"
                      triggerClassName="btn btn-secondary"
                      initialService="recurring"
                      title="Schedule a planning session"
                      description="Share coverage details and our concierge will follow up within one hour."
                      compact
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
