import Image from 'next/image'
import Link from 'next/link'

import { cleanTips } from '@/data/cleanTips'

export default function CleanTipsPage() {
  return (
    <main className="space-y-16 pb-20">
      <section className="container-px pt-16 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--skye-700)]">Clean Tips</p>
        <h1 className="mt-4 text-3xl font-black sm:text-4xl">Sharp cleaning insights to make every routine smarter.</h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          We curated the exact tactics we use in premium visits so you can keep spaces impeccable between appointments.
        </p>
      </section>

      <section className="container-px">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {cleanTips.map(({ slug, title, hook, excerpt, hero }) => (
            <article key={slug} className="card-premium p-5">
              <div className="card-premium__body space-y-4">
                <div className="relative h-44 w-full overflow-hidden rounded-[1.25rem]">
                  <Image src={hero} alt={title} fill className="object-cover" />
                </div>
                <h2 className="text-lg font-semibold text-ink-900">{title}</h2>
                <p className="font-semibold text-sm text-[var(--skye-700)]">{hook}</p>
                <p className="text-sm text-slate-600">{excerpt}</p>
                <Link
                  href={`/clean-tips/${slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[var(--skye-700)] hover:text-[var(--skye-900)]"
                >
                  Read the full tip →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
