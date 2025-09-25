import { BadgeCheck, ShieldCheck, Sparkles, Users } from 'lucide-react'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Full coverage and compliance so your property stays protected.',
    accent: 'emerald',
  },
  {
    icon: Users,
    title: 'Trusted Crew',
    description: 'Professionals are fully trained and rigorously background-checked.',
    accent: 'rose',
  },
  {
    icon: BadgeCheck,
    title: 'Skye Done-Right Guarantee',
    description: "If anything misses the mark, we come back at no additional cost.",
    accent: 'gold',
  },
  {
    icon: Sparkles,
    title: 'Safer Products',
    description: 'Eco-conscious supplies safe for families, pets, and high-end finishes.',
    accent: 'violet',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-[--foam] py-8">
      <div className="container-px">
        <div className="grid gap-4 md:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description, accent }) => (
            <div key={title} className="card-premium p-5 text-sm text-ink-900">
              <div className="card-premium__body">
                <span className="mb-3 inline-flex card-premium__icon" data-variant={accent}>
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <p className="font-semibold text-ink-900">{title}</p>
                <p className="mt-1 text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
