import { useParams, Link } from "wouter";
import { blogPosts } from "../data/blogPosts";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const BlogDetail: React.FC = () => {
  const { slug } = useParams(); // Destructure slug directly
  const blog = blogPosts.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <>
      <Header />
      <div className="text-center py-32 text-gray-300">
        Blog not found.
        <div className="mt-4">
          <Link href="/blogs">
            <a className="text-purple-400 hover:text-purple-300">
              ← Back to Blogs
            </a>
          </Link>
        </div>
      </div>
      <Footer />
      </>
    );
  }

  return (
    <>
    <Header />
    <main className="min-h-screen py-28 px-6 bg-gray-950 text-gray-100">
    <h1 className="text-center text-sm sm:text-base uppercase tracking-widest font-semibold text-blue-400 mb-6">
                    Blogs
      </h1>
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
        <Link href="/blogs">
          <a className="inline-block mt-8 text-purple-400 hover:text-purple-300">
            ← Back to Blogs
          </a>
        </Link>
      </article>
    </main>
    <Footer />
    </>
  );
};

export default BlogDetail; 