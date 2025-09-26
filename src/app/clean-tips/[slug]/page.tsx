import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { cleanTips, getCleanTip } from '@/data/cleanTips'

export function generateStaticParams() {
  return cleanTips.map(({ slug }) => ({ slug }))
}

export default async function CleanTipDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tip = getCleanTip(slug)

  if (!tip) {
    notFound()
  }

  return (
    <main className="space-y-16 pb-20">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-85"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(7,18,28,0.55), rgba(13,36,56,0.75)), url(${tip.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
          }}
        />
        <div className="relative z-[1] container-px py-20 text-white sm:py-28">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Clean Tips</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">{tip.title}</h1>
            <p className="text-sm text-white/80 sm:text-base">{tip.hook}</p>
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 text-slate-700">
          <div className="relative h-72 w-full overflow-hidden rounded-[1.75rem] shadow-[0_28px_80px_rgba(18,60,84,0.18)]">
            <Image src={tip.hero} alt={tip.title} fill className="object-cover" priority />
          </div>
          {tip.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="rounded-3xl bg-[--foam] px-6 py-5 text-sm text-[var(--skye-700)] shadow-[0_16px_40px_rgba(18,60,84,0.15)]">
            Liked this tip? Share it with someone who loves smart cleaning shortcuts.
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 pt-6 text-sm">
            <Link href="/clean-tips" className="text-[var(--skye-700)] hover:text-[var(--skye-900)]">
              ← Back to all Clean Tips
            </Link>
            <Link href="/" className="text-[var(--skye-700)] hover:text-[var(--skye-900)]">
              Go to the home page →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
