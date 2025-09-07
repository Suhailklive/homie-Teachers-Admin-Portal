import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProtectedRoute from '../components/layout/ProtectedRoute';
import AdminRouter from './AdminRouter';

// Import all page components
import Dashboard from '../pages/dashboard/Dashboard';
import Assessment from '../pages/assessment/Assessment';
import AITools from '../pages/ai-tools/AITools';
import StudentTalent from '../pages/talent/StudentTalent';
import TeacherTraining from '../pages/training/TeacherTraining';
import Community from '../pages/community/Community';
import Reports from '../pages/reports/Reports';
import ParentUpdates from '../pages/parent-updates/ParentUpdates';
import Login from '../pages/auth/Login';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public route - Login */}
      <Route path="/login" element={<Login />} />
      
      {/* Admin routes */}
      <Route path="/admin/*" element={<AdminRouter />} />
      
      {/* Protected teacher routes wrapped in Layout */}
      <Route path="/" element={
        <ProtectedRoute requiredRole="teacher">
          <Layout />
        </ProtectedRoute>
      }>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="ai-tools" element={<AITools />} />
        <Route path="talent" element={<StudentTalent />} />
        <Route path="training" element={<TeacherTraining />} />
        <Route path="community" element={<Community />} />
        <Route path="reports" element={<Reports />} />
        <Route path="parent-updates" element={<ParentUpdates />} />
      </Route>

      {/* Catch-all route for 404 - redirect to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;