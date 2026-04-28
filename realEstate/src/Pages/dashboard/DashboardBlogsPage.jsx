import React from 'react';
import { FaBlog } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

const posts = [
  { title: 'Market update: luxury demand rises', status: 'Published' },
  { title: 'How to stage a property for faster sale', status: 'Draft' },
  { title: 'Top neighborhoods for investors', status: 'Scheduled' },
];

export default function DashboardBlogsPage() {
  return (
    <DashboardSectionPage title="Blogs" subtitle="Create, schedule, and manage market content." actionLabel="New Post">
      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {posts.map((post) => (
          <div key={post.title} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <FaBlog className="text-cyan-600" />
              <p className="font-medium text-slate-900">{post.title}</p>
            </div>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">{post.status}</span>
          </div>
        ))}
      </div>
    </DashboardSectionPage>
  );
}
