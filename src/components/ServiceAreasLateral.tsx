'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { ClipboardCheck, ShieldCheck, Sparkles } from 'lucide-react'

import type { Area } from '@/data/serviceAreas'
import { serviceAreas } from '@/data/serviceAreas'

import Card from './ui-kits/Card'
import Pill from './ui-kits/Pill'
import { tripTakerSoftFade } from './ui-kits/Motion'
import ServiceAreasEditorial from './ServiceAreasEditorial'

const coverageHighlights = [
  {
    icon: ShieldCheck,
    title: 'Tailored protocols',
    copy:
      'Each territory receives a custom checklist, finish notes, and contingency plans for last-minute visits or VIP arrivals.',
  },
  {
    icon: ClipboardCheck,
    title: 'Real-time reporting',
    copy: 'Supervisors send photographic proof, quality metrics, and completion timestamps directly to your inbox or SMS.',
  },
  {
    icon: Sparkles,
    title: 'Concierge finishing touches',
    copy: 'Amenity staging, scent calibration, and lighting cues ensure guests or investors experience a perfect reveal.',
  },
]

export default function ServiceAreasLateral() {
  const [activeArea, setActiveArea] = useState<Area>(serviceAreas[0])
  const [selectedCity, setSelectedCity] = useState<{ area: string; city: Area['neighborhoods'][number] } | null>(
    () => ({ area: serviceAreas[0].slug, city: serviceAreas[0].neighborhoods[0] })
  )
  const [isDesktop, setIsDesktop] = useState<boolean>(false)
  const [heroVisible, setHeroVisible] = useState(true)
  const areaRefs = useRef(new Map<string, HTMLElement>())
  const heroRef = useRef<HTMLDivElement>(null)

  const [mobileSelections, setMobileSelections] = useState<Record<string, Area['neighborhoods'][number]>>(() => {
    const initial: Record<string, Area['neighborhoods'][number]> = {}
    serviceAreas.forEach((area) => {
      initial[area.slug] = area.neighborhoods[0]
    })
    return initial
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches)
    }

    setIsDesktop(mediaQuery.matches)
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  useEffect(() => {
    const selection = selectedCity
    if (selection?.area !== activeArea.slug) {
      setSelectedCity({ area: activeArea.slug, city: activeArea.neighborhoods[0] })
    }
  }, [activeArea, selectedCity])

  useEffect(() => {
    if (!isDesktop) {
      setHeroVisible(true)
      return
    }

    if (!heroRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting)
      },
      { rootMargin: '-10% 0px -20% 0px' }
    )

    observer.observe(heroRef.current)

    return () => observer.disconnect()
  }, [isDesktop])

  useEffect(() => {
    if (!isDesktop) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (!visible.length) return
        const topEntry = visible[0]
        const slug = topEntry.target.getAttribute('data-area-slug')
        if (!slug) return
        const match = serviceAreas.find((area) => area.slug === slug)
        if (match && match.slug !== activeArea.slug) {
          setActiveArea(match)
        }
      },
      { rootMargin: '-20% 0px -40% 0px', threshold: [0.25, 0.5, 0.75] }
    )

    areaRefs.current.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [isDesktop, activeArea.slug])

  useEffect(() => {
    if (isDesktop) return
    setMobileSelections((prev) => {
      const next: Record<string, Area['neighborhoods'][number]> = {}
      serviceAreas.forEach((area) => {
        next[area.slug] = prev[area.slug] ?? area.neighborhoods[0]
      })
      return next
    })
  }, [isDesktop])

  const displayCity = useMemo(() => {
    if (selectedCity?.area === activeArea.slug) {
      return selectedCity.city
    }
    return activeArea.neighborhoods[0]
  }, [activeArea, selectedCity])

  const activeImage = displayCity?.image ?? activeArea.image

  const registerAreaRef = (slug: string) => (node: HTMLElement | null) => {
    if (node) {
      areaRefs.current.set(slug, node)
    } else {
      areaRefs.current.delete(slug)
    }
  }

  const handleAreaClick = (area: Area) => {
    setActiveArea(area)
    setSelectedCity({ area: area.slug, city: area.neighborhoods[0] })
  }

  const handleCitySelect = (area: Area, city: Area['neighborhoods'][number]) => {
    setActiveArea(area)
    setSelectedCity({ area: area.slug, city })
  }

  const handleMobileCitySelect = (area: Area, city: Area['neighborhoods'][number]) => {
    setMobileSelections((prev) => ({ ...prev, [area.slug]: city }))
  }

  const shouldShowDock = isDesktop && !heroVisible

  return (
    <div className="bg-white">
      <section className="container-px">
        <div className="mx-auto max-w-7xl space-y-12">
          {isDesktop ? (
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.3fr)] lg:items-start">
              <div ref={heroRef} className="space-y-6 lg:sticky lg:top-[calc(var(--header-height,72px)+1rem)] lg:self-start">
                <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 shadow-[0_32px_90px_rgba(12,32,64,0.18)] sm:h-[520px]">
                  <Image
                    key={activeImage}
                    src={activeImage}
                    alt={displayCity?.name ?? activeArea.name}
                    fill
                    className={clsx('object-cover', tripTakerSoftFade)}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" aria-hidden="true" />
                </div>

                <div className="rounded-[2rem] border border-[rgba(18,60,84,0.12)] bg-white/95 p-6 shadow-[0_28px_70px_rgba(12,32,64,0.14)]">
                  <h3 className="text-base font-semibold text-ink-900">What keeps the Skye standard consistent in every region</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {coverageHighlights.map(({ icon: Icon, title, copy }) => (
                      <div key={title} className="space-y-2 text-sm leading-relaxed text-slate-600">
                        <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[color-mix(in_oklab,var(--skye-50)_88%,white)] text-[var(--skye-700)] shadow-[0_12px_26px_rgba(18,60,84,0.12)]">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <h4 className="text-sm font-semibold text-ink-900">{title}</h4>
                        <p>{copy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <header className="space-y-3">
                  <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(18,60,84,0.12)] bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color-mix(in_oklab,var(--skye-700)_82%,black)]">
                    Select your territory
                  </p>
                  <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Choose a card to see how the concierge crew operates in that region.</h2>
                  <p className="text-sm text-slate-600 sm:text-base">
                    Each tile highlights staffing logistics, coverage windows, and signature differentiators for the neighborhoods we serve. The hero image stays with you as you explore.
                  </p>
                </header>
                <div className="space-y-4">
                  {serviceAreas.map((area) => {
                    const areaCity = selectedCity?.area === area.slug ? selectedCity.city : null
                    return (
                      <Card
                        key={area.slug}
                        as="button"
                        type="button"
                        active={activeArea.slug === area.slug}
                        onClick={() => handleAreaClick(area)}
                        className="w-full text-left"
                        ref={registerAreaRef(area.slug)}
                        data-area-slug={area.slug}
                      >
                        <div className="flex flex-col gap-4">
                          <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color-mix(in_oklab,var(--skye-600)_82%,black)]">
                              {area.slug.replaceAll('-', ' ')}
                            </p>
                            <h3 className="text-lg font-semibold text-ink-900">{area.name}</h3>
                            <p className="text-sm leading-relaxed text-slate-600">{area.description}</p>
                          </div>
                          <div className="flex flex-col gap-2">
                            {area.neighborhoods.map((neighborhood) => (
                              <Pill
                                key={`${area.slug}-${neighborhood.name}`}
                                role="button"
                                tabIndex={0}
                                active={
                                  activeArea.slug === area.slug && (areaCity?.name ?? selectedCity?.city?.name) === neighborhood.name
                                }
                                onClick={(event) => {
                                  event.stopPropagation()
                                  handleCitySelect(area, neighborhood)
                                }}
                                onKeyDown={(event) => {
                                  if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault()
                                    handleCitySelect(area, neighborhood)
                                  }
                                }}
                              >
                                {neighborhood.name}
                              </Pill>
                            ))}
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {serviceAreas.map((area) => {
                const selection = mobileSelections[area.slug] ?? area.neighborhoods[0]
                return (
                  <div key={area.slug} className="space-y-4" data-area-slug={area.slug}>
                    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/60 shadow-[0_26px_72px_rgba(12,32,64,0.18)]">
                      <Image
                        key={`${area.slug}-${selection.name}`}
                        src={selection.image ?? area.image}
                        alt={selection.name}
                        fill
                        className={clsx('object-cover', tripTakerSoftFade)}
                        sizes="100vw"
                      />
                    </div>
                    <Card padding="p-6" className="space-y-4" tone="foam">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color-mix(in_oklab,var(--skye-600)_82%,black)]">
                          {area.slug.replaceAll('-', ' ')}
                        </p>
                        <h3 className="text-lg font-semibold text-ink-900">{area.name}</h3>
                        <p className="text-sm leading-relaxed text-slate-600">{area.description}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        {area.neighborhoods.map((neighborhood) => (
                          <Pill
                            key={`${area.slug}-${neighborhood.name}`}
                            as="button"
                            active={selection.name === neighborhood.name}
                            onClick={() => handleMobileCitySelect(area, neighborhood)}
                          >
                            {neighborhood.name}
                          </Pill>
                        ))}
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {shouldShowDock ? (
        <div className="fixed bottom-8 right-6 z-30 hidden lg:block">
          <div className="relative h-[180px] w-[280px] overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_26px_70px_rgba(12,32,64,0.18)]">
            <Image
              key={`dock-${activeImage}`}
              src={activeImage}
              alt={displayCity?.name ?? activeArea.name}
              fill
              className={clsx('object-cover', tripTakerSoftFade)}
              sizes="280px"
            />
          </div>
        </div>
      ) : null}

      <ServiceAreasEditorial />
    </div>
  )
}
