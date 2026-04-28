import React from 'react';

const BlogAuthorCard = ({ post }) => {
  if (!post.authorRole && !post.authorBio) return null;

  return (
    <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-600">Author</p>
          <h3 className="mt-2 text-xl font-bold text-slate-950">{post.authorName}</h3>
          {post.authorRole && <p className="text-slate-500">{post.authorRole}</p>}
        </div>
        {post.authorAvatar && (
          <img src={post.authorAvatar} alt={post.authorName} className="h-14 w-14 rounded-2xl object-cover" />
        )}
      </div>
      {post.authorBio && <p className="mt-4 text-sm text-slate-600 leading-relaxed">{post.authorBio}</p>}
    </div>
  );
};

export default BlogAuthorCard;
