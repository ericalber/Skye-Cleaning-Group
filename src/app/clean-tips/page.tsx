import Image from 'next/image'
import Link from 'next/link'

import { cleanTips } from '@/data/cleanTips'
import PageShell from '@/components/PageShell'
import PageBanner from '@/components/PageBanner'
import Card from '@/components/ui-kits/Card'

export default function CleanTipsPage() {
  return (
    <PageShell bodyClassName="with-gotravel" mainClassName="space-y-16 pb-20">
      <PageBanner
        eyebrow="Cleaning Tips"
        title="Cleaning Tips"
        description="Concierge-grade routines, chemistry picks, and hospitality secrets that keep your space Skye-level between visits."
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {cleanTips.map(({ slug, title, hook, hero }) => (
              <Card
                key={slug}
                as={Link}
                href={`/clean-tips/${slug}`}
                className="group flex aspect-[4/5] flex-col overflow-hidden"
                padding="p-0"
              >
                <div className="relative h-[55%] w-full overflow-hidden">
                  <Image
                    src={hero}
                    alt={title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.27em] text-[var(--skye-600)]">
                    Premium Insight
                  </span>
                  <h2 className="text-lg font-semibold text-ink-900 line-clamp-2">{title}</h2>
                  <p className="text-sm text-slate-600 line-clamp-3">{hook}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--skye-700)]">
                    Read the full tip
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
