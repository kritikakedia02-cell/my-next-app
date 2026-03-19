import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

// Returns all posts sorted newest-first, with metadata only (no content)
export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR);

  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8');
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Returns frontmatter + raw MDX content for a single post by slug
export function getPostBySlug(slug: string): { meta: PostMeta; content: string } {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
    },
    content,
  };
}
