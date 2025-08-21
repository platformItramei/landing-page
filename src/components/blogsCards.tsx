import { Link } from "wouter";

type BlogCardProps = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ slug, date, title, excerpt, readTime }) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <a className="block bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all p-6 border border-gray-800">
        <p className="text-sm text-gray-400">{date}</p>
        <h2 className="mt-3 text-lg font-semibold text-white leading-snug">{title}</h2>
        <p className="mt-2 text-gray-300 text-sm">{excerpt}</p>
        <span className="mt-4 inline-block text-sm text-purple-400">{readTime} mins read →</span>
      </a>
    </Link>
  );
};

export default BlogCard;