import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

const messages = [
  { from: 'Olivia', subject: 'Interested in Beverly Hills villa' },
  { from: 'James', subject: 'Need a home valuation' },
  { from: 'Mia', subject: 'Requesting brochure and pricing' },
];

export default function DashboardMessagesPage() {
  return (
    <DashboardSectionPage title="Messages" subtitle="Reply to messages from buyers, sellers, and internal team.">
      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {messages.map((message) => (
          <div key={message.subject} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-600" />
              <div>
                <p className="font-medium text-slate-900">{message.from}</p>
                <p className="text-sm text-slate-500">{message.subject}</p>
              </div>
            </div>
            <button className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              Reply
            </button>
          </div>
        ))}
      </div>
    </DashboardSectionPage>
  );
}
