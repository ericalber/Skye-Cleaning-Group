import type { NextRequest } from 'next/server'

import { createOgImage } from '@/seo/og'

export const runtime = 'edge'

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'Skye Cleaning Group'
  const subtitle =
    searchParams.get('subtitle') ?? 'Concierge cleaning across San Francisco, Marin, Napa, and Sonoma.'

  return createOgImage({ title, subtitle })
}
