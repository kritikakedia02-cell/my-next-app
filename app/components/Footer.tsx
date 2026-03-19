export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-foreground opacity-60">
        <p>© {new Date().getFullYear()} Kritika Kedia. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
