import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumb from '../common/Breadcrumb';
import './Layout.css';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get active menu item from current route
  const getActiveMenuItem = () => {
    const path = location.pathname.slice(1); // Remove leading slash
    return path || 'dashboard';
  };

  const handleMenuItemClick = (itemId, path) => {
    if (path) {
      navigate(path);
    }
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        activeItem={getActiveMenuItem()}
        onItemClick={handleMenuItemClick}
        isOpen={isSidebarOpen}
      />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <Header 
          onMenuToggle={handleSidebarToggle}
          currentClass={{ subject: 'Physics' }}
          classes={[]}
        />

        {/* Page Content */}
        <main className="page-content">
          {/* Breadcrumb Navigation */}
          <Breadcrumb />
          
          <div className="page-container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;