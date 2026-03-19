import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Blog — Kritika Kedia';
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
          justifyContent: 'center',
          padding: '80px',
          background: '#0f0f1a',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 24, color: '#a78bfa', fontWeight: 600, marginBottom: 24 }}>
          kritika.dev
        </div>
        <div style={{ fontSize: 80, fontWeight: 900, color: '#fff', letterSpacing: -3, lineHeight: 1.1 }}>
          Blog
        </div>
        <div style={{ fontSize: 32, color: 'rgba(255,255,255,0.5)', marginTop: 24 }}>
          Thoughts on building things for the web
        </div>
      </div>
    ),
    size
  );
}
