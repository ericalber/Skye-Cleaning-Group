import Image from 'next/image'
import Link from 'next/link'

import PageShell from '@/components/PageShell'
import ModalQuote from '@/components/ModalQuote'

const heroStats = [
  { label: 'Residences', value: '1000+', detail: 'Private homes and penthouses reimagined with Skye detailing.' },
  { label: 'Corporate offices', value: '75', detail: 'Executive suites and venture studios kept launch-ready every week.' },
  { label: 'Medical sites', value: '18', detail: 'Clinics and med spas maintained to infection control standards.' },
  { label: 'Wineries', value: '50+', detail: 'Wine country estates and tasting rooms staged between pours.' }
]

const caseStudies = [
  {
    title: 'Pacific Heights Townhouse',
    segment: 'Luxury residence',
    location: 'San Francisco, California',
    narrative:
      'A heritage three story townhouse needed a reset after an interior design overhaul. Our crew cataloged new finishes, sourced low moisture products for silk wall coverings, and created a seasonal detailing map for antiques and art. The owners now welcome guests every Friday evening without a second thought.',
    metrics: [
      { label: 'Detailing window', value: '72 hours' },
      { label: 'Resident satisfaction score', value: '98%' },
      { label: 'Maintenance visits per month', value: '6' }
    ],
    before: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
    after: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Napa Valley Manor',
    segment: 'Estate and guest suites',
    location: 'St. Helena, California',
    narrative:
      'Wine country hosts requested a program that could flip guest suites between tastings while preserving hand plaster walls and antique hardwood. We assigned a five person team with a dedicated laundry captain, integrated humidity sensors, and staged a linen library for seamless turnovers.',
    metrics: [
      { label: 'Guest stay readiness', value: 'Under 4 hours' },
      { label: 'Inventory variance', value: 'Below 1 percent' },
      { label: 'Scent profile', value: 'Custom lavender citrus blend' }
    ],
    before: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80',
    after: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Financial District HQ',
    segment: 'Corporate office',
    location: 'San Francisco, California',
    narrative:
      'A venture firm needed their two floor headquarters ready for investor demos with zero disruption to call schedules. We introduced silent evening crews, anti static treatments for media walls, and a scent zoning plan that keeps collaboration areas energizing and boardrooms serene.',
    metrics: [
      { label: 'Nightly turnaround', value: '3 hours' },
      { label: 'Employee wellness survey uplift', value: '22 percent' },
      { label: 'Emergency call outs', value: 'Under 20 minutes response' }
    ],
    before: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    after: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Marin Wellness Collective',
    segment: 'Medical clinic',
    location: 'Mill Valley, California',
    narrative:
      'This integrative care clinic blends spa rituals with medical treatments. We collaborate with their infection control lead to schedule instrument support, UV sanitation for treatment rooms, and aromatherapy resets that match each modality.',
    metrics: [
      { label: 'Room readiness', value: '15 minutes between patients' },
      { label: 'Infection control compliance', value: '100 percent audit pass' },
      { label: 'Client loyalty increase', value: '18 percent growth' }
    ],
    before: 'https://images.unsplash.com/photo-1529429617124-aee8095725cb?auto=format&fit=crop&w=1600&q=80',
    after: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80'
  }
]

const testimonialQuotes = [
  {
    quote:
      'Skye took our long neglected townhouse and turned it into a gallery ready residence. The crew now anticipates every preference from floral placement to the way we stage the piano room.',
    client: 'Charlotte W. | Townhouse Owner'
  },
  {
    quote:
      'Their clinic protocols rival top tier hospitals yet the atmosphere stays serene. Our providers finish each day knowing every space is patient ready.',
    client: 'Dr. Maya L. | Medical Director'
  },
  {
    quote:
      'The office stays camera ready for investor demos and the scent profile they created is now part of our brand. That is the definition of partnership.',
    client: 'Evan R. | Managing Partner'
  }
]

export default function PortfolioPage() {
  return (
    <PageShell mainClassName="space-y-24 pb-24">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-85"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(6,18,28,0.55), rgba(12,34,52,0.82)), url(https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-[1] container-px py-24 text-white sm:py-32">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              Portfolio
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">Before and after stories that prove the Skye promise.</h1>
            <p className="mx-auto max-w-3xl text-sm text-white/85 sm:text-base">
              These transformations span private homes, landmark estates, corporate suites, and medical clinics. Explore the rituals, technology, and hospitality touches behind each glow up.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map(({ label, value, detail }) => (
                <div key={label} className="rounded-3xl border border-white/25 bg-white/10 p-6 text-left shadow-[0_18px_32px_rgba(10,40,60,0.24)]">
                  <p className="text-3xl font-black">{value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/70">{label}</p>
                  <p className="mt-2 text-xs text-white/80">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-px" id="case-studies">
        <div className="mx-auto max-w-6xl space-y-16">
          {caseStudies.map(({ title, segment, location, narrative, metrics, before, after }) => (
            <article key={title} className="space-y-8 rounded-[2.5rem] bg-white p-8 shadow-[0_28px_68px_rgba(15,60,90,0.12)] lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--skye-600)]">{segment}</p>
                    <h2 className="text-3xl font-black text-ink-900">{title}</h2>
                    <p className="text-sm font-semibold text-slate-600">{location}</p>
                  </div>
                  <p className="text-sm text-slate-600 sm:text-base">{narrative}</p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {metrics.map(({ label, value }) => (
                      <div key={label} className="rounded-2xl border border-[var(--skye-100)] bg-[var(--foam)] px-4 py-5 text-left">
                        <p className="text-lg font-bold text-ink-900">{value}</p>
                        <p className="text-xs uppercase tracking-wide text-[var(--skye-700)]">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <figure className="relative h-48 rounded-[1.5rem] bg-black/10">
                      <Image src={before} alt={`${title} before`} fill className="rounded-[1.5rem] object-cover" />
                      <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-900">
                        Before
                      </figcaption>
                    </figure>
                    <figure className="relative h-48 rounded-[1.5rem] bg-black/10">
                      <Image src={after} alt={`${title} after`} fill className="rounded-[1.5rem] object-cover" />
                      <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-900">
                        After
                      </figcaption>
                    </figure>
                  </div>
                  <div className="rounded-3xl border border-[var(--skye-100)] bg-[var(--foam)] p-6 text-sm text-slate-600">
                    <p>
                      Each portfolio project receives a private dashboard with visit recaps, supply logs, and photo archives so stakeholders can validate the transformation step by step.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-px" id="testimonials">
        <div className="mx-auto max-w-5xl space-y-10 rounded-[2.5rem] bg-[--foam] px-10 py-12 text-ink-900 shadow-[0_28px_68px_rgba(15,60,90,0.12)]">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-black">Praise from our community</h2>
            <p className="text-sm text-slate-600 sm:text-base">Authentic voices from homeowners, executives, and medical professionals we serve.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonialQuotes.map(({ quote, client }) => (
              <blockquote key={client} className="rounded-3xl border border-[var(--skye-100)] bg-white p-6 text-sm text-slate-600 shadow-[0_18px_36px_rgba(30,80,110,0.08)]">
                <p className="italic">“{quote}”</p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--skye-700)]">{client}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px" id="cta">
        <div className="mx-auto max-w-5xl space-y-6 rounded-[2rem] bg-white px-8 py-12 text-center text-ink-900 shadow-[0_24px_60px_rgba(18,60,84,0.14)]">
          <h2 className="text-3xl font-black">Ready to plan your own transformation</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 sm:text-base">
            Invite us for a walkthrough. We will deliver a tailored playbook, recommended cadence, and a preview of the sensory experience your guests will feel.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="tel:+14154978008" className="btn btn-primary">
              Call +1 (415) 497-8008
            </Link>
            <ModalQuote triggerLabel="Request a tailored proposal" triggerClassName="btn btn-secondary" initialService="recurring" compact title="Let’s design your tailored proposal" description="Outline your goals and we will build a concierge plan with timing, crews, and investment details." titleClassName="text-2xl font-extrabold text-[--ink-900]" descriptionClassName="text-sm font-medium text-slate-700" />
          </div>
        </div>
      </section>
    </PageShell>
  )
}
