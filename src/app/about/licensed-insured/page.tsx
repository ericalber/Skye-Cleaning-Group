import PageShell from '@/components/PageShell'

const protections = [
  {
    title: 'California licensed janitorial contractor',
    body: 'Our license stays active with zero violations. We exceed mandated liability and workers’ compensation thresholds so asset managers, HOAs, and corporate facilities enjoy airtight protection.',
  },
  {
    title: 'OSHA 30 & GBAC-managed supervision',
    body: 'Field leaders complete OSHA 30, GBAC infectious-disease control, and annual refreshers on lockout/tagout, bloodborne pathogens, and ergonomics. Every visit follows written safety choreography.',
  },
  {
    title: 'Specialty surface certifications',
    body: 'IICRC textile care, StonePro marble restoration, and Bona hardwood accreditations keep heritage flooring, custom rugs, and millwork protected by manufacturer-approved processes.',
  },
  {
    title: 'High-access compliance',
    body: 'IRATA rope access and aerial lift credentials allow us to detail atriums, skylights, and exterior glass while satisfying San Francisco safety mandates and insurance audits.',
  },
]

const governanceHighlights = [
  'Quarterly safety audits logged inside your client portal',
  'Annual background checks, NDA renewals, and hospitality refreshers',
  'Digital SDS library, chemical inventory, and incident logs mapped to each property',
  'Emergency playbooks covering biohazard, flood mitigation, and wildfire smoke response',
]

export default function LicensedInsuredPage() {
  return (
    <PageShell mainClassName="space-y-20 pb-20">
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-90"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(7,18,28,0.55), rgba(13,36,56,0.8)), url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-[1] container-px py-20 text-white sm:py-28">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              Licensed & Insured
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">Paperwork that proves concierge standards.</h1>
            <p className="text-sm text-white/85 sm:text-base">
              Skye Cleaning Group invests in the same level of compliance demanded by luxury hospitality, biotech labs, and institutional real estate portfolios—so your risk team sleeps easy.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-4 text-slate-600 sm:text-base">
          <p>
            Insurance certificates, licenses, and safety data may not sparkle like marble floors, yet they are the scaffolding of every white-glove visit. Our operations group monitors renewals, tracks endorsements, and uploads documentation to your client portal before you even ask. That diligence keeps board approvals swift and ensures every site is protected the moment our concierge crew steps through the door.
          </p>
          <p>
            Below you will find a snapshot of the credentials and safety systems that accompany each engagement. Share them with your compliance officers, procurement departments, or homeowners associations—they are designed to withstand executive scrutiny.
          </p>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {protections.map(({ title, body }) => (
            <article key={title} className="card-premium p-6 text-sm text-slate-600">
              <div className="card-premium__body space-y-3">
                <h2 className="text-lg font-semibold text-ink-900">{title}</h2>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-6 rounded-[2rem] bg-[--foam] px-8 py-10 text-ink-900 shadow-[0_20px_60px_rgba(15,60,90,0.1)]">
          <h2 className="text-2xl font-bold">Governance ready for your risk folder</h2>
          <ul className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
            {governanceHighlights.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-white/70 bg-white px-5 py-4 shadow-sm">
                <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--skye-500)]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  )
}
