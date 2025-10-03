import { ImageResponse } from 'next/og'

export type OgImageOptions = {
  title: string
  subtitle?: string
}

export const createOgImage = ({ title, subtitle }: OgImageOptions) => {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0B2234 0%, #2E7DD7 100%)',
          color: '#ffffff',
          padding: '120px',
        }}
      >
        <span style={{ fontSize: 64, fontWeight: 800 }}>{title}</span>
        {subtitle ? (
          <span style={{ fontSize: 32, marginTop: 24, opacity: 0.85 }}>{subtitle}</span>
        ) : null}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
