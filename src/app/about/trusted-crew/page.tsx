import Image from 'next/image'

import PageShell from '@/components/PageShell'

const crewHighlights = [
  {
    title: 'Concierge mindset from day one',
    copy: 'Every hire completes hospitality language training, scent etiquette, and privacy protocols before stepping inside your property. We practice service scripts borrowed from five-star hotels so conversations stay polished and discreet.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Backgrounds vetted annually',
    copy: 'Skye reruns federal, state, and county background checks every year, plus social media and NDA reviews for crews handling high-profile families or executives. Thumbs-up access is never a one-time event.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Specialists for every finish',
    copy: 'Stone artisans, textile technicians, window experts, and post-construction leads rotate through our academy each quarter. You always receive a crew that understands the materials inside your space.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  },
]

const guarantees = [
  'Dedicated lead assigned to each property with direct concierge contact information',
  'Team continuity scheduling that prioritizes familiar faces and rhythms',
  'On-call rapid response unit for last-minute showings, inspections, or VIP arrivals',
  'Quarterly performance reviews with client feedback loops and coaching plans',
]

export default function TrustedCrewPage() {
  return (
    <PageShell bodyClassName="with-service-landing" mainClassName="space-y-20 pb-20">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-90"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(7,18,28,0.55), rgba(13,36,56,0.8)), url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-[1] container-px py-20 text-white sm:py-28">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              Trusted Crew
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">The people behind the polish.</h1>
            <p className="text-sm text-white/85 sm:text-base">
              Skye Cleaning Group handpicks concierge teams who blend security, hospitality, and technical mastery. They protect confidentiality, anticipate needs, and elevate every visit.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-4 text-slate-600 sm:text-base">
          <p>
            Luxury cleaning is a human craft. Our recruitment team interviews candidates for cultural fit, problem-solving, and emotional intelligence before they ever discuss cleaning protocols. Once onboard, each specialist passes a nine-week academy covering finish-safe chemistry, service choreography, privacy standards, and scenario-based rehearsals.
          </p>
          <p>
            The goal is simple: when our crew arrives, you feel the calm of working with a private household staff that already understands your rituals. From remembering how you prefer espresso cups arranged to ensuring investor-facing boardrooms always carry the right scent, your crew operates like an extension of your brand.
          </p>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-8 md:grid-cols-3">
            {crewHighlights.map(({ title, copy, image }) => (
              <article key={title} className="overflow-hidden rounded-[2rem] border border-[var(--skye-100)] bg-white shadow-[0_18px_48px_rgba(18,60,84,0.16)]">
                <div className="relative h-48 w-full">
                  <Image src={image} alt={title} fill className="object-cover" />
                </div>
                <div className="space-y-3 p-6 text-sm text-slate-600">
                  <h2 className="text-lg font-semibold text-ink-900">{title}</h2>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-6 rounded-[2rem] bg-[--foam] px-8 py-10 text-ink-900 shadow-[0_22px_64px_rgba(15,60,90,0.12)]">
          <h2 className="text-2xl font-bold">What “trusted” means in practice</h2>
          <ul className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
            {guarantees.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-white/70 bg-white px-5 py-4 shadow-sm">
                <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--skye-500)]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  )
}
