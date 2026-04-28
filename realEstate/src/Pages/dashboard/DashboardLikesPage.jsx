import React from 'react';
import { FaHeart } from 'react-icons/fa';
import DashboardSectionPage from '../../components/Dashboard/DashboardSectionPage';

const items = ['Luxury Villa', 'Penthouse Suite', 'Waterfront Mansion', 'Modern Apartment'];

export default function DashboardLikesPage() {
  return (
    <DashboardSectionPage title="Liked Properties" subtitle="See the homes your users and agents favorite most.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-slate-950">{item}</p>
              <FaHeart className="text-rose-500" />
            </div>
            <p className="mt-2 text-sm text-slate-500">Saved by users and agents</p>
          </div>
        ))}
      </div>
    </DashboardSectionPage>
  );
}
