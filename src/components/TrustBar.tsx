import Link from 'next/link'

import { Image as ImageIcon, ShieldCheck, Sparkles, Users } from 'lucide-react'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Full coverage and compliance so your property stays protected.',
    accent: 'emerald',
    href: '/about/licensed-insured',
  },
  {
    icon: Users,
    title: 'Trusted Crew',
    description: 'Professionals are fully trained and rigorously background-checked.',
    accent: 'rose',
    href: '/about/trusted-crew',
  },
  {
    icon: ImageIcon,
    title: 'Gallery',
    description: 'Before-and-after stories staged to impress investors, residents, and guests.',
    accent: 'gold',
    href: '/about/gallery',
  },
  {
    icon: Sparkles,
    title: 'Safer Products',
    description: 'Eco-conscious supplies safe for families, pets, and high-end finishes.',
    accent: 'violet',
    href: '/about/products',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-[--foam] py-8">
      <div className="container-px">
        <div className="grid gap-4 md:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description, accent, href }) => {
            const content = (
              <div className="card-premium__body">
                <span className="mb-3 inline-flex card-premium__icon" data-variant={accent}>
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <p className="font-semibold text-ink-900">{title}</p>
                <p className="mt-1 text-slate-600">{description}</p>
              </div>
            )

            if (href) {
              return (
                <Link key={title} href={href} className="card-premium p-5 text-sm text-ink-900 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--skye-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[--foam]">
                  {content}
                </Link>
              )
            }

            return (
              <div key={title} className="card-premium p-5 text-sm text-ink-900">
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
