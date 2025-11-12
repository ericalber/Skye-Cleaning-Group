import Image from 'next/image'

import PageShell from '@/components/PageShell'
import PageBanner from '@/components/PageBanner'
import Card from '@/components/ui-kits/Card'
import Accordion from '@/components/ui-kits/Accordion'
import Button from '@/components/ui-kits/Button'
import MetricStrip from '@/components/blocks/MetricStrip'
import ProcessSteps from '@/components/blocks/ProcessSteps'
import RelatedLinks from '@/components/blocks/RelatedLinks'

const credentialSections = [
  {
    title: 'Licensing with zero tolerance for lapses',
    paragraphs: [
      'Skye Cleaning Group operates under an active California janitorial contractor license with a clean record. Our compliance team audits the state portal weekly, tracks renewal timelines six months in advance, and maintains digital copies of every endorsement in the client portal. Liability coverage exceeds the thresholds demanded by luxury HOAs, private clubs, and corporate portfolios, while workers’ compensation policies scale with seasonal headcount so no visit falls outside insured limits.',
      'For properties that require additional surety bonds or building-specific riders, our broker executes amendments within forty-eight hours. Every document receives version control and sign-off, giving asset managers proof that the crew inside their property is qualified, insured, and monitored in real time.',
    ],
  },
  {
    title: 'Safety choreography designed for zero incidents',
    paragraphs: [
      'Every field leader completes OSHA 30, GBAC infectious-disease control, ladder safety, and annual refreshers on lockout/tagout and bloodborne pathogen protocols. Toolbox talks happen at the beginning of each shift and are logged in the portal with attendee signatures. High-access jobs leverage IRATA rope access or aerial-lift certifications; we stage rescue plans, wind monitoring, and communication protocols before wheels leave the ground.',
      'Inside the property, our crews run color-coded microfiber, chemistry dilution systems, and Sharps disposal when required. Incident response guides live in every mobile device. If something occurs, supervisors launch a digital report with photos, corrective actions, and timelines so stakeholders stay informed without phone tag.',
    ],
  },
  {
    title: 'Finish-safe chemistries aligned with ESG goals',
    paragraphs: [
      'Our in-house lab tests every concentrate on replica marble, lacquer, hardwood, and textiles before it enters a Skye kit. We catalog Green Seal, EPA Safer Choice, and Woolsafe approvals, tracking batch numbers and expiration dates. When clients pursue LEED, WELL, or corporate sustainability targets, we export chemical inventories with usage data so progress reports are built on evidence, not estimates.',
      'Consumables are portioned to minimize waste, microfiber is laundered with closed-loop systems, and scent programs rely on hypoallergenic capsules logged in the blueprint. Sustainability is not aspirational—it is coded into the way every visit is executed and documented.',
    ],
  },
  {
    title: 'Data transparency for legal, finance, and facilities',
    paragraphs: [
      'Legal teams appreciate that NDAs, photo restrictions, HIPAA acknowledgements, and vendor onboarding packets live alongside the cleaning reports. Finance receives insurance certificates, W-9s, and batch invoices organized by property. Facilities managers see air-quality readings, supply usage, and maintenance notes in the same dashboard they use to review service recaps.',
      'Because everything exists in one command center, approvals move fast. Boards sign service agreements knowing compliance is airtight, and building security trusts that credentials, background checks, and access logs are always current and auditable.',
    ],
  },
]

const mediaHighlights = [
  {
    title: 'Safety audit in progress',
    description: 'Supervisors review rescue plans, tie-off points, and weather conditions before skyline glass work begins.',
    image: 'https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Compliance staging inside the command center',
    description: 'Every certificate, NDA, and chemical SDS is indexed for on-demand access by clients and Skye leadership.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
  },
]

const accordionItems = [
  {
    title: 'How often are insurance certificates refreshed?',
    content: (
      <p>
        Certificates of insurance are updated automatically when policies renew or endorsements change. We upload copies to your portal, email them to property managers, and keep an internal reminder system so no document goes out of date.
      </p>
    ),
  },
  {
    title: 'Can Skye align with vendor onboarding platforms?',
    content: (
      <p>
        Yes. We complete compliance requirements in systems like Avetta, NetVendor, or HQO, and mirror those approvals in the Skye portal so stakeholders always see the same status.
      </p>
    ),
  },
  {
    title: 'What happens if a building requires additional training?',
    content: (
      <p>
        We bring crews in for site-specific orientation, upload completion badges to the property file, and integrate the records with our scheduling tool so only authorized specialists are dispatched.
      </p>
    ),
  },
]

const governanceHighlights = [
  'Quarterly safety audits logged inside your client portal',
  'Annual background checks, NDA renewals, and hospitality refreshers',
  'Digital SDS library, chemical inventory, and incident logs mapped to each property',
  'Emergency playbooks covering biohazard, flood mitigation, and wildfire smoke response',
]

const complianceMetrics = [
  { label: 'Insurance Limits', value: '$10M', caption: 'Umbrella coverage sized for luxury estates and corporate towers.' },
  { label: 'Audit Score', value: '100%', caption: 'Latest third-party compliance audit across licensing and safety.' },
  { label: 'Renewal Lead Time', value: '180d', caption: 'Average buffer we maintain before policies expire.' },
  { label: 'Incident Closure', value: '<12h', caption: 'Documented resolution window for safety reports.' },
]

const complianceProcess = [
  {
    title: 'Credential intake',
    description: 'We gather building requirements, vendor portals, and rider thresholds, then map them to your properties.',
  },
  {
    title: 'Documentation staging',
    description: 'Licenses, insurance, OSHA training, and NDAs are uploaded to your portal with calendar reminders.',
  },
  {
    title: 'Continuous refresh',
    description: 'Audits, endorsements, and safety drills are logged with timestamps so risk folders stay inspection ready.',
  },
]

const relatedComplianceLinks = [
  {
    title: 'Tour our trusted crew academy',
    description: 'See how concierge specialists earn credentials before visiting your property.',
    href: '/about/trusted-crew',
  },
  {
    title: 'Review the chemistry lab dossiers',
    description: 'Understand how we document finish-safe products and ESG data.',
    href: '/about/products',
  },
  {
    title: 'Visit the service coverage map',
    description: 'Explore logistics and rapid deployment playbooks across Bay Area territories.',
    href: '/about/service-areas',
  },
]

export default function LicensedInsuredPage() {
  return (
    <PageShell bodyClassName="with-service-landing" mainClassName="space-y-24 pb-24">
      <PageBanner
        eyebrow="Licensed & Insured"
        title="Compliance so polished it rivals the shine on your marble."
        description="Discover how Skye keeps licensing, insurance, safety, and sustainability documentation audit-ready for estates, boutique workplaces, and hospitality venues."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-px">
        <div className="mx-auto max-w-4xl space-y-8 text-sm text-slate-600 sm:text-base">
          {credentialSections.map(({ title, paragraphs }) => (
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
            eyebrow="Compliance by the numbers"
            items={complianceMetrics}
            description="Proof points your legal and procurement teams can share without redlines."
          />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          {mediaHighlights.map(({ title, description, image }) => (
            <Card key={title} className="p-0 text-left" tone="foam">
              <div className="relative aspect-square w-full overflow-hidden">
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
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl text-center">Common compliance questions</h2>
          <Accordion items={accordionItems} allowMultiple className="space-y-4" />
        </div>
      </section>

      <section className="container-px">
        <Card tone="foam" padding="p-8 sm:p-10" className="mx-auto max-w-5xl">
          <div className="space-y-6 text-ink-900">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Governance ready for your risk folder</h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Every compliance request lives inside a premium card with audit trails, signatures, and timestamps. Share it with legal, finance, or boards and prove your vendors are buttoned up.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {governanceHighlights.map((item) => (
                <Card key={item} padding="p-5" className="h-full" tone="foam">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[color-mix(in_oklab,var(--skye-50)_86%,white)] text-[var(--skye-700)] shadow-[0_12px_28px_rgba(18,60,84,0.14)]" aria-hidden="true">
                    •
                  </span>
                  <p className="mt-3 text-sm text-slate-600">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <ProcessSteps steps={complianceProcess} eyebrow="How we stay inspection ready" />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <RelatedLinks links={relatedComplianceLinks} eyebrow="Continue your audit" />
        </div>
      </section>

      <section className="container-px">
        <Card padding="p-8 sm:p-10" tone="midnight" className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Need compliance documents in your inbox today?</h2>
          <p className="mt-4 text-sm text-white/80 sm:text-base">
            Our concierge desk can package the licenses, insurance certificates, and safety playbooks you need in a single link. Share it with procurement, legal, or HOA boards and keep your project moving.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="mailto:contact@skyecgroup.com">
              Request compliance packet
            </Button>
            <Button variant="secondary" size="lg" href="/#quote">
              Schedule a walkthrough
            </Button>
          </div>
        </Card>
      </section>
    </PageShell>
  )
}
