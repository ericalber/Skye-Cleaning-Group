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
    title: 'From boutique beginnings to Bay Area benchmark',
    paragraphs: [
      'Skye Cleaning Group began as a family-run concierge team serving a handful of luxury residences along the Embarcadero. Clients were founders, art collectors, and hospitality executives who cared about immaculate presentation but needed a partner willing to memorize the small rituals that make a space feel personal. As referrals grew, we formalized our promise: every engagement receives a dedicated account manager, a living property playbook, and access to a bench of specialists in windows, textiles, post-event resets, and sanitizing emergencies so every arrival still feels like opening night.',
      'Today we support estates across San Francisco, Marin, Napa, and Sonoma while caring for executive suites, private clinics, and boutique showrooms. The scale may be larger, yet the ethos remains the same—show up discreetly, read the property like an insider, execute with finish-safe precision, and deliver proof that every decision defended the client’s reputation.',
    ],
  },
  {
    title: 'Precision engineered around each property script',
    paragraphs: [
      'Every new engagement starts with immersion. We walk the property, catalog finishes, audit scent and audio expectations, and capture rhythms that matter: investor briefings, virtual broadcasts, travel windows, wellness appointments. The findings become the Skye Blueprint, a living dossier that choreographs arrival windows, microfiber sequencing, chemistries, and reporting cadence. If plans change—perhaps a product launch extends into the evening—the operations center updates the blueprint across every team device so the choreography adapts without skipping a beat.',
      'That orchestration keeps the experience predictable. Household staff know exactly when terraces will be reset, facilities directors can schedule HVAC maintenance without guesswork, and concierge desks trust that our crew will coexist with security, valet, and engineering teams without friction. Consistency protects assets and makes every stakeholder look prepared.',
    ],
  },
  {
    title: 'Teams trained like luxury hotel staff and security detail',
    paragraphs: [
      'Skye specialists progress through our concierge academy covering hospitality scripts, confidentiality, stone preservation, textile science, infection prevention, and emergency logistics. They are coached to read the room like a five-star butler: align terrace furniture to skyline sightlines, refresh amenity trays before the espresso machines cool, and log any detail that could jeopardize a reveal. Supervisors are former hotel directors, facility chiefs, or estate managers who understand the stakes and actively mentor every crew member on-site.',
      'During each visit supervisors calibrate scent intensity, verify lighting cues, and test air-quality readings while crews execute the checklist. The discipline creates a familiar rhythm for residents and employees while still delivering the surprise-and-delight touches people notice—fluffed throws, restocked turndown amenities, sparkling elevator rails, and freshly steamed linens waiting on the dressing bench.',
    ],
  },
  {
    title: 'Innovation, sustainability, and governance built into the job',
    paragraphs: [
      'Our in-house lab tests every chemistry on replica materials before it touches a client property. We log Green Seal and EPA Safer Choice certifications, track consumption to minimize waste, and maintain rope-access, aerial-lift, and GBAC credentials for complex jobs. Dashboards capture particulate counts, allergen metrics, and linen longevity so clients can demonstrate ESG progress without building new spreadsheets or chasing vendor documentation.',
      'Compliance teams appreciate that NDAs, OSHA acknowledgements, HIPAA requirements, and security protocols share the same portal as our service recaps. Premium presentation only stays sustainable when paperwork is airtight and instantly exportable for legal teams, boards, or homeowners associations. Skye treats documentation with the same rigor as polishing marble or restoring glass clarity.',
    ],
  },
  {
    title: 'Documentation stakeholders actually circulate',
    paragraphs: [
      'Every visit concludes with a photographic recap highlighting completed zones, proactive maintenance suggestions, and curated service add-ons to consider. Estate managers forward the recap to owners, corporate directors attach it to quarterly governance decks, and event planners share it with sponsors as proof the venue is guest-ready again. Because the report feels tailored—not a generic checklist—it reinforces the value of concierge care even when decision makers are traveling.',
      'Clients trust that Skye protects their brand when they are off-site, which is why retention consistently exceeds ninety percent and referrals keep fueling expansion. The combination of meticulous execution and transparent storytelling makes our work easy to defend in boardrooms, investor meetings, and family councils alike.',
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
    image: 'https://images.unsplash.com/photo-1517227396671-985d0fc394db?auto=format&fit=crop&w=1600&q=80',
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
    image: 'https://images.unsplash.com/photo-1580281657521-4c5ea04f0b1b?auto=format&fit=crop&w=1600&q=80',
    href: '/about/products',
  },
  {
    title: 'Gallery',
    description: 'Tour before-and-after reveals, behind-the-scenes coverage, and video walk-throughs from our most demanding projects.',
    image: 'https://images.unsplash.com/photo-1529429617124-aee8095725cb?auto=format&fit=crop&w=1600&q=80',
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
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4?auto=format&fit=crop&w=1920&q=80"
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
              <Card key={title} as={Link} href={href} className="p-0 text-left" tone="foam">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={image} alt={title} fill loading="lazy" className="object-cover transition duration-500 ease-out hover:scale-105" />
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
              Visit Cleaning Tips hub
            </Button>
          </div>
        </Card>
      </section>
    </PageShell>
  )
}
