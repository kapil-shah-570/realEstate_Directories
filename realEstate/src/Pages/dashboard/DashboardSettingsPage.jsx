import React from 'react';
import { FaCog } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

export default function DashboardSettingsPage() {
  return (
    <DashboardSectionPage title="Settings" subtitle="Control account preferences, permissions, and notifications.">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
          <FaCog className="text-cyan-600" />
          <p className="font-medium text-slate-900">General settings and profile preferences go here.</p>
        </div>
      </div>
    </DashboardSectionPage>
  );
}
