import { blogPosts } from "@/data/blogPosts";
import BlogCard from "../../components/blogsCards";

export default function BlogsPage() {
  return (
    <section className="min-h-screen py-32 px-6 bg-gray-950 text-gray-100">
      <h1 className="text-center text-sm sm:text-base uppercase tracking-widest font-semibold text-blue-400 mb-6">
        Blogs
      </h1>
      <h2 className="text-center text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mt-4">
        Practical guides, tips and tricks on how to set yourself up for success on every sales call you take.
      </h2>
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}