import PageShell from '@/components/PageShell'

const faqs = [
  {
    question: 'How quickly can Skye deploy a concierge team?',
    answer:
      'For established clients we maintain a rapid deployment roster that mobilizes within four business hours for emergencies and within 24 hours for new projects. New partners typically receive their first visit inside three business days after a discovery call.',
  },
  {
    question: 'Which verticals do you specialize in?',
    answer:
      'We support luxury residences, venture-capital and legal offices, boutique medical clinics, flagship retail, and hospitality venues. Each vertical receives customized SOPs, dedicated account management, and chemistry tailored to its finishes and compliance requirements.',
  },
  {
    question: 'Can you collaborate with our existing facilities team?',
    answer:
      'Absolutely. Many clients keep Skye on retainer for concierge-level zones while an in-house staff handles daily routines. We integrate with CAFM platforms, share digital checklists, and conduct joint audits to ensure seamless collaboration.',
  },
  {
    question: 'Do you offer proof of insurance, bonding, and background checks?',
    answer:
      'Yes. Certificates of insurance, waivers of subrogation, background checks, and NDA renewals are stored in your secure client portal. We update documentation annually or on demand for new properties.',
  },
  {
    question: 'How do you protect sensitive information inside residences and offices?',
    answer:
      'All team members sign NDAs, pass multi-stage background verification, and complete privacy and data-security training. We coordinate with security and concierge staff to follow building-specific protocols, key control guidelines, and access logs.',
  },
  {
    question: 'What does onboarding look like?',
    answer:
      'We begin with a site immersion that maps finishes, technology, schedules, and household or brand preferences. From there we draft a service playbook, share a preview for approval, and stage a pilot visit before launching the full cadence.',
  },
]

export default function FAQPage() {
  return (
    <PageShell bodyClassName="with-service-landing" mainClassName="space-y-20 pb-20">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-90"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(7,18,28,0.55), rgba(13,36,56,0.8)), url(https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-[1] container-px py-20 text-white sm:py-28">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              FAQ
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">Your questions, answered like a concierge would.</h1>
            <p className="text-sm text-white/85 sm:text-base">
              Browse the most common questions we receive from estate managers, workplace directors, and boutique clinic owners. Need something more specific? Our team is one call away.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-[var(--skye-100)] bg-white p-5 text-sm text-slate-600 shadow-[0_16px_40px_rgba(18,60,84,0.12)]"
            >
              <summary className="cursor-pointer list-none text-ink-900">
                <span className="text-base font-semibold">{question}</span>
              </summary>
              <p className="mt-3 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
