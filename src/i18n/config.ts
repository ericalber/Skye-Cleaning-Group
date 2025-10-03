import { siteUrl } from '../../seo.config'

export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const hreflangLinks = [
  { hreflang: 'en', href: siteUrl },
  { hreflang: 'es', href: `${siteUrl}/es` },
  { hreflang: 'x-default', href: siteUrl },
] as const
