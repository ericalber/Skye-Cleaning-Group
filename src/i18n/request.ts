import { getRequestConfig } from 'next-intl/server'

import { locales, defaultLocale } from './config'

type SupportedLocale = (typeof locales)[number]

function resolveLocale(locale: string | undefined): SupportedLocale {
  if (!locale) return defaultLocale
  return locales.includes(locale as SupportedLocale) ? (locale as SupportedLocale) : defaultLocale
}

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = resolveLocale(locale)

  const messages = (await import(`../../messages/${resolvedLocale}.json`).catch(() =>
    import(`../../messages/${defaultLocale}.json`),
  )).default

  return {
    locale: resolvedLocale,
    messages,
  }
})
