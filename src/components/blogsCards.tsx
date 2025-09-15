"use client";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  post: {
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    readTime: string;
    author: string;
    authorRole: string;
    authorImage: string;
    image: string;
    citations?: Array<{text: string; source: string}>;
  };
};

const BlogCard: React.FC<{ post: BlogCardProps["post"] }> = ({ post }) => (
  <Link
    href={`/blogs/${post.slug}`}
    className="block bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all p-6 border border-gray-800"
  >
    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
      <Image
        src={post.image || "/img/blog/placeholder.jpg"}
        alt={post.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* {post.citations && post.citations.length > 0 && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
          Research-backed
        </div>
      )} */}
    </div>
    <p className="text-sm text-gray-400">{post.date}</p>
    <h2 className="mt-3 text-lg font-semibold text-white leading-snug">{post.title}</h2>
    <p className="mt-2 text-gray-300 text-sm">{post.excerpt}</p>
    <div className="mt-4 flex items-center">
      <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
        <Image
          src={post.authorImage || "/img/authors/placeholder.jpg"}
          alt={post.author}
          fill
          className="object-cover"
          sizes="32px"
        />
      </div>
      <div>
        <p className="text-sm font-medium text-white">{post.author}</p>
        <p className="text-xs text-gray-400">{post.authorRole}</p>
      </div>
    </div>
    <span className="mt-4 inline-block text-sm text-purple-400">{post.readTime} mins read →</span>
  </Link>
);

export default BlogCard;