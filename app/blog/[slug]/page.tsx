import { compileMDX } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug, PostMeta } from '@/lib/posts';
import rehypeHighlight from 'rehype-highlight';
import { notFound } from 'next/navigation';
import type { PluggableList } from 'unified';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { meta } = getPostBySlug(params.slug);
    return { title: `${meta.title} — Kritika.dev` };
  } catch {
    return { title: 'Post not found' };
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  let meta: PostMeta;
  let content: string;

  try {
    ({ meta, content } = getPostBySlug(params.slug));
  } catch {
    notFound();
  }

  const { content: rendered } = await compileMDX<PostMeta>({
    source: content!,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight] as PluggableList,
      },
    },
  });

  return (
    <article className="max-w-2xl mx-auto">
      <header className="mb-10 space-y-2">
        <p className="text-sm text-foreground opacity-40">{meta!.date}</p>
        <h1 className="text-3xl font-bold tracking-tight">{meta!.title}</h1>
        <p className="text-foreground opacity-60">{meta!.description}</p>
      </header>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        {rendered}
      </div>
    </article>
  );
}
