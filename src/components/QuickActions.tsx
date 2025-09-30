"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const shortcuts = [
  { label: 'Recurring', service: 'recurring' },
  { label: 'Deep Clean', service: 'deep' },
  { label: 'Move-In/Out', service: 'move' },
]

export default function QuickActions() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleAction = (service: string) => {
    const params = new URLSearchParams(searchParams?.toString())
    params.set('service', service)

    const next = `${pathname}?${params.toString()}#quote`

    router.push(next, { scroll: false })

    requestAnimationFrame(() => {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <section className="container-px pb-12">
      <div className="card-premium mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 rounded-3xl px-6 py-5 text-ink-900">
        <p className="card-premium__body text-sm font-semibold text-ink-900">Quick actions:</p>
        {shortcuts.map(({ label, service }) => (
          <button
            key={service}
            type="button"
            onClick={() => handleAction(service)}
            className="inline-flex items-center rounded-full border border-[var(--skye-200)] bg-white px-4 py-2 text-sm font-semibold text-[var(--skye-700)] shadow-sm transition hover:-translate-y-[1px] hover:border-[var(--skye-400)] hover:bg-[var(--skye-50)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--skye-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  )
}
