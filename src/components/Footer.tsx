import Image from 'next/image'

const year = new Date().getFullYear()

const reputationLogos = [
  { src: '/logos/google-reviews.svg', alt: 'Google reviews badge' },
  { src: '/logos/thumbtack.png', alt: 'Thumbtack Top Pro badge' },
  { src: '/logos/yelp.png', alt: 'Yelp reviews badge' },
]

const contactLinks = [
  {
    href: 'tel:+14154978008',
    label: 'Call +1 (415) 497-8008',
    icon: '/icons/phone.svg',
    alt: 'Phone icon',
  },
  {
    href: 'https://wa.me/14154978008',
    label: 'WhatsApp +1 (415) 497-8008',
    icon: '/icons/whatsapp.svg',
    alt: 'WhatsApp icon',
    external: true,
  },
  {
    href: 'mailto:contact@skyecgroup.com',
    label: 'Email: contact@skyecgroup.com',
    icon: '/icons/email.png',
    alt: 'Email icon',
  },
  {
    href: 'https://www.instagram.com/skyecgroup',
    label: 'Instagram: @skyecgroup',
    icon: '/icons/instagram.png',
    alt: 'Instagram icon',
    external: true,
  },
]

export default function Footer() {
  return (
    <footer className="container-px pb-16">
      <div className="surface surface--white p-10 rounded-3xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image src="/logo-skye.png" alt="SkyeC Group logo" width={120} height={48} className="h-10 w-auto object-contain" />
            <p className="mt-4 text-sm text-slate-600">
              SkyeC Group — Residential &amp; Light Commercial Cleaning na Bay Area / North Bay. Localizada em San Francisco,
              oferecemos atendimento concierge para residências e espaços boutique.
            </p>
            <p className="mt-6 text-xs text-slate-500">© {year} SkyeC Group. Desenvolvido pela Skye Cleaning Group.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-900">
              {contactLinks.map(({ href, label, icon, alt, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/60 px-3 py-2 text-sm font-medium text-ink-900 shadow-sm transition hover:-translate-y-[1px] hover:border-skye-200 hover:bg-white focus-visible:-translate-y-[1px] focus-visible:border-skye-200 focus-visible:bg-white"
                    rel={external ? 'noopener noreferrer' : undefined}
                    target={external ? '_blank' : undefined}
                  >
                    <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white">
                      <Image src={icon} alt={alt} width={24} height={24} className="h-6 w-6 object-contain" />
                    </span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Service Area</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-900">
              <li>San Francisco</li>
              <li>Marin — Novato, San Rafael, Mill Valley, Sausalito</li>
              <li>North Bay — Petaluma, Santa Rosa</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">Concierge de limpeza premium para sua próxima visita Skye.</p>
          <div className="flex flex-wrap items-center justify-end gap-4">
            {reputationLogos.map(({ src, alt }) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={90}
                height={32}
                className="h-7 w-[90px] object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
