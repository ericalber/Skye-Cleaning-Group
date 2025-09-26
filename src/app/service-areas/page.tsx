import Image from 'next/image'
import Link from 'next/link'

import PageShell from '@/components/PageShell'
import ModalQuote from '@/components/ModalQuote'

const coverageZones = [
  {
    name: 'San Francisco Proper',
    neighborhoods: ['Pacific Heights', 'Russian Hill', 'Nob Hill', 'Presidio Heights', 'Sea Cliff'],
    highlight: 'Fast access crews based in the city keep premium residences ready for private showings and last minute entertaining.',
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'Marin County',
    neighborhoods: ['Mill Valley', 'Tiburon', 'Sausalito', 'Larkspur', 'Corte Madera'],
    highlight: 'Estate housekeepers coordinate with property managers for seasonal deep care, yacht prep, and guest suite changeovers.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'North Bay',
    neighborhoods: ['Petaluma', 'Santa Rosa', 'Healdsburg', 'Sebastopol'],
    highlight: 'Winery villas and weekend homes receive maintenance visits that align with owner arrivals and inventory deliveries.',
    image: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'Peninsula',
    neighborhoods: ['San Mateo', 'Burlingame', 'Hillsborough', 'Redwood City'],
    highlight: 'Executive suites and family estates benefit from split crews who manage both living quarters and office wings.',
    image: 'https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?auto=format&fit=crop&w=1600&q=80'
  }
]

const logisticPillars = [
  {
    title: 'Strategic dispatch hubs',
    copy: 'Teams stage from San Francisco and Corte Madera so morning arrivals stay punctual even on peak travel days.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Quality controllers on site',
    copy: 'Supervisors conduct surprise audits, surface testing, and scent calibration to ensure every finish meets the Skye signature.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Trusted partner network',
    copy: 'We coordinate with window detailers, stone restoration artisans, and landscaping leads already vetted for high end properties.',
    image: 'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=800&q=80',
  },
]

const expansionServices = [
  'Same day support for real estate agents staging photo ready listings',
  'Disaster recovery coordination including ozone treatments and equipment rentals',
  'Event reset teams for galas, product launches, and corporate hospitality suites',
  'Yacht and aircraft detailing in partnership with specialized vendors',
  'Sustainable supply sourcing with carbon tracking for conscientious owners'
]

export default function ServiceAreasPage() {
  return (
    <PageShell mainClassName="space-y-24 pb-24">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-85"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(5,15,25,0.55), rgba(12,34,52,0.82)), url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-[1] container-px py-24 text-white sm:py-32">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              Service Areas
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">From the Golden Gate to wine country, we stay within reach for every Skye visit.</h1>
            <p className="mx-auto max-w-3xl text-sm text-white/85 sm:text-base">
              Choose a neighborhood below to view coverage details, arrival windows, and property types we serve. Need support outside our core zone We coordinate trusted partners and travel teams on request.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="#zones" className="btn btn-primary">
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

      <section id="zones" className="container-px">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Neighborhood coverage</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Each zone below includes standard arrival windows, crew size, and concierge perks tailored to local lifestyles.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            {coverageZones.map(({ name, neighborhoods, highlight, image }) => (
              <article key={name} className="card-premium overflow-hidden text-left">
                <div className="card-premium__body">
                  <div className="relative h-60 w-full">
                    <Image src={image} alt={name} fill className="object-cover" />
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold text-ink-900">{name}</h3>
                      <span className="rounded-full bg-[var(--skye-100)] px-3 py-1 text-xs font-semibold text-[var(--skye-700)]">
                        {neighborhoods.length} focus areas
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{highlight}</p>
                    <ul className="flex flex-wrap gap-2 text-sm font-medium text-[var(--skye-700)]">
                      {neighborhoods.map((item) => (
                        <li key={item} className="rounded-full bg-[var(--foam)] px-3 py-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-10 rounded-[2.5rem] bg-[--foam] px-10 py-12 text-ink-900 shadow-[0_28px_68px_rgba(15,60,90,0.12)]">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-black">Logistics that keep promises</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              We blend precision routing with hospitality touchpoints so every service window feels effortless.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {logisticPillars.map(({ title, copy, image }) => (
              <article
                key={title}
                className="overflow-hidden rounded-3xl border border-[var(--skye-100)] bg-white shadow-[0_18px_36px_rgba(30,80,110,0.08)]"
              >
                <div className="relative h-40 w-full">
                  <Image src={image} alt={title} fill className="object-cover" />
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
                  <p className="text-sm text-slate-600">{copy}</p>
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
              <h2 className="text-3xl font-black">Need us somewhere new</h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Tell us about your property and travel timeline. We arrange preview visits, vendor onboarding, and temporary housing for crews when assignments fall outside our core coverage.
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
                    alt="Skye Cleaning Group team reviewing coverage map"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 p-6 text-center">
                  <p className="text-sm text-slate-600">
                    Share your project by phone or through our planning form. We respond within one business hour.
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
