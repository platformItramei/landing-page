import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const blog = blogPosts.find((b) => b.slug === params.slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | Itramei Blog`,
    description: blog.metaDescription,
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.metaDescription,
    },
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog = blogPosts.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="flex min-h-screen bg-gray-950 pt-28 px-6 text-gray-100">
      <article className="max-w-3xl mx-auto">
        <p className="text-sm text-gray-400">
          {blog.date} • {blog.readTime} min read
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          {blog.title}
        </h1>
        <div
          className="mt-6 prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <Link href="/blogs" className="inline-block mt-8 text-purple-400 hover:text-purple-300">
          ← Back to Blogs
        </Link>
        <br />
        <br />
      </article>
    </main>
  );
}