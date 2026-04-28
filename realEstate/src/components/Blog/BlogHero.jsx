import React from 'react';
import { FaCalendarAlt, FaUser, FaClock, FaTag } from 'react-icons/fa';

const BlogHero = ({ post }) => (
  <div className="overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-200">
    <img src={post.coverImage} alt={post.title} className="h-80 w-full object-cover" />
    <div className="p-6 md:p-10">
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
        <span className="flex items-center gap-2"><FaTag /> {post.category}</span>
        <span className="flex items-center gap-2"><FaUser /> {post.authorName}</span>
        <span className="flex items-center gap-2"><FaCalendarAlt /> {new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="flex items-center gap-2"><FaClock /> {post.readTime}</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{post.title}</h1>
      <p className="text-lg text-slate-600">{post.excerpt}</p>
    </div>
  </div>
);

export default BlogHero;
