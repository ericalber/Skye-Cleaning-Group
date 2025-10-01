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
    title: 'Recruitment calibrated for discretion and hospitality',
    paragraphs: [
      'Skye scouts talent the same way luxury hotels recruit butlers and guest-relations teams. Candidates pass culture interviews focused on empathy, observation skills, and communication before we even discuss cleaning experience. Background checks cover federal, state, and county databases annually, supplemented by social media screening and NDA renewals. Only then do we begin technical evaluations in finish care, product knowledge, and emergency response.',
      'Once an applicant joins the roster, they shadow senior concierges during a ninety-day residency. They learn how to greet principals with the right tone, navigate service elevators silently, handle access logs, and brief property managers without exposing confidential details. By the time a specialist is assigned to your home or workplace, they have internalized the Skye service script that keeps every visit polished and discreet.',
      'We also benchmark each recruit against client expectations collected during blueprint workshops. If a property values art conservation or wellness protocols, we pair recruits with mentors who specialize in those domains. The goal is a crew that feels hand-selected for your environment before the first visit ever occurs.',
    ],
  },
  {
    title: 'Academy training that mirrors five-star hospitality',
    paragraphs: [
      'Our academy curriculum blends hotel standards, private security insights, and facility management best practices. Trainees rotate through modules in scent zoning, microfiber choreography, stone preservation, upholstery science, infection prevention, and upscale amenity staging. They rehearse playbooks for investor walk-throughs, relocation arrivals, and high-pressure event turnovers so the crew stays composed regardless of the scenario.',
      'Supervisors—many of whom are former hotel directors, estate managers, or facility chiefs—mentor each team. They fine-tune the finishing touches, from aligning terrace furniture along architectural sightlines to logging the exact fragrance level principals prefer. Every visit includes a short coaching session so skills stay sharp and feedback from clients is integrated before the next appointment.',
      'The academy operates year round. Veteran specialists return quarterly for master classes covering new chemistries, security scenarios, and ESG reporting requirements. That rhythm keeps crews ahead of property trends, whether the next visit involves a pop-up showroom or a wellness summit.',
    ],
  },
  {
    title: 'Security protocols that protect owners and brands',
    paragraphs: [
      'Confidentiality is a non-negotiable. Every specialist signs NDAs, passes photo restrictions, and completes HIPAA-awareness training for medical suites. We map camera blind spots, alarm systems, and service elevator routes so crews move confidently without triggering security incidents. If properties require biometric access, escort policies, or device restrictions, we log those rules inside the Skye Blueprint and sync them to the crew’s mobile command center.',
      'During each visit, supervisors audit compliance checkpoints—ID badges visible, radios muted, uniforms immaculate, supply caddies labeled. Incident response procedures live in every device so any deviation is handled transparently and reported to the client within minutes. Trust is earned by keeping surprises off the schedule and keeping leadership informed before questions even arise.',
      'We also integrate with building security dashboards when available. Access logs sync back to your command center, and any vendor escort requirements are confirmed in writing before crews arrive. The result is a cleaning partner that extends your security posture rather than testing it.',
    ],
  },
  {
    title: 'Experience that scales from residences to boardrooms',
    paragraphs: [
      'Residential clients appreciate familiar faces who remember the rhythm of family life: which toys stay out, how the espresso cups are arranged, and when the nanny needs quiet zones preserved. Commercial partners rely on the same continuity to protect brand perception: conference tables reset to spec, scent diffusers primed before clients arrive, lab equipment sanitized without disturbing research. Skye assigns a dedicated concierge lead so even as crews rotate for scheduling, ownership always interacts with the same point of contact.',
      'When projects require surge capacity—post-event resets, quarterly deep cleans, or launch parties—we deploy strike teams already trained on your blueprint. They arrive with context and the same hospitality mindset, meaning there is no learning curve or awkward handoff. Consistency is what keeps our retention above ninety percent across both residential and commercial portfolios.',
      'Multi-property clients leverage this muscle to orchestrate travel calendars. Concierge leads coordinate with aviation teams, estate managers, and executive assistants so every arrival—home or office—feels programmed to the same Skye frequency.',
    ],
  },
]

const highlightCards = [
  {
    title: 'Concierge mindset from day one',
    copy: 'New hires master hospitality scripts, scent etiquette, and silent movement so principals feel served rather than disrupted.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Backgrounds vetted every year',
    copy: 'Federal, state, and county checks plus NDA renewals ensure access remains secure for high-profile households and workplaces.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Specialists for every finish',
    copy: 'Stone artisans, textile technicians, and post-construction strike teams rotate through quarterly labs to keep skills sharp.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
  },
]

const accordionItems = [
  {
    title: 'Will the same crew service my property each visit?',
    content: <p>We prioritize continuity by assigning a dedicated concierge lead and familiar specialists. When rotations are necessary, new faces are briefed on your blueprint and introduced by the lead so the experience feels seamless.</p>,
  },
  {
    title: 'How are specialists trained on confidentiality?',
    content: <p>Every team member signs NDAs, reviews privacy case studies, and practices communication scripts. We simulate sensitive scenarios in the academy so discretion becomes instinctive on-site.</p>,
  },
  {
    title: 'Can Skye handle rapid response or after-hours requests?',
    content: <p>Yes. Strike teams remain on call for after-hours turnovers, event recoveries, or urgent sanitizing. They plug into your existing blueprint so access, security, and etiquette protocols remain intact.</p>,
  },
]

const guarantees = [
  'Dedicated concierge lead with direct contact information',
  'Crew continuity planning that favors familiar faces',
  'On-call strike teams for last-minute showings or events',
  'Quarterly performance reviews with client feedback loops',
]

const crewMetrics = [
  { label: 'Retention', value: '94%', caption: 'Concierge specialists who stay with Skye year over year.' },
  { label: 'Academy Hours', value: '220+', caption: 'Average classroom and lab training per new hire.' },
  { label: 'Background Checks', value: '4/yr', caption: 'Federal, state, county, and social screenings per specialist.' },
  { label: 'Strike Teams', value: '24/7', caption: 'Rapid response crews available for urgent reveals.' },
]

const crewProcess = [
  {
    title: 'Scout & screen',
    description: 'We interview for empathy, vet backgrounds across jurisdictions, and secure NDAs before training begins.',
  },
  {
    title: 'Academy immersion',
    description: 'Hospitality scripts, finish science, and safety drills happen inside our lab loft until the choreography is instinctive.',
  },
  {
    title: 'Concierge assignment',
    description: 'Graduates pair with a lead, shadow on live visits, and receive feedback loops so continuity stays effortless.',
  },
]

const crewRelatedLinks = [
  {
    title: 'See our compliance desk',
    description: 'Review the licenses, insurance, and safety playbooks that back every crew.',
    href: '/about/licensed-insured',
  },
  {
    title: 'Tour the chemistry lab',
    description: 'Discover how finish-safe products and scent programs are tested before crews deploy.',
    href: '/about/products',
  },
  {
    title: 'Explore concierge service hubs',
    description: 'Match the right crew to your property type with our service directory.',
    href: '/services',
  },
]

export default function TrustedCrewPage() {
  return (
    <PageShell bodyClassName="with-service-landing" mainClassName="space-y-24 pb-24">
      <PageBanner
        eyebrow="Trusted Crew"
        title="Meet the specialists who protect your polish."
        description="Discover how Skye recruits, trains, and mentors concierge teams so every visit feels curated, secure, and five-star."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80"
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
            eyebrow="Who carries the Skye badge"
            items={crewMetrics}
            description="Numbers your security and property teams can rely on when trusting us with the keys."
          />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          {highlightCards.map(({ title, copy, image }) => (
            <Card key={title} className="p-0 text-left" tone="foam">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={image} alt={title} fill loading="lazy" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
                <p className="text-sm text-slate-600">{copy}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <ProcessSteps steps={crewProcess} eyebrow="How a concierge specialist is built" />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl text-center">Inside the concierge academy</h2>
          <Accordion items={accordionItems} allowMultiple className="space-y-4" />
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-6 rounded-[2.5rem] bg-[--foam] px-8 py-10 text-ink-900 shadow-[0_24px_68px_rgba(15,60,90,0.12)]">
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

      <section className="container-px">
        <div className="mx-auto max-w-6xl">
          <RelatedLinks links={crewRelatedLinks} eyebrow="Keep exploring" />
        </div>
      </section>

      <section className="container-px">
        <Card padding="p-8 sm:p-10" tone="midnight" className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Ready to meet your dedicated crew?</h2>
          <p className="mt-4 text-sm text-white/80 sm:text-base">
            Connect with our concierge desk to schedule introductions, finalize access protocols, and choreograph the first visit at your property.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/#quote">
              Schedule introductions
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
