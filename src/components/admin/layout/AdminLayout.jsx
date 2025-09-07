import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import useScrollToTop from '../../../hooks/useScrollToTop';
import './AdminLayout.css';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Automatically scroll to top when route changes
  useScrollToTop({ smooth: true, delay: 100 });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-layout">
      <AdminSidebar isOpen={isSidebarOpen} />
      <div className="admin-main">
        <AdminHeader onMenuToggle={toggleSidebar} />
        <main className="admin-content">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </main>
      </div>
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="mobile-overlay"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default AdminLayout;