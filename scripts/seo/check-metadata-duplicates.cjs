const fs = require('fs')
const vm = require('vm')

const readFile = (path) => fs.readFileSync(path, 'utf8')

const loadServiceDetails = () => {
  let text = readFile('src/data/servicePages.ts')
  text = text.replace(/import[^\n]*\n/g, '')
  text = text.replace(/export type[\s\S]*?}\n\n/g, '')
  text = text.replace(/export const serviceDetails: ServiceDetail\[] =/, 'const serviceDetails =')
  const sandbox = { module: { exports: {} } }
  vm.runInNewContext(`${text}\nmodule.exports = { serviceDetails };`, sandbox, { timeout: 1000 })
  return sandbox.module.exports.serviceDetails
}

const loadCleanTips = () => {
  let text = readFile('src/data/cleanTips.ts')
  text = text.replace(/export type[\s\S]*?}\n\n/g, '')
  text = text.replace(/export const cleanTips: CleanTip\[] =/, 'const cleanTips =')
  text = text.replace(/export function getCleanTip[\s\S]*/, '')
  const sandbox = { module: { exports: {} } }
  vm.runInNewContext(`${text}\nmodule.exports = { cleanTips };`, sandbox, { timeout: 1000 })
  return sandbox.module.exports.cleanTips
}

const titleFromSlug = (slug) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

const isLikelyPortuguese = (value) => {
  if (!value) return false
  const lower = value.toLowerCase()
  if (/[\u00e0\u00e1\u00e2\u00e3\u00e7\u00e9\u00ea\u00ed\u00f3\u00f4\u00f5\u00fa]/i.test(lower)) return true
  const markers = [
    'como',
    'para',
    'limpeza',
    'rotina',
    'antes',
    'depois',
    'agende',
    'casa',
    'equipe',
    'evento',
    'hoje',
  ]
  return markers.some((marker) => new RegExp(`\\b${marker}\\b`, 'i').test(lower))
}

const buildRoutes = () => {
  const serviceDetails = loadServiceDetails()
  const cleanTips = loadCleanTips()

  const routes = [
    { path: '/', title: 'Concierge Cleaning in San Francisco & North Bay | Skye Cleaning Group' },
    { path: '/services', title: 'Concierge Cleaning Services in San Francisco | Skye Cleaning Group' },
    { path: '/clean-tips', title: 'Cleaning Tips & Concierge Guides | Skye Cleaning Group' },
    { path: '/service-areas', title: 'Luxury Cleaning Service Areas in San Francisco Bay Area | Skye Cleaning Group' },
    { path: '/commercial', title: 'Light Commercial Cleaning in San Francisco | Skye Cleaning Group' },
  ]

  serviceDetails.forEach((service) => {
    routes.push({
      path: `/services/${service.slug}`,
      title: service.seoTitle || `${service.name} | Skye Cleaning Group`,
    })
  })

  cleanTips.forEach((tip) => {
    const fallbackTitle = titleFromSlug(tip.slug)
    const baseTitle = isLikelyPortuguese(tip.title) ? fallbackTitle : tip.title
    routes.push({
      path: `/clean-tips/${tip.slug}`,
      title: `${baseTitle} | Skye Cleaning Group`,
    })
  })

  return routes
}

const reportDuplicates = (routes) => {
  const titleToRoutes = routes.reduce((acc, route) => {
    acc[route.title] = acc[route.title] || []
    acc[route.title].push(route.path)
    return acc
  }, {})

  const duplicates = Object.entries(titleToRoutes).filter(([, paths]) => paths.length > 1)

  if (!duplicates.length) {
    console.log(`No duplicate titles detected across ${routes.length} routes.`)
    return 0
  }

  console.error(`Duplicate titles detected across ${routes.length} routes:`)
  duplicates.forEach(([title, paths]) => {
    console.error(`- ${title}`)
    paths.forEach((path) => console.error(`  - ${path}`))
  })
  return 1
}

const routes = buildRoutes()
process.exit(reportDuplicates(routes))
