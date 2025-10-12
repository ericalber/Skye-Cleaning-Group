/** next-sitemap: sitemap único (sem index aninhado) */
module.exports = {
  siteUrl: 'https://www.skyecgroup.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // 👈 evita referência ao próprio sitemap
  sitemapSize: 7000
};
