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

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">4.9 ★ Google • Yelp • Thumbtack</span>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Clients who trust the Skye standard.</h2>
          <p className="mt-3 text-slate-600">
            Real stories from Bay Area homes and boutique businesses welcoming our team.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map(({ name, location, quote, color }) => (
            <article key={name} className="surface surface--white p-6">
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${color}`} aria-hidden="true">
                  {name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-ink-900">{name}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-600">{location}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-skye-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" aria-hidden="true" strokeWidth={1.5} />
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">“{quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
