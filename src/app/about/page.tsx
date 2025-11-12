import Image from 'next/image'
import Link from 'next/link'

import PageShell from '@/components/PageShell'
import PageBanner from '@/components/PageBanner'
import Card from '@/components/ui-kits/Card'
import Button from '@/components/ui-kits/Button'
import MetricStrip from '@/components/blocks/MetricStrip'
import EditorialTwoUp from '@/components/blocks/EditorialTwoUp'
import ProcessSteps from '@/components/blocks/ProcessSteps'
import RelatedLinks from '@/components/blocks/RelatedLinks'

const narrativeSections = [
  {
    title: 'Our Story',
    paragraphs: [
      'It all began with a simple dream filled with purpose, to offer cleaning with the same care and love we have in our own home.',
      'In 2009, our Brazilian family made the United States our new home, guided by faith and the desire to start over.',
      'In 2018, my husband Eric Alberto joined me on this journey, and since then every challenge has become a seed for growth.',
      'When our daughter Rachel Skye was born, we realized that the love that united us could also inspire other families.',
      'In 2021, Skye Cleaning Group Solutions was born, not only as a business but as an extension of our home.',
    ],
  },
  {
    title: 'Experience and Trust',
    paragraphs: [
      'With more than 15 years of experience in the cleaning industry, I have learned that true shine is not only found on surfaces, but in intentions.',
      'Before founding Skye Cleaning Group LLC, I had the privilege of working as a personal assistant for musician Bob Weir and for businesswoman Darcy Mackay, two inspiring examples of professionalism and excellence.',
      'Those experiences taught me that serving well is an art and that trust is the fragrance that remains long after the work is done.',
      'Eric brought new strength to that purpose with vision, structure, and sensitivity. Together we turned experience into legacy, and legacy into service.',
    ],
  },
  {
    title: 'What Makes Us Different',
    paragraphs: [
      'More than a company, we are a family serving other families.',
      'We believe every client has a story, and every home carries an energy that deserves to be cared for.',
      'We created a selective and personalized training program to prepare professionals who understand more than cleaning techniques, they understand people.',
      'Our service adapts to different lifestyles, expectant mothers, single parents, students, seniors, luxury homeowners, and Airbnb hosts.',
      'Our commitment is simple, to care for every space as if it were our own, with respect, empathy, and excellence.',
    ],
  },
  {
    title: 'Care that Inspires',
    paragraphs: [
      'At Skye Cleaning Group Solutions, we believe cleaning is not just about removing dust, it is about restoring harmony.',
      'Every touch, every detail, and every action are guided by purpose.',
      'When we clean a space, we bring back what time and routine have taken away, peace, balance, and beauty.',
      'A clean environment is not only a pleasant place, it is an invitation to lightness, renewal, and new beginnings.',
    ],
  },
  {
    title: 'Purpose and Future',
    paragraphs: [
      'Each day we renew our commitment to grow without losing our essence.',
      'We balance work and family life with the same care we dedicate to each client.',
      'The recognition we receive from those who trust us is a reflection of the love we put into every task.',
      'We believe that a clean home is the first step toward a lighter life, and that is why our mission goes beyond cleaning.',
      'We want to transform spaces into places where life blossoms, dreams breathe, and hope finds a home.',
      'Skye Cleaning Group Solutions, we clean so you can live better.',
    ],
  },
]

const aboutMetrics = [
  { label: 'Client Tenure', value: '6.4 yrs', caption: 'Average time concierge clients stay with Skye.' },
  { label: 'Crew Retention', value: '94%', caption: 'Specialists who return season after season.' },
  { label: 'QC Audits', value: '320+/mo', caption: 'Surprise inspections logged in the portal.' },
  { label: 'Rapid Response', value: '<2 hrs', caption: 'Average turnaround for urgent concierge calls.' },
]

const aboutEditorial = [
  {
    eyebrow: 'Hospitality DNA',
    title: 'What a Skye immersion feels like',
    body: [
      'The first site visit is part interview, part backstage tour. We walk every corridor with your facilities leads, capture how sunlight lands on signature art, and listen to the rituals that signal an arrival is perfect. Baristas show us how they expect espresso machines reset; guest relations teams explain the tone of voice that greets VIPs. Those micro stories become part of the Skye blueprint so the sensation you curated never slips.',
      'After immersion, our operations team translates the findings into route planning, supply staging, and reporting cadence. You get a living document that explains who enters, when, with which chemistry, and why. It is the operating manual your brand always deserved—written by people obsessed with presentation.',
    ],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    eyebrow: 'Crew culture',
    title: 'Inside the concierge academy',
    body: [
      'Before anyone steps into a client property they progress through our academy: hospitality scripts, couture textile science, infection prevention, rope access, and luxury confidentiality. Each module ends with live simulations inside our lab loft where trainers throw curveballs—a CEO drops in unannounced, a gallery delivery arrives early, an HVAC alarm chirps mid service.',
      'Graduates learn to read a room, predict the next request, and stage a reveal that feels choreographed but never forced. By the time they receive a Skye badge, you can trust they operate like five-star hotel captains who also understand compliance and reporting.',
    ],
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80',
  },
]

const aboutProcess = [
  {
    title: 'Discovery session',
    description: 'We listen to your brand story, stakeholder demands, and security expectations before we step onsite.',
  },
  {
    title: 'Blueprint immersion',
    description: 'Our concierge leads map finishes, access, and rituals then encode them into your portal-ready playbook.',
  },
  {
    title: 'Concierge reveal',
    description: 'Crew executes the script, captures metrics, and delivers photographic proof so every decision maker stays aligned.',
  },
]

const aboutRelatedLinks = [
  {
    title: 'Meet the credentialing desk',
    description: 'See how licensing, insurance, and safety paperwork stay audit ready.',
    href: '/about/licensed-insured',
  },
  {
    title: 'Tour our trusted crew academy',
    description: 'Step inside the curriculum that trains concierge specialists.',
    href: '/about/trusted-crew',
  },
  {
    title: 'Review the chemistry lab',
    description: 'Learn how Skye tests and documents every finish-safe formula.',
    href: '/about/products',
  },
]

const institutionalCards = [
  {
    title: 'Licensed & Insured',
    description: 'Review every certificate, policy, and safety credential that keeps crews compliant from San Francisco to wine country.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    href: '/about/licensed-insured',
  },
  {
    title: 'Trusted Crew',
    description: 'Meet the concierge specialists trained to protect privacy, finishes, and hospitality scripts in high-profile environments.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
    href: '/about/trusted-crew',
  },
  {
    title: 'Safer Products',
    description: 'Explore the chemistries, scent capsules, and compliance logs curated by our in-house lab for every premium finish.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=80',
    href: '/about/products',
  },
  {
    title: 'Gallery',
    description: 'Tour before-and-after reveals, behind-the-scenes coverage, and video walk-throughs from our most demanding projects.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
    href: '/about/gallery',
  },
  {
    title: 'FAQ',
    description: 'Plan the next visit with transparent answers about crews, protocols, and the Skye Done-Right Guarantee.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80',
    href: '/about/faq',
  },
  {
    title: 'Service Areas',
    description: 'See how we cover San Francisco, Marin, Napa, and the North Bay with dedicated crews and concierge logistics.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    href: '/about/service-areas',
  },
]

export default function AboutPage() {
  return (
    <PageShell bodyClassName="with-service-landing with-gotravel" mainClassName="space-y-24 pb-24">
      <PageBanner
        eyebrow="About Skye"
        align="left"
        title="Turning luxury properties into effortless first impressions."
        description="Meet the concierge cleaning partner trusted by Bay Area estates, founders, and boutique workplaces to deliver presentation-ready spaces every visit."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80"
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
            eyebrow="Proof the Skye standard resonates"
            items={aboutMetrics}
            description="Operational metrics we share with principals, boards, and family offices every quarter."
          />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <EditorialTwoUp items={aboutEditorial as [typeof aboutEditorial[number], typeof aboutEditorial[number]]} />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl space-y-6 text-center">
          <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Explore our institutional spokes</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Each hub dives deeper into processes, compliance, and behind-the-scenes choreography that sustain the Skye concierge experience.
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {institutionalCards.map(({ title, description, image, href }) => (
              <Link key={title} href={href} className="group block h-full">
                <Card className="h-full p-0 text-left" tone="foam">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={image} alt={title} fill sizes="100vw" loading="lazy" className="object-cover transition duration-500 ease-out group-hover:scale-105" unoptimized />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-xl font-semibold text-ink-900">{title}</h3>
                    <p className="text-sm text-slate-600">{description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--skye-700)]">
                      Explore {title}
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <ProcessSteps steps={aboutProcess} eyebrow="How we become your concierge team" />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <RelatedLinks links={aboutRelatedLinks} eyebrow="Explore the spokes" />
        </div>
      </section>

      <section className="container-px">
        <Card padding="p-8 sm:p-10" tone="midnight" className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Ready to experience the Skye standard?</h2>
          <p className="mt-4 text-sm text-white/80 sm:text-base">
            Schedule a discovery call with our concierge desk and see how we transform your space into a permanent showcase for investors, guests, and employees.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/#quote">
              Build my concierge plan
            </Button>
            <Button variant="secondary" size="lg" href="/clean-tips">
              Visit Cleaning Tips
            </Button>
          </div>
        </Card>
      </section>
    </PageShell>
  )
}
