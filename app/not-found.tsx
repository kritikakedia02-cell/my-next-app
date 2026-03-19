import Link from 'next/link';

export const metadata = { title: '404 — Page Not Found' };

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 px-4">
      <p className="text-8xl font-black text-primary opacity-20 leading-none">404</p>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Page not found</h1>
        <p className="text-foreground opacity-50 max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <div className="flex gap-3">
        <Link
          href="/"
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Go home
        </Link>
        <Link
          href="/blog"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-border transition-colors"
        >
          Read the blog
        </Link>
      </div>
    </div>
  );
}
