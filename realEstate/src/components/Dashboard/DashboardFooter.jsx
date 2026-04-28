import React from 'react';

const DashboardFooter = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-4 text-sm text-slate-500 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>EstatePro Dashboard. Built for agents, owners, and admins.</p>
        <p>Listings • Reports • Blogs • Contacts</p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
