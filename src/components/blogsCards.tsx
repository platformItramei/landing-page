"use client";
import Link from "next/link";

type BlogCardProps = {
  post: {
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    readTime: string;
  };
};

const BlogCard: React.FC<{ post: BlogCardProps["post"] }> = ({ post }) => (
  <Link
    href={`/blogs/${post.slug}`}
    className="block bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all p-6 border border-gray-800"
  >
    <p className="text-sm text-gray-400">{post.date}</p>
    <h2 className="mt-3 text-lg font-semibold text-white leading-snug">{post.title}</h2>
    <p className="mt-2 text-gray-300 text-sm">{post.excerpt}</p>
    <span className="mt-4 inline-block text-sm text-purple-400">{post.readTime} mins read →</span>
  </Link>
);

export default BlogCard;