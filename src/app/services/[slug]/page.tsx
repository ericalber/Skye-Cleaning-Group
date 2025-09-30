import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageShell from '@/components/PageShell'
import ModalQuote from '@/components/ModalQuote'
import ServiceTabs from '@/components/ServiceTabs'
import ServiceMediaSection from '@/components/ServiceMediaSection'
import ServiceSteps from '@/components/ServiceSteps'
import { serviceDetails } from '@/data/servicePages'
import { serviceStepsBySlug } from '@/data/serviceSteps'

const defaultServiceSteps = [
  { title: 'Property briefing', description: 'We confirm access instructions, finishes to protect, and the experience you need the next visit to deliver.' },
  { title: 'Precision prep', description: 'Crew leads stage finish-safe chemistry, microfiber carts, and specialty equipment before entering the first zone.' },
  { title: 'Concierge execution', description: 'Teams follow Skye choreography room by room, capturing photos and checkpoints that prove standards are met.' },
  { title: 'Signature wrap', description: 'A supervisor conducts a final walk-through, resets amenities, and sends your digital recap within the hour.' },
]

export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const detail = serviceDetails.find((service) => service.slug === slug)

  if (!detail) {
    return {
      title: 'Service not found | Skye Cleaning Group',
    }
  }

  return {
    title: detail.seoTitle,
    description: detail.seoDescription,
    keywords: detail.keywords,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = serviceDetails.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  const steps = serviceStepsBySlug[service.slug] ?? defaultServiceSteps

  return (
    <PageShell bodyClassName="with-service-landing" mainClassName="space-y-20 pb-24">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-90"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(7,18,28,0.55), rgba(13,36,56,0.8)), url(${service.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-[1] container-px py-20 text-white sm:py-28">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              {service.eyebrow}
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">{service.headline}</h1>
            <p className="text-sm text-white/85 sm:text-base">{service.subheading}</p>
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-4xl space-y-4 text-sm text-slate-600 sm:text-base">
          {service.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      {service.sections.map((section, index) => (
        <ServiceMediaSection key={section.title} section={section} index={index} />
      ))}

      <ServiceSteps items={steps} />

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Transparent details. Zero surprises.</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              See exactly what is included in every visit and what we route to specialized partners.
            </p>
          </div>
          <ServiceTabs doItems={service.inclusions} dontItems={service.exclusions} />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-6 rounded-[2rem] border border-white/60 bg-[var(--foam)] px-8 py-10 text-ink-900 shadow-[0_28px_68px_rgba(15,60,90,0.18)]">
          <h2 className="text-2xl font-bold sm:text-3xl">Why high-profile brands choose Skye</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {service.differentiators.map(({ title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/50 bg-white p-5 text-sm text-slate-600 shadow-[0_12px_30px_rgba(18,60,84,0.12)]"
              >
                <h3 className="text-base font-semibold text-ink-900">{title}</h3>
                <p className="mt-2">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-4xl space-y-6 rounded-[2rem] bg-white px-8 py-10 text-ink-900 shadow-[0_18px_48px_rgba(18,60,84,0.14)]">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-black">{service.ctaTitle}</h2>
            <p className="text-sm text-slate-600 sm:text-base">{service.ctaCopy}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ModalQuote
              triggerClassName="btn btn-primary w-full justify-center sm:w-auto"
              triggerLabel="Build my service plan"
              initialService={service.quoteService}
              compact
            />
          </div>
        </div>
      </section>
    </PageShell>
  )
}
