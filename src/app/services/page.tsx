import Image from 'next/image'
import Link from 'next/link'

import PageShell from '@/components/PageShell'
import PageBanner from '@/components/PageBanner'
import Card from '@/components/ui-kits/Card'
import Button from '@/components/ui-kits/Button'
import Accordion from '@/components/ui-kits/Accordion'
import EditorialTwoUp, { type EditorialTwoUpItem } from '@/components/blocks/EditorialTwoUp'
import MetricStrip from '@/components/blocks/MetricStrip'
import ProcessSteps from '@/components/blocks/ProcessSteps'
import RelatedLinks from '@/components/blocks/RelatedLinks'
import { serviceDetails } from '@/data/servicePages'
import { buildPageMetadata } from '@/seo/metadata'

const servicesHeroImage =
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80'

export const metadata = buildPageMetadata({
  title: 'Concierge Cleaning Services in San Francisco | Skye Cleaning Group',
  description:
    'Explore premium residential and commercial cleaning programs across San Francisco and the North Bay, with concierge reporting and trusted crews.',
  path: '/services',
  ogImage: servicesHeroImage,
})

const hubEditorial = [
  {
    title: 'The concierge blueprint behind every request',
    body:
      'Every Skye engagement starts with immersion. We tour your property, study the finishes that demand specialty choreography, and interview the stakeholders who rely on our reports. The result becomes your concierge blueprint: access instructions, elevator rhythms, scent preferences, hospitality etiquette, and escalation protocols. The document lives inside our command center and updates after every visit so choreography adapts to travel calendars, investor tours, or last-minute family gatherings without breaking stride.',
  },
  {
    title: 'Operations engineered for zero guesswork',
    body:
      'Once the blueprint is approved, a lead concierge handpicks a core crew trained to protect your environment like an internal team. They arrive with finish-safe chemistries, microfiber coded by zone, and a run sheet synchronized to minimize disruption. Terrace furniture realigns before sunrise, wellness suites reset between appointments, and executive boardrooms are camera ready before the first handshake. Supervisors log air-quality readings, linen longevity, and supply usage into your private dashboard so you can prove ROI with a single link.',
  },
  {
    title: 'Specialists ready when the script expands',
    body:
      'High-profile properties experience surprises: art installations arriving overnight, livestreams confirmed minutes before broadcast, consulate events extending past midnight. Because the blueprint lives centrally, we plug in strike teams for textiles, post-event resets, stone restoration, or scent design without repeating onboarding. Confidentiality covenants, NDAs, and access passes are already documented, letting us deploy help within hours while protecting continuity.',
  },
  {
    title: 'Sustainability and governance woven into each visit',
    body:
      'Concierge cleaning must reinforce ESG commitments and compliance obligations. Our chemistries include Green Seal and EPA Safer Choice formulations, waste streams are sorted with photographic proof, and linen rotations are logged to extend asset life. OSHA, HIPAA, and NDA acknowledgements sit in the same reporting portal as your visit recaps so legal teams and building security have assurance without chasing files or vendors.',
  },
  {
    title: 'Reports your stakeholders actually circulate',
    body:
      'Results matter when ownership, family offices, or compliance teams ask for evidence. After every visit you receive a photographic recap highlighting completed zones, proactive maintenance notes, and curated recommendations to keep the property in peak condition between concierge sessions. Share the recap with leadership decks, attach it to investor updates, or forward it to planners to prove the Skye standard is being upheld without handholding.',
  },
  {
    title: 'A concierge desk that scales with you',
    body:
      'Scale your service like a luxury brand. Whether you add a second residence, expand floorplates, or host seasonal events, your concierge manager calibrates scheduling, chemistries, and staffing so every arrival feels rehearsed. Strike teams arrive with the same hospitality scripts, reporting cadence, and finish-safe methodology implemented at the flagship property. Consistency becomes your competitive edge, and Skye is the silent partner keeping it polished.',
  },
]

const faqs = [
  {
    title: 'How is the right concierge crew assigned?',
    content:
      'We evaluate the property profile, desired cadence, privacy requirements, and onsite partners. A lead concierge then trains a dedicated crew on your Skye blueprint so you see the same specialists each visit, supplemented only when a certified window or textile technician is required.',
  },
  {
    title: 'Can residential and commercial services be combined?',
    content:
      'Yes. Many clients operate mixed environments - penthouse offices, boutique medical suites, executive residences. We coordinate scheduling, chemistry, and reporting so each space receives the correct treatment without overlap.',
  },
  {
    title: 'How quickly can Skye mobilize?',
    content:
      'Standard onboarding takes five business days, including property walk-through, documentation, and kit assembly. For pressing resets we can deploy an interim strike team within twenty-four hours while the full concierge program is finalized.',
  },
]

const crosslinks = [
  {
    title: 'Meet the specialists behind the shine',
    description: 'Visit the About hub to understand how Skye recruits, trains, and safeguards concierge teams.',
    href: '/about',
  },
  {
    title: 'Extend the standard between visits',
    description: 'Explore Cleaning Tips for concierge routines you can apply between scheduled appointments.',
    href: '/clean-tips',
  },
]

const serviceMetrics = [
  { label: 'NPS', value: '4.9/5', caption: 'Average satisfaction across Bay Area engagements.' },
  { label: 'Site Visits', value: '+2k/yr', caption: 'Concierge crews dispatched across homes and workplaces.' },
  { label: 'Incident Rate', value: '0.01%', caption: 'Reportable events thanks to layered safety choreography.' },
  { label: 'Turnaround', value: '24 hrs', caption: 'Rapid deployment window for urgent resets.' },
]

const serviceProcess = [
  {
    title: 'Book your concierge blueprint',
    description:
      'Share the property roster, access rules, and stakeholder priorities. We respond within one business hour with discovery slots.',
  },
  {
    title: 'We stage the choreography',
    description:
      'Site tours, safety walk-throughs, and chemistry mapping culminate in a living blueprint synced to your calendar.',
  },
  {
    title: 'Enjoy the Skye reveal',
    description:
      'Crew arrives in sync with your schedule, delivers the polish you expect, and logs metrics you can forward to leadership.',
  },
]

const editorialDeepDive: EditorialTwoUpItem[] = [
  {
    eyebrow: 'Inside the command center',
    title: 'Why the blueprint meeting changes everything',
    body: [
      'Our onboarding meeting is part hospitality, part operations lab. We gather decision makers on-site or virtually and walk room by room capturing the rituals that make your space feel personal. Elevator keycards, valet protocols, art conservation preferences, even how you prefer audio zones to fade at night—everything enters the Skye blueprint. That document becomes the single source of truth for every visit, every swing shift, and every specialty crew you request later.',
      'During the session we calibrate scent programs, agree on photographic boundaries, and log sustainability requisites. The more nuance you share, the more precisely we protect your brand. Facilities leads love that they can pull up the blueprint before budget meetings and show how Skye handles compliance, ESG, and guest experience in one controlled workflow.',
    ],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
  },
  {
    eyebrow: 'Life on the floor',
    title: 'How concierge crews choreograph a reveal',
    body: [
      'A visit begins long before the first knock. Supervisors review the latest blueprint updates, chemistries are batch-tested in the lab, and the concierge desk reconfirms access windows with security. Once onsite, the crew splits into micro-zones: textiles, stone, glass, wellness, outdoor. Each specialist carries a mobile checklist linked to your dashboard, uploading timestamps, air-quality readings, and amenity notes in real time.',
      'Before departure, the supervisor performs a reverse tour—lights dimmed to the scene you specified, fragrance diffusers set to the agreed intensity, smart-home panels wiped and reprogrammed. A photographic recap hits your inbox before we leave the driveway so you can forward proof of performance to whoever needs it most.',
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
  },
]

function getServiceSummary(subheading: string, intro: string[]) {
  if (subheading) return subheading
  if (intro?.length) {
    const sentence = intro[0].split('. ').slice(0, 2).join('. ')
    return sentence.length ? `${sentence}.` : 'Discover how this program elevates your property.'
  }
  return 'Discover how this program elevates your property.'
}

export default function ServicesPage() {
  return (
    <PageShell bodyClassName="with-gotravel with-service-landing" mainClassName="space-y-24 pb-24">
      <PageBanner
        eyebrow="Services"
        title="Concierge cleaning that presents like a private members club."
        description="Select a program that protects your brand, extends asset life, and keeps every arrival feeling as polished as opening night."
        image={servicesHeroImage}
      />

      <section className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--skye-600)]">
            Every visit staged, every arrival rehearsed
          </p>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-4xl space-y-8 text-sm text-slate-600 sm:text-base">
          {hubEditorial.map(({ title, body }) => (
            <div key={title} className="space-y-3">
              <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl">{title}</h2>
              <p>{body}</p>
            </div>
          ))}
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="lg" href="/#quote">
              Build my concierge plan
            </Button>
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-[var(--skye-700)] hover:text-[var(--skye-900)]"
            >
              View recent transformations →
            </Link>
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <MetricStrip
            eyebrow="Performance you can measure"
            items={serviceMetrics}
            description="Your property deserves a concierge partner that treats presentation like a metric, not a maybe."
          />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <EditorialTwoUp
            eyebrow="Behind the curtain"
            items={[editorialDeepDive[0], editorialDeepDive[1]] as [EditorialTwoUpItem, EditorialTwoUpItem]}
          />
        </div>
      </section>

      <section className="container-px" id="service-directory">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-black text-ink-900 sm:text-4xl">Choose the concierge program that fits your property</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Each tile opens a spoke page with detailed choreography, behind-the-scenes imagery, and reporting expectations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceDetails.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block h-full transition-transform duration-300 hover:-translate-y-1"
              >
                <Card className="flex h-full flex-col overflow-hidden p-0" tone="foam">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.heroImage}
                      alt={service.heroAlt}
                      fill
                      loading="lazy"
                      className="object-cover transition duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--skye-600)]">
                      {service.eyebrow}
                    </span>
                    <h3 className="text-xl font-semibold text-ink-900">{service.name}</h3>
                    <p className="text-sm text-slate-600">{getServiceSummary(service.subheading, service.intro)}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <ProcessSteps
            eyebrow="From inquiry to reveal"
            steps={serviceProcess}
            description="Three simple movements take you from curiosity to concierge polish."
          />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-black text-ink-900 sm:text-4xl text-center">
            Frequently asked questions about Skye services
          </h2>
          <Accordion
            items={faqs.map((faq) => ({
              title: faq.title,
              content: <p>{faq.content}</p>,
            }))}
          />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <RelatedLinks
            eyebrow="Continue the tour"
            links={crosslinks}
          />
        </div>
      </section>

      <section className="container-px">
        <Card padding="p-10 sm:p-12" tone="midnight" className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Ready to choreograph your next concierge visit?</h2>
          <p className="mt-4 text-sm text-white/80 sm:text-base">
            Our concierge desk aligns availability, chemistries, and reporting in one conversation. Book a discovery call and we will tailor the Skye blueprint to your property within days.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/#quote">
              Build my concierge plan
            </Button>
            <Button variant="secondary" size="lg" href="mailto:contact@skyecgroup.com">
              Speak with our concierge
            </Button>
          </div>
        </Card>
      </section>
    </PageShell>
  )
}
