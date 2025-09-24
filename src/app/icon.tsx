import { ImageResponse } from 'next/og'

export const size = {
  width: 128,
  height: 128,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#287AA9',
          color: '#FFFFFF',
          fontSize: 72,
          fontWeight: 700,
          fontFamily: 'Inter, Arial, sans-serif',
          letterSpacing: -2,
        }}
      >
        S
      </div>
    ),
    size,
  )
}
