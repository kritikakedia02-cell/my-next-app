import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kritika Kedia';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #f64f59 50%, #f9a825 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            border: '3px solid rgba(255,255,255,0.6)',
            fontSize: 48,
            fontWeight: 800,
            color: '#fff',
            marginBottom: 32,
          }}
        >
          KK
        </div>
        <div style={{ fontSize: 64, fontWeight: 900, color: '#fff', letterSpacing: -2 }}>
          Kritika Kedia
        </div>
        <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.8)', marginTop: 16 }}>
          Builder · Developer · Maker
        </div>
        <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.5)', marginTop: 24 }}>
          kritika.dev
        </div>
      </div>
    ),
    size
  );
}
