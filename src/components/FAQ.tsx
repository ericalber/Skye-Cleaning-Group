'use client'

import Accordion from '@/components/ui-kits/Accordion'

const faqs = [
  {
    question: 'Do you bring supplies and equipment?',
    answer:
      'Yes. We arrive with professional products, HEPA filtration, and color-coded cloths for every area. Prefer we use what you have on site? Just let us know.',
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer:
      'No long-term contracts here. For recurring plans, give us 24 hours’ notice to reschedule at no charge.',
  },
  {
    question: 'How does the Skye Done-Right Guarantee work?',
    answer:
      'If something isn’t perfect, message us within 24 hours. We’ll return promptly and make it right at no extra cost.',
  },
  {
    question: 'Which areas do you service?',
    answer:
      'We cover San Francisco, Marin County, select Sonoma County communities, and nearby North Bay neighborhoods.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="container-px py-16">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <div className="space-y-3">
          <span className="inline-flex items-center justify-center rounded-full border border-[var(--skye-100)] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--skye-600)]">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-black sm:text-4xl">FAQs</h2>
          <p className="text-slate-600">
            Transparent answers so you know exactly what to expect from Skye Cleaning Group before, durante e depois de cada visita.
          </p>
        </div>
        <Accordion
          allowMultiple
          className="space-y-4"
          items={faqs.map(({ question, answer }) => ({
            title: question,
            content: <p className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">{answer}</p>,
          }))}
        />
      </div>
    </section>
  )
}
