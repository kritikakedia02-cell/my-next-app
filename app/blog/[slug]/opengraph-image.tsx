import { ImageResponse } from 'next/og';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  let title = 'Blog Post';
  let date = '';

  try {
    const { meta } = getPostBySlug(params.slug);
    title = meta.title;
    date = meta.date;
  } catch {
    // fallback to defaults
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#0f0f1a',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top label */}
        <div style={{ fontSize: 24, color: '#a78bfa', fontWeight: 600 }}>
          kritika.dev · Blog
        </div>

        {/* Post title */}
        <div
          style={{
            fontSize: title.length > 40 ? 60 : 72,
            fontWeight: 900,
            color: '#fff',
            letterSpacing: -2,
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(167,139,250,0.2)',
              border: '2px solid #a78bfa',
              fontSize: 20,
              fontWeight: 800,
              color: '#a78bfa',
            }}
          >
            KK
          </div>
          <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.4)' }}>{date}</div>
        </div>
      </div>
    ),
    size
  );
}
