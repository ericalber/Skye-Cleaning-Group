import Image from 'next/image'
import TestimonialsMarquee from './TestimonialsMarquee'
import type { Review } from './TestimonialsMarquee'

const reviews: Review[] = [
  {
    name: 'Alex Morgan',
    location: 'Pacific Heights • San Francisco',
    quote:
      'Skye Cleaning Group transformed our apartment in just a few hours. The attention to detail feels boutique-hotel level.',
    color: 'bg-skye-500',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    accent: 'emerald',
  },
  {
    name: 'Priya S.',
    location: 'Mill Valley • Marin',
    quote:
      'The crew was punctual, kind, and careful with our art pieces. Our post-event reset was flawless.',
    color: 'bg-slate-600',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
    accent: 'rose',
  },
  {
    name: 'Nathan & Elise',
    location: 'Sausalito • North Bay',
    quote:
      'We signed up for recurring service and never need a follow-up checklist. Every visit holds the Skye standard.',
    color: 'bg-skye-700',
    avatar: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=120&q=80',
    accent: 'violet',
  },
  {
    name: 'Olivia Hart',
    location: 'Cow Hollow • San Francisco',
    quote:
      'They polished every corner before our hosted dinner. Scheduling was effortless and the follow-up impeccable.',
    color: 'bg-slate-500',
    accent: 'rose',
  },
  {
    name: 'Michael Lang',
    location: 'Nob Hill • San Francisco',
    quote:
      'Their visit recaps and proactive communication keep our busy household perfectly under control.',
    color: 'bg-skye-600',
    accent: 'emerald',
  },
  {
    name: 'Caroline Dupont',
    location: 'Belvedere • Marin',
    quote:
      'The crew is discreet, organized, and always leaves our weekend home staged exactly how we like it.',
    color: 'bg-slate-700',
    accent: 'violet',
  },
  {
    name: 'Ethan Rogers',
    location: 'Healdsburg • Sonoma',
    quote:
      'For our rental properties, Skye’s standard keeps us at five stars with every turnover.',
    color: 'bg-skye-500',
    accent: 'gold',
  },
]

const reviewSources = [
  {
    label: 'Google Reviews',
    description: '4.9 ★ rating from Bay Area clients',
    logo: '/logos/Google-3d.png',
    alt: 'Google reviews 3D logo',
    href: 'https://maps.app.goo.gl/SkyeCleaningGroup',
  },
  {
    label: 'Yelp',
    description: 'People Love Us on Yelp',
    logo: '/logos/yelp.png',
    alt: 'Yelp logo',
    href: 'https://www.yelp.com/biz/skye-cleaning-group-san-francisco',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {reviewSources.map(({ label, logo, alt, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex"
              >
                <Image
                  src={logo}
                  alt={alt}
                  width={256}
                  height={256}
                  className="h-12 w-24 object-contain opacity-85 transition-opacity hover:opacity-100 mix-blend-multiply"
                />
              </a>
            ))}
          </div>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Clients who trust the Skye standard.</h2>
          <p className="mt-3 text-slate-600">
            Real stories from Bay Area homes and boutique businesses welcoming our team.
          </p>
        </div>
      </div>
      <TestimonialsMarquee reviews={reviews} />
    </section>
  )
}
