import type { DefaultSeoProps } from 'next-seo'

export const siteUrl = 'https://www.skyecgroup.com'

const defaultTitle = 'Skye Cleaning Group'
const defaultDescription = 'Soluções de limpeza premium para San Francisco e Marin County.'

export const defaultSeo: DefaultSeoProps = {
  titleTemplate: '%s | Skye Cleaning Group',
  defaultTitle,
  description: defaultDescription,
  canonical: siteUrl,
  additionalLinkTags: [
    { rel: 'alternate', href: siteUrl, hrefLang: 'en' },
    { rel: 'alternate', href: `${siteUrl}/es`, hrefLang: 'es' },
    { rel: 'alternate', href: siteUrl, hrefLang: 'x-default' },
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: defaultTitle,
    title: defaultTitle,
    description: defaultDescription,
    locale: 'en_US',
    alternateLocales: ['es_US'],
    images: [
      {
        url: `${siteUrl}/logo-skye.png`,
        width: 1200,
        height: 630,
        alt: 'Skye Cleaning Group logo',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}
