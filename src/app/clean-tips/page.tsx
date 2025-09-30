import Image from 'next/image'
import Link from 'next/link'

import { cleanTips } from '@/data/cleanTips'
import PageShell from '@/components/PageShell'

export default function CleanTipsPage() {
  return (
    <PageShell bodyClassName="with-gotravel" mainClassName="space-y-16 pb-20">
      <section className="container-px pt-16 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--skye-700)]">Clean Tips</p>
        <h1 className="mt-4 text-3xl font-black sm:text-4xl">Sharp cleaning insights to make every routine smarter.</h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          We curated the exact tactics we use in premium visits so you can keep spaces impeccable between appointments.
        </p>
      </section>

      <section className="container-px">
        <div className="mx-auto gtx-grid -columns-3 max-w-6xl">
          {cleanTips.map(({ slug, title, hook, excerpt, hero }) => (
            <article key={slug} className="gtx-card">
              <div className="gtx-card__media">
                <Image src={hero} alt={title} fill className="object-cover" />
              </div>
              <div className="gtx-card__body">
                <span className="gtx-card__meta">Premium insight</span>
                <h2 className="gtx-card__title">{title}</h2>
                <p className="gtx-card__excerpt">{hook}</p>
                <p className="gtx-card__excerpt">{excerpt}</p>
                <Link href={`/clean-tips/${slug}`} className="gtx-card__cta">
                  Read the full tip →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
