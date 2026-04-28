import React from 'react';
import { FaChartLine, FaEye, FaMousePointer, FaArrowUp } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

const stats = [
  { label: 'Views', value: '82.4K', icon: FaEye },
  { label: 'CTR', value: '4.9%', icon: FaMousePointer },
  { label: 'Growth', value: '+28%', icon: FaArrowUp },
  { label: 'Leads', value: '1,240', icon: FaChartLine },
];

export default function DashboardAnalyticsPage() {
  return (
    <DashboardSectionPage
      title="Analytics"
      subtitle="Measure performance across listings, blog content, and user engagement."
      stats={stats}
      actionLabel="Export Report"
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="h-72 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 p-6 text-white">
          <p className="text-sm text-cyan-300">Performance chart area</p>
          <div className="mt-4 grid h-full place-items-center rounded-2xl border border-white/10 bg-white/5 text-center">
            <div>
              <p className="text-3xl font-bold">Analytics Visualization</p>
              <p className="mt-2 text-sm text-slate-300">Use this area for charts, funnels, and source breakdowns.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardSectionPage>
  );
}
