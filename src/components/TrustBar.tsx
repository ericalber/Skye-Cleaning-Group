import { BadgeCheck, ShieldCheck, Sparkles, Users } from 'lucide-react'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Full coverage and compliance so your property stays protected.',
    iconColor: 'text-cyan-200',
  },
  {
    icon: Users,
    title: 'Trusted Crew',
    description: 'Professionals are fully trained and rigorously background-checked.',
    iconColor: 'text-emerald-300',
  },
  {
    icon: BadgeCheck,
    title: 'Skye Done-Right Guarantee',
    description: "If anything misses the mark, we come back at no additional cost.",
    iconColor: 'text-amber-200',
  },
  {
    icon: Sparkles,
    title: 'Safer Products',
    description: 'Eco-conscious supplies safe for families, pets, and high-end finishes.',
    iconColor: 'text-rose-200',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-[--foam] py-8">
      <div className="container-px">
        <div className="grid gap-4 md:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description, iconColor }) => (
            <div key={title} className="surface surface--navy surface--soft surface--metal p-5 text-sm text-white">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Icon className={`size-6 ${iconColor}`} aria-hidden="true" />
              </span>
              <p className="font-semibold">{title}</p>
              <p className="mt-1 text-white/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
