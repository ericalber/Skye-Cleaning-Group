import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import type { ReactNode } from 'react'

import PageShell from '@/components/PageShell'
import ModalQuote from '@/components/ModalQuote'
import { createFaqSchema, createItemListSchema, createLocalBusinessSchema, createServiceSchema } from '@/seo/schema'
import { siteUrl } from '../../../seo.config'

const phoneHref = 'tel:+14154978008'
const phoneLabel = 'Call +1 (415) 497-8008'

const serviceCatalog = [
  'Luxury Home & Estate Cleaning',
  'House Cleaning / Houseclean',
  'Recurring Cleaning',
  'One-Time Deep Clean',
  'Move-In / Move-Out Cleaning',
  'Post-Construction Cleaning',
  'Carpet & Upholstery Care',
  'Window Cleaning',
  'Office & Corporate Cleaning',
  'Light Commercial Maintenance',
  'Apartment & Condo Detailing',
  'Post-Event Reset',
  'Schools & Universities Cleaning',
  'Healthcare Facilities Cleaning',
  'Wineries & Vineyards Detailing',
  'Airbnb & STR Turnovers',
  'Retail & Showroom Cleaning',
  'Industrial & Warehouse Care',
  'Sanitization & Disinfection',
  'Appliance Detailing',
  'Green / Eco-Friendly Cleaning',
]

type AreaSection = {
  id: string
  title: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  services: string[]
  description: ReactNode
  crossLink?: { href: string; label: string }
}

const createMailto = (location: string) =>
  `mailto:contact@skyecgroup.com?subject=${encodeURIComponent(`Cleaning Plan - ${location}`)}&body=${encodeURIComponent(
    'Hello Skye team, I would like to request a premium cleaning plan tailored to this location. Please contact me with availability.'
  )}`

const areaSections: AreaSection[] = [
  {
    id: 'belvedere',
    title: 'Luxury House & Office Cleaning in Belvedere',
    image: {
      src: 'https://images.unsplash.com/photo-1616594039964-193d5244e6e6?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'View of Belvedere Island waterfront estate',
      width: 1200,
      height: 800,
    },
    services: ['Luxury Home & Estate Cleaning', 'Recurring Cleaning', 'Window Cleaning', 'Post-Event Reset'],
    description: (
      <>
        Belvedere estates perched above Richardson Bay call for detail-obsessed stewards who can glide between yacht clubs and art-filled living rooms. Our
        <Link href="/services" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">luxury home specialists</Link>
        handle multi-level residences, guest casitas, and private offices while coordinating with estate managers. When waterfront entertaining spills into
        <Link href="#tiburon" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Tiburon terraces</Link>, we synchronize crews so linens, catering kitchens, and dockside lounges sparkle before the next arrival.
      </>
    ),
  },
  {
    id: 'tiburon',
    title: 'Luxury House & Office Cleaning in Tiburon',
    image: {
      src: 'https://images.unsplash.com/photo-1583001875269-04657c1be585?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Modern coastal residence in Tiburon, California',
      width: 1200,
      height: 800,
    },
    services: ['Luxury Home & Estate Cleaning', 'Post-Event Reset', 'Window Cleaning', 'Sanitization & Disinfection'],
    description: (
      <>
        Hilltop panoramas and glass-walled lounges in Tiburon need streak-free finishes and quiet overnight refreshes. Our teams protect designer surfaces, hydrate exotic wood decks, and coordinate post-regatta resets before the sun lifts over Angel Island. For clients who also maintain wine cellars in
        <Link href="#belvedere" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Belvedere</Link>, we align fragrance-free products and security clearances so every space delivers the same concierge polish.
      </>
    ),
  },
  {
    id: 'stinson-beach',
    title: 'Luxury House & Office Cleaning in Stinson Beach',
    image: {
      src: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Coastal home at Stinson Beach',
      width: 1200,
      height: 800,
    },
    services: ['One-Time Deep Clean', 'Recurring Cleaning', 'Green / Eco-Friendly Cleaning', 'Post-Event Reset'],
    description: (
      <>
        Ocean mist and barefoot entertaining make Stinson Beach retreats wonderfully relaxed—and demanding on finishes. We alternate between sand-safe entry prep, UV-resistant conditioning for outdoor lounges, and eco-friendly products that respect the surrounding marine habitat. Many homeowners request synchronized arrivals with their
        <Link href="#mill-valley" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Mill Valley</Link>
        townhouses, keeping both residences guest-ready no matter where the weekend begins.
      </>
    ),
  },
  {
    id: 'sausalito',
    title: 'Luxury House & Office Cleaning in Sausalito',
    image: {
      src: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Houseboats and hillside homes in Sausalito',
      width: 1200,
      height: 800,
    },
    services: ['Recurring Cleaning', 'Window Cleaning', 'Office & Corporate Cleaning', 'Sanitization & Disinfection'],
    description: (
      <>
        Design studios, hillside lofts, and iconic houseboats in Sausalito see constant foot traffic from guests and gallery buyers. Our crews stage sunrise arrivals to avoid Bridgeway congestion, polish panoramic glass, and sanitize creative workspaces without disturbing commissioned pieces. Many clients pair Sausalito residencies with executive suites in
        <Link href="#pacific-heights" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Pacific Heights</Link>, ensuring consistent signature scenting and towel presentation across every address.
      </>
    ),
  },
  {
    id: 'corte-madera',
    title: 'Luxury House & Office Cleaning in Corte Madera',
    image: {
      src: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Sunlit living room in Corte Madera',
      width: 1200,
      height: 800,
    },
    services: ['Recurring Cleaning', 'Apartment & Condo Detailing', 'Sanitization & Disinfection', 'Appliance Detailing'],
    description: (
      <>
        Families in Corte Madera rely on flexible cleaning windows that sync with school pickups and Marin Country Mart meetings. We rotate microfiber protocols for allergy-sensitive households, deep-clean gourmet kitchens between private chef tastings, and refresh home offices before remote board calls. When clients entertain guests travelling through
        <Link href="#mill-valley" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Mill Valley</Link>,
        our detailing teams keep both lounges presentation-ready without duplicating requests.
     </>
    ),
  },
  {
    id: 'san-rafael',
    title: 'Luxury House & Office Cleaning in San Rafael',
    image: {
      src: 'https://images.unsplash.com/photo-1600585154340-0ef3c08dcdb6?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Estate home in San Rafael, California',
      width: 1200,
      height: 800,
    },
    services: ['Luxury Home & Estate Cleaning', 'Office & Corporate Cleaning', 'Sanitization & Disinfection', 'Green / Eco-Friendly Cleaning'],
    description: (
      <>
        From Dominican estates to tech campuses near the canal, San Rafael properties demand hotel-level reliability. We pair estate housekeepers with daytime supervisors to protect antiques, manage vendor deliveries, and detail waterfront decks. Corporate suites receive overnight sanitization that complements our
        <Link href="#novato" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Novato</Link>
        logistics hub, guaranteeing replacement staff on standby whenever a same-day turnaround is requested.
      </>
    ),
  },
  {
    id: 'novato',
    title: 'Luxury House & Office Cleaning in Novato',
    image: {
      src: 'https://images.unsplash.com/photo-1616628182500-404ae9c43f3a?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Novato hillside neighborhood',
      width: 1200,
      height: 800,
    },
    services: ['House Cleaning / Houseclean', 'Recurring Cleaning', 'Office & Corporate Cleaning', 'Industrial & Warehouse Care'],
    description: (
      <>
        Novato headquarters our dispatch center, allowing us to cover gated communities, AirBnB villas, and light industrial suites without hesitation. We coordinate with property managers on biometric access, replenish eco-certified consumables, and deliver emergency cleanup teams within an hour. Many Novato executives also keep pied-à-terre residences in
        <Link href="#nob-hill" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Nob Hill</Link>, so we mirror textiles, amenities, and scent profiles across every address.
      </>
    ),
  },
  {
    id: 'mill-valley',
    title: 'Luxury House & Office Cleaning in Mill Valley',
    image: {
      src: 'https://images.unsplash.com/photo-1616627458666-d1be0fb328f1?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Mill Valley redwood home',
      width: 1200,
      height: 800,
    },
    services: ['Recurring Cleaning', 'Green / Eco-Friendly Cleaning', 'Appliance Detailing', 'Sanitization & Disinfection'],
    description: (
      <>
        Mill Valley balances redwood tranquility with high-performance home studios. We protect reclaimed timber, rotate HEPA equipment for music rooms, and manage wellness spas that prefer botanical cleaning agents. Clients often split schedules between canyon residences and city condos in
        <Link href="#russian-hill" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Russian Hill</Link>, so our inventory teams stage duplicate amenities and luxury linens for effortless transitions.
      </>
    ),
  },
  {
    id: 'petaluma',
    title: 'Luxury House & Office Cleaning in Petaluma',
    image: {
      src: 'https://images.unsplash.com/photo-1505691671561-2b0b65d1d4ec?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Historic buildings in Petaluma, California',
      width: 1200,
      height: 800,
    },
    services: ['Recurring Cleaning', 'Post-Construction Cleaning', 'Industrial & Warehouse Care', 'Retail & Showroom Cleaning'],
    description: (
      <>
        Downtown lofts and heritage farmhouses in Petaluma benefit from our craftsmanship-friendly approach. We neutralize paint dust after artisan remodels, deep clean reclaimed brick, and keep boutique tasting rooms on Kentucky Street gleaming before weekend crowds. When vintners shuttle guests to
        <Link href="#napa" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Napa</Link>, our cross-county teams trail the itinerary to refresh guest suites before sunset arrivals.
      </>
    ),
  },
  {
    id: 'napa',
    title: 'Luxury House & Office Cleaning in Napa',
    image: {
      src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Vineyard estate in Napa Valley',
      width: 1200,
      height: 800,
    },
    services: ['Wineries & Vineyards Detailing', 'Luxury Home & Estate Cleaning', 'Post-Event Reset', 'Sanitization & Disinfection'],
    description: (
      <>
        Napa estates depend on us to calibrate barrel rooms, alfresco kitchens, and guest casitas after release parties. We coordinate with cellar masters to respect humidity targets, polish tasting salons between private allocations, and sanitize culinary stages without disrupting Mise en place. Many vintners collaborate with hospitality partners in
        <Link href="#st-helena" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">St. Helena</Link>, so we mirror service protocols across properties for a seamless guest journey.
      </>
    ),
  },
  {
    id: 'sonoma',
    title: 'Luxury House & Office Cleaning in Sonoma',
    image: {
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Rolling vineyards in Sonoma County',
      width: 1200,
      height: 800,
    },
    services: ['Wineries & Vineyards Detailing', 'Recurring Cleaning', 'Post-Event Reset', 'Green / Eco-Friendly Cleaning'],
    description: (
      <>
        From plaza residences to vineyard estates, Sonoma clients expect gracefully quiet crews who respect agricultural rhythms. We coordinate tasting room resets before dawn, manage pool cabana upkeep, and care for artisan tile sourced from Portugal. Estate managers often request cross-support with
        <Link href="#viansa" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Viansa Sonoma Winery</Link>, ensuring private label events carry the same polished aesthetic wherever guests roam.
      </>
    ),
  },
  {
    id: 'st-helena',
    title: 'Luxury House & Office Cleaning in St. Helena',
    image: {
      src: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Estate exterior in St. Helena',
      width: 1200,
      height: 800,
    },
    services: ['Luxury Home & Estate Cleaning', 'Wineries & Vineyards Detailing', 'Post-Event Reset', 'Sanitization & Disinfection'],
    description: (
      <>
        St. Helena estates blend Michelin-level dining experiences with historic architecture. Our stewards synchronize with sommeliers, reset guest suites after chef’s table weekends, and log every surface treatment for preservation records. When owners transition to penthouses in
        <Link href="#pacific-heights" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Pacific Heights</Link>, we replicate turndown preferences and fragrance palettes for complete harmony.
      </>
    ),
  },
  {
    id: 'viansa',
    title: 'Luxury House & Office Cleaning in Viansa Sonoma Winery',
    image: {
      src: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Viansa Sonoma Winery terrace',
      width: 1200,
      height: 800,
    },
    services: ['Wineries & Vineyards Detailing', 'Post-Event Reset', 'Luxury Home & Estate Cleaning', 'Sanitization & Disinfection'],
    description: (
      <>
        Viansa’s hilltop vistas host weddings, trade tastings, and curated club experiences that require discreet turnaround. Our teams mop vintage cellar tiles by hand, polish event rentals before transport, and stage honeymoon suites before couples arrive. We coordinate cross-shift schedules with tasting salons in
        <Link href="#sonoma" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Sonoma</Link>
        and villas in <Link href="#napa" className="font-semibold text-[var(--skye-700)] underline decoration-dotted">Napa</Link> to maintain faultless presentation across every hospitality touchpoint.
      </>
    ),
  },
  {
    id: 'pacific-heights',
    title: 'Luxury House & Office Cleaning in Pacific Heights',
    image: {
      src: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Row of homes in San Francisco Pacific Heights',
      width: 1200,
      height: 800,
    },
    services: ['Luxury Home & Estate Cleaning', 'One-Time Deep Clean', 'Window Cleaning', 'Appliance Detailing'],
    description: (
      <>
        Pacific Heights brownstones mix Parisian parlors with contemporary penthouses. We protect silk wall coverings, detail high-gloss kitchens before private chefs arrive, and coordinate art-safe dusting routines. Executives shuttling between here and
        <Link href="#belvedere" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Belvedere</Link>
        appreciate how our concierge desk mirrors linen folds, amenity placement, and aromatherapy across every residence.
      </>
    ),
  },
  {
    id: 'presidio-heights',
    title: 'Luxury House & Office Cleaning in Presidio Heights',
    image: {
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Presidio Heights residential street',
      width: 1200,
      height: 800,
    },
    services: ['Luxury Home & Estate Cleaning', 'Recurring Cleaning', 'Green / Eco-Friendly Cleaning', 'Sanitization & Disinfection'],
    description: (
      <>
        Presidio Heights families welcome our unobtrusive teams who schedule around school runs and Golden Gate Club events. We maintain wellness suites, replenish monogrammed linens, and sanitize playrooms with pediatrician-approved products. Many homeowners also manage weekend retreats in
        <Link href="#stinson-beach" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Stinson Beach</Link>, so recurring visits keep both homes equally spotless.
      </>
    ),
  },
  {
    id: 'sea-cliff',
    title: 'Luxury House & Office Cleaning in Sea Cliff',
    image: {
      src: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Sea Cliff coastline in San Francisco',
      width: 1200,
      height: 800,
    },
    services: ['Luxury Home & Estate Cleaning', 'Window Cleaning', 'Post-Event Reset', 'Sanitization & Disinfection'],
    description: (
      <>
        Sea Cliff mansions face salty breezes, ocean mist, and frequent influencer events. Our specialists condition exterior metalwork, reset terraces after photo shoots, and guard pool mosaics with mineral-balancing protocols. When homeowners host sunset soirées alongside colleagues from
        <Link href="#marina-golden-gate" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Marina Golden Gate</Link>, we dispatch rapid detail teams for same-evening sparkle.
      </>
    ),
  },
  {
    id: 'nob-hill',
    title: 'Luxury House & Office Cleaning in Nob Hill',
    image: {
      src: 'https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Cable car climbing Nob Hill',
      width: 1200,
      height: 800,
    },
    services: ['Apartment & Condo Detailing', 'Recurring Cleaning', 'Office & Corporate Cleaning', 'Sanitization & Disinfection'],
    description: (
      <>
        Nob Hill penthouses and private clubs rely on white-glove crews who understand formal entertaining. We polish ballroom floors, coordinate with concierge staff, and keep executive offices guest-ready before board meetings. Many of these professionals maintain wine country villas in
        <Link href="#sonoma" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Sonoma</Link>, so we align cleaning frequencies with chauffeur schedules to guarantee on-time arrivals.
      </>
    ),
  },
  {
    id: 'russian-hill',
    title: 'Luxury House & Office Cleaning in Russian Hill',
    image: {
      src: 'https://images.unsplash.com/photo-1504981983773-5c1c06bde964?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Russian Hill streets in San Francisco',
      width: 1200,
      height: 800,
    },
    services: ['Recurring Cleaning', 'Apartment & Condo Detailing', 'Window Cleaning', 'Sanitization & Disinfection'],
    description: (
      <>
        Steep streets and heritage buildings define Russian Hill. Our climber-trained crews transport equipment safely, steam-treat vintage tile, and keep rooftop decks windproof for cocktail hours. Residents frequently collaborate with our teams in
        <Link href="#presidio" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">The Presidio</Link>, extending the same concierge routines to office suites and creative studios.
      </>
    ),
  },
  {
    id: 'marina-cow-hollow',
    title: 'Luxury House & Office Cleaning in Marina & Cow Hollow',
    image: {
      src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Marina District homes near the waterfront',
      width: 1200,
      height: 800,
    },
    services: ['Recurring Cleaning', 'Apartment & Condo Detailing', 'Post-Event Reset', 'Airbnb & STR Turnovers'],
    description: (
      <>
        Marina lofts and Cow Hollow townhouses welcome constant entertaining, from launch parties to film festival after-hours. We flip short-term rentals within hours, schedule allergen-safe cleanings between pet-friendly guests, and refresh co-working suites without disturbing founders on calls. When residents host VIPs sailing from
        <Link href="#marina-golden-gate" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Marina Golden Gate</Link>, we stage yacht-ready towel service and beverage stations beforehand.
      </>
    ),
  },
  {
    id: 'presidio',
    title: 'Luxury House & Office Cleaning in The Presidio',
    image: {
      src: 'https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Buildings within the Presidio of San Francisco',
      width: 1200,
      height: 800,
    },
    services: ['Office & Corporate Cleaning', 'Light Commercial Maintenance', 'Sanitization & Disinfection', 'Green / Eco-Friendly Cleaning'],
    description: (
      <>
        The Presidio’s creative campuses and military heritage buildings require preservation-minded crews. We dust museum exhibits with museum-grade cloths, refresh film-production suites overnight, and maintain executive residences surrounded by eucalyptus groves. Our sustainability program mirrors eco initiatives in
        <Link href="#mill-valley" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Mill Valley</Link>, supporting LEED commitments and carbon reporting.
      </>
    ),
  },
  {
    id: 'marina-golden-gate',
    title: 'Luxury House & Office Cleaning near Marina Golden Gate',
    image: {
      src: 'https://images.unsplash.com/photo-1433477155337-9aea4e790195?auto=format&fit=crop&w=1200&q=80&fm=webp',
      alt: 'Golden Gate Bridge seen from the Marina',
      width: 1200,
      height: 800,
    },
    services: ['Post-Event Reset', 'Recurring Cleaning', 'Window Cleaning', 'Airbnb & STR Turnovers'],
    description: (
      <>
        Properties lining the Marina Green and Golden Gate waterfront juggle corporate hospitality, yacht charters, and influencer shoots. We run rapid-response crews after sunset events, polish floor-to-ceiling glass that frames the bridge, and ready guest suites for international arrivals. When hosts coordinate with
        <Link href="#pacific-heights" className="ml-1 font-semibold text-[var(--skye-700)] underline decoration-dotted">Pacific Heights</Link>
        or <Link href="#sea-cliff" className="font-semibold text-[var(--skye-700)] underline decoration-dotted">Sea Cliff</Link> estates, we stage matching amenity baskets to make transitions seamless.
      </>
    ),
  },
]

const areaPlaceList = areaSections.map((area) => ({
  '@type': 'Place' as const,
  name: `${area.title.replace('Luxury House & Office Cleaning in ', '')}, CA`,
  url: `${siteUrl}/services-areas#${area.id}`,
}))

const localBusinessSchema = createLocalBusinessSchema({
  name: 'Skye Cleaning Group',
  url: siteUrl,
  telephone: '+1-415-497-8008',
  image: `${siteUrl}/logo-skye.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '873 2nd Street Suite 102',
    addressLocality: 'Novato',
    addressRegion: 'CA',
    postalCode: '94945',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.106502,
    longitude: -122.568747,
  },
  sameAs: [
    'https://www.skyecgroup.com',
    'https://www.linkedin.com/company/skye-cleaning-group',
    'https://www.facebook.com/SkyeCleaningGroup',
    'https://www.instagram.com/skyecleaninggroup',
    'https://www.yelp.com/biz/skye-cleaning-group-novato',
    'https://www.thumbtack.com/ca/novato/house-cleaning/skye-cleaning-group/service',
    'https://www.homeadvisor.com/rated.SkyeCleaningGroup.12345678.html',
    'https://nextdoor.com/pages/skye-cleaning-group-novato-ca',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '15:00',
    },
  ],
})

const itemListSchema = createItemListSchema({
  itemListElement: areaSections.map((area, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: area.title.replace('Luxury House & Office Cleaning in ', ''),
    url: `${siteUrl}/services-areas#${area.id}`,
  })),
})

const serviceSchema = [
  {
    name: 'Luxury Home & Estate Cleaning',
    description:
      'Concierge-level detailing for estates, penthouses, gated communities, and architecturally significant residences across the San Francisco Bay Area.',
  },
  {
    name: 'House Cleaning / Houseclean',
    description: 'Meticulous houseclean services tailored to multi-level homes, pied-à-terre residences, and piedmont retreats.',
  },
  {
    name: 'Recurring Cleaning',
    description: 'Weekly and bi-weekly service with supervisor-led quality control and smart-home access protocols.',
  },
  {
    name: 'One-Time Deep Clean',
    description: 'White-glove deep cleans ahead of family arrivals, holidays, or photo shoots.',
  },
  {
    name: 'Move-In / Move-Out Cleaning',
    description: 'Transfer-ready detailing for luxury leases, staging, and property management turnovers.',
  },
  {
    name: 'Post-Construction Cleaning',
    description: 'HEPA filtration and careful dust extraction after remodels, new builds, and artisan installations.',
  },
  {
    name: 'Carpet & Upholstery Care',
    description: 'Delicate fiber, oriental rug, and upholstery treatments using low-moisture techniques.',
  },
  {
    name: 'Window Cleaning',
    description: 'Crystal-clear glazing for view homes, glass atriums, and high-rise penthouses.',
  },
  {
    name: 'Office & Corporate Cleaning',
    description: 'After-hours janitorial for executive suites, venture studios, and corporate campuses.',
  },
  {
    name: 'Light Commercial Maintenance',
    description: 'Boutique retail, salons, and gallery maintenance with brand-safe cleaning agents.',
  },
  {
    name: 'Apartment & Condo Detailing',
    description: 'Tailored routines for high-rise residences and amenity-rich buildings.',
  },
  {
    name: 'Post-Event Reset',
    description: 'Rapid event turnaround for celebrations, launches, and private concerts.',
  },
  {
    name: 'Schools & Universities Cleaning',
    description: 'Discreet custodial support for independent schools and collegiate facilities.',
  },
  {
    name: 'Healthcare Facilities Cleaning',
    description: 'Medical-grade sanitization for clinics, dental offices, and private practices.',
  },
  {
    name: 'Wineries & Vineyards Detailing',
    description: 'Barrel room, tasting salon, and hospitality suite maintenance for Napa and Sonoma partners.',
  },
  {
    name: 'Airbnb & STR Turnovers',
    description: 'Fast-turn services with amenity staging for premium short-term rentals.',
  },
  {
    name: 'Retail & Showroom Cleaning',
    description: 'Luxury retail reset, merchandising support, and glass polishing.',
  },
  {
    name: 'Industrial & Warehouse Care',
    description: 'Light industrial cleaning, equipment wipe-down, and safety compliance.',
  },
  {
    name: 'Sanitization & Disinfection',
    description: 'Electrostatic and hospital-grade disinfection for homes and workplaces.',
  },
  {
    name: 'Appliance Detailing',
    description: 'Ovens, ranges, wine fridges, and smart appliances restored to showroom finish.',
  },
  {
    name: 'Green / Eco-Friendly Cleaning',
    description: 'Plant-based cleaning solutions and sustainable consumables for eco-minded households.',
  },
].map((service) =>
  createServiceSchema({
    name: service.name,
    description: service.description,
    areaServed: areaPlaceList,
    serviceType: service.name,
  })
)

const faqSchema = createFaqSchema({
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Skye Cleaning Group care for luxury estates in the Bay Area?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each estate receives a dedicated supervisor, white-glove checklists, and product inventories tailored to fine finishes, art collections, and panic-room protocols. We align with estate managers to log every visit and ensure continuity with on-site staff.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you coordinate last-minute cleaning before a private event or open house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our dispatch hub in Novato allows us to mobilize same-day crews throughout Marin, San Francisco, and the wine country. We synchronize with catering, florals, and staging teams so the property is photo-ready before guests arrive.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer post-construction detailing for custom remodels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialize in post-construction and renovation cleanups, using HEPA filtration, delicate dust extraction, and surface-specific protection for stone, glass, and millwork. Progress photos and punch-list signoffs are provided after every visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are winery and vineyard properties serviced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our winery detailing team works alongside cellar masters to respect humidity thresholds, sanitize tasting salons, and manage guest casitas before and after release parties. We support Napa, Sonoma, St. Helena, and Viansa hospitality programs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What protocols are in place for Airbnb or short-term rental turnovers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turnover specialists restock amenities, verify smart-lock codes, document condition with timestamped photos, and refresh linens through our off-site laundry partners. Guests enjoy five-star hotel presentation with the responsiveness of a dedicated concierge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Skye support confidential corporate or overnight office cleaning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our corporate and janitorial teams sign NDAs, follow secure access protocols, and work overnight to reset boardrooms, venture studios, and medical offices without interrupting daytime operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide eco-friendly cleaning options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We maintain a dedicated green cleaning program with plant-based products, reusable microfiber systems, and waste-reduction tracking that supports LEED and ESG commitments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What guarantees back your premium cleaning services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every visit is covered by the Skye Done-Right Guarantee. If any detail is missed, supervisors return within one business day to resolve the issue at no additional cost.',
      },
    },
  ],
})

export const metadata: Metadata = {
  title: 'Luxury Cleaning Service Areas across San Francisco Bay Area | Skye Cleaning Group',
  description:
    'Explore Skye Cleaning Group’s concierge-level cleaning services across Belvedere, Tiburon, Stinson Beach, Napa, Sonoma, and San Francisco’s most exclusive neighborhoods.',
  alternates: {
    canonical: `${siteUrl}/services-areas`,
    languages: {
      'en-US': `${siteUrl}/services-areas`,
      'es-US': `${siteUrl}/es/services-areas`,
      'x-default': `${siteUrl}/services-areas`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: `${siteUrl}/services-areas`,
    title: 'San Francisco Bay Area Luxury Cleaning Service Areas',
    description:
      'Skye Cleaning Group serves Belvedere, Tiburon, Napa, Sonoma, Pacific Heights, and more with luxury home, office, and winery cleaning programs.',
    images: [
      {
        url: `${siteUrl}/og/service-areas?title=Skye%20Cleaning%20Group&subtitle=Luxury%20Service%20Areas%20Across%20SF%20Bay%20Area`,
        width: 1200,
        height: 630,
        alt: 'San Francisco Bay Area luxury cleaning service areas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Cleaning Coverage | Skye Cleaning Group',
    description:
      'Concierge cleaning across Marin, Napa, Sonoma, and San Francisco’s most exclusive neighborhoods.',
  },
  other: {
    'preconnect-google-fonts': 'https://fonts.googleapis.com',
    'preconnect-google-static': 'https://fonts.gstatic.com',
  },
}

export default function ServiceAreasPage() {
  return (
    <PageShell mainClassName="space-y-24 pb-24">
      <Script
        id="skye-jsonld-local-business"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="skye-jsonld-itemlist"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="skye-jsonld-services"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="skye-jsonld-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-85"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(5,15,25,0.55), rgba(12,34,52,0.82)), url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80&fm=webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-[1] container-px py-24 text-white sm:py-32">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              Service Areas
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              From the Golden Gate to wine country, our concierge teams stay within reach.
            </h1>
            <p className="mx-auto max-w-3xl text-sm text-white/85 sm:text-base">
              Select a neighborhood below to explore luxury home, office, and hospitality cleaning programs tailored to San Francisco Bay Area lifestyles. Need support beyond the map? We coordinate vetted travel crews and partner vendors on request.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="#coverage" className="btn btn-primary">
                View coverage map
              </Link>
              <ModalQuote
                triggerLabel="Request expansion visit"
                triggerClassName="btn btn-secondary-ghost"
                initialService="light"
                title="Plan your expansion visit"
                description="Tell us about the neighborhood and arrival windows you need."
                compact
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-px" id="coverage">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="sa-pill-nav flex items-center gap-2 overflow-x-auto rounded-full border border-[var(--skye-200)] bg-white px-3 py-2 shadow-[0_14px_40px_rgba(12,42,74,0.12)]">
            {areaSections.map((area) => (
              <a
                key={area.id}
                href={`#${area.id}`}
                className="whitespace-nowrap rounded-full border border-transparent bg-[var(--foam)] px-4 py-2 text-sm font-semibold text-[var(--skye-700)] transition hover:-translate-y-[1px] hover:border-[var(--skye-200)]"
              >
                {area.title.replace('Luxury House & Office Cleaning in ', '')}
              </a>
            ))}
          </div>

          <div className="space-y-16">
            {areaSections.map((area, index) => (
              <article
                key={area.id}
                id={area.id}
                className="rounded-[2rem] border border-[rgba(18,60,84,0.12)] bg-white/95 shadow-[0_30px_80px_rgba(12,32,64,0.16)] backdrop-blur"
              >
                <div className="sa-grid">
                  <div className="relative overflow-hidden rounded-[2rem] lg:rounded-l-[2rem] lg:rounded-r-none">
                    <Image
                      src={area.image.src}
                      alt={area.image.alt}
                      width={area.image.width}
                      height={area.image.height}
                      className="h-full w-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      priority={index === 0}
                    />
                  </div>
                  <div className="space-y-5 p-6 sm:p-10">
                    <header className="space-y-3">
                      <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">{area.title}</h2>
                      <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{area.description}</p>
                    </header>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--skye-700)]">
                        Signature services for this area
                      </h3>
                      <ul className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                        {area.services.map((service) => (
                          <li key={service} className="flex items-start gap-2">
                            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--skye-500)]" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link href={phoneHref} className="btn btn-primary">
                        {phoneLabel}
                      </Link>
                      <a href={createMailto(area.title)} className="btn btn-secondary">
                        Request a tailored estimate
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-6xl space-y-8 rounded-[2.5rem] bg-[--foam] px-10 py-12 text-ink-900 shadow-[0_28px_68px_rgba(15,60,90,0.12)]">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-black">Signature service catalog</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Every Skye program blends meticulous technique with concierge communication. Highlighted below are the most requested services across Marin, Napa, Sonoma, and San Francisco.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCatalog.map((service) => (
              <li key={service} className="rounded-2xl border border-white/60 bg-white px-4 py-3 shadow-[0_12px_32px_rgba(12,32,64,0.08)]">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-px">
        <div className="mx-auto max-w-5xl space-y-8 rounded-[2rem] bg-white px-8 py-12 text-ink-900 shadow-[0_24px_60px_rgba(18,60,84,0.14)]">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-black">Need us somewhere new?</h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Tell us about your property and travel timeline. We arrange preview visits, vendor onboarding, and temporary housing for crews when assignments fall outside our core coverage.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  'Same day support for real estate agents staging photo ready listings',
                  'Disaster recovery coordination including ozone treatments and equipment rentals',
                  'Event reset teams for galas, product launches, and corporate hospitality suites',
                  'Yacht and aircraft detailing in partnership with specialized vendors',
                  'Sustainable supply sourcing with carbon tracking for conscientious owners',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--skye-500)] text-xs font-semibold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-premium overflow-hidden">
              <div className="card-premium__body">
                <div className="relative h-72 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1616627561839-60265f3f2382?auto=format&fit=crop&w=1200&q=80&fm=webp"
                    alt="Skye Cleaning Group team reviewing coverage map"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4 p-6 text-center">
                  <p className="text-sm text-slate-600">
                    Share your project by phone or through our planning form. We respond within one business hour.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href={phoneHref} className="btn btn-primary">
                      {phoneLabel}
                    </Link>
                    <a href={createMailto('Expansion Visit')} className="btn btn-secondary">
                      Request a planning session
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
