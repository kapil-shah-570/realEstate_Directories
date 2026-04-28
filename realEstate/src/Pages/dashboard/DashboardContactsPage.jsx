import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

const contacts = [
  { name: 'Emma Wilson', type: 'Buyer', note: 'Interested in villas' },
  { name: 'Noah Davis', type: 'Seller', note: 'Wants valuation' },
  { name: 'Ava Taylor', type: 'Investor', note: 'Looking for ROI updates' },
];

export default function DashboardContactsPage() {
  return (
    <DashboardSectionPage title="Contact Persons" subtitle="Store the people and companies you work with every day.">
      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {contacts.map((contact) => (
          <div key={contact.name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-100 text-cyan-700">
                <FaUserFriends />
              </div>
              <div>
                <p className="font-semibold text-slate-950">{contact.name}</p>
                <p className="text-sm text-slate-500">{contact.type}</p>
              </div>
            </div>
            <p className="text-sm text-slate-600">{contact.note}</p>
          </div>
        ))}
      </div>
    </DashboardSectionPage>
  );
}
