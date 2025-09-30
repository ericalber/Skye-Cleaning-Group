'use client'

import { useState } from 'react'

export default function ServiceTabs({
  doItems,
  dontItems,
}: {
  doItems: string[]
  dontItems: string[]
}) {
  const [activeTab, setActiveTab] = useState<'do' | 'dont'>('do')
  const items = activeTab === 'do' ? doItems : dontItems

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-full border border-white/70 bg-white p-1 shadow-[0_8px_18px_rgba(18,60,84,0.08)]">
        <button
          type="button"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === 'do'
              ? 'bg-[var(--skye-600)] text-white shadow'
              : 'text-slate-600 hover:text-[var(--skye-700)]'
          }`}
          onClick={() => setActiveTab('do')}
          aria-pressed={activeTab === 'do'}
        >
          What we do
        </button>
        <button
          type="button"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === 'dont'
              ? 'bg-[var(--skye-600)] text-white shadow'
              : 'text-slate-600 hover:text-[var(--skye-700)]'
          }`}
          onClick={() => setActiveTab('dont')}
          aria-pressed={activeTab === 'dont'}
        >
          What we don&apos;t cover
        </button>
      </div>
      <ul className="grid gap-3 rounded-3xl border border-white/60 bg-[var(--foam)] p-6 text-sm text-ink-900 shadow-[0_20px_44px_rgba(18,60,84,0.16)] sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--skye-500)]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
