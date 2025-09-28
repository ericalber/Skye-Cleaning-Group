import Image from 'next/image'

import ModalQuote from '@/components/ModalQuote'
import PageShell from '@/components/PageShell'

const galleryItems = [
  {
    title: 'Boardroom reveal minutes before investor arrival',
    copy: 'Glass, tech, and lighting aligned to communicate discipline and polish.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Residential spa bathroom reset',
    copy: 'Stone neutralized, glass crystal clear, and amenities staged like a private resort.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Post-event overnight turnaround',
    copy: 'Gala space revitalized before sunrise for a press conference encore.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'High-rise terrace maintenance',
    copy: 'Furniture alignment, glass rail polishing, and teak treatment ready for sunset receptions.',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Boutique clinic treatment room',
    copy: 'Clinical sanitizing paired with hospitality touches that reassure discerning patients.',
    image: 'https://images.unsplash.com/photo-1579154341090-ecc748584c6c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Textile revival for executive lounge',
    copy: 'Carpet encapsulation and upholstery steaming restore bounce, color, and air quality.',
    image: 'https://images.unsplash.com/photo-1581579186989-4c04bb07f0a1?auto=format&fit=crop&w=1600&q=80',
  },
]

export default function GalleryPage() {
  return (
    <PageShell bodyClassName="with-gotravel" mainClassName="space-y-20 pb-20">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-90"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(7,18,28,0.55), rgba(13,36,56,0.8)), url(https://images.unsplash.com/photo-1529429617124-aee8095725cb?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-[1] container-px py-20 text-white sm:py-28">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              Gallery
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">Moments when properties feel weightless.</h1>
            <p className="text-sm text-white/85 sm:text-base">
              A glimpse of the high-impact transformations our concierge teams deliver for residences, clinics, showrooms, and corporate headquarter floors.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map(({ title, copy, image }) => (
            <figure
              key={title}
              className="overflow-hidden rounded-[2rem] border border-[var(--skye-100)] bg-white shadow-[0_22px_60px_rgba(18,60,84,0.18)]"
            >
              <div className="relative h-60 w-full">
                <Image src={image} alt={title} fill className="object-cover transition duration-700 hover:scale-105" />
              </div>
              <figcaption className="space-y-2 p-6 text-sm text-slate-600">
                <h2 className="text-lg font-semibold text-ink-900">{title}</h2>
                <p>{copy}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[2rem] bg-white px-8 py-10 text-center text-ink-900 shadow-[0_20px_60px_rgba(18,60,84,0.14)]">
          <h2 className="text-3xl font-black">Ready to choreograph your own reveal?</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Book a concierge consultation and we will design the maintenance, deep clean, or event reset that keeps your property camera ready.
          </p>
          <ModalQuote triggerClassName="btn btn-primary" triggerLabel="Plan my transformation" compact />
        </div>
      </section>
    </PageShell>
  )
}
