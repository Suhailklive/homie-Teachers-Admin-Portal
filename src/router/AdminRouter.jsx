import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../components/admin/layout/AdminLayout';
import ProtectedRoute from '../components/layout/ProtectedRoute';

// Import admin page components (will be created in future phases)
// For now, create placeholder components
const AdminDashboard = () => (
  <div className="admin-page">
    <div className="admin-page-header">
      <h1 className="admin-page-title">Admin Dashboard</h1>
      <p className="admin-page-subtitle">School overview and quick actions</p>
    </div>
    <div className="admin-page-content">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card-header">
            <h3 className="stat-card-title">Total Students</h3>
            <span className="stat-card-icon">👥</span>
          </div>
          <p className="stat-card-value">1,247</p>
          <div className="stat-card-change positive">
            <span>↗ +5.2% from last month</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">
            <h3 className="stat-card-title">Active Teachers</h3>
            <span className="stat-card-icon">🏫</span>
          </div>
          <p className="stat-card-value">89</p>
          <div className="stat-card-change positive">
            <span>↗ +2.1% from last month</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">
            <h3 className="stat-card-title">System Health</h3>
            <span className="stat-card-icon">💚</span>
          </div>
          <p className="stat-card-value">98.2%</p>
          <div className="stat-card-change positive">
            <span>↗ +0.3% from last week</span>
          </div>
        </div>
      </div>
      
      <div className="data-grid">
        <div className="data-grid-header">
          <h3 className="data-grid-title">Recent Activities</h3>
        </div>
        <div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>
          📊 Full admin dashboard functionality coming in Phase 2
        </div>
      </div>
    </div>
  </div>
);

const StudentManagement = () => (
  <div className="admin-page">
    <div className="admin-page-header">
      <h1 className="admin-page-title">Student Management</h1>
      <p className="admin-page-subtitle">Manage student accounts and assignments</p>
    </div>
    <div className="admin-page-content">
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        👥 Student management interface coming in Phase 2
      </div>
    </div>
  </div>
);

const TeacherManagement = () => (
  <div className="admin-page">
    <div className="admin-page-header">
      <h1 className="admin-page-title">Teacher Management</h1>
      <p className="admin-page-subtitle">Manage teacher accounts and permissions</p>
    </div>
    <div className="admin-page-content">
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        🏫 Teacher management interface coming in Phase 2
      </div>
    </div>
  </div>
);

const ClassManagement = () => (
  <div className="admin-page">
    <div className="admin-page-header">
      <h1 className="admin-page-title">Class Management</h1>
      <p className="admin-page-subtitle">Manage classes and assignments</p>
    </div>
    <div className="admin-page-content">
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        📚 Class management interface coming in Phase 2
      </div>
    </div>
  </div>
);

const ContentLessons = () => (
  <div className="admin-page">
    <div className="admin-page-header">
      <h1 className="admin-page-title">Content Review - Lessons</h1>
      <p className="admin-page-subtitle">Review and approve lesson content</p>
    </div>
    <div className="admin-page-content">
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        📝 Content review interface coming in Phase 3
      </div>
    </div>
  </div>
);

const ContentAssessments = () => (
  <div className="admin-page">
    <div className="admin-page-header">
      <h1 className="admin-page-title">Assessment Management</h1>
      <p className="admin-page-subtitle">Manage school-wide assessments</p>
    </div>
    <div className="admin-page-content">
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        📋 Assessment management coming in Phase 4
      </div>
    </div>
  </div>
);

const SchoolAnalytics = () => (
  <div className="admin-page">
    <div className="admin-page-header">
      <h1 className="admin-page-title">School Performance Analytics</h1>
      <p className="admin-page-subtitle">Overall school metrics and trends</p>
    </div>
    <div className="admin-page-content">
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        📊 Analytics dashboard coming in Phase 5
      </div>
    </div>
  </div>
);

const StudentAnalytics = () => (
  <div className="admin-page">
    <div className="admin-page-header">
      <h1 className="admin-page-title">Student Analytics</h1>
      <p className="admin-page-subtitle">Individual student tracking and insights</p>
    </div>
    <div className="admin-page-content">
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        🎓 Student analytics coming in Phase 5
      </div>
    </div>
  </div>
);

const TeacherAnalytics = () => (
  <div className="admin-page">
    <div className="admin-page-header">
      <h1 className="admin-page-title">Teacher Analytics</h1>
      <p className="admin-page-subtitle">Teacher engagement and performance metrics</p>
    </div>
    <div className="admin-page-content">
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        👨‍🏫 Teacher analytics coming in Phase 5
      </div>
    </div>
  </div>
);

const SystemSettings = () => (
  <div className="admin-page">
    <div className="admin-page-header">
      <h1 className="admin-page-title">System Settings</h1>
      <p className="admin-page-subtitle">School configuration and preferences</p>
    </div>
    <div className="admin-page-content">
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        ⚙️ System settings coming in Phase 7
      </div>
    </div>
  </div>
);

const AdminRouter = () => {
  return (
    <Routes>
      {/* Admin routes - protected with administrator role */}
      <Route path="/" element={
        <ProtectedRoute requiredRole="administrator">
          <AdminLayout />
        </ProtectedRoute>
      }>
        {/* Main admin dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        
        {/* User Management - Coming in Phase 2 */}
        <Route path="users" element={<StudentManagement />} />
        <Route path="users/students" element={<StudentManagement />} />
        <Route path="users/teachers" element={<TeacherManagement />} />
        <Route path="users/classes" element={<ClassManagement />} />
        
        {/* Content Oversight */}
        <Route path="content/lessons" element={<ContentLessons />} />
        <Route path="content/assessments" element={<ContentAssessments />} />
        
        {/* Analytics */}
        <Route path="analytics/school" element={<SchoolAnalytics />} />
        <Route path="analytics/students" element={<StudentAnalytics />} />
        <Route path="analytics/teachers" element={<TeacherAnalytics />} />
        
        {/* Settings */}
        <Route path="settings" element={<SystemSettings />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;