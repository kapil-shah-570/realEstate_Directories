import React from 'react';
import { Link } from 'react-router-dom';

const DashboardFooter = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-6 text-sm text-slate-500 sm:px-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-700 mb-2">Dashboard Footer</p>
          <p className="max-w-xl">
            EstatePro Dashboard connects listings, blogs, agents, comments, notifications, and settings in one control center.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-2">Quick Links</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/dashboard/add-property" className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200">Add Property</Link>
            <Link to="/dashboard/blogs" className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200">Blogs</Link>
            <Link to="/dashboard/agents" className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200">Agents</Link>
            <Link to="/dashboard/comments" className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200">Notifications</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-2">System</p>
          <p>Settings • Search • Reports • Support</p>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
