import React from 'react';

const BlogSidebar = ({ post }) => (
  <aside className="space-y-6">
    <div className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm">
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-600 mb-2">Blog Profile</p>
      <h3 className="text-2xl font-black text-slate-950">{post.title}</h3>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
        {post.note || 'A structured editorial profile with sections, gallery images, and rich metadata.'}
      </p>
    </div>

    {post.highlights?.length > 0 && (
      <div className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-950 mb-4">Highlights</h3>
        <div className="flex flex-wrap gap-2">
          {post.highlights.map((item) => (
            <span key={item} className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800">{item}</span>
          ))}
        </div>
      </div>
    )}

    <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Takeaway</p>
      <p className="mt-3 text-sm leading-relaxed text-white/80">
        {post.conclusion || 'Each article is designed to read like a guided editorial profile with clear sections and a practical ending.'}
      </p>
    </div>
  </aside>
);

export default BlogSidebar;
