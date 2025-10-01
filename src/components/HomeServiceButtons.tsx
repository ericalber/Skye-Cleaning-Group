import Link from 'next/link'
import { Building2, Home } from 'lucide-react'

import Card from '@/components/ui-kits/Card'

export default function HomeServiceButtons() {
  return (
    <section className="bg-white py-12">
      <div className="container-px">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 text-center">
          <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl">Choose the concierge path that fits your property</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/services" className="group block h-full">
              <Card tone="foam" padding="p-7" className="h-full text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(18,60,84,0.12)] bg-[color-mix(in_oklab,var(--skye-50)_86%,white)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color-mix(in_oklab,var(--skye-700)_82%,black)]">
                  Residential
                </span>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-ink-900">Luxury home routines</h3>
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--skye-50)] text-[var(--skye-700)] shadow-[0_12px_28px_rgba(18,60,84,0.12)]">
                    <Home className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Penthouse detailing, seasonal deep resets, and recurring concierge scheduling designed for families that expect the Skye standard.
                </p>
              </Card>
            </Link>

            <Link href="/commercial" className="group block h-full">
              <Card tone="foam" padding="p-7" className="h-full text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(18,60,84,0.12)] bg-[color-mix(in_oklab,var(--skye-50)_86%,white)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color-mix(in_oklab,var(--skye-700)_82%,black)]">
                  Light Commercial
                </span>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-ink-900">Boutique workplace care</h3>
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--skye-50)] text-[var(--skye-700)] shadow-[0_12px_28px_rgba(18,60,84,0.12)]">
                    <Building2 className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Executive suites, private clinics, and showrooms with documentation, compliance, and scent choreography tuned to brand expectations.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
