export type FeedEntry = {
  title: string
  description: string
  url: string
  publishedAt: Date
}

export type FeedConfig = {
  title: string
  description: string
  baseUrl: string
  entries: FeedEntry[]
  lastBuildDate?: Date
}

const rssHeader = (config: FeedConfig) => {
  const lastBuildDate = config.lastBuildDate ?? config.entries[0]?.publishedAt ?? new Date()
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${config.title}</title>
  <link>${config.baseUrl}</link>
  <description>${config.description}</description>
  <lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>`
}

const rssFooter = '</channel>\n</rss>'

export const buildRssXml = (config: FeedConfig): string => {
  const items = config.entries
    .map((entry) => {
      const pubDate = entry.publishedAt.toUTCString()
      return `  <item>
    <title>${entry.title}</title>
    <link>${entry.url}</link>
    <description><![CDATA[${entry.description}]]></description>
    <pubDate>${pubDate}</pubDate>
    <guid>${entry.url}</guid>
  </item>`
    })
    .join('\n')

  return [rssHeader(config), items, rssFooter].filter(Boolean).join('\n')
}

export const emptyFeed: FeedConfig = {
  title: 'Skye Cleaning Group Updates',
  description: 'Latest cleaning tips and press releases from Skye Cleaning Group.',
  baseUrl: 'https://www.skyecgroup.com',
  entries: [],
}
