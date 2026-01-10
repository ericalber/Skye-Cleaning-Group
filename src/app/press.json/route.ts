import { siteUrl } from '../../../seo.config'

export const runtime = 'edge'

const pressData = {
  name: 'Skye Cleaning Group',
  headquarters: {
    streetAddress: '873 2nd Street Suite 102',
    city: 'Novato',
    state: 'CA',
    postalCode: '94945',
    country: 'USA',
  },
  mediaContact: {
    name: 'Skye Concierge Desk',
    email: 'press@skyecgroup.com',
    phone: '+1-415-497-8008',
  },
  mission:
    'Skye Cleaning Group delivers concierge-level residential, commercial, and hospitality cleaning across the San Francisco Bay Area with sustainable practices and white-glove quality control.',
  services: [
    'Luxury estates and private residences',
    'Hospitality, winery, and tasting room programs',
    'Corporate, healthcare, and institutional cleaning',
    'Short-term rental and relocation support',
  ],
  notableClients: ['Confidential Bay Area estates', 'Premium wine country hospitality teams', 'Venture-backed corporate suites'],
  coverageCities: [
    'Belvedere',
    'Tiburon',
    'Mill Valley',
    'Sausalito',
    'San Rafael',
    'Novato',
    'Petaluma',
    'Napa',
    'Sonoma',
    'St. Helena',
    'San Francisco (Pacific Heights, Presidio Heights, Sea Cliff, Nob Hill, Marina)'
  ],
  urls: {
    website: siteUrl,
    serviceAreas: `${siteUrl}/service-areas`,
    pressKit: `${siteUrl}/press`,
    rss: `${siteUrl}/press.rss`,
  },
  logos: [
    {
      format: 'png',
      url: `${siteUrl}/logo-skye.png`,
      width: 1200,
      height: 360,
      background: 'transparent',
    },
  ],
  social: {
    instagram: 'https://www.instagram.com/skyecleaninggroup',
    linkedin: 'https://www.linkedin.com/company/skye-cleaning-group',
    facebook: 'https://www.facebook.com/SkyeCleaningGroup',
  },
  founded: 2015,
  values: ['Detail-obsessed service', 'Trusted, background-checked professionals', 'Sustainable cleaning chemistry', 'Discretion and confidentiality'],
}

export function GET() {
  return new Response(JSON.stringify(pressData, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
