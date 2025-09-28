import Image from 'next/image'

import PageShell from '@/components/PageShell'

const laboratoryHighlights = [
  {
    title: 'Finish-safe by design',
    copy: 'We field-test every concentrate on replica marble, unlacquered brass, exotic hardwood, and couture fabrics before it enters your property. If a formula clouds, etches, or fades a surface, it never joins the Skye kit.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Performance with conscience',
    copy: 'Hospital-grade botanical disinfectants, Green Seal®-certified glass cleaners, and EU Ecolabel degreasers allow us to exceed sanitation protocols without introducing harsh residues or headaches.',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Tailored to every environment',
    copy: 'Residences, boardrooms, clinics, and hospitality venues each receive a bespoke chemistry profile—what lives in a penthouse supply caddy differs from what is staged inside a biotech lab.',
    image: 'https://images.unsplash.com/photo-1580281657521-4c5ea04f0b1b?auto=format&fit=crop&w=1200&q=80',
  },
]

const certifications = [
  'EPA Safer Choice and Green Seal® concentrates for daily maintenance',
  'EPA List N botanical disinfectants for high-touch sanitizing',
  'Woolsafe®-approved textile shampoos and protectants',
  'Marble Institute of America-endorsed stone care system',
  'LEED compliant consumables and portion-controlled dilution stations',
]

const productPillars = [
  {
    label: '1. Chemistry intelligence',
    description:
      'Our procurement lab scores every product on efficacy, material compatibility, environmental impact, and sensory experience. The winners join curated kits labeled by room and surface so crews always reach for the correct formula without second-guessing.',
  },
  {
    label: '2. Hyper-controlled dilution',
    description:
      'We deploy closed-loop dilution systems that calibrate concentrates to the exact ounce. That means streak-free mirrors, residue-free floors, and zero chemical waste. It also protects finishes from overexposure and keeps air quality pristine.',
  },
  {
    label: '3. Luxury sensory layering',
    description:
      'Cleaning is more than disinfection. We stage signature Skye scent capsules, allergen-free fabric refreshers, and microfiber choreography that polishes surfaces to a gallery sheen while leaving the air crisp and calm.',
  },
]

export default function ProductsPage() {
  return (
    <PageShell bodyClassName="with-gotravel with-service-landing" mainClassName="space-y-20 pb-20">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-85"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(7,18,28,0.55), rgba(13,36,56,0.8)), url(https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-[1] container-px py-20 text-white sm:py-28">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              Safer Products
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">Safer products, same concierge glow.</h1>
            <p className="text-sm text-white/85 sm:text-base">
              Every product inside a Skye caddy is hand-tested, sustainability vetted, and selected to protect luxury finishes while delivering audit-ready sanitation.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-slate-600 sm:text-base">
            <p>
              Skye Cleaning Group operates a private product lab to ensure our chemistry keeps pace with the residences, clinics, and boardrooms we service. Before a single bottle reaches your property, it passes a four-step test: efficacy benchmarking, surface compatibility, sustainability scoring, and sensory evaluation. The result is a curated arsenal that marries hospital-level hygiene with the understated elegance of a five-star hotel.
            </p>
            <p>
              We collaborate with global manufacturers in the United States, Germany, and Scandinavia to source concentrates that deliver uncompromising performance. Each batch arrives with lot tracking and safety data sheets loaded into your digital account portal, making compliance audits or insurance reviews effortless.
            </p>
            <p>
              From aerospace-grade microfiber to Woolsafe-approved textile shampoos, the products we use protect your investments, your teams, and the air you breathe. Below, explore the pillars that guide every Skye chemistry decision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {productPillars.map(({ label, description }) => (
              <article key={label} className="card-premium p-6 text-sm text-slate-600">
                <div className="card-premium__body space-y-3">
                  <h2 className="text-lg font-semibold text-ink-900">{label}</h2>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">In our caddies right now</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              These are the certifications and product families we rely on to keep penthouses, labs, and offices audit-ready without compromising finish longevity.
            </p>
          </div>
          <ul className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
            {certifications.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[var(--skye-100)] bg-[var(--foam)] px-5 py-4 shadow-[0_14px_28px_rgba(18,60,84,0.12)]"
              >
                <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--skye-500)]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="grid gap-8 md:grid-cols-3">
            {laboratoryHighlights.map(({ title, copy, image }) => (
              <article key={title} className="overflow-hidden rounded-[2rem] border border-[var(--skye-100)] bg-white shadow-[0_18px_48px_rgba(18,60,84,0.16)]">
                <div className="relative h-44 w-full">
                  <Image src={image} alt={title} fill className="object-cover" />
                </div>
                <div className="space-y-3 p-6 text-sm text-slate-600">
                  <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
