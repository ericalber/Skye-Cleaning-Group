import type { FAQPage, ItemList, LocalBusiness, Review, Service, WithContext } from 'schema-dts'
import { siteUrl } from '../../seo.config'

const baseContext = 'https://schema.org'

export const createLocalBusinessSchema = (input: Partial<WithContext<LocalBusiness>> = {}): WithContext<LocalBusiness> => {
  const base: WithContext<LocalBusiness> = {
    '@context': baseContext,
    '@type': 'LocalBusiness',
    name: 'Skye Cleaning Group',
    url: siteUrl,
    image: `${siteUrl}/logo-skye.png`,
    telephone: '+1-415-497-8008',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
    },
  }

  return Object.assign(base, input)
}

export const createServiceSchema = (input: Partial<WithContext<Service>>): WithContext<Service> => {
  const base: WithContext<Service> = {
    '@context': baseContext,
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: 'Skye Cleaning Group',
      url: siteUrl,
    },
    areaServed: 'San Francisco Bay Area',
    serviceType: 'Residential and commercial cleaning',
  }

  return Object.assign(base, input)
}

export const createFaqSchema = (input: Partial<WithContext<FAQPage>>): WithContext<FAQPage> => {
  const base: WithContext<FAQPage> = {
    '@context': baseContext,
    '@type': 'FAQPage',
    mainEntity: [],
  }

  return Object.assign(base, input)
}

export const createItemListSchema = (input: Partial<WithContext<ItemList>>): WithContext<ItemList> => {
  const base: WithContext<ItemList> = {
    '@context': baseContext,
    '@type': 'ItemList',
    itemListElement: [],
  }

  return Object.assign(base, input)
}

export const createReviewSchema = (input: Partial<WithContext<Review>>): WithContext<Review> => {
  const base: WithContext<Review> = {
    '@context': baseContext,
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: 'Skye Cleaning Client',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
    },
  }

  return Object.assign(base, input)
}

export const skyePostalAddress = {
  '@type': 'PostalAddress',
  streetAddress: '873 2nd Street Suite 102',
  addressLocality: 'Novato',
  addressRegion: 'CA',
  postalCode: '94945',
  addressCountry: 'US',
} as const

export const skyeSameAs = [
  'https://www.skyecgroup.com',
  'https://www.linkedin.com/company/skye-cleaning-group',
  'https://www.facebook.com/SkyeCleaningGroup',
  'https://www.instagram.com/skyecleaninggroup',
  'https://www.yelp.com/biz/skye-cleaning-group-novato',
  'https://www.thumbtack.com/ca/novato/house-cleaning/skye-cleaning-group/service',
  'https://www.homeadvisor.com/rated.SkyeCleaningGroup.12345678.html',
  'https://nextdoor.com/pages/skye-cleaning-group-novato-ca',
]

export const skyeServiceArea = [
  { '@type': 'AdministrativeArea' as const, name: 'San Francisco' },
  { '@type': 'AdministrativeArea' as const, name: 'Marin County' },
  { '@type': 'AdministrativeArea' as const, name: 'North Bay' },
]

const sfNeighborhoods = [
  'San Francisco',
  'Marina District',
  'Presidio',
  'Golden Gate area',
  'Broadway corridor',
  'Divisadero corridor',
]

const marinCities = ['Tiburon', 'Belvedere', 'Sausalito', 'San Rafael', 'Larkspur', 'Greenbrae', 'Novato']

const commercialExpansion = ['Petaluma', 'Napa', 'Sonoma', 'Santa Rosa', 'Rohnert Park', 'Berkeley']

const toPlace = (name: string) => ({ '@type': 'Place' as const, name })

export const skyeAreaServedResidential = [...sfNeighborhoods, ...marinCities].map(toPlace)

export const skyeAreaServedCommercial = [...sfNeighborhoods, ...marinCities, ...commercialExpansion].map(toPlace)
