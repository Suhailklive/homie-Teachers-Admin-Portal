import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, 
  Search, 
  Settings, 
  LogOut, 
  User, 
  ChevronDown,
  Menu,
  Shield,
  Activity,
  Users,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import './AdminHeader.css';

const AdminHeader = ({ onMenuToggle }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mock admin profile data
  const adminProfile = {
    name: user?.profile?.name || 'Dr. Rajesh Kumar',
    role: 'School Administrator',
    avatar: user?.profile?.avatar || '/avatars/admin.jpg',
    email: user?.profile?.email || 'rajesh.kumar@school.edu',
    department: 'Administration'
  };

  // Mock notifications for admin
  const notifications = [
    {
      id: 1,
      type: 'alert',
      title: 'System Alert',
      message: 'New teacher registration pending approval',
      time: '5 min ago',
      unread: true,
      priority: 'high'
    },
    {
      id: 2,
      type: 'performance',
      title: 'Performance Update',
      message: 'Weekly analytics report is ready',
      time: '1 hour ago',
      unread: true,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'user',
      title: 'User Activity',
      message: '15 new student enrollments today',
      time: '2 hours ago',
      unread: false,
      priority: 'low'
    },
    {
      id: 4,
      type: 'content',
      title: 'Content Review',
      message: '3 lessons require approval',
      time: '3 hours ago',
      unread: false,
      priority: 'medium'
    }
  ];

  // Mock quick stats
  const quickStats = [
    { label: 'Total Students', value: '1,247', icon: Users, trend: '+5.2%' },
    { label: 'Active Teachers', value: '89', icon: User, trend: '+2.1%' },
    { label: 'System Health', value: '98%', icon: Activity, trend: '+0.3%' }
  ];

  const handleLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProfileDropdownOpen(false);
    
    // Clear session and redirect
    logout();
    navigate('/login', { replace: true });
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'alert': return '🚨';
      case 'performance': return '📊';
      case 'user': return '👥';
      case 'content': return '📝';
      default: return '🔔';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const unreadNotifications = notifications.filter(n => n.unread).length;

  return (
    <header className="admin-header">
      <div className="header-content">
        {/* Left Section - Menu & Search */}
        <div className="header-left">
          <button 
            className="menu-toggle"
            onClick={onMenuToggle}
          >
            <Menu size={20} />
          </button>

          <div className="header-search">
            <div className="search-container">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search users, content, analytics..."
                className="search-input"
              />
            </div>
          </div>
        </div>

        {/* Center Section - Quick Stats */}
        <div className="header-center">
          <div className="quick-stats">
            {quickStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <stat.icon size={16} className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
                <span className="stat-trend positive">{stat.trend}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Notifications & Profile */}
        <div className="header-right">
          {/* Simple Logout Button */}
          <button 
            className="logout-btn"
            onClick={handleLogout}
            title="Sign Out"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>

          {/* Notifications */}
          <div className="notification-container" ref={notificationRef}>
            <button 
              className="header-action-btn"
              onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)}
            >
              <Bell size={20} />
              {unreadNotifications > 0 && (
                <span className="notification-badge">{unreadNotifications}</span>
              )}
            </button>
            
            {isNotificationDropdownOpen && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h4>Admin Notifications</h4>
                  <span className="notification-count">{notifications.length}</span>
                </div>
                <div className="notification-list">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`notification-item ${notification.unread ? 'unread' : ''}`}
                    >
                      <div className="notification-icon">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="notification-content">
                        <div className="notification-title">{notification.title}</div>
                        <div className="notification-message">{notification.message}</div>
                        <div className="notification-time">{notification.time}</div>
                      </div>
                      <div 
                        className="notification-priority"
                        style={{ background: getPriorityColor(notification.priority) }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="notification-footer">
                  <button className="btn btn-sm btn-ghost">View All</button>
                  <button className="btn btn-sm btn-ghost">Mark All Read</button>
                </div>
              </div>
            )}
          </div>

          {/* Admin Profile */}
          <div className="profile-container" ref={profileRef}>
            <button 
              className="profile-trigger"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <div className="profile-info">
                <div className="avatar">
                  <img 
                    src={adminProfile.avatar} 
                    alt={adminProfile.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="avatar-fallback" style={{ display: 'none' }}>
                    <Shield size={20} />
                  </div>
                </div>
                <div className="profile-text">
                  <div className="profile-name">{adminProfile.name}</div>
                  <div className="profile-role">{adminProfile.role}</div>
                </div>
              </div>
              <ChevronDown size={16} />
            </button>
            
            {isProfileDropdownOpen && (
              <div className="profile-dropdown">
                <div className="profile-dropdown-header">
                  <div className="avatar avatar-lg">
                    <img 
                      src={adminProfile.avatar} 
                      alt={adminProfile.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="avatar-fallback" style={{ display: 'none' }}>
                      <Shield size={24} />
                    </div>
                  </div>
                  <div>
                    <div className="profile-name">{adminProfile.name}</div>
                    <div className="profile-role">{adminProfile.role}</div>
                    <div className="profile-email">{adminProfile.email}</div>
                  </div>
                </div>
                <div className="profile-dropdown-menu">
                  <div className="select-item">
                    <User size={16} />
                    Profile Settings
                  </div>
                  <div className="select-item">
                    <Settings size={16} />
                    System Settings
                  </div>
                  <div className="select-item">
                    <Activity size={16} />
                    Activity Log
                  </div>
                  <button 
                    className="select-item text-error" 
                    onClick={handleLogout}
                    style={{ 
                      width: '100%', 
                      border: 'none', 
                      background: 'none', 
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;