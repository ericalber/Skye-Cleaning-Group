import { Suspense } from 'react'

import Header from '@/components/Header'
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
import Footer from '@/components/Footer'
import FloatingActionBar from '@/components/FloatingActionBar'

export default function Page() {
  return (
    <>
      <Header />
      <main id="quote" className="page-home pb-24 md:pb-0 mt-16 sm:mt-20" data-page="home">
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
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  )
}
