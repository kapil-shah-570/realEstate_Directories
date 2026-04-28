import React from 'react';
import { FaRegListAlt } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

const reportRows = [
  { label: 'Lead conversions', value: '324' },
  { label: 'Property views', value: '82.4K' },
  { label: 'Blog reads', value: '16.2K' },
];

export default function DashboardReportsPage() {
  return (
    <DashboardSectionPage title="Reports" subtitle="Sales, leads, and content performance in one place." actionLabel="Download">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-3">
          {reportRows.map((row) => (
            <div key={row.label} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <span className="font-medium text-slate-700">{row.label}</span>
              <span className="font-bold text-slate-950">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardSectionPage>
  );
}
