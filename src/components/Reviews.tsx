import TestimonialsMarquee, { Review } from './TestimonialsMarquee'

const topReviews: Review[] = [
  {
    name: 'Alex Morgan',
    location: 'Pacific Heights • San Francisco',
    quote:
      'Skye Cleaning Group transformed our apartment in just a few hours. The attention to detail feels boutique-hotel level.',
    color: 'bg-skye-500',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    accent: 'emerald',
  },
  {
    name: 'Priya S.',
    location: 'Mill Valley • Marin',
    quote:
      'The crew was punctual, kind, and careful with our art pieces. Our post-event reset was flawless.',
    color: 'bg-slate-600',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
    accent: 'rose',
  },
  {
    name: 'Nathan & Elise',
    location: 'Sausalito • North Bay',
    quote:
      'We signed up for recurring service and never need a follow-up checklist. Every visit holds the Skye standard.',
    color: 'bg-skye-700',
    avatar: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=120&q=80',
    accent: 'violet',
  },
  {
    name: 'Olivia Hart',
    location: 'Cow Hollow • San Francisco',
    quote:
      'They polished every corner before our hosted dinner. Scheduling was effortless and the follow-up stayed on script.',
    color: 'bg-slate-500',
    accent: 'rose',
  },
  {
    name: 'Michael Lang',
    location: 'Nob Hill • San Francisco',
    quote:
      'Their visit recaps and proactive communication keep our busy household perfectly under control.',
    color: 'bg-skye-600',
    accent: 'emerald',
  },
  {
    name: 'Caroline Dupont',
    location: 'Belvedere • Marin',
    quote:
      'The crew is discreet, organized, and always leaves our weekend home staged exactly how we like it.',
    color: 'bg-slate-700',
    accent: 'violet',
  },
  {
    name: 'Ethan Rogers',
    location: 'Healdsburg • Sonoma',
    quote:
      'For our rental properties, Skye’s standard keeps us at five stars with every turnover.',
    color: 'bg-skye-500',
    accent: 'gold',
  },
]

const bottomReviews: Review[] = [
  {
    name: 'Isabella Ruiz',
    location: 'Presidio Heights • San Francisco',
    quote:
      'Weekly maintenance with Skye feels like checking into a luxury hotel. Every surface gleams and our art stays pristine.',
    color: 'bg-skye-600',
    accent: 'emerald',
  },
  {
    name: 'Grant Whitman',
    location: 'Russian Hill • San Francisco',
    quote:
      'Their teams arrive with military precision. Reports land in my inbox before I ask, and the scent signature is unforgettable.',
    color: 'bg-slate-700',
    accent: 'violet',
  },
  {
    name: 'Elena Laurent',
    location: 'Tiburon • Marin',
    quote:
      'Flawless post-event resets every time. They coordinate florists, catering, and waste removal without disrupting guests.',
    color: 'bg-skye-500',
    accent: 'emerald',
  },
  {
    name: 'Marcus Hale',
    location: 'Menlo Park • Peninsula',
    quote:
      'Boardroom refreshes look stage-ready. Even investors mention the polish before presentations begin.',
    color: 'bg-slate-600',
    accent: 'rose',
  },
  {
    name: 'Jasmine Clarke',
    location: 'St. Helena • Napa Valley',
    quote:
      'Harvest season gets hectic, but Skye keeps the villa presentation-perfect for guests and investors every single week.',
    color: 'bg-skye-700',
    accent: 'violet',
  },
  {
    name: 'Theo Bennett',
    location: 'Palo Alto • Peninsula Corridor',
    quote:
      'Our executive suites always smell crisp and look reset for the next pitch. The team documents everything flawlessly.',
    color: 'bg-skye-500',
    accent: 'emerald',
  },
]

const additionalReviews: Review[] = [
  {
    name: 'Sophia Becker',
    location: 'Belmont • Peninsula',
    quote: 'Coordenam nossas visitas semanais com discrição absoluta. Até nossos pets respondem aos mesmos rituais.',
    color: 'bg-skye-500',
    accent: 'gold',
  },
  {
    name: 'Daniel Cho',
    location: 'Mission Bay • San Francisco',
    quote: 'A equipe entende a dinâmica do nosso escritório híbrido. Chegamos e tudo já está coreografado.',
    color: 'bg-slate-600',
    accent: 'emerald',
  },
  {
    name: 'Lucia Ferraro',
    location: 'Napa Vineyard Estates',
    quote: 'Nos eventos de colheita, eles orquestram limpeza, lavanderia e logística com a mesma elegância da recepção.',
    color: 'bg-skye-700',
    accent: 'rose',
  },
  {
    name: 'Henry Wallace',
    location: 'Jackson Square • San Francisco',
    quote: 'Do lobby ao boardroom, cada detalhe respira hospitalidade. Os relatórios fotográficos encantam os stakeholders.',
    color: 'bg-slate-700',
    accent: 'violet',
  },
]

export default function Reviews() {
  const extendedTop = [...topReviews, additionalReviews[0], additionalReviews[1]]
  const extendedBottom = [...bottomReviews, additionalReviews[2], additionalReviews[3]]

  return (
    <section id="reviews" className="bg-white py-20">
      <div className="container-px">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[var(--skye-100)] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--skye-600)] shadow-sm">
            Reviews • ★★★★★
          </span>
          <h2 className="text-3xl font-black sm:text-4xl">Clients who trust the Skye standard.</h2>
          <p className="text-slate-600">
            Real stories from residences and corporate suites that depend on our concierge cleaning rituals every week.
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-12">
        <TestimonialsMarquee primaryReviews={extendedTop} secondaryReviews={extendedBottom} />
      </div>
    </section>
  )
}
