import type { Metadata } from 'next'
import { siteUrl } from '../../seo.config'

type MetadataInput = {
  title: string
  description: string
  path: string
  ogImage?: string
  ogType?: 'website' | 'article'
  locale?: string
}

const defaultOgImage = `${siteUrl}/logo-skye.png`

const toAbsoluteUrl = (path: string) => {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return siteUrl
  return `${siteUrl}${normalized}`
}

export const titleFromSlug = (slug: string) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

export const isLikelyPortuguese = (value: string) => {
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
    'equipe',
    'casa',
    'evento',
    'hoje',
  ]
  return markers.some((marker) => new RegExp(`\\b${marker}\\b`, 'i').test(lower))
}

export const buildPageMetadata = ({
  title,
  description,
  path,
  ogImage,
  ogType = 'website',
  locale = 'en_US',
}: MetadataInput): Metadata => {
  const canonicalUrl = toAbsoluteUrl(path)
  const imageUrl = ogImage ?? defaultOgImage

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: ogType,
      locale,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}
