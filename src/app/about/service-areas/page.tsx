import Image from 'next/image'
import Link from 'next/link'

import PageShell from '@/components/PageShell'
import ModalQuote from '@/components/ModalQuote'

const coverageRegions = [
  {
    name: 'San Francisco Proper',
    highlight: 'Ultra-prime residences and executive suites across the city receive rapid crews staged minutes away.',
    cities: ['Pacific Heights', 'Russian Hill', 'Nob Hill', 'Presidio Heights', 'Sea Cliff', 'Mission Bay'],
  },
  {
    name: 'Marin County',
    highlight: 'Estate housekeeping for Tiburon coastlines to Ross valley retreats with yacht and guesthouse add-ons.',
    cities: ['Mill Valley', 'Tiburon', 'Sausalito', 'Larkspur', 'Corte Madera', 'Ross'],
  },
  {
    name: 'Peninsula Corridor',
    highlight: 'Founders, families, and venture hubs from Burlingame to Menlo Park enjoy synchronized home and office care.',
    cities: ['Burlingame', 'Hillsborough', 'San Mateo', 'Menlo Park', 'Redwood City', 'Atherton'],
  },
  {
    name: 'North Bay',
    highlight: 'Winery villas and weekend escapes stay showcase-ready with seasonal resets and guest changeovers.',
    cities: ['Petaluma', 'Santa Rosa', 'Healdsburg', 'Sebastopol', 'Glen Ellen'],
  },
  {
    name: 'Napa Valley',
    highlight: 'Tasting rooms and private estates receive finish-safe polishing before investor tours and harvest events.',
    cities: ['Napa', 'Yountville', 'St. Helena', 'Rutherford', 'Calistoga'],
  },
  {
    name: 'Sonoma Coast',
    highlight: 'Coastal residences and hospitality venues are serviced with salt-air protection and concierge amenities.',
    cities: ['Sonoma', 'Bodega Bay', 'Kenwood', 'Occidental', 'Tomales'],
  },
]

const logisticPillars = [
  {
    title: 'Strategic dispatch hubs',
    copy: 'Crews stage from San Francisco and Corte Madera, keeping arrival windows tight even on bridge traffic days.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Quality controllers on site',
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
    <PageShell bodyClassName="with-map-location with-gotravel" mainClassName="space-y-24 pb-24">
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
              Select a region for coverage notes and priority arrivals. Need a concierge crew outside the map? Tap request expansion and we mobilize travel teams or vetted partners.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="#coverage" className="btn btn-primary">
                Explore coverage
              </Link>
              <ModalQuote
                triggerLabel="Request expansion visit"
                triggerClassName="btn btn-secondary-ghost"
                initialService="light"
                title="Plan your expansion visit"
                description="Tell us about the neighborhood and arrival windows you need."
                compact
              />
            </div>
          </div>
        </div>
      </section>

      <section id="coverage" className="container-px">
        <div className="mlx-layout">
          <div className="mlx-map">
            <span className="mlx-map__badge">Bay Area</span>
            <Image
              src="https://images.unsplash.com/photo-1526481280695-3c4698753238?auto=format&fit=crop&w=1400&q=80"
              alt="Illustrated map of the San Francisco Bay Area"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mlx-regions">
            {coverageRegions.map(({ name, highlight, cities }) => (
              <article key={name} className="mlx-region">
                <div className="mlx-region__header">
                  <h2 className="mlx-region__title">{name}</h2>
                  <span className="mlx-region__count">{cities.length} cities</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{highlight}</p>
                <div className="mlx-city-list">
                  {cities.map((city) => (
                    <Link key={city} href="#consult" className="mlx-city">
                      {city}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Logistics that keep every promise</h2>
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
              <ul className="space-y-3 text-sm text-slate-600">
                {expansionServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--skye-500)] text-xs font-semibold text-white">
                      ✓
                    </span>
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
                    alt="Skye Cleaning Group team reviewing regional coverage"
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
                      triggerLabel="Request expansion visit"
                      triggerClassName="btn btn-secondary"
                      initialService="light"
                      title="Plan your expansion visit"
                      description="Tell us about the property or event."
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
