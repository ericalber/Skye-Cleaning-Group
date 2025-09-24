import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import ServiceArea from '@/components/ServiceArea'
import QuickActions from '@/components/QuickActions'
import Footer from '@/components/Footer'
import FloatingActionBar from '@/components/FloatingActionBar'

export default function Page() {
  return (
    <>
      <Header />
      <main id="quote" className="pb-24 md:pb-0">
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Reviews />
        <FAQ />
        <ServiceArea />
        <QuickActions />
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  )
}
