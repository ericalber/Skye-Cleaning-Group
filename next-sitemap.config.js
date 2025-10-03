/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://www.skyecgroup.com'

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  alternateRefs: [
    { href: siteUrl, hreflang: 'en' },
    { href: `${siteUrl}/es`, hreflang: 'es' },
  ],
  transform: async (config, path) => {
    const loc = path === '/' ? siteUrl : `${siteUrl}${path}`
    const highPriorityPaths = new Set(['/services-areas', '/es/services-areas'])
    const priority =
      path === '/' ? 1.0 : highPriorityPaths.has(path) ? 0.9 : config.priority ?? 0.7

    return {
      loc,
      changefreq: path === '/' ? 'daily' : config.changefreq ?? 'weekly',
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
    additionalRobotsTxtEntries: [`Sitemap: ${siteUrl}/sitemap.xml`],
  },
}
