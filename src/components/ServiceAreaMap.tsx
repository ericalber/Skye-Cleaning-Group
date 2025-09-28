"use client"

import { useMemo, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

type Region = {
  name: string
  summary: string
  cities: string[]
  image: string
}

type ServiceAreaMapProps = {
  regions: Region[]
}

export default function ServiceAreaMap({ regions }: ServiceAreaMapProps) {
  const safeRegions = useMemo(() => (regions.length ? regions : []), [regions])
  const [activeIndex, setActiveIndex] = useState(0)
  const activeRegion = safeRegions[activeIndex] ?? safeRegions[0]

  return (
    <div className="mlx-layout">
      <div
        className="mlx-map"
        aria-live="polite"
        aria-label={`Service coverage visual for ${activeRegion?.name ?? 'the Bay Area'}`}
      >
        <span className="mlx-map__badge">Bay Area</span>
        <span className="mlx-map__halo" aria-hidden="true" />
        {activeRegion ? (
          <Image
            src={activeRegion.image}
            alt={`${activeRegion.name} coverage illustration`}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="mlx-map__image"
          />
        ) : null}
      </div>
      <div className="mlx-regions">
        {safeRegions.map((region, index) => {
          const isActive = index === activeIndex
          return (
            <article key={region.name} className={clsx('mlx-region', isActive && 'is-active')}>
              <div className="mlx-region__header">
                <h2 className="mlx-region__title">{region.name}</h2>
                <span className="mlx-region__count">{region.cities.length} cities</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{region.summary}</p>
              <div className="mlx-city-list" role="list">
                {region.cities.map((city) => (
                  <button
                    key={city}
                    type="button"
                    className={clsx('mlx-city', isActive && 'is-active')}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
