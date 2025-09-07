/**
 * Sidebar Component - Navigation Sidebar
 * 
 * Main navigation sidebar with application routes and quick actions.
 * Includes mobile responsive behavior with overlay and slide-in animation.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.activeItem - Currently active navigation item ID
 * @param {Function} props.onItemClick - Navigation item click handler (itemId, path) => void
 * @param {boolean} props.isOpen - Mobile sidebar open state
 * 
 * @example
 * <Sidebar 
 *   activeItem="dashboard"
 *   onItemClick={(itemId, path) => navigate(path)}
 *   isOpen={sidebarOpen}
 * />
 */
import React from 'react';
import { 
  MessageSquarePlus, 
  BookOpen, 
  BarChart3, 
  Lightbulb, 
  BookMarked,
  Users,
  GraduationCap,
  Bot,
  FileText,
  Mail,
  Target
} from 'lucide-react';
import { scrollToTop } from '../../utils/scrollUtils';
import './Sidebar.css';

const Sidebar = ({ activeItem, onItemClick }) => {
  // Removed student portal items - this is Teachers Portal only
  const quickActions = [
    {
      id: 'new-announcement',
      icon: MessageSquarePlus,
      label: 'New Announcement',
      type: 'action',
      variant: 'primary'
    }
  ];

  const teacherPortalItems = [
    {
      id: 'dashboard',
      icon: BarChart3,
      label: 'Dashboard',
      path: '/dashboard'
    },
    {
      id: 'assessment',
      icon: FileText,
      label: 'Assessment & Results',
      path: '/assessment'
    },
    {
      id: 'ai-tools',
      icon: Bot,
      label: 'AI Tools',
      path: '/ai-tools'
    },
    {
      id: 'talent',
      icon: Target,
      label: 'Student Talent ID',
      path: '/talent'
    },
    {
      id: 'training',
      icon: GraduationCap,
      label: 'Teachers Training',
      path: '/training'
    },
    {
      id: 'reports',
      icon: FileText,
      label: 'Reports',
      path: '/reports'
    },
    {
      id: 'parent-updates',
      icon: Mail,
      label: 'Parents Updates',
      path: '/parent-updates'
    }
  ];

  const bottomItems = [
    {
      id: 'community',
      icon: Users,
      label: 'Community',
      path: '/community'
    }
  ];

  const handleItemClick = (item) => {
    if (item.type === 'action') {
      // Handle action items (like New Chat)
      console.log('Action clicked:', item.id);
    } else {
      // Handle navigation items
      onItemClick?.(item.id, item.path);
      // Scroll to top when navigating
      scrollToTop({ delay: 150 });
    }
  };

  const renderMenuItem = (item, isActive = false) => {
    const Icon = item.icon;
    const itemClasses = `sidebar-item ${
      item.variant === 'primary' ? 'sidebar-item-primary' : 
      (isActive || item.active) ? 'sidebar-item-active' : ''
    }`;

    return (
      <button
        key={item.id}
        className={itemClasses}
        onClick={() => handleItemClick(item)}
      >
        <Icon size={20} className="sidebar-item-icon" />
        <span className="sidebar-item-label">{item.label}</span>
      </button>
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Quick Actions */}
        <div className="sidebar-section">
          {quickActions.map((item) => 
            renderMenuItem(item, activeItem === item.id)
          )}
        </div>

        {/* Main Features */}
        <div className="sidebar-section">
          {teacherPortalItems.map((item) => 
            renderMenuItem(item, activeItem === item.id)
          )}
        </div>

        {/* Bottom Section */}
        <div className="sidebar-section sidebar-section-bottom">
          {bottomItems.map((item) => 
            renderMenuItem(item, activeItem === item.id)
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;