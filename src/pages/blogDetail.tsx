import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet";
import { blogPosts } from "../data/blogPosts";
import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogDetail: React.FC = () => {
  const { slug } = useParams();
  const blog = blogPosts.find((b) => b.slug === slug);
  const [headings, setHeadings] = useState<{id: string, text: string, level: number}[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    // Extract headings from content
    if (blog) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(blog.content, 'text/html');
      const headingElements = Array.from(doc.querySelectorAll('h2, h3'));
      
      const extractedHeadings = headingElements.map((heading, index) => {
        const id = `heading-${index}`;
        return {
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.substring(1))
        };
      });
      
      setHeadings(extractedHeadings);
      
      // Add IDs to the actual content
      const updatedContent = blog.content.replace(
        /<(h2|h3)>(.*?)<\/\1>/g, 
        (match, tag, content, offset) => {
          const headingIndex = headingElements.findIndex(
            h => h.textContent === content
          );
          if (headingIndex !== -1) {
            return `<${tag} id="heading-${headingIndex}">${content}</${tag}>`;
          }
          return match;
        }
      );
      
      // Store the updated content for rendering
      setUpdatedBlogContent(updatedContent);
    }
  }, [blog]);

  const [updatedBlogContent, setUpdatedBlogContent] = useState('');

  useEffect(() => {
    // Set up intersection observer to track which heading is in view
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1
    });

    // Observe all headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [headings, updatedBlogContent]);

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

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <>
      <Helmet>
        <title>{blog.title} | Itramei Blog</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={[
          ...blog.keywords.primary, 
          ...blog.keywords.secondary, 
          ...blog.keywords.semantic
        ].join(', ')} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={blog.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.metaDescription} />
      </Helmet>
      
      <Header />
      <div className="flex min-h-screen bg-gray-950 pt-28">
        {/* Table of Contents - Sticky on the left */}
        {headings.length > 0 && (
          <div className="hidden lg:block w-64 flex-shrink-0 py-6 pl-6 pr-4">
            <div className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-2 border-l-2 border-gray-700">
                {headings.map((heading) => (
                  <button
                    key={heading.id}
                    onClick={() => scrollToHeading(heading.id)}
                    className={`block w-full text-left pl-4 py-1 text-sm -ml-px border-l-2 transition-colors ${
                      activeId === heading.id
                        ? 'border-blue-400 text-purple-500 font-medium'
                        : 'border-transparent text-gray-400 hover:text-gray-200'
                    } ${heading.level === 3 ? 'pl-6' : ''}`}
                  >
                    {heading.text}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Blog Content */}
        <main className="flex-1 py-6 px-6 text-gray-100">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-center text-sm sm:text-base uppercase tracking-widest font-semibold text-blue-400 mb-6">
              Blogs
            </h1>
            <p className="text-sm text-gray-400">
              {blog.date} • {blog.readTime} min read
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {blog.title}
            </h1>
            <div
              className="mt-6 prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: updatedBlogContent || blog.content }}
            />
            <Link href="/blogs">
              <a className="inline-block mt-8 text-purple-400 hover:text-purple-300">
                ← Back to Blogs
              </a>
            </Link>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;