import Image from 'next/image'
import Link from 'next/link'

const heroHighlights = [
  {
    title: 'Residences prepared for magazine shoots',
    copy: 'From urban lofts to coastal villas we stage every room with layered detailing and microfiber precision so guests step into a fresh signature scent.'
  },
  {
    title: 'Commercial suites with concierge polish',
    copy: 'Boutique offices and showrooms receive white glove protocols that protect finishes while keeping schedules undisrupted.'
  },
  {
    title: 'Health grade discipline',
    copy: 'Medical suites and wellness studios rely on our surface safe disinfection sequences vetted by infection control consultants.'
  }
]

const servicePrograms = [
  {
    title: 'Recurring Maintenance',
    image: 'https://images.unsplash.com/photo-1604014237865-245c22e53985?auto=format&fit=crop&w=1600&q=80',
    description: 'Weekly or biweekly visits with microfiber zoning, HEPA filtration, refresh of high touch points and signature Skye scenting rituals.'
  },
  {
    title: 'Deep Reset',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80',
    description: 'Detailing for millwork, art, and behind furniture plus steam sanitation for bathrooms and kitchen equipment.'
  },
  {
    title: 'Move In Preparation',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    description: 'Post construction dust removal, appliance revival, grout whitening, and a final walkthrough checklist with your site manager.'
  },
  {
    title: 'Hospitality Changeover',
    image: 'https://images.unsplash.com/photo-1600585154340-0ef3c08ede06?auto=format&fit=crop&w=1600&q=80',
    description: 'Setups for luxury rentals with linen logistics, minibar resets, spa amenity staging, and energy saving turn down service.'
  }
]

const specialtyVerticals = [
  {
    title: 'Estate Housekeeping',
    copy: 'Concierge support for estates with art, wine collections, and specialty flooring. Includes day of event standby teams and valet style supply management.'
  },
  {
    title: 'Corporate Suites',
    copy: 'Executive floors, venture studios, and design agencies receive rapid evening resets, scent zoning, and presentation trays aligned with brand guidelines.'
  },
  {
    title: 'Medical and Wellness',
    copy: 'Boutique clinics, dental practices, and med spas rely on our OSHA aligned disinfection routines, instrument prep assistance, and air quality monitoring logs.'
  },
  {
    title: 'Retail and Showrooms',
    copy: 'Flagship spaces stay camera ready with fingerprint sweeps, lighting polish, and merchandising support delivered before store hours.'
  }
]

const enhancementAddOns = [
  'Crystal, silver, and fine china finishing by trained handlers',
  'Outdoor lounge refresh with upholstery extraction and teak reconditioning',
  'Laundry concierge with pressing and closet restyling',
  'Pet friendly deodorizing and fur control protocols',
  'Eco portfolio audits recommending greener supplies without compromising performance'
]

export default function ServicesPage() {
  return (
    <main className="space-y-24 pb-24">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-85"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(7,18,28,0.50), rgba(13,36,56,0.78)), url(https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-[1] container-px py-24 text-white sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
                Our Services
              </span>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">Concierge cleaning programs for estates, workplaces, and wellness spaces.</h1>
              <p className="text-sm text-white/85 sm:text-base">
                Every engagement begins with a site study so we can engineer the right schedule, tools, and specialists. The result is a property that feels curated every single visit.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/portfolio" className="btn btn-primary">
                  View transformations
                </Link>
                <Link href="#consult" className="btn btn-secondary">
                  Build my service plan
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {heroHighlights.map(({ title, copy }) => (
                <div key={title} className="card-premium p-5 text-left text-white">
                  <div className="card-premium__body space-y-2">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm text-white/75">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-px" id="programs">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Signature service programs</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Select the cadence that matches your property profile. We scale crews, equipment, and reporting around your needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {servicePrograms.map(({ title, image, description }) => (
              <article key={title} className="card-premium overflow-hidden">
                <div className="card-premium__body">
                  <div className="relative h-56 w-full">
                    <Image src={image} alt={title} fill className="object-cover" />
                  </div>
                  <div className="space-y-2 p-6">
                    <h3 className="text-xl font-semibold text-ink-900">{title}</h3>
                    <p className="text-sm text-slate-600">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px" id="verticals">
        <div className="mx-auto max-w-5xl space-y-10 rounded-[2.5rem] bg-[--foam] px-10 py-12 text-ink-900 shadow-[0_28px_68px_rgba(15,60,90,0.12)]">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-black">Specialty vertical expertise</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Dedicated leads oversee training, checklists, and equipment tailored to each environment.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {specialtyVerticals.map(({ title, copy }) => (
              <article key={title} className="rounded-3xl border border-[var(--skye-100)] bg-white p-6 shadow-[0_18px_36px_rgba(30,80,110,0.08)]">
                <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
                <p className="mt-3 text-sm text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px" id="consult">
        <div className="mx-auto max-w-5xl space-y-8 rounded-[2rem] bg-white px-10 py-12 text-ink-900 shadow-[0_24px_60px_rgba(18,60,84,0.14)]">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-black">Enhance every visit</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Layer these add ons to create a bespoke plan that captures every detail of your space.
            </p>
          </div>
          <ul className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
            {enhancementAddOns.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[var(--skye-100)] bg-[var(--foam)] px-5 py-4 text-left shadow-[0_14px_24px_rgba(22,70,100,0.08)]"
              >
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--skye-500)] text-xs font-semibold text-white">
                  ★
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-4 text-center text-sm text-slate-600 sm:flex-row sm:justify-between">
            <div>
              <p className="font-semibold text-ink-900">Ready for a site walkthrough</p>
              <p>Call us to reserve a consultation window that fits your schedule.</p>
            </div>
            <Link href="tel:+14154978008" className="btn btn-primary">
              Call +1 (415) 497-8008
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
