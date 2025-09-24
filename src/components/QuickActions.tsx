import Link from 'next/link'

const shortcuts = [
  { label: 'Recurring', service: 'recurring' },
  { label: 'Deep Clean', service: 'deep' },
  { label: 'Move-In/Out', service: 'move' },
]

export default function QuickActions() {
  return (
    <section className="container-px pb-12">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 rounded-3xl border border-skye-200 bg-[--foam] px-6 py-5 shadow-[0_12px_30px_rgba(18,60,84,0.08)]">
        <p className="text-sm font-semibold text-ink-900">Quick actions:</p>
        {shortcuts.map(({ label, service }) => (
          <Link
            key={service}
            href={`/?service=${service}#quote`}
            className="inline-flex items-center rounded-full border border-skye-200 bg-white px-4 py-2 text-sm font-semibold text-skye-700 hover:border-skye-400"
          >
            {label}
          </Link>
        ))}
      </div>
    </section>
  )
}
