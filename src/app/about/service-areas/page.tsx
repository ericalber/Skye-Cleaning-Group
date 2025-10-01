import PageShell from '@/components/PageShell'
import PageBanner from '@/components/PageBanner'
import ServiceAreasLateral from '@/components/ServiceAreasLateral'

export const metadata = {
  title: 'Service Areas – Skye Cleaning Group',
  description:
    'Explore the concierge territories covered by Skye Cleaning Group across San Francisco, Marin, Napa Valley, Sonoma, and the greater Bay Area.',
}

export default function ServiceAreasPage() {
  return (
    <PageShell bodyClassName="with-service-landing" mainClassName="space-y-20 bg-white pb-24">
      <PageBanner
        eyebrow="Service Areas"
        align="left"
        title="Concierge coverage across San Francisco, Marin, Napa, and beyond."
        description="Every territory is staffed by dedicated crews, hospitality-level checklists, and digital reporting that prove the Skye standard on every visit."
        image="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1920&q=80"
      />
      <ServiceAreasLateral />
    </PageShell>
  )
}
