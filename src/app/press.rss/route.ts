import { buildRssXml } from '@/seo/feeds'
import { siteUrl } from '../../../seo.config'

export const runtime = 'edge'

const entries = [
  {
    title: 'Press Release: Skye Cleaning Group launches Belvedere & Tiburon expansion team',
    description:
      'Skye Cleaning Group debuts a dedicated waterfront concierge division serving Belvedere and Tiburon estates with yacht coordination, dockside service, and luxury amenity staging.',
    url: `${siteUrl}/service-areas#belvedere`,
    publishedAt: new Date('2024-09-20T08:00:00-07:00'),
  },
  {
    title: 'Press Release: Strategic partnerships with Marin and Napa realtors',
    description:
      'Leading real estate groups in Marin and Napa now rely on Skye Cleaning Group for white-glove listing prep, open house staging, and move-in concierge support.',
    url: `${siteUrl}/service-areas#napa`,
    publishedAt: new Date('2024-07-18T08:00:00-07:00'),
  },
  {
    title: 'Press Release: Sustainable cleaning innovations for wine country hospitality',
    description:
      'New eco-forward cleaning standards help wineries in Sonoma, St. Helena, and Viansa deliver unforgettable guest experiences while meeting ESG goals.',
    url: `${siteUrl}/service-areas#sonoma`,
    publishedAt: new Date('2024-05-30T08:00:00-07:00'),
  },
]

const feed = buildRssXml({
  title: 'Skye Cleaning Group Press Room',
  description: 'Official releases, partnerships, and growth updates from Skye Cleaning Group.',
  baseUrl: `${siteUrl}/press`,
  entries,
  lastBuildDate: new Date(),
})

export function GET() {
  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
