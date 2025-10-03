import type { FAQPage, ItemList, LocalBusiness, Review, Service } from 'schema-dts'
import { siteUrl } from '../../seo.config'

const baseContext = 'https://schema.org'

export const createLocalBusinessSchema = (input: Partial<LocalBusiness> = {}): LocalBusiness => ({
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
  ...(input as LocalBusiness),
})

export const createServiceSchema = (input: Partial<Service>): Service => ({
  '@context': baseContext,
  '@type': 'Service',
  provider: {
    '@type': 'Organization',
    name: 'Skye Cleaning Group',
    url: siteUrl,
  },
  areaServed: 'San Francisco Bay Area',
  serviceType: 'Residential and commercial cleaning',
  ...(input as Service),
})

export const createFaqSchema = (input: Partial<FAQPage>): FAQPage => ({
  '@context': baseContext,
  '@type': 'FAQPage',
  mainEntity: [],
  ...(input as FAQPage),
})

export const createItemListSchema = (input: Partial<ItemList>): ItemList => ({
  '@context': baseContext,
  '@type': 'ItemList',
  itemListElement: [],
  ...(input as ItemList),
})

export const createReviewSchema = (input: Partial<Review>): Review => ({
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
  ...(input as Review),
})
