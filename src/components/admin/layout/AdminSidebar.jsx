import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  FileText, 
  BarChart3, 
  Settings, 
  School, 
  UserCheck,
  Calendar,
  TrendingUp,
  Shield,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { scrollToTop } from '../../../utils/scrollUtils';
import './AdminSidebar.css';

const AdminSidebar = ({ isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({
    users: false,
    content: false,
    analytics: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin/dashboard',
      description: 'School overview & quick actions'
    },
    {
      id: 'users',
      label: 'User Management',
      icon: Users,
      expandable: true,
      children: [
        {
          id: 'students',
          label: 'Students',
          icon: UserCheck,
          path: '/admin/users/students',
          description: 'Manage student accounts'
        },
        {
          id: 'teachers',
          label: 'Teachers',
          icon: School,
          path: '/admin/users/teachers',
          description: 'Manage teacher accounts'
        },
        {
          id: 'classes',
          label: 'Classes',
          icon: BookOpen,
          path: '/admin/users/classes',
          description: 'Class assignments & management'
        }
      ]
    },
    {
      id: 'content',
      label: 'Content Oversight',
      icon: FileText,
      expandable: true,
      children: [
        {
          id: 'lessons',
          label: 'Lessons',
          icon: BookOpen,
          path: '/admin/content/lessons',
          description: 'Review lesson content'
        },
        {
          id: 'assessments',
          label: 'Assessments',
          icon: Calendar,
          path: '/admin/content/assessments',
          description: 'Manage school-wide assessments'
        }
      ]
    },
    {
      id: 'analytics',
      label: 'Analytics & Reports',
      icon: BarChart3,
      expandable: true,
      children: [
        {
          id: 'school-analytics',
          label: 'School Performance',
          icon: TrendingUp,
          path: '/admin/analytics/school',
          description: 'Overall school metrics'
        },
        {
          id: 'student-analytics',
          label: 'Student Analytics',
          icon: Users,
          path: '/admin/analytics/students',
          description: 'Individual student tracking'
        },
        {
          id: 'teacher-analytics',
          label: 'Teacher Analytics',
          icon: School,
          path: '/admin/analytics/teachers',
          description: 'Teacher engagement metrics'
        }
      ]
    },
    {
      id: 'settings',
      label: 'System Settings',
      icon: Settings,
      path: '/admin/settings',
      description: 'School configuration & preferences'
    }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const isActiveSection = (section) => {
    if (section.children) {
      return section.children.some(child => isActivePath(child.path));
    }
    return isActivePath(section.path);
  };

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      // Scroll to top when navigating
      scrollToTop({ delay: 150 });
    }
  };

  const renderNavItem = (item, isChild = false) => {
    const isActive = isActivePath(item.path);
    const hasActiveChild = item.children && item.children.some(child => isActivePath(child.path));
    const isExpanded = expandedSections[item.id];

    return (
      <div key={item.id} className={`nav-item ${isChild ? 'nav-child' : ''}`}>
        <div
          className={`nav-link ${isActive || hasActiveChild ? 'active' : ''}`}
          onClick={() => {
            if (item.expandable) {
              toggleSection(item.id);
            } else {
              handleNavigation(item.path);
            }
          }}
        >
          <div className="nav-content">
            <item.icon size={18} className="nav-icon" />
            <div className="nav-text">
              <span className="nav-label">{item.label}</span>
              {item.description && (
                <span className="nav-description">{item.description}</span>
              )}
            </div>
          </div>
          {item.expandable && (
            <div className="nav-expand">
              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </div>
          )}
        </div>

        {item.children && isExpanded && (
          <div className="nav-children">
            {item.children.map(child => renderNavItem(child, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="admin-logo">
          <Shield size={28} className="logo-icon" />
          <div className="logo-text">
            <span className="brand-name">Admin Portal</span>
            <span className="brand-subtitle">Teachers Portal</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <div className="nav-section-title">Main Navigation</div>
          {navigationItems.map(item => renderNavItem(item))}
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="admin-info">
          <div className="admin-status">
            <div className="status-indicator online"></div>
            <span>System Online</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;