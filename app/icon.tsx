import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea, #f64f59)',
          borderRadius: '6px',
          fontSize: 14,
          fontWeight: 900,
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        KK
      </div>
    ),
    size
  );
}
