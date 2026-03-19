import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export const metadata = { title: 'Blog — Kritika.dev' };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-foreground opacity-50">No posts yet. Check back soon.</p>
      ) : (
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-border pb-8">
              <Link href={`/blog/${post.slug}`} className="group block space-y-1">
                <p className="text-sm text-foreground opacity-40">{post.date}</p>
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-foreground opacity-60">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
