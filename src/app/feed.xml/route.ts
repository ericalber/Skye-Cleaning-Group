import { buildRssXml } from '@/seo/feeds'
import { siteUrl } from '../../../seo.config'

export const runtime = 'edge'

const entries = [
  {
    title: 'Skye expands Belvedere yacht concierge teams',
    description:
      'Our Belvedere program now includes dedicated yacht concierge crews who coordinate dockside arrivals, overnight detailing, and post-regatta resets for luxury homeowners.',
    url: `${siteUrl}/service-areas#belvedere`,
    publishedAt: new Date('2024-10-01T08:00:00-07:00'),
  },
  {
    title: 'Wine country hospitality upgrades in Napa and Sonoma',
    description:
      'Release-party season is underway with expanded tasting room detailing, guest casita turndowns, and 24-hour sanitization support across Napa, Sonoma, and St. Helena estates.',
    url: `${siteUrl}/service-areas#napa`,
    publishedAt: new Date('2024-09-10T08:00:00-07:00'),
  },
  {
    title: 'Corporate night crews now serve Presidio innovation campuses',
    description:
      'Skye Cleaning Group deploys NDA-trained overnight crews for Presidio studios, venture labs, and executive residences while maintaining museum-grade preservation.',
    url: `${siteUrl}/service-areas#presidio`,
    publishedAt: new Date('2024-08-15T08:00:00-07:00'),
  },
]

const feed = buildRssXml({
  title: 'Skye Cleaning Group Updates',
  description: 'Premium cleaning news and coverage expansions for the San Francisco Bay Area.',
  baseUrl: siteUrl,
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
