import { Suspense } from 'react'
import Script from 'next/script'
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
import { buildPageMetadata } from '@/seo/metadata'
import { createLocalBusinessSchema, skyeAreaServedCommercial, skyePostalAddress, skyeSameAs, skyeServiceArea } from '@/seo/schema'

const homeHeroImage =
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop'

export const metadata = buildPageMetadata({
  title: 'Concierge Cleaning in San Francisco & North Bay | Skye Cleaning Group',
  description:
    'Skye Cleaning Group delivers premium residential and light commercial cleaning across San Francisco and the North Bay with concierge teams and a Done-Right guarantee.',
  path: '/',
  ogImage: homeHeroImage,
})

const localBusinessSchema = createLocalBusinessSchema({
  address: skyePostalAddress,
  sameAs: skyeSameAs,
  serviceArea: skyeServiceArea,
  areaServed: skyeAreaServedCommercial,
})

export default function Page() {
  return (
    <PageShell mainClassName="page-home pb-24 md:pb-0">
      <Script
        id="skye-jsonld-local-business"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
