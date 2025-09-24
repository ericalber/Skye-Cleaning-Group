import { BadgeCheck, ShieldCheck, Sparkles, Users } from 'lucide-react'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Full coverage and compliance so your property stays protected.',
  },
  {
    icon: Users,
    title: 'Trusted Crew',
    description: 'Professionals are fully trained and rigorously background-checked.',
  },
  {
    icon: BadgeCheck,
    title: 'Skye Done-Right Guarantee',
    description: "If anything misses the mark, we come back at no additional cost.",
  },
  {
    icon: Sparkles,
    title: 'Safer Products',
    description: 'Eco-conscious supplies safe for families, pets, and high-end finishes.',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-[--foam] py-8">
      <div className="container-px">
        <div className="grid gap-4 md:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div key={title} className="surface surface--white surface--soft p-5 text-sm">
              <Icon className="mb-3 size-6 text-skye-600" aria-hidden="true" />
              <p className="font-semibold text-ink-900">{title}</p>
              <p className="mt-1 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
