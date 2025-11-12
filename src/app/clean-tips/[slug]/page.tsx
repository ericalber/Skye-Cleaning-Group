import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import PageShell from '@/components/PageShell'
import PageBanner from '@/components/PageBanner'
import Card from '@/components/ui-kits/Card'
import Button from '@/components/ui-kits/Button'
import ProcessSteps from '@/components/blocks/ProcessSteps'

import { cleanTips, getCleanTip } from '@/data/cleanTips'
import { serviceDetails } from '@/data/servicePages'

function getServiceSummary(subheading: string, intro: string[]) {
  if (subheading) return subheading
  if (intro?.length) {
    const sentence = intro[0].split('. ').slice(0, 2).join('. ')
    return sentence.length ? `${sentence}.` : 'Discover how this program elevates your property.'
  }
  return 'Discover how this program elevates your property.'
}

export function generateStaticParams() {
  return cleanTips.map(({ slug }) => ({ slug }))
}

export default async function CleanTipDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tip = getCleanTip(slug)

  if (!tip) {
    notFound()
  }

  const related = tip.relatedServices
    .map((name) => serviceDetails.find((service) => service.name === name))
    .filter((service): service is (typeof serviceDetails)[number] => Boolean(service))

  const quickSteps = [
    {
      title: 'Save the highlight',
      description:
        'Flag the sections of this tip that apply to your property blueprint and add them to your Skye portal notes so crews see the nuance.',
    },
    {
      title: 'Stage your kit',
      description:
        'Gather the finish-safe products and tools referenced here. Label them inside your utility zone so household or workplace staff can find them in seconds.',
    },
    {
      title: 'Loop in the concierge desk',
      description:
        'Share your observations the next time you speak with our concierge coordinator. We will tune chemistries, schedules, and visit checklists around what worked best.',
    },
  ]

  return (
    <PageShell bodyClassName="with-gotravel with-service-landing" mainClassName="space-y-16 pb-20">
      <PageBanner
        eyebrow="Clean Tips"
        title={tip.title}
        description={tip.hook}
        image={tip.hero}
        overlay="linear-gradient(180deg, rgba(7,18,28,0.55), rgba(13,36,56,0.75))"
      />

      <section className="container-px">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 text-slate-700">
          <div className="relative h-72 w-full overflow-hidden rounded-[1.75rem] shadow-[0_28px_80px_rgba(18,60,84,0.18)]">
            <Image src={tip.hero} alt={tip.title} fill sizes="100vw" className="object-cover" unoptimized priority />
          </div>
          {tip.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ProcessSteps steps={quickSteps} eyebrow="Put this tip to work" />
          {related.length ? (
            <div className="space-y-4 rounded-[2.25rem] border border-[rgba(18,60,84,0.12)] bg-white/95 p-6 shadow-[0_26px_72px_rgba(12,42,74,0.16)]">
              <h3 className="text-lg font-semibold text-ink-900">Services that pair with this routine</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {related.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="group block h-full">
                    <Card padding="p-5" tone="foam" className="h-full rounded-[1.75rem]">
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--skye-600)]">
                        Concierge Service
                      </span>
                      <h4 className="mt-2 text-lg font-semibold text-ink-900">{service.name}</h4>
                      <p className="mt-2 text-sm text-slate-600">{getServiceSummary(service.subheading, service.intro)}</p>
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--skye-700)]">
                        View service
                        <span aria-hidden="true">→</span>
                      </span>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
          <div className="rounded-3xl bg-[--foam] px-6 py-5 text-sm text-[var(--skye-700)] shadow-[0_16px_40px_rgba(18,60,84,0.15)]">
            Liked this tip? Share it with someone who loves smart cleaning shortcuts.
          </div>
          <Card padding="p-8" tone="midnight" className="text-center">
            <h3 className="text-2xl font-bold text-white">Ready to see the Skye standard in your space?</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
              Our concierge coordinators will map your property, align chemistries, and schedule the right specialists so you can experience these results without lifting a finger.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" size="lg" href="/#quote">
                Request a concierge visit
              </Button>
              <Button variant="secondary" size="lg" href="/services">
                Explore all services
              </Button>
            </div>
          </Card>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 pt-6 text-sm">
            <Link href="/clean-tips" className="text-[var(--skye-700)] hover:text-[var(--skye-900)]">
              ← Back to all Clean Tips
            </Link>
            <Link href="/" className="text-[var(--skye-700)] hover:text-[var(--skye-900)]">
              Go to the home page →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
