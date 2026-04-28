import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

const calls = [
  { name: 'Morning lead follow-up', time: '09:10 AM', status: 'Completed' },
  { name: 'Buyer callback', time: '11:40 AM', status: 'Pending' },
  { name: 'Agent briefing', time: '03:15 PM', status: 'Scheduled' },
];

export default function DashboardCallsPage() {
  return (
    <DashboardSectionPage title="Calls" subtitle="Track call logs, reminders, and follow-up tasks.">
      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {calls.map((call) => (
          <div key={call.name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-600" />
              <div>
                <p className="font-medium text-slate-900">{call.name}</p>
                <p className="text-sm text-slate-500">{call.time}</p>
              </div>
            </div>
            <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">{call.status}</span>
          </div>
        ))}
      </div>
    </DashboardSectionPage>
  );
}
