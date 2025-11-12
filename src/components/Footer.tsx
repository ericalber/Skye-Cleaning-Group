import Image from 'next/image'

const year = new Date().getFullYear()

const contactLinks = [
  {
    href: 'tel:+14154978008',
    label: 'Call +1 (415) 497-8008',
    icon: '/icons/phone-3d.png',
    alt: 'Phone icon',
    iconClass: 'mix-blend-multiply',
  },
  {
    href: 'mailto:contact@skyecgroup.com',
    label: 'Email: contact@skyecgroup.com',
    icon: '/icons/communication_mail.png',
    alt: 'Email icon',
    iconClass: 'mix-blend-multiply',
  },
  {
    href: 'https://www.instagram.com/skyecgroup',
    label: 'Instagram: @skyecgroup',
    icon: '/icons/instagram.svg',
    alt: 'Instagram icon',
    external: true,
    iconClass: '',
  },
]

export default function Footer() {
  return (
    <footer className="footer-gradient">
      <div className="footer-gradient__inner container-px py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-4">
            <Image src="/logo-skye.png" alt="SkyeC Group logo" width={140} height={52} className="h-12 w-auto object-contain" unoptimized />
            <p className="max-w-sm text-sm text-white/80">
              SkyeC Group - Residential &amp; Light Commercial Cleaning in the Bay Area and North Bay. Based in San Francisco,
              we deliver concierge-level care for residences and boutique commercial spaces.
            </p>
            <p className="text-xs text-white/50">© {year} SkyeC Group. Crafted by the Skye Cleaning Group team.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Contact</h3>
            <ul className="space-y-3 text-sm text-white">
              {contactLinks.map(({ href, label, icon, alt, external, iconClass }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-[1px] hover:border-white/35 hover:bg-white/20 focus-visible:-translate-y-[1px] focus-visible:border-white/35 focus-visible:bg-white/20"
                    rel={external ? 'noopener noreferrer' : undefined}
                    target={external ? '_blank' : undefined}
                  >
                    <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full">
                      <Image src={icon} alt={alt} width={24} height={24} className={`h-6 w-6 object-contain ${iconClass ?? ''}`} unoptimized />
                    </span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Service Area</h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li>San Francisco</li>
              <li>Marin - Novato, San Rafael, Mill Valley, Sausalito</li>
              <li>North Bay - Petaluma, Santa Rosa</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/70 sm:text-left">
          <p>Premium concierge cleaning for your next Skye visit.</p>
        </div>
      </div>
    </footer>
  )
}
