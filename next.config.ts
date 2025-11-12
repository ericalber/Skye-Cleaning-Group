import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const dev = process.env.NODE_ENV !== 'production'

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
  },
  allowedDevOrigins: [
    // Localhost variants
    'http://localhost',
    'http://localhost:4005',
    'http://127.0.0.1',
    'http://127.0.0.1:4005',
    'http://[::1]',
    'http://[::1]:4005',
    // LAN/IP variants used during dev
    'http://10.0.0.111',
    'http://10.0.0.111:4005',
    'http://10.0.0.111:4022',
  ],
  images: {
    // Use Next/Image optimizer in dev and prod to keep SSR/CSR consistent
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  headers: async () => {
    const rules = [
      // Asset caching
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, immutable' },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ] as { source: string; headers: { key: string; value: string }[] }[]

    if (dev) {
      rules.unshift({
        source: '/_next/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS' },
        ],
      })
    }

    return rules
  },
}

export default withNextIntl(nextConfig)
