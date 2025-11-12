'use client'

import { useState } from 'react'
import Image from 'next/image'

import PageShell from '@/components/PageShell'
import PageBanner from '@/components/PageBanner'
import Card from '@/components/ui-kits/Card'
import Button from '@/components/ui-kits/Button'
import MetricStrip from '@/components/blocks/MetricStrip'
import ProcessSteps from '@/components/blocks/ProcessSteps'
import RelatedLinks from '@/components/blocks/RelatedLinks'

const beforeAfter = [
  {
    title: 'Investor boardroom reveal',
    before: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=70',
    after: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=70',
    description:
      'Pre-dawn reset after an overnight strategy session. Fingerprints, coffee spills, and AV clutter erased so the room greeted investors with mirror-like polish.',
  },
  {
    title: 'Residential spa bathroom',
    before: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=70',
    after: 'https://images.unsplash.com/photo-1582719478261-9b7c3178b346?auto=format&fit=crop&w=1200&q=70',
    description:
      'Steam, marble haze, and candle residue removed. Amenities reset with hotel precision so the suite felt like a private resort again.',
  },
  {
    title: 'Event venue strike team',
    before: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=70',
    after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70',
    description:
      'Gala teardown completed before sunrise. Linens removed, floors restored, rentals staged for pickup, and lighting recalibrated for the next activation.',
  },
]

const videoStories = [
  {
    title: 'Concierge cleaning inside a penthouse',
    description: 'Follow our crew through a recurring visit: scent mapping, textile preservation, and photo-perfect finishing touches.',
    videoId: 'ZkwoMPmxj-g',
  },
  {
    title: 'Light commercial reset after hours',
    description: 'See how executive suites stay investor-ready with scheduling choreography, compliance documentation, and scent zoning.',
    videoId: '2Vv-BfVoq4g',
  },
]

const tabs = [
  { id: 'before-after', label: 'Before & After' },
  { id: 'video-stories', label: 'Video Stories' },
]

const galleryMetrics = [
  { label: 'Reveals Filmed', value: '120+', caption: 'Documented transformations across penthouses, wineries, and boutiques.' },
  { label: 'Strike Teams', value: '24/7', caption: 'On-call crews capturing event resets before dawn.' },
  { label: 'Client Approval', value: '99%', caption: 'Feedback on presentation quality after each showcase.' },
  { label: 'Media Ready', value: '<60 min', caption: 'Average time to deliver photo sets to stakeholders.' },
]

const galleryProcess = [
  {
    title: 'Scout the story',
    description: 'We walk your property with planners and facilities to define the before-and-after narrative and lighting cues.',
  },
  {
    title: 'Execute the reveal',
    description: 'Concierge crews stage the clean, capture footage, and log metrics that prove presentation standards.',
  },
  {
    title: 'Deliver the assets',
    description: 'Edited photos, video clips, and recap notes land in your inbox within hours for investors, marketing, or archives.',
  },
]

const galleryRelatedLinks = [
  {
    title: 'Request a documented reveal',
    description: 'Schedule a strike team and media capture for your next showcase.',
    href: '/services/post-event-refresh',
  },
  {
    title: 'Meet the chemistry lab',
    description: 'Understand how our products support the shine you see in these stories.',
    href: '/about/products',
  },
  {
    title: 'Review licensing & insurance',
    description: 'Ensure compliance is in place before cameras roll inside your property.',
    href: '/about/licensed-insured',
  },
]

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>('before-after')

  return (
    <PageShell bodyClassName="with-gotravel" mainClassName="space-y-24 pb-24">
      <PageBanner
        eyebrow="Gallery"
        title="Step inside the reveals our clients rave about."
        description="Explore before-and-after transformations and short films that show how Skye choreographs concierge cleaning across luxury residences, boardrooms, and hospitality venues."
        image="https://images.unsplash.com/photo-1529429617124-aee8095725cb?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-px">
        <div className="mx-auto max-w-6xl space-y-6 text-center">
          <p className="mx-auto max-w-3xl text-sm text-slate-600 sm:text-base">
            Use the tabs below to toggle between photographic case studies and video walkthroughs. Every story showcases the choreography, chemistry, and hospitality touches that keep Skye properties inspection-ready.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? 'rounded-full bg-[var(--skye-600)] text-white shadow-[0_14px_32px_rgba(18,60,84,0.24)]'
                    : 'rounded-full border border-[var(--skye-200)] bg-white text-[var(--skye-700)] shadow-[0_12px_28px_rgba(18,60,84,0.14)] hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--skye-200)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <MetricStrip
            eyebrow="How often we capture the reveal"
            items={galleryMetrics}
            description="Proof points that show why the gallery doubles as your investor-ready report card."
          />
        </div>
      </section>

      {activeTab === 'before-after' ? (
        <section className="container-px">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {beforeAfter.map((item) => (
              <Card key={item.title} className="p-0 text-left">
                <div className="grid grid-cols-1 gap-1">
                  <figure className="relative aspect-square w-full overflow-hidden">
                    <Image src={item.before} alt={`${item.title} - before`} fill sizes="100vw" loading="lazy" className="object-cover opacity-90" />
                    <figcaption className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--skye-700)] shadow-sm">
                      Before
                    </figcaption>
                  </figure>
                  <figure className="relative aspect-square w-full overflow-hidden">
                    <Image src={item.after} alt={`${item.title} - after`} fill sizes="100vw" loading="lazy" className="object-cover" />
                    <figcaption className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--skye-700)] shadow-sm">
                      After
                    </figcaption>
                  </figure>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ) : (
        <section className="container-px">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {videoStories.map(({ title, description, videoId }) => (
              <Card key={title} className="p-0 text-left">
                <div className="relative aspect-video w-full overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <ProcessSteps steps={galleryProcess} eyebrow="From walkthrough to highlight reel" />
        </div>
      </section>

      <section className="container-px">
        <Card padding="p-8 sm:p-10" className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Ready to choreograph your own reveal?</h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Book a concierge consultation and we will design the maintenance, deep clean, or event reset that keeps your property camera ready for investors, guests, and VIP residents.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/#quote">
              Schedule my consultation
            </Button>
            <Button variant="secondary" size="lg" href="/services">
              Explore concierge services
            </Button>
          </div>
        </Card>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <RelatedLinks links={galleryRelatedLinks} eyebrow="Keep the inspiration flowing" />
        </div>
      </section>
    </PageShell>
  )
}
