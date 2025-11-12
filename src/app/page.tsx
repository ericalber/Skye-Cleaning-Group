import { Suspense } from 'react'
import PageShell from '@/components/PageShell'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import ServiceArea from '@/components/ServiceArea'
import HomeServiceButtons from '@/components/HomeServiceButtons'
import HomeVideoSpot from '@/components/HomeVideoSpot'
import HomeCleanTipsPreview from '@/components/HomeCleanTipsPreview'
import QuickActions from '@/components/QuickActions'

export default function Page() {
  return (
    <PageShell mainClassName="page-home pb-24 md:pb-0">
      {/* Anchor target for buttons linking to /#quote */}
      <span id="quote" />
      <Hero />
      <HomeServiceButtons />
      <HomeVideoSpot />
      <TrustBar />
      <Services />
      <Process />
      <Reviews />
      <FAQ />
      <ServiceArea />
      <HomeCleanTipsPreview />
      <Suspense fallback={null}>
        <QuickActions />
      </Suspense>
    </PageShell>
  )
}
