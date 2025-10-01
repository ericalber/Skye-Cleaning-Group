'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play, Star } from 'lucide-react'

export type Review = {
  name: string
  location: string
  quote: string
  color: string
  avatar?: string
  accent?: 'emerald' | 'gold' | 'violet' | 'rose'
}

type Direction = 'left' | 'right'

type HighlightLane = 'top' | 'bottom'

const SPEED = 0.36
const HIGHLIGHT_DURATION = 1500
const HIGHLIGHT_DELAY_MIN = 5200
const HIGHLIGHT_DELAY_MAX = 9800
const COPIES = 3

const highlightVariants = {
  rest: {
    scale: 1,
    boxShadow: '0 28px 64px rgba(18, 60, 84, 0.12)',
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  highlight: {
    scale: 1.05,
    boxShadow: '0 42px 120px rgba(12, 42, 74, 0.24)',
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
}

type MarqueeController = {
  items: Review[]
  trackRef: React.RefObject<HTMLUListElement | null>
  pause: () => void
  play: () => void
  seek: (delta: number) => void
  setPosition: (value: number) => void
  getPosition: () => number
  isPaused: () => boolean
  direction: Direction
  length: number
}

type HighlightTarget = {
  lane: HighlightLane
  elementIndex: number
  reviewIndex: number
}

type TestimonialsMarqueeProps = {
  primaryReviews: Review[]
  secondaryReviews?: Review[]
}

function useMarqueeController(
  reviews: Review[],
  direction: Direction,
  reducedMotionRef: React.MutableRefObject<boolean>
): MarqueeController {
  const trackRef = useRef<HTMLUListElement | null>(null)
  const length = reviews.length
  const items = useMemo(() => Array.from({ length: COPIES }).flatMap(() => reviews), [reviews])
  const posRef = useRef(0)
  const widthRef = useRef(0)
  const pausedRef = useRef(false)
  const animationRef = useRef<number | null>(null)
  const dirMultiplier = direction === 'left' ? 1 : -1

  const apply = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`
    }
  }, [])

  const normalise = useCallback(() => {
    const width = widthRef.current
    if (!width) return

    if (dirMultiplier === 1) {
      while (posRef.current <= -width) posRef.current += width
      while (posRef.current > 0) posRef.current -= width
    } else {
      while (posRef.current >= 0) posRef.current -= width
      while (posRef.current < -width) posRef.current += width
    }
  }, [dirMultiplier])

  const setPosition = useCallback(
    (value: number) => {
      posRef.current = value
      normalise()
      apply()
    },
    [apply, normalise]
  )

  const seek = useCallback(
    (delta: number) => {
      setPosition(posRef.current + delta)
    },
    [setPosition]
  )

  const pause = useCallback(() => {
    pausedRef.current = true
  }, [])

  const play = useCallback(() => {
    if (!reducedMotionRef.current) {
      pausedRef.current = false
    }
  }, [reducedMotionRef])

  const loop = useCallback(() => {
    if (!pausedRef.current) {
      setPosition(posRef.current - SPEED * dirMultiplier)
    }
    animationRef.current = requestAnimationFrame(loop)
  }, [dirMultiplier, setPosition])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      widthRef.current = track.scrollWidth / COPIES
      const initial = dirMultiplier === 1 ? 0 : -widthRef.current
      setPosition(initial)
    }

    measure()
    requestAnimationFrame(measure)
    window.addEventListener('resize', measure)

    if (!reducedMotionRef.current) {
      animationRef.current = requestAnimationFrame(loop)
    }

    return () => {
      window.removeEventListener('resize', measure)
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current)
    }
  }, [dirMultiplier, loop, reducedMotionRef, setPosition])

  return useMemo(
    () => ({
      items,
      trackRef,
      pause,
      play,
      seek,
      setPosition,
      getPosition: () => posRef.current,
      isPaused: () => pausedRef.current,
      direction,
      length,
    }),
    [items, pause, play, seek, setPosition, direction, length]
  )
}

export default function TestimonialsMarquee({ primaryReviews, secondaryReviews }: TestimonialsMarqueeProps) {
  const reducedMotionRef = useRef(false)
  const [manualPaused, setManualPaused] = useState(false)
  const manualPausedRef = useRef(false)
  const countersRef = useRef({ hover: 0, focus: 0, drag: 0 })
  const highlightTimerRef = useRef<number | null>(null)
  const highlightClearRef = useRef<number | null>(null)
  const lastHighlightRef = useRef<HighlightTarget | null>(null)
  const [highlight, setHighlight] = useState<HighlightTarget | null>(null)
  const topWrapRef = useRef<HTMLDivElement>(null)
  const bottomWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const top = useMarqueeController(primaryReviews, 'left', reducedMotionRef)
  const bottom = useMarqueeController(secondaryReviews ?? primaryReviews, 'right', reducedMotionRef)

  const updatePlayback = useCallback(() => {
    const shouldPause =
      reducedMotionRef.current ||
      manualPausedRef.current ||
      countersRef.current.hover > 0 ||
      countersRef.current.focus > 0 ||
      countersRef.current.drag > 0

    if (shouldPause) {
      top.pause()
      bottom.pause()
    } else {
      top.play()
      bottom.play()
    }
  }, [top, bottom])

  useEffect(() => {
    manualPausedRef.current = manualPaused
    updatePlayback()
  }, [manualPaused, updatePlayback])

  const adjustCounter = useCallback(
    (key: 'hover' | 'focus' | 'drag', delta: 1 | -1) => {
      countersRef.current[key] = Math.max(0, countersRef.current[key] + delta)
      updatePlayback()
    },
    [updatePlayback]
  )

  const handleSeek = useCallback(
    (direction: -1 | 1) => {
      const offset = 176 * direction
      top.seek(offset)
      bottom.seek(offset)
    },
    [top, bottom]
  )

  const pointerHandlers = (
    controller: MarqueeController,
    stateRef: React.MutableRefObject<{ active: boolean; pointerId: number | null; startX: number; startPos: number }>
  ) => ({
    onPointerDown: (event: React.PointerEvent<HTMLUListElement>) => {
      if (!controller.trackRef.current || reducedMotionRef.current) return
      controller.pause()
      controller.trackRef.current.setPointerCapture(event.pointerId)
      stateRef.current = {
        active: true,
        pointerId: event.pointerId,
        startX: event.clientX,
        startPos: controller.getPosition(),
      }
      adjustCounter('drag', 1)
    },
    onPointerMove: (event: React.PointerEvent<HTMLUListElement>) => {
      if (!stateRef.current.active) return
      const delta = event.clientX - stateRef.current.startX
      controller.setPosition(stateRef.current.startPos + delta)
    },
    onPointerUp: (event: React.PointerEvent<HTMLUListElement>) => {
      if (!stateRef.current.active) return
      controller.trackRef.current?.releasePointerCapture(event.pointerId)
      stateRef.current = { active: false, pointerId: null, startX: 0, startPos: 0 }
      adjustCounter('drag', -1)
    },
    onPointerCancel: (event: React.PointerEvent<HTMLUListElement>) => {
      if (!stateRef.current.active) return
      controller.trackRef.current?.releasePointerCapture(event.pointerId)
      stateRef.current = { active: false, pointerId: null, startX: 0, startPos: 0 }
      adjustCounter('drag', -1)
    },
  })

  const topPointerState = useRef({ active: false, pointerId: null as number | null, startX: 0, startPos: 0 })
  const bottomPointerState = useRef({ active: false, pointerId: null as number | null, startX: 0, startPos: 0 })

  const topHandlers = pointerHandlers(top, topPointerState)
  const bottomHandlers = pointerHandlers(bottom, bottomPointerState)

  const handleMouseEnter = useCallback(() => adjustCounter('hover', 1), [adjustCounter])
  const handleMouseLeave = useCallback(() => adjustCounter('hover', -1), [adjustCounter])
  const handleFocus = useCallback(() => adjustCounter('focus', 1), [adjustCounter])
  const handleBlur = useCallback(() => adjustCounter('focus', -1), [adjustCounter])

  useEffect(() => {
    const findCenter = (lane: HighlightLane) => {
      const controller = lane === 'top' ? top : bottom
      const wrap = lane === 'top' ? topWrapRef.current : bottomWrapRef.current
      const track = controller.trackRef.current
      if (!wrap || !track) return null

      const containerRect = wrap.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2
      const children = Array.from(track.children) as HTMLElement[]
      if (!children.length) return null

      let bestIndex = -1
      let smallestDistance = Number.POSITIVE_INFINITY

      children.forEach((child, index) => {
        const rect = child.getBoundingClientRect()
        const center = rect.left + rect.width / 2
        const distance = Math.abs(center - containerCenter)
        if (distance < smallestDistance) {
          smallestDistance = distance
          bestIndex = index
        }
      })

      if (bestIndex === -1) return null

      return {
        elementIndex: bestIndex,
        reviewIndex: bestIndex % controller.length,
      }
    }

    const scheduleHighlight = () => {
      if (highlightTimerRef.current !== null) window.clearTimeout(highlightTimerRef.current)
      const delay = Math.floor(Math.random() * (HIGHLIGHT_DELAY_MAX - HIGHLIGHT_DELAY_MIN)) + HIGHLIGHT_DELAY_MIN

      highlightTimerRef.current = window.setTimeout(() => {
        const last = lastHighlightRef.current
        const lane: HighlightLane = last ? (last.lane === 'top' ? 'bottom' : 'top') : Math.random() > 0.5 ? 'top' : 'bottom'
        const center = findCenter(lane)

        if (!center) {
          scheduleHighlight()
          return
        }

        const target: HighlightTarget = { lane, ...center }
        setHighlight(target)
        lastHighlightRef.current = target

        if (highlightClearRef.current !== null) window.clearTimeout(highlightClearRef.current)
        highlightClearRef.current = window.setTimeout(() => {
          setHighlight(null)
          scheduleHighlight()
        }, HIGHLIGHT_DURATION)
      }, delay)
    }

    scheduleHighlight()

    return () => {
      if (highlightTimerRef.current !== null) window.clearTimeout(highlightTimerRef.current)
      if (highlightClearRef.current !== null) window.clearTimeout(highlightClearRef.current)
    }
  }, [top, bottom])

  const renderCard = useCallback(
    (item: Review, index: number, lane: HighlightLane) => {
      const initials = item.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)

      const shouldHighlight = highlight?.lane === lane && highlight.elementIndex === index

      return (
        <motion.li
          key={`${item.name}-${index}`}
          className="card-premium w-[min(320px,100%)] max-w-full shrink-0 rounded-[1.75rem] border border-[rgba(18,60,84,0.08)] bg-white/98 p-6 text-ink-900 shadow-[0_28px_64px_rgba(18,60,84,0.12)] sm:w-[min(360px,100%)]"
          tabIndex={0}
          role="group"
          onFocus={handleFocus}
          onBlur={handleBlur}
          variants={highlightVariants}
          animate={shouldHighlight ? 'highlight' : 'rest'}
        >
          <div className="card-premium__body space-y-4">
            <div className="flex items-center gap-3">
              <span className="testimonial-avatar" data-variant={item.accent ?? 'emerald'}>
                <span className="testimonial-avatar__inner">
                  {item.avatar ? (
                    <Image
                      src={item.avatar}
                      alt={`Photo of ${item.name}`}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className={`testimonial-avatar__initials ${item.color}`}>{initials}</span>
                  )}
                </span>
              </span>
              <div>
                <p className="font-semibold text-ink-900">{item.name}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500">{item.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-amber-300" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="size-4 fill-current" strokeWidth={1.5} />
              ))}
            </div>
            <p className="text-sm text-slate-600">“{item.quote}”</p>
          </div>
        </motion.li>
      )
    },
    [handleBlur, handleFocus, highlight]
  )

  const renderTrack = (
    controller: MarqueeController,
    handlers: ReturnType<typeof pointerHandlers>,
    lane: HighlightLane
  ) => (
    <div
      ref={lane === 'top' ? topWrapRef : bottomWrapRef}
      className="testi-wrap testi-fade rounded-3xl bg-white py-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul
        ref={controller.trackRef}
        className="testi-track gap-6"
        onPointerDown={handlers.onPointerDown}
        onPointerMove={handlers.onPointerMove}
        onPointerUp={handlers.onPointerUp}
        onPointerCancel={handlers.onPointerCancel}
      >
        {controller.items.map((item, index) => renderCard(item, index, lane))}
      </ul>
    </div>
  )

  const handleToggleManualPause = () => {
    setManualPaused((prev) => !prev)
  }

  return (
    <div role="region" aria-label="Client testimonials" className="space-y-8">
      <div className="space-y-6">
        {renderTrack(top, topHandlers, 'top')}
        {renderTrack(bottom, bottomHandlers, 'bottom')}
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => handleSeek(-1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--skye-200)] bg-white text-[var(--skye-700)] shadow-[0_10px_26px_rgba(18,60,84,0.14)] transition hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--skye-200)]"
          aria-label="Scroll testimonials backward"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={handleToggleManualPause}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--skye-200)] bg-white text-[var(--skye-700)] shadow-[0_10px_26px_rgba(18,60,84,0.14)] transition hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--skye-200)]"
          aria-label={manualPaused ? 'Play testimonials' : 'Pause testimonials'}
        >
          {manualPaused ? <Play className="size-5" /> : <Pause className="size-5" />}
        </button>
        <button
          type="button"
          onClick={() => handleSeek(1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--skye-200)] bg-white text-[var(--skye-700)] shadow-[0_10px_26px_rgba(18,60,84,0.14)] transition hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--skye-200)]"
          aria-label="Scroll testimonials forward"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
