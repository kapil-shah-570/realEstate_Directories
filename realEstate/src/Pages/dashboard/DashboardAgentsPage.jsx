import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

const agents = [
  { name: 'Sophia Miller', role: 'Lead Agent', listings: 12 },
  { name: 'Daniel Brown', role: 'Senior Consultant', listings: 9 },
  { name: 'Priya Patel', role: 'Sales Advisor', listings: 15 },
];

export default function DashboardAgentsPage() {
  return (
    <DashboardSectionPage title="Agents" subtitle="Review team profiles and listing assignments." actionLabel="Invite Agent">
      <div className="grid gap-4 md:grid-cols-3">
        {agents.map((agent) => (
          <div key={agent.name} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white">
                <FaUserTie />
              </div>
              <div>
                <p className="font-semibold text-slate-950">{agent.name}</p>
                <p className="text-sm text-slate-500">{agent.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">{agent.listings} active listings</p>
          </div>
        ))}
      </div>
    </DashboardSectionPage>
  );
}
