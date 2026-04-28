import React from 'react';
import { FaBuilding, FaHeart, FaUsers, FaRegListAlt } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

const stats = [
  { label: 'Active Listings', value: '128', icon: FaBuilding },
  { label: 'Saved Likes', value: '248', icon: FaHeart },
  { label: 'Agents', value: '34', icon: FaUsers },
  { label: 'Reports', value: '19', icon: FaRegListAlt },
];

export default function DashboardOverviewPage() {
  return (
    <DashboardSectionPage
      title="Dashboard Overview"
      subtitle="A quick snapshot of your listings, leads, blogs, reports, and team activity."
      stats={stats}
    >
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950">Priority actions</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {['Review new leads', 'Approve listings', 'Publish blog', 'Check reports'].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950">Recent activity</h3>
          <div className="mt-4 space-y-4">
            {['New property draft created', '2 agents updated availability', 'Blog post scheduled'].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardSectionPage>
  );
}
