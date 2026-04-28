import React from 'react';
import { FaPlus, FaEllipsisH } from 'react-icons/fa';

const DashboardSectionPage = ({ title, subtitle, stats = [], children, actionLabel }) => {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 rounded-[2rem] bg-white p-6 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-700">Dashboard section</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">{subtitle}</p>
        </div>
        <div className="flex gap-3">
          {actionLabel && (
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
              <FaPlus />
              {actionLabel}
            </button>
          )}
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            <FaEllipsisH />
            More
          </button>
        </div>
      </div>

      {stats.length > 0 && (
        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <Icon className="text-cyan-600" />
                </div>
                <p className="mt-3 text-3xl font-bold text-slate-950">{stat.value}</p>
              </div>
            );
          })}
        </div>
      )}

      {children}
    </div>
  );
};

export default DashboardSectionPage;
