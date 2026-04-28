import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import DashboardSidebar from '../components/Dashboard/DashboardSidebar';
import DashboardFooter from '../components/Dashboard/DashboardFooter';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <DashboardNavbar />
      <div className="grid lg:grid-cols-[300px_minmax(0,1fr)]">
        <DashboardSidebar />
        <main className="min-h-[calc(100vh-73px)]">
          <Outlet />
          
        </main>
        
      </div>
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
