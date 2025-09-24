'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
  const [active, setActive] = useState<number | null>(0)

  return (
    <section id="faq" className="container-px py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-black sm:text-4xl">FAQs</h2>
        <p className="mt-3 text-slate-600">Transparent answers so you know exactly what to expect from Skye Cleaning Group.</p>
      </div>
      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = active === index
          return (
            <div key={question} className="surface surface--navy surface--soft overflow-hidden text-white">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setActive(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold">{question}</span>
                <span className="text-xl text-amber-300" aria-hidden="true">
                  {isOpen ? '–' : '+'}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <p className="px-5 pb-5 text-sm text-white/80">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
