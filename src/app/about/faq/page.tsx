import PageShell from '@/components/PageShell'
import PageBanner from '@/components/PageBanner'
import Card from '@/components/ui-kits/Card'
import Accordion from '@/components/ui-kits/Accordion'
import Button from '@/components/ui-kits/Button'
import MetricStrip from '@/components/blocks/MetricStrip'
import ProcessSteps from '@/components/blocks/ProcessSteps'
import RelatedLinks from '@/components/blocks/RelatedLinks'

export const metadata = {
  title: 'FAQ – Skye Cleaning Group',
  description:
    'Frequently asked questions about Skye Cleaning Group concierge services: scheduling, crew structure, products, guarantees, and safety protocols.',
}

const overviewSections = [
  {
    title: 'Concierge service without guesswork',
    paragraphs: [
      'Clients come to Skye because their properties must feel impeccable even when schedules change without warning. We document preferences, access instructions, fragrance cues, and communication protocols inside the Skye Blueprint so every visit feels like a continuation of your brand story. Below we answer the questions that surface most often during onboarding: how visits are scheduled, how the crew is vetted, what happens if you need an urgent reset, and how our Done-Right Guarantee works.',
      'If you need details beyond what appears here, our concierge desk responds within one business hour. The contact options at the bottom of this page link you directly with leadership so you can tackle project-specific requirements without friction.',
    ],
  },
  {
    title: 'Scheduling built around your calendar',
    paragraphs: [
      'We choreograph visits around investor briefings, family travel, wellness appointments, board meetings, and building quiet hours. Once the cadence is agreed upon, our system sends confirmations seventy-two and twenty-four hours in advance, along with real-time SMS updates when crews dispatch and wrap. Emergency resets can deploy within twenty-four hours and appear in the same dashboard so stakeholders see every touchpoint in one place.',
    ],
  },
  {
    title: 'Crew transparency and continuity',
    paragraphs: [
      'Your property receives a dedicated concierge lead and a core crew trained on your blueprint. Background checks update annually, NDAs renew automatically, and photo restrictions are enforced via our mobile command center. When specialists rotate in—window detailing, textile preservation, or post-event strike teams—they arrive with full context and are introduced by the lead so continuity feels effortless.',
    ],
  },
  {
    title: 'Chemistry, reporting, and guarantees',
    paragraphs: [
      'Our lab tests every product on replica materials, tracks Green Seal and EPA Safer Choice certifications, and logs dilution ratios through QR codes on every bottle. After each visit you receive a photographic recap with timestamps, supply usage, and proactive maintenance notes. If anything falls short of the Skye standard, our Done-Right Guarantee delivers a complimentary return visit within twenty-four hours. The goal is accountability you can forward to owners, boards, or compliance teams without additional explanation.',
    ],
  },
]

const accordionItems = [
  {
    title: 'How far in advance should I schedule recurring service?',
    content: (
      <p>
        Most clients schedule recurring visits at least two weeks ahead so we can align concierge crews, security access, and building approvals. Emergency resets can deploy faster, but recurring cadences benefit from locked-in time windows and allow the same specialists to service your property every time.
      </p>
    ),
  },
  {
    title: 'Will I see the same faces on each visit?',
    content: (
      <p>
        Yes. We assign a dedicated concierge lead who trains a core crew on your blueprint. When coverage changes are required, the lead introduces new specialists and remains onsite to ensure the experience stays consistent.
      </p>
    ),
  },
  {
    title: 'Which products and equipment do you use?',
    content: (
      <p>
        Chemistries are tested in our lab on replica marble, hardwood, lacquer, and textiles. We rely on Green Seal and EPA Safer Choice formulas for daily maintenance, botanical disinfectants for high-touch sanitizing, and specialty kits for stain recovery. Equipment includes HEPA vacuums, microfiber systems, scent capsules, and electrostatic sprayers when required.
      </p>
    ),
  },
  {
    title: 'How does the Done-Right Guarantee work?',
    content: (
      <p>
        If anything feels off after a visit, notify your concierge lead or use the client portal. We review photos, schedule a return visit within twenty-four hours, and document the corrections so stakeholders have a transparent record.
      </p>
    ),
  },
  {
    title: 'Can Skye coordinate with other vendors on-site?',
    content: (
      <p>
        Absolutely. We collaborate with security, building engineering, catering, AV, florists, and relocation teams. The concierge lead acts as liaison to prevent scheduling conflicts and ensure every vendor protects the Skye standard while on property.
      </p>
    ),
  },
]

const contactHighlights = [
  'Concierge desk responds within one business hour Monday through Saturday',
  'Emergency strike teams available 24/7 for post-event or sanitation requests',
  'Digital reports archived for six years with photo evidence and chemical logs',
]

const faqMetrics = [
  { label: 'Response Time', value: '<1 hr', caption: 'Average concierge desk reply window during business hours.' },
  { label: 'Client Retention', value: '96%', caption: 'Partners who remain with Skye year after year.' },
  { label: 'Blueprint Updates', value: '340+/mo', caption: 'Adjustments synced across client properties.' },
  { label: 'Strike Team Mobilization', value: '<4 hrs', caption: 'Rapid deployment window for urgent resets.' },
]

const faqProcess = [
  {
    title: 'Ask anything',
    description: 'Share the property, timeline, or challenge. Our concierge desk routes it to the right specialist instantly.',
  },
  {
    title: 'Blueprint the answer',
    description: 'We document the solution, update your portal, and confirm schedules, chemistries, or paperwork in writing.',
  },
  {
    title: 'Execute & confirm',
    description: 'Crews deliver, capture proof, and log metrics so stakeholders know the request was handled end to end.',
  },
]

const faqRelatedLinks = [
  {
    title: 'Licensed & Insured details',
    description: 'Review compliance documentation your procurement and legal teams request.',
    href: '/about/licensed-insured',
  },
  {
    title: 'Trusted Crew academy',
    description: 'See how concierge specialists are trained before entering your property.',
    href: '/about/trusted-crew',
  },
  {
    title: 'Safer Products lab',
    description: 'Understand the chemistries and sustainability logs that power every answer.',
    href: '/about/products',
  },
]

export default function FAQPage() {
  return (
    <PageShell bodyClassName="with-gotravel with-service-landing" mainClassName="space-y-24 pb-24">
      <PageBanner
        eyebrow="FAQ"
        title="Everything you wanted to know before the crew arrives."
        description="Scheduling, crew continuity, chemistry, and guarantees—find the answers concierge clients ask most often before onboarding with Skye."
        image="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-px">
        <div className="mx-auto max-w-4xl space-y-8 text-sm text-slate-600 sm:text-base">
          {overviewSections.map(({ title, paragraphs }) => (
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
            eyebrow="FAQs answered with proof"
            items={faqMetrics}
            description="Metrics we share with principals and operations teams so every answer comes with context."
          />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl text-center">Questions we hear every week</h2>
          <Accordion items={accordionItems} allowMultiple className="space-y-4" />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <ProcessSteps steps={faqProcess} eyebrow="How your answer becomes action" />
        </div>
      </section>

      <section className="container-px">
        <Card padding="p-8 sm:p-10" className="mx-auto max-w-5xl text-sm text-slate-600 sm:text-base">
          <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl text-center">Need assistance tailored to your property?</h2>
          <p className="mt-4 text-center">
            Reach out through the channels below and our concierge desk will coordinate site visits, documentation packets, or emergency resets. We respond within one business hour and provide a single point of contact so every stakeholder stays informed.
          </p>
          <ul className="mt-6 grid gap-4 text-left sm:grid-cols-2">
            {contactHighlights.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-[rgba(18,60,84,0.12)] bg-white px-5 py-4 text-sm text-slate-600 shadow-sm">
                <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--skye-500)]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="sms:+14154978008">
              Text our concierge desk
            </Button>
            <Button variant="secondary" size="lg" href="tel:+14154978008">
              Call +1 (415) 497-8008
            </Button>
            <Button variant="ghost" size="md" href="mailto:contact@skyecgroup.com">
              Email documentation request
            </Button>
          </div>
        </Card>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <RelatedLinks links={faqRelatedLinks} eyebrow="Dive deeper" />
        </div>
      </section>
    </PageShell>
  )
}
