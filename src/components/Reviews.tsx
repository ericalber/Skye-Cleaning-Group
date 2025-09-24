import Image from 'next/image'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Alex Morgan',
    location: 'Pacific Heights • San Francisco',
    quote:
      'Skye Cleaning Group transformed our apartment in just a few hours. The attention to detail feels boutique-hotel level.',
    color: 'bg-skye-500',
  },
  {
    name: 'Priya S.',
    location: 'Mill Valley • Marin',
    quote:
      'The crew was punctual, kind, and careful with our art pieces. Our post-event reset was flawless.',
    color: 'bg-slate-600',
  },
  {
    name: 'Nathan & Elise',
    location: 'Sausalito • North Bay',
    quote:
      'We signed up for recurring service and never need a follow-up checklist. Every visit holds the Skye standard.',
    color: 'bg-skye-700',
  },
]

const reviewSources = [
  {
    label: 'Google Reviews',
    description: '4.9 ★ rating from Bay Area clients',
    logo: '/logos/google-reviews.svg',
    alt: 'Google reviews logo',
    className:
      'bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#f4f5f7_55%,#e2e8f0_100%)] text-ink-900 ring-1 ring-white/60 shadow-[0_12px_32px_rgba(15,23,42,0.08)]',
    logoBg: 'bg-white',
    subText: 'text-slate-600',
  },
  {
    label: 'Yelp',
    description: 'People Love Us on Yelp',
    logo: '/logos/yelp.png',
    alt: 'Yelp burst logo',
    className:
      'bg-[radial-gradient(circle_at_top_left,#c92a2a_0%,#aa0b0b_48%,#650909_100%)] text-white ring-1 ring-white/30 shadow-[0_12px_30px_rgba(175,6,6,0.35)]',
    logoBg: 'bg-white/15',
    subText: 'text-white/80',
  },
  {
    label: 'Thumbtack',
    description: 'Top Pro partner • 2025',
    logo: '/logos/thumbtack.png',
    alt: 'Thumbtack pin logo',
    className:
      'bg-[radial-gradient(circle_at_top_left,#24c6f5_0%,#0c9ada_55%,#026aa2_100%)] text-white ring-1 ring-white/25 shadow-[0_12px_30px_rgba(2,106,162,0.3)]',
    logoBg: 'bg-white/15',
    subText: 'text-white/80',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {reviewSources.map(({ label, description, logo, alt, className, logoBg, subText }) => (
              <div
                key={label}
                className={`group relative flex items-center gap-3 rounded-2xl px-4 py-1.5 text-[0.7rem] transition hover:translate-y-[-1px] hover:shadow-xl ${className}`}
              >
                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-20 group-hover:bg-white" />
                <span className={`relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full ${logoBg}`}>
                  <Image src={logo} alt={alt} width={20} height={20} className="object-contain" />
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold uppercase tracking-wide">{label}</span>
                  <span className={`text-[0.65rem] font-normal normal-case opacity-90 ${subText ?? 'text-slate-500'}`}>
                    {description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Clients who trust the Skye standard.</h2>
          <p className="mt-3 text-slate-600">
            Real stories from Bay Area homes and boutique businesses welcoming our team.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map(({ name, location, quote, color }) => (
            <article key={name} className="surface surface--navy surface--metal p-6 text-white">
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${color}`} aria-hidden="true">
                  {name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-xs uppercase tracking-wide text-white/70">{location}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" aria-hidden="true" strokeWidth={1.5} />
                ))}
              </div>
              <p className="mt-4 text-sm text-white/80">“{quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
