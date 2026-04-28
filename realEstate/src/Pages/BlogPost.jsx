import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BlogHero from '../components/Blog/BlogHero';
import BlogAuthorCard from '../components/Blog/BlogAuthorCard';
import BlogGallery from '../components/Blog/BlogGallery';
import BlogSectionCard from '../components/Blog/BlogSectionCard';
import BlogSidebar from '../components/Blog/BlogSidebar';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/blogs/${slug}`);
        const data = await response.json();
        setPost(data);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!post) return <div className="min-h-screen flex items-center justify-center">Blog not found</div>;

  const sections = post.sections || [];

  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#3498db] font-semibold mb-8 hover:gap-3 transition-all">
          <FaArrowLeft /> Back to Blog
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <BlogHero post={post} />
            <BlogAuthorCard post={post} />
            <BlogGallery images={post.images || []} title={post.title} />

            <div className="space-y-6">
              {sections.length > 0 ? (
                sections.map((section, index) => (
                  <BlogSectionCard key={`${section.heading}-${index}`} section={section} index={index} />
                ))
              ) : (
                <div className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm">
                  <p className="text-slate-700 leading-relaxed whitespace-pre-line">{post.content}</p>
                </div>
              )}
            </div>
          </div>

          <BlogSidebar post={post} />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;
