'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import Card from '@/components/ui-kits/Card'
import Button from '@/components/ui-kits/Button'
import { cleanTips } from '@/data/cleanTips'

const previewTips = cleanTips.slice(0, 9)

export default function HomeCleanTipsPreview() {
  const trackRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!trackRef.current) return
    const { clientWidth } = trackRef.current
    const offset = direction === 'next' ? clientWidth * 0.9 : -clientWidth * 0.9
    trackRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-20">
      <div className="container-px">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center justify-center rounded-full border border-[var(--skye-100)] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--skye-600)]">
                Cleaning Tips
              </span>
              <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">City-level polish you can apply this week</h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Browse concierge-grade playbooks curated for penthouses, tasting salons, and boutique workplaces. Every article translates Skye rituals into routines you can run between visits.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleScroll('prev')}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--skye-200)] bg-white text-[var(--skye-700)] shadow-[0_10px_26px_rgba(18,60,84,0.14)] transition hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--skye-200)]"
                aria-label="Scroll tips backward"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll('next')}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--skye-200)] bg-white text-[var(--skye-700)] shadow-[0_10px_26px_rgba(18,60,84,0.14)] transition hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--skye-200)]"
                aria-label="Scroll tips forward"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              ref={trackRef}
              className="-mx-3 flex snap-x snap-mandatory gap-6 overflow-x-auto px-3 pb-2 pt-1"
            >
              {previewTips.map(({ slug, title, hook, hero }) => (
                <Link
                  key={slug}
                  href={`/clean-tips/${slug}`}
                  className="group relative block min-w-[260px] max-w-[320px] snap-start sm:min-w-[280px] md:min-w-[300px]"
                >
                  <Card className="flex flex-col overflow-hidden" padding="p-0">
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={hero}
                        alt={title}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[color-mix(in_oklab,var(--skye-600)_84%,black)]">
                        Premium Insight
                      </span>
                      <h3 className="text-lg font-semibold text-ink-900 line-clamp-2">{title}</h3>
                      <p className="text-sm text-slate-600 line-clamp-3">{hook}</p>
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--skye-700)]">
                        Learn more
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Button variant="secondary" size="lg" href="/clean-tips">
              See all Cleaning Tips
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
