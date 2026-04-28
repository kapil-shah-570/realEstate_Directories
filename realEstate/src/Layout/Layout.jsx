// components/Global/Layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarSection from '../components/Global/Navbar/NavbarSection';
import FooterSection from '../components/Global/Footer/FooterSection';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <NavbarSection />
      <main className="layout-main">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;