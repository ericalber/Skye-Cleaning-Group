import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import PageShell from '@/components/PageShell'
import PageBanner from '@/components/PageBanner'
import Card from '@/components/ui-kits/Card'
import Button from '@/components/ui-kits/Button'
import MetricStrip, { type MetricItem } from '@/components/blocks/MetricStrip'
import ProcessSteps, { type ProcessStep } from '@/components/blocks/ProcessSteps'
import RelatedLinks, { type RelatedLink } from '@/components/blocks/RelatedLinks'
import { serviceDetails } from '@/data/servicePages'
import type { ServiceDetail } from '@/data/servicePages'

const supportingMedia: Record<string, { src: string; caption: string }[]> = {
  'recurring-cleaning': [
    {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      caption: 'Dedicated crew staging the social core before family arrival.',
    },
    {
      src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80',
      caption: 'Air-quality checks and scent mapping logged in the Skye dashboard.',
    },
  ],
  'one-time-deep-clean': [
    {
      src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Strike team restoring a show kitchen for a real estate preview.',
    },
    {
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Detailing textiles and lighting to deliver a hospitality reveal.',
    },
  ],
  'move-in-move-out': [
    {
      src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      caption: 'Final inspection before keys change hands.',
    },
    {
      src: 'https://images.unsplash.com/photo-1505692794403-55b39b88a5f7?auto=format&fit=crop&w=1200&q=80',
      caption: 'Protective floor coverings during elevator and hallway transit.',
    },
  ],
  'post-construction-cleaning': [
    {
      src: 'https://images.unsplash.com/photo-1582719478478-9ff3a3c4c52f?auto=format&fit=crop&w=1200&q=80',
      caption: 'HEPA vacuuming drywall dust prior to art installation.',
    },
    {
      src: 'https://images.unsplash.com/photo-1580587771419-29b1f1c8bb9b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Polishing new stone surfaces to showroom sheen.',
    },
  ],
  'window-cleaning': [
    {
      src: 'https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&w=1200&q=80',
      caption: 'Rope access specialists handling skyline glass.',
    },
    {
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      caption: 'Interior mullion detailing to restore natural light.',
    },
  ],
  'carpet-upholstery': [
    {
      src: 'https://images.unsplash.com/photo-1605870445919-838d190e8f9c?auto=format&fit=crop&w=1200&q=80',
      caption: 'Low-moisture extraction protecting designer carpet fibers.',
    },
    {
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      caption: 'Hand finishing drapery panels before a private event.',
    },
  ],
  'janitorial-commercial': [
    {
      src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
      caption: 'Disinfection protocols staged for boutique medical suites.',
    },
    {
      src: 'https://images.unsplash.com/photo-1580281657521-4c5ea04f0b1b?auto=format&fit=crop&w=1200&q=80',
      caption: 'UV and ATP testing to validate wellness spaces.',
    },
  ],
  'apartment-condo': [
    {
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      caption: 'High-rise apartment refreshed ahead of a relocation walkthrough.',
    },
    {
      src: 'https://images.unsplash.com/photo-1584664213408-2f83a040607b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Concierge team aligning balcony furniture to skyline sightlines.',
    },
  ],
  'post-event-refresh': [
    {
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      caption: 'Strike team restoring a gala venue before sunrise.',
    },
    {
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
      caption: 'Crew coordinating rentals and vendor pickups seamlessly.',
    },
  ],
  'light-commercial': [
    {
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
      caption: 'Evening reset for a boutique commercial suite.',
    },
    {
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      caption: 'Conference tables sanitized and reset between investor meetings.',
    },
  ],
}

const breadcrumbBase = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
]

const relatedFallback = serviceDetails.slice(0, 3)

function buildServiceMetrics(service: ServiceDetail): MetricItem[] {
  return [
    {
      label: 'Visits orchestrated',
      value: '1.2k+',
      caption: `${service.name} engagements delivered across the Bay Area each year.`,
    },
    {
      label: 'Crew continuity',
      value: '94%',
      caption: 'Concierge specialists who return to the same properties every rotation.',
    },
    {
      label: 'Rapid response',
      value: '<24 hrs',
      caption: 'Average turnaround for urgent add-on requests logged in your portal.',
    },
    {
      label: 'Blueprint updates',
      value: '300+/mo',
      caption: 'Micro adjustments synchronized across chemistries, access, and reporting.',
    },
  ]
}

function buildServiceProcess(service: ServiceDetail): ProcessStep[] {
  return [
    {
      title: `Blueprint ${service.name.toLowerCase()}`,
      description:
        'We walk the space, capture access rules, and translate your preferences into the Skye command center.',
    },
    {
      title: 'Stage the crew choreography',
      description:
        'Core specialists, specialty strike teams, and finish-safe chemistries align to your calendar and stakeholders.',
    },
    {
      title: 'Deliver the reveal',
      description:
        'Visits conclude with photographic proof, metrics, and recommendations so you can brief leadership with one link.',
    },
  ]
}

function buildRelatedLinks(service: ServiceDetail, related: ServiceDetail[]): RelatedLink[] {
  const serviceLinks: RelatedLink[] = [
    {
      title: `Book ${service.name}`,
      description: service.ctaCopy,
      href: '/#quote',
    },
  ]

  serviceLinks.push(
    ...related.map((item) => ({
      title: item.name,
      description: getServiceSummary(item.subheading, item.intro),
      href: `/services/${item.slug}`,
    }))
  )

  serviceLinks.push(
    {
      title: 'Meet our trusted crew academy',
      description: 'See how specialists are trained before deploying to your property.',
      href: '/about/trusted-crew',
    },
    {
      title: 'Review licensed & insured credentials',
      description: 'Download insurance certificates, OSHA acknowledgements, and compliance logs.',
      href: '/about/licensed-insured',
    }
  )

  return serviceLinks
}

export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = serviceDetails.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  const related = serviceDetails
    .filter((item) => item.slug !== service.slug)
    .slice(0, 2)
    .concat(relatedFallback.filter((item) => item.slug !== service.slug).slice(0, 2))
    .slice(0, 2)

  const spokeBreadcrumb = [...breadcrumbBase, { label: service.name }]
  const pills = supportingMedia[service.slug] ?? supportingMedia['recurring-cleaning']
  const serviceMetrics = buildServiceMetrics(service)
  const serviceProcess = buildServiceProcess(service)
  const relatedLinks = buildRelatedLinks(service, related)

  return (
    <PageShell bodyClassName="with-service-landing" mainClassName="space-y-24 pb-24">
      <nav className="container-px text-sm text-slate-600" aria-label="Breadcrumb">
        <ol className="mx-auto flex max-w-5xl flex-wrap items-center gap-2">
          {spokeBreadcrumb.map((crumb, index) => (
            <li key={crumb.label} className="flex items-center gap-2">
              {'href' in crumb ? (
                <Link href={crumb.href} className="font-semibold text-[var(--skye-700)] hover:text-[var(--skye-900)]">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-ink-900">{crumb.label}</span>
              )}
              {index < spokeBreadcrumb.length - 1 ? <span aria-hidden="true">›</span> : null}
            </li>
          ))}
        </ol>
      </nav>

      <PageBanner
        eyebrow={service.eyebrow}
        title={service.headline}
        description={service.subheading}
        image={service.heroImage}
        align="left"
      />

      <section className="container-px">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Card padding="p-6 sm:p-8" className="md:col-span-2" tone="midnight">
            <p className="text-sm text-white/85 sm:text-base">
              Skye concierge specialists deliver this program with the same precision as a luxury hotel back-of-house. Below you will find a full breakdown of how the service unfolds, the chemistries and reporting involved, and the safeguards that protect your property every step of the way.
            </p>
          </Card>
          {service.intro.map((paragraph, index) => (
            <Card key={index} padding="p-6 sm:p-7" tone="midnight">
              <p className="text-sm text-white/80 sm:text-base">{paragraph}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <MetricStrip eyebrow="Numbers behind the service" items={serviceMetrics} />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          {pills.map(({ src, caption }, index) => (
            <Card key={index} padding="p-0">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image src={src} alt={caption} fill loading="lazy" className="object-cover" />
              </div>
              <div className="p-6 text-sm text-slate-600">
                <p>{caption}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <ProcessSteps steps={serviceProcess} eyebrow="How this program rolls out" />
        </div>
      </section>

      {service.sections.map((section) => (
        <section key={section.title} className="container-px">
          <div
            className={
              section.imagePosition === 'left'
                ? 'mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center'
                : 'mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center'
            }
          >
            {section.imagePosition === 'left' ? (
              <div className="order-1 md:order-none">
            <Card className="p-0">
              <div className="relative h-80 w-full overflow-hidden rounded-[2.25rem]">
                <Image src={section.image} alt={section.title} fill loading="lazy" className="object-cover" />
              </div>
            </Card>
              </div>
            ) : null}
            <Card padding="p-6 sm:p-8" tone="foam">
              <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm text-slate-600 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </Card>
            {section.imagePosition === 'right' ? (
              <div className="order-1 md:order-none">
                <Card className="p-0">
                  <div className="relative h-80 w-full overflow-hidden rounded-[2.25rem]">
                    <Image src={section.image} alt={section.title} fill loading="lazy" className="object-cover" />
                  </div>
                </Card>
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <section className="container-px">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          <Card tone="foam">
            <h3 className="text-xl font-semibold text-ink-900">What we do</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
              {service.inclusions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--skye-500)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card tone="foam">
            <h3 className="text-xl font-semibold text-ink-900">What we do not do</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
              {service.exclusions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--skye-300)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <RelatedLinks links={relatedLinks} eyebrow="Plan your next move" />
        </div>
      </section>

      <section className="container-px">
        <Card padding="p-8 sm:p-10" tone="midnight" className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">{service.ctaTitle}</h2>
          <p className="mt-4 text-sm text-white/80 sm:text-base">{service.ctaCopy}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/#quote">
              Schedule concierge cleaning
            </Button>
            <Button variant="secondary" size="lg" href="mailto:contact@skyecgroup.com">
              Request a consultation
            </Button>
          </div>
        </Card>
      </section>
    </PageShell>
  )
}

function getServiceSummary(subheading: string, intro: string[]) {
  if (subheading) return subheading
  if (intro?.length) {
    const sentence = intro[0].split('. ').slice(0, 2).join('. ')
    return sentence.length ? `${sentence}.` : 'Discover how this program elevates your property.'
  }
  return 'Discover how this program elevates your property.'
}
