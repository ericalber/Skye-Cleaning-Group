import Image from 'next/image'

import PageShell from '@/components/PageShell'
import PageBanner from '@/components/PageBanner'
import Card from '@/components/ui-kits/Card'
import Accordion from '@/components/ui-kits/Accordion'
import Button from '@/components/ui-kits/Button'
import MetricStrip from '@/components/blocks/MetricStrip'
import ProcessSteps from '@/components/blocks/ProcessSteps'
import RelatedLinks from '@/components/blocks/RelatedLinks'

const narrativeSections = [
  {
    title: 'A laboratory dedicated to finish-safe performance',
    paragraphs: [
      'Every concentrate that enters a Skye caddy is tested on replica marble, lacquer, hardwood, stainless steel, and couture textiles. We recreate real-world soiling with synthetic oils, mineral deposits, urban grime, and makeup pigments, then measure dwell time, pH, and residue. If a formula clouds, etches, or dulls the finish, it never graduates to the field. The goal is simple: deliver hospital-grade cleanliness without compromising the architecture or luxury materials that define your property.',
      'Our lab calibrates dilution systems for each product, labeling bottles with QR codes that crews scan before dosing. That ensures microfiber glide remains effortless, glass dries streak-free, and stone retains its original sheen. By the time a concentrate reaches your property, it has already survived dozens of torture tests designed by our chemists and hospitality advisors.',
    ],
  },
  {
    title: 'Chemistry with conscience and compliance baked in',
    paragraphs: [
      'Sustainability is non-negotiable for the estates, private offices, and boutique clinics we serve. We catalogue Green Seal, EPA Safer Choice, Woolsafe, and EU Ecolabel approvals, documenting batch numbers, lot tracking, and expiry dates for every chemical. When clients pursue LEED, WELL, or corporate ESG reporting, we export usage logs that show exactly which solutions were deployed in each zone. The paperwork that backs your cleaning story is ready before auditors even ask.',
      'Consumables are portioned to minimize waste, microfiber is laundered in closed-loop systems, and scent programs rely on hypoallergenic capsules designed to complement—never overpower—the environment. Our lab even tracks packaging recyclability so procurement teams can align maintenance with sustainability goals without introducing operational friction.',
    ],
  },
  {
    title: 'Tailored kits for every environment under your umbrella',
    paragraphs: [
      'High-rise residences, venture boardrooms, boutique medical suites, and flagship retail each require distinct chemistry choreography. We assemble modular kits by zone: kitchen suites receive degreasers compatible with designer appliances, wellness areas rely on botanical disinfectants and UV validation tools, while executive offices pair low-scent anti-static sprays with scent capsules curated by our hospitality partners.',
      'Because each property blueprint lives in our command center, crews receive update prompts whenever the lab optimizes a formula or introduces a new supplier. The transition happens seamlessly—the next visit arrives with the updated product, QR codes already linked to your reporting dashboard, and instructions embedded in the team’s mobile checklist.',
    ],
  },
  {
    title: 'Innovation you can feel and prove after every visit',
    paragraphs: [
      'Clients care about the results, not the ingredients list, so we demonstrate the difference through measurable metrics. Air-quality sensors capture particulate reductions after fogging high-touch zones. Textile longevity is charted in our dashboard so you see how encapsulation chemistry extends fiber life. Stone gloss meters provide before-and-after readings that designers can forward to owners. The data proves that the right chemistry protects investment and elevates the guest experience.',
      'When an incident occurs—spilled red wine on cashmere, makeup residue on lacquer, surgical adhesive on vinyl—we deploy the lab’s specialty stain command kit. Technicians receive step-by-step microguides that match solvent to substrate, supported by neutralizing agents that halt damage before it spreads. The incident report documents every step so stakeholders trust that recovery was handled professionally.',
    ],
  },
]

const highlightCards = [
  {
    title: 'Replica-material testing',
    description: 'Marble, lacquer, hardwood, and fabric panels live in our lab so chemistries prove themselves before they visit client properties.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Botanical disinfection, hospital validation',
    description: 'Green Seal and EPA Safer Choice formulas pair with ATP testing and UV validation to keep wellness spaces audit-ready.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Fragrance engineering',
    description: 'Hypoallergenic scent capsules are mapped to each zone so arrivals feel curated without overpowering sensitive guests.',
    image: 'https://images.unsplash.com/photo-1520281657521-4c5ea04f0b1b?auto=format&fit=crop&w=1600&q=80',
  },
]

const accordionItems = [
  {
    title: 'How are new chemistries approved for use?',
    content: (
      <p>
        Every product passes replica-surface testing, residue analysis, and fragrance evaluation. Once approved, crews complete micro-training modules before the chemistry is added to any kit.
      </p>
    ),
  },
  {
    title: 'Can you align with my ESG or compliance reporting?',
    content: (
      <p>
        Yes. We export chemical inventories, usage logs, and certification badges to match LEED, WELL, B Corp, and internal ESG frameworks. Finance and compliance teams receive documentation in minutes, not weeks.
      </p>
    ),
  },
  {
    title: 'What happens if a specialty stain or spill occurs?',
    content: (
      <p>
        The lab dispatches a stain command kit and step-by-step guide tailored to the material. Technicians neutralize the issue, log photos, and document chemistry usage so the incident report tells a complete story.
      </p>
    ),
  },
]

const certifications = [
  'EPA Safer Choice and Green Seal approvals across maintenance chemistries',
  'EPA List N botanical disinfectants for high-touch sanitizing',
  'Woolsafe-approved textile shampoos and protectants',
  'Marble Institute of America-endorsed stone care systems',
  'LEED-compliant consumables and portion-controlled dilution stations',
]

const productPillars = [
  {
    label: '1. Chemistry intelligence',
    description:
      'We score every product on efficacy, material compatibility, environmental impact, and sensory experience. Only the highest performers earn space in the Skye caddy, and each bottle is labeled with QR codes for instant reference.',
  },
  {
    label: '2. Hyper-controlled dilution',
    description:
      'Closed-loop dispensers calibrate concentrates to the ounce, preventing residue, protecting finishes, and eliminating chemical waste. Supervisors audit dilution logs to keep every visit consistent.',
  },
  {
    label: '3. Luxury sensory layering',
    description:
      'Cleaning is more than disinfection. We stage signature Skye scent capsules, allergen-free fabric refreshers, and microfiber choreography that polishes surfaces to a gallery sheen while keeping the air crisp.',
  },
]

const productMetrics = [
  { label: 'Lab Tests', value: '150+/mo', caption: 'Replica-surface evaluations before new chemistries leave the lab.' },
  { label: 'Green Seal', value: '98%', caption: 'Share of maintenance products that meet third-party sustainability marks.' },
  { label: 'QR References', value: '100%', caption: 'Bottles labeled with dosing, safety data, and reporting links.' },
  { label: 'Stain Response', value: '<60 min', caption: 'Average dispatch time for specialty stain command kits.' },
]

const productProcess = [
  {
    title: 'Audit your finishes',
    description: 'We walk every surface, textile, and piece of equipment to understand sensitivities and compliance obligations.',
  },
  {
    title: 'Build the chemistry set',
    description: 'Replica tests, sustainability vetting, and QR documentation create the kit tailored to your blueprint.',
  },
  {
    title: 'Monitor & refine',
    description: 'Usage logs, lab updates, and ESG reports keep the kit optimized and your stakeholders informed.',
  },
]

const productRelatedLinks = [
  {
    title: 'Meet our credentialing desk',
    description: 'Review how licensing, insurance, and safety paperwork stay audit ready.',
    href: '/about/licensed-insured',
  },
  {
    title: 'Tour the concierge academy',
    description: 'See how specialists are trained to deploy chemistries with five-star etiquette.',
    href: '/about/trusted-crew',
  },
  {
    title: 'Explore the service directory',
    description: 'Match the right program to your property once the chemistry set is dialed in.',
    href: '/services',
  },
]

export default function ProductsPage() {
  return (
    <PageShell bodyClassName="with-gotravel with-service-landing" mainClassName="space-y-24 pb-24">
      <PageBanner
        eyebrow="Safer Products"
        title="Our lab keeps your finishes flawless without sacrificing compliance."
        description="Explore the chemistry, sustainability, and reporting workflow that power the Skye concierge experience across residences and workplaces."
        image="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-px">
        <div className="mx-auto max-w-4xl space-y-8 text-sm text-slate-600 sm:text-base">
          {narrativeSections.map(({ title, paragraphs }) => (
            <div key={title} className="space-y-3">
              <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl">{title}</h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <MetricStrip
            eyebrow="How the lab backs every visit"
            items={productMetrics}
            description="Metrics your facilities, ESG, and hospitality teams can rely on when they approve our chemistries."
          />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          {highlightCards.map(({ title, description, image }) => (
            <Card key={title} className="p-0 text-left">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={image} alt={title} fill sizes="100vw" loading="lazy" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
                <p className="text-sm text-slate-600">{description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <ProcessSteps steps={productProcess} eyebrow="How your chemistry program is composed" />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl text-center">Chemistry questions we hear most</h2>
          <Accordion items={accordionItems} allowMultiple className="space-y-4" />
        </div>
      </section>

      <section className="container-px">
        <Card tone="foam" padding="p-8 sm:p-10" className="mx-auto max-w-6xl">
          <div className="space-y-6 text-ink-900">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Certifications on every shelf</h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Every bottle and capsule that enters a Skye kit is backed by third-party endorsements and safety logs you can forward to procurement without edits.
              </p>
            </div>
            <ul className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              {certifications.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-[1.75rem] border border-[rgba(18,60,84,0.12)] bg-white/95 px-5 py-4 shadow-[0_16px_40px_rgba(15,60,90,0.12)]"
                >
                  <span className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--skye-50)_86%,white)] text-[var(--skye-600)] shadow-[0_10px_24px_rgba(18,60,84,0.12)]">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <RelatedLinks links={productRelatedLinks} eyebrow="Keep exploring" />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-6 text-slate-600 sm:text-base">
          {productPillars.map(({ label, description }) => (
            <Card key={label} padding="p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-ink-900">{label}</h3>
              <p className="mt-2">{description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-px">
        <Card padding="p-8 sm:p-10" className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Need our lab to architect your hybrid cleaning program?</h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            We can map chemistry rotations, scent programs, and reporting workflows around your property portfolio. Reach out to the concierge desk and we will build a tailored proposal within days.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/#quote">
              Build my concierge plan
            </Button>
            <Button variant="secondary" size="lg" href="mailto:contact@skyecgroup.com">
              Request product dossier
            </Button>
          </div>
        </Card>
      </section>
    </PageShell>
  )
}
