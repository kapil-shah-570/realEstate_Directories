import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/blogs');
        const data = await response.json();
        setBlogs(Array.isArray(data) ? data : []);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = useMemo(() => ['all', ...new Set(blogs.map((blog) => blog.category))], [blogs]);
  const featuredPost = blogs[0];

  const filteredPosts = blogs.filter((post) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term);
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#2563eb] text-white py-24 px-4">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_35%)]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md mb-6">
            Real Estate Journal
          </span>
          <motion.h1 className="text-4xl md:text-6xl font-black mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Real Estate Insights & Tips
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Structured editorial posts with multiple sections, rich imagery, author notes, and polished reading experiences.
          </motion.p>
          <button onClick={() => navigate('/dashboard/blogs')} className="rounded-full bg-white px-6 py-3 font-semibold text-[#0f172a] shadow-lg">
            Create Blog
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {loading ? (
          <p className="text-center text-slate-500">Loading blogs...</p>
        ) : (
          <>
            {featuredPost && (
              <motion.div className="mb-16" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-end justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 mb-2">Featured Article</p>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">Lead story</h2>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.slug}`} className="block overflow-hidden rounded-[2rem] bg-white shadow-2xl border border-slate-200">
                  <div className="grid md:grid-cols-[1.05fr_0.95fr]">
                    <div className="min-h-[320px]">
                      <img src={featuredPost.coverImage} alt={featuredPost.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-4">
                        {featuredPost.category}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-black text-[#0f172a] mb-4">{featuredPost.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                      <div className="grid gap-3 sm:grid-cols-3 text-sm text-slate-500 mb-8">
                        <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3"><FaUser /> {featuredPost.authorName}</span>
                        <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3"><FaCalendarAlt /> {new Date(featuredPost.createdAt).toLocaleDateString()}</span>
                        <span className="rounded-2xl bg-slate-50 px-4 py-3">{featuredPost.readTime}</span>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 font-semibold text-white w-fit">
                        Read Full Article <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <h2 className="text-2xl font-black text-[#0f172a]">All Articles</h2>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search articles..." className="pl-10 pr-4 py-3 border border-gray-200 rounded-2xl w-full bg-white shadow-sm" />
                </div>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm">
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.article key={post._id} className="group bg-white rounded-[1.75rem] overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl transition-all duration-300" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
                  <Link to={`/blog/${post.slug}`} className="block h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <span className="absolute top-4 left-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0f172a] shadow-sm backdrop-blur">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-cyan-600 mb-3">
                        {post.authorRole || 'Editorial'}
                      </div>
                      <h3 className="text-xl font-black text-[#0f172a] mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-slate-600 mb-5 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span className="flex items-center gap-2"><FaUser /> {post.authorName}</span>
                        <span className="flex items-center gap-2"><FaCalendarAlt /> {new Date(post.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && <p className="text-center text-gray-500 py-12">No blog posts found.</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
