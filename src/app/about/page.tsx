import Image from 'next/image'
import Link from 'next/link'

import PageShell from '@/components/PageShell'
import ServiceMediaSection from '@/components/ServiceMediaSection'
import type { ServiceSection } from '@/data/servicePages'

const introParagraphs = [
  'At Skye Cleaning Group we share exclusive residential and commercial cleaning insights so you can improve your property care and grow your business with confidence.',
  'Our family leads a specialist crew trained to work with high-performance, finish-safe products that deliver impeccable results from penthouses to boutique showrooms.',
  'We stay close to our community, offering transparent guidance on which formulas and techniques produce the best outcomes for every surface and schedule.',
  'Every insight we share focuses on helping you achieve efficient, consistent cleaning while protecting the time, investment, and people that matter most.',
  'We believe the right products are essential for exceptional results, so we test and recommend market-leading solutions that align with strict safety, sustainability, and performance standards.',
]

const storySections: ServiceSection[] = [
  {
    title: 'Hospitality is our heritage',
    body: introParagraphs.slice(0, 2),
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
    imagePosition: 'left' as const,
  },
  {
    title: 'Process-driven partnerships',
    body: introParagraphs.slice(2),
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1600&q=80',
    imagePosition: 'right' as const,
  },
]

const pillars = [
  {
    title: 'Professionals who shine brighter than a polished floor',
    copy: 'Our crew arrives prepared to wow. Every visit blends technical expertise, hospitality training and the finishing touches that make rooms glow.',
    image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Service that starts before the door even opens',
    copy: 'From the first hello you feel the concierge mindset. We document your preferences, stage reminders and follow up so every detail is anticipated.',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Five-star hotel standards inside your home',
    copy: 'We translate luxury hospitality processes into practical routines for residences, ensuring linens, fixtures and finishes receive white-glove care.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Clients who become fans after just a few visits',
    copy: 'Consistency builds trust fast. Most of our households upgrade to recurring service within two appointments because the difference is unmistakable.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Every agreement is a promise of excellence',
    copy: 'We design each contract around your rhythms and deliverables. No templates, only experiences backed by transparent reporting and satisfaction guarantees.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
  },
]

export default function AboutPage() {
  return (
    <PageShell bodyClassName="with-service-landing with-gotravel" mainClassName="space-y-20 pb-20">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-85"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(7,18,28,0.50), rgba(13,36,56,0.78)), url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
          }}
        />
        <div className="relative z-[1] container-px py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
                About Skye
              </span>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">Our family story is built on polish and trust.</h1>
              <p className="text-sm text-white/80 sm:text-base">
                We are a family-led company on a mission to raise every environment to a boutique standard. Personal service, high-performance products and well-honed processes are the center of everything we do.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="card-premium overflow-hidden p-2">
                <div className="card-premium__body overflow-hidden rounded-[1.25rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                    alt="Skye Cleaning Group family team"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {storySections.map((section, index) => (
        <ServiceMediaSection key={section.title} section={section} index={index} />
      ))}

      <section className="container-px">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-black sm:text-4xl">What drives every Skye visit</h2>
            <p className="text-slate-600">
              Each commitment receives the same meticulous care, from the first briefing to the final checklist.
            </p>
          </div>
          <div className="gtx-grid -columns-2">
            {pillars.map(({ title, copy, image }) => (
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

      <section className="container-px">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl bg-[--foam] px-8 py-10 text-ink-900 shadow-[0_18px_46px_rgba(18,60,84,0.12)] sm:flex-row sm:items-center">
          <div className="sm:w-2/3 space-y-3">
            <h2 className="text-2xl font-bold">Clean Tips: our curated playbook beyond each visit.</h2>
            <p className="text-sm text-slate-600">
              We handpick tactics, product favorites and maintenance schedules so you can extend the Skye standard between appointments.
            </p>
          </div>
          <div className="sm:w-1/3">
            <Link href="/clean-tips" className="btn btn-primary w-full justify-center">
              Explore Clean Tips
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
