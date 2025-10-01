import Link from 'next/link'

import PageShell from '@/components/PageShell'
import PageBanner from '@/components/PageBanner'
import Card from '@/components/ui-kits/Card'

export const metadata = {
  title: 'Light Commercial Cleaning — Skye Cleaning Group',
  description:
    'Explore Skye Cleaning Group’s light commercial cleaning programs for executive suites, private clinics, retail showrooms, and boutique workplaces.',
}

export default function CommercialPage() {
  return (
    <PageShell bodyClassName="with-service-landing" mainClassName="space-y-16 pb-20">
      <PageBanner
        eyebrow="Light Commercial"
        align="left"
        title="Concierge cleaning that keeps your workplace investor-ready."
        description="Executive suites, private clinics, and boutique showrooms rely on Skye to choreograph presentation, compliance, and reporting without disrupting the workday."
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-px">
        <div className="mx-auto max-w-4xl space-y-6 text-sm text-slate-600 sm:text-base">
          <p>
            Discover how our light commercial concierge program protects brand perception across boardrooms, innovation labs, wellness suites, and flagship retail. We align cleaning choreography with investor meetings, patient appointments, launch events, and security requirements so every stakeholder experiences a polished environment without downtime.
          </p>
          <p>
            Ready for the full breakdown? Dive into the dedicated service page to review the Skye blueprint, reporting cadence, and what our crews handle—or intentionally avoid—inside corporate spaces.
          </p>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-4xl">
          <Card as={Link} href="/services/light-commercial" padding="p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--skye-600)]">Explore the spoke</span>
            <h2 className="mt-2 text-2xl font-semibold text-ink-900 sm:text-3xl">Light Commercial Service Overview</h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Review the full concierge program, including scheduling choreography, reporting dashboards, compliance safeguards, and crosslinks to related services.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--skye-700)]">
              View light commercial details
              <span aria-hidden="true">→</span>
            </span>
          </Card>
        </div>
      </section>
    </PageShell>
  )
}
