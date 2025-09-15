// Updated BlogDetailPage with citations
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import Image from "next/image";
import Citations from "../../../components/citations";

export async function generateMetadata({ params }: { params: any }) {
  const blog = blogPosts.find((b) => b.slug === params.slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | Itramei Blog`,
    description: blog.metaDescription,
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      type: "article",
      images: [blog.image],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.metaDescription,
      images: [blog.image],
    },
  };
}

export default function BlogDetailPage({ params }: { params: any }) {
  const blog = blogPosts.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="flex min-h-screen bg-gray-950 pt-28 px-6 text-gray-100">
      <article className="max-w-3xl mx-auto">
     <div className="relative w-full h-[32rem] mb-8 rounded-xl overflow-hidden">
  <Image
    src={blog.image}
    alt={blog.title}
    fill
    className="object-cover"
    priority
  />
</div>
        
        <p className="text-sm text-gray-400">
          {blog.date} • {blog.readTime} min read
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          {blog.title}
        </h1>
        
        <div className="mt-6 flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={blog.authorImage || "/img/authors/placeholder.jpg"}
              alt={blog.author}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <p className="text-md font-medium text-white">{blog.author}</p>
            <p className="text-sm text-gray-400">{blog.authorRole}</p>
          </div>
        </div>

        <div
          className="mt-6 prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        <Citations citations={blog.citations} />
        
        <Link href="/blogs" className="inline-block mt-8 text-purple-400 hover:text-purple-300">
          ← Back to Blogs
        </Link>
        <br />
        <br />
      </article>
    </main>
  );
}