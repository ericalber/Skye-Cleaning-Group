'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

export type Review = {
  name: string
  location: string
  quote: string
  color: string
  avatar?: string
  accent?: 'emerald' | 'gold' | 'violet' | 'rose'
}

type TestimonialsMarqueeProps = {
  reviews: Review[]
}

export default function TestimonialsMarquee({ reviews }: TestimonialsMarqueeProps) {
  const wrapRef = useRef<HTMLDivElement>(null)

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const wrap = wrapRef.current
    if (!wrap) return

    const isPaused = wrap.classList.toggle('is-paused')
    const button = event.currentTarget

    button.setAttribute('aria-pressed', isPaused.toString())
    button.setAttribute('aria-label', isPaused ? 'Play reviews' : 'Pause reviews')
    button.textContent = isPaused ? '▶' : '⏸'
  }

  const marqueeItems = [...reviews, ...reviews]

  return (
    <section className="container-px py-12" role="region" aria-label="Customer reviews">
      <div id="marquee" ref={wrapRef} className="testi-wrap testi-fade rounded-3xl bg-white py-6">
        <ul className="testi-track">
          {marqueeItems.map(({ name, location, quote, color, avatar, accent }, index) => {
            const variant = accent ?? 'emerald'
            const initials = name
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)

            return (
              <li
                key={`${name}-${index}`}
                className="card-premium mx-3 w-[min(320px,100%)] max-w-full rounded-2xl p-6 text-ink-900 shadow-sm sm:w-[min(360px,100%)]"
              >
                <div className="card-premium__body space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="testimonial-avatar" data-variant={variant}>
                      <span className="testimonial-avatar__inner">
                        {avatar ? (
                          <Image src={avatar} alt={`Photo of ${name}`} width={64} height={64} className="h-full w-full object-cover" unoptimized />
                        ) : (
                          <span className={`testimonial-avatar__initials ${color}`}>{initials}</span>
                        )}
                      </span>
                    </span>
                    <div>
                      <p className="font-semibold text-ink-900">{name}</p>
                      <p className="text-xs uppercase tracking-wide text-slate-500">{location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-300">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="size-4 fill-current" aria-hidden="true" strokeWidth={1.5} />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">“{quote}”</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          aria-label="Pause reviews"
          aria-pressed="false"
          className="rounded-full bg-white/90 px-4 py-2 font-semibold shadow"
          onClick={handleToggle}
        >
          ⏸
        </button>
      </div>
    </section>
  )
}
