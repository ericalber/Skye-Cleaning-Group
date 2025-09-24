import Link from 'next/link'

const shortcuts = [
  { label: 'Recurring', service: 'recurring' },
  { label: 'Deep Clean', service: 'deep' },
  { label: 'Move-In/Out', service: 'move' },
]

export default function QuickActions() {
  return (
    <section className="container-px pb-12">
      <div className="surface surface--navy surface--metal mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 rounded-3xl px-6 py-5 text-white">
        <p className="text-sm font-semibold">Quick actions:</p>
        {shortcuts.map(({ label, service }) => (
          <Link
            key={service}
            href={`/?service=${service}#quote`}
            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            {label}
          </Link>
        ))}
      </div>
    </section>
  )
}
