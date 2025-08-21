import React from "react";
import BlogCard from "../components/blogsCards";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "../data/blogPosts";

const CardsPage: React.FC = () => {
    return (
        <>
            <Header />

            <section className="min-h-screen py-32 px-6 bg-gray-950 text-gray-100">
                <h1 className="text-center text-sm sm:text-base uppercase tracking-widest font-semibold text-blue-400 mb-6">
                    Blogs
                </h1>
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
                    {/* <span className="text-gradient"> Master Every Sales Call </span> Before It Happens */}
                </h1>
                <h2 className="text-center text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mt-4">
                    Practical guides, tips and tricks on how to set yourself up for success on every sales call you take.
                </h2>
                <br />
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CardsPage;