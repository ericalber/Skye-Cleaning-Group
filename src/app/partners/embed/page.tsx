import type { Metadata } from 'next'
import Link from 'next/link'

import PageShell from '@/components/PageShell'
import { siteUrl } from '../../../../seo.config'

export const metadata: Metadata = {
  title: 'Partner Embed Instructions | Skye Cleaning Group',
  description: 'Copy and paste the Skye Cleaning Group widget to allow your audience to request concierge cleaning estimates directly from your site.',
  robots: { index: false, follow: true },
}

const snippet = `<script async src="${siteUrl}/embed/skye-widget.js"></script>`

export default function PartnersEmbedPage() {
  return (
    <PageShell mainClassName="container-px py-16">
      <div className="mx-auto max-w-4xl space-y-12">
        <header className="space-y-4">
          <h1 className="text-3xl font-black text-ink-900">Embed the Skye Cleaning Estimate Widget</h1>
          <p className="text-sm text-slate-600 sm:text-base">
            Provide visitors with a direct concierge pathway to Skye Cleaning Group. Copy the snippet below and paste it where you would like the widget to appear. The script renders a “Get Cleaning Estimate” button, a mini-form, and a visible credit link back to our service areas page.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-ink-900">Copy &amp; paste snippet</h2>
          <pre className="rounded-2xl border border-[rgba(18,60,84,0.14)] bg-[--foam] p-4 text-sm text-[var(--skye-800)]">
            {snippet}
          </pre>
          <p className="text-sm text-slate-600">
            Place the script just before the closing <code className="rounded bg-white px-1 py-[1px]">&lt;/body&gt;</code> tag or inside a component layout. The widget loads asynchronously and does not block Core Web Vitals.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-ink-900">White-hat usage guidelines</h2>
          <ul className="list-disc space-y-2 pl-6 text-sm text-slate-600">
            <li>Do not hide or modify the “Skye Cleaning Group” attribution link.</li>
            <li>Collect leads in accordance with your privacy policy and disclose that Skye Cleaning Group will respond directly.</li>
            <li>Contact us at <Link href="mailto:partners@skyecgroup.com" className="font-semibold text-[var(--skye-700)] underline decoration-dotted">partners@skyecgroup.com</Link> for co-branded assets or enterprise integrations.</li>
          </ul>
        </section>

        <footer className="space-y-2 text-sm text-slate-600">
          <p>
            Need a bespoke integration? Our engineering team can provide custom webhooks or a pre-qualified referral program. Reach out to the concierge desk at{' '}
            <Link href="mailto:press@skyecgroup.com" className="font-semibold text-[var(--skye-700)] underline decoration-dotted">press@skyecgroup.com</Link>.
          </p>
        </footer>
      </div>
    </PageShell>
  )
}
