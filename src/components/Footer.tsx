import Link from 'next/link'

const year = new Date().getFullYear()

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-px py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="text-lg font-semibold">Skye Cleaning Group</p>
            <p className="mt-2 max-w-sm text-sm text-white/70">
              Premium residential and light commercial cleaning for San Francisco and the North Bay. Personalized care,
              trusted professionals, and the Skye Done-Right Guarantee.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <a href="tel:+14154978008" className="block text-white hover:text-skye-200">
                +1 (415) 497-8008
              </a>
              <a href="mailto:hello@skycleaninggroup.com" className="block text-white hover:text-skye-200">
                hello@skycleaninggroup.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-skye-200">
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/?service=recurring#quote" className="hover:text-skye-200">
                  Get My Free Estimate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Hours</h3>
            <p className="mt-4 text-sm text-white/70">Monday to Saturday, 8am—7pm.</p>
            <p className="mt-2 text-sm text-white/70">Sunday appointments available upon request.</p>
            <div className="mt-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-wide text-white/80">
              EIN 12-3456789 · SF Biz Reg #0000000
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <p>© {year} Skye Cleaning Group. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#quote" className="hover:text-skye-200">
              Request Cleaning Now
            </Link>
            <a href="https://wa.me/14154978008" className="hover:text-skye-200">
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
