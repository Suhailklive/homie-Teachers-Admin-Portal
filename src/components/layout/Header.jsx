/**
 * Header Component - Main Navigation Header
 * 
 * Provides the top navigation bar with class selection, notifications, and user profile.
 * Responsive design with mobile hamburger menu and breadcrumb integration.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onMenuToggle - Callback function for mobile menu toggle
 * @param {Object} props.currentClass - Currently selected class object with subject property
 * @param {Array} props.classes - Array of available class objects
 * 
 * @example
 * <Header 
 *   onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
 *   currentClass={{ subject: 'Physics' }}
 *   classes={availableClasses}
 * />
 */
import React, { useState } from 'react';
import { ChevronDown, Bell, User, Globe, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ currentClass, onClassChange, classes = [] }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [isChapterDropdownOpen, setIsChapterDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  
  // State for selections
  const [selectedSubject, setSelectedSubject] = useState('Physics');
  const [selectedChapter, setSelectedChapter] = useState('Solar System');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  // Enhanced data with more realistic options
  const subjects = [
    { id: 'physics', name: 'Physics', icon: '⚛️' },
    { id: 'mathematics', name: 'Mathematics', icon: '📐' },
    { id: 'chemistry', name: 'Chemistry', icon: '🧪' },
    { id: 'biology', name: 'Biology', icon: '🔬' },
    { id: 'english', name: 'English', icon: '📚' },
    { id: 'history', name: 'History', icon: '🏛️' }
  ];
  
  const chaptersBySubject = {
    physics: ['Solar System', 'Light and Reflection', 'Motion and Force', 'Sound Waves', 'Heat and Temperature'],
    mathematics: ['Algebra Basics', 'Geometry', 'Statistics', 'Probability', 'Trigonometry'],
    chemistry: ['Atoms and Molecules', 'Chemical Reactions', 'Acids and Bases', 'Metals and Non-metals'],
    biology: ['Life Processes', 'Human Body Systems', 'Heredity and Evolution', 'Environment'],
    english: ['Grammar Fundamentals', 'Creative Writing', 'Literature Analysis', 'Communication Skills'],
    history: ['Ancient Civilizations', 'Medieval Period', 'Modern History', 'World Wars']
  };
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', flag: '🇮🇳' },
    { code: 'gu', name: 'Gujarati', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
    { code: 'te', name: 'Telugu', flag: '🇮🇳' }
  ];
  
  // Mock notifications
  const notifications = [
    {
      id: 1,
      type: 'assignment',
      title: 'New Assignment Submitted',
      message: 'Arjun Sharma submitted Physics Assignment #3',
      time: '5 min ago',
      unread: true
    },
    {
      id: 2,
      type: 'grade',
      title: 'AI Grading Complete',
      message: 'Math Quiz #2 has been auto-graded for 7A',
      time: '15 min ago',
      unread: true
    },
    {
      id: 3,
      type: 'message',
      title: 'Parent Message',
      message: 'Mrs. Patel inquired about homework',
      time: '1 hour ago',
      unread: false
    }
  ];

  const getCurrentChapters = () => {
    const subjectKey = subjects.find(s => s.name === selectedSubject)?.id || 'physics';
    return chaptersBySubject[subjectKey] || chaptersBySubject.physics;
  };
  
  const getCurrentLanguage = () => {
    return languages.find(l => l.name === selectedLanguage) || languages[0];
  };
  
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'assignment': return '📝';
      case 'grade': return '📊';
      case 'message': return '💬';
      default: return '🔔';
    }
  };

  const teacherProfile = {
    name: user?.profile?.name || 'Unknown User',
    role: user?.role === 'administrator' ? 'Administrator' : user?.profile?.department + ' Teacher' || 'Teacher',
    avatar: user?.profile?.avatar || '/avatars/teacher.jpg',
    email: user?.profile?.email || 'user@school.edu',
    classes: user?.profile?.classes || []
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleDropdown = (dropdown) => {
    // Close all dropdowns first
    setIsSubjectDropdownOpen(false);
    setIsChapterDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
    setIsProfileDropdownOpen(false);
    setIsNotificationDropdownOpen(false);

    // Open the specific dropdown
    switch (dropdown) {
      case 'subject':
        setIsSubjectDropdownOpen(true);
        break;
      case 'chapter':
        setIsChapterDropdownOpen(true);
        break;
      case 'language':
        setIsLanguageDropdownOpen(true);
        break;
      case 'profile':
        setIsProfileDropdownOpen(true);
        break;
      case 'notifications':
        setIsNotificationDropdownOpen(true);
        break;
    }
  };
  
  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject.name);
    setSelectedChapter(chaptersBySubject[subject.id]?.[0] || 'Select Chapter');
    setIsSubjectDropdownOpen(false);
    // Call parent callback if provided
    if (onClassChange) {
      onClassChange({ subject: subject.name, chapter: chaptersBySubject[subject.id]?.[0] });
    }
  };
  
  const handleChapterChange = (chapter) => {
    setSelectedChapter(chapter);
    setIsChapterDropdownOpen(false);
    // Call parent callback if provided
    if (onClassChange) {
      onClassChange({ subject: selectedSubject, chapter });
    }
  };
  
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.name);
    setIsLanguageDropdownOpen(false);
    // You could add language change logic here
    console.log('Language changed to:', language.name);
  };
  
  const unreadNotifications = notifications.filter(n => n.unread).length;

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo and Brand */}
        <div className="header-brand">
          <div className="brand-logo">
            <div className="logo-container">
              <span className="logo-icon">🏠</span>
              <div className="brand-info">
                <span className="brand-text">Homie AI</span>
                <span className="portal-indicator">Teachers Portal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subject and Chapter Dropdowns */}
        <div className="header-navigation">
          {/* Subject Dropdown */}
          <div className="select">
            <button 
              className="select-trigger"
              onClick={() => toggleDropdown('subject')}
            >
              <span className="subject-with-icon">
                <span className="subject-icon">{subjects.find(s => s.name === selectedSubject)?.icon}</span>
                {selectedSubject}
              </span>
              <ChevronDown size={16} />
            </button>
            {isSubjectDropdownOpen && (
              <div className="select-content">
                {subjects.map((subject) => (
                  <div 
                    key={subject.id} 
                    className={`select-item ${selectedSubject === subject.name ? 'selected' : ''}`}
                    onClick={() => handleSubjectChange(subject)}
                  >
                    <span className="subject-icon">{subject.icon}</span>
                    {subject.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chapter Dropdown */}
          <div className="select">
            <button 
              className="select-trigger"
              onClick={() => toggleDropdown('chapter')}
            >
              <span>{selectedChapter}</span>
              <ChevronDown size={16} />
            </button>
            {isChapterDropdownOpen && (
              <div className="select-content">
                {getCurrentChapters().map((chapter) => (
                  <div 
                    key={chapter} 
                    className={`select-item ${selectedChapter === chapter ? 'selected' : ''}`}
                    onClick={() => handleChapterChange(chapter)}
                  >
                    {chapter}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side - Notifications, Language, Profile */}
        <div className="header-actions">
          {/* Notification Bell */}
          <div className="notification-container">
            <button 
              className="header-action-btn"
              onClick={() => toggleDropdown('notifications')}
            >
              <Bell size={20} />
              {unreadNotifications > 0 && (
                <span className="notification-badge">{unreadNotifications}</span>
              )}
            </button>
            {isNotificationDropdownOpen && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h4>Notifications</h4>
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

          {/* Language Selector */}
          <div className="header-language">
            <div className="select">
              <button 
                className="select-trigger select-trigger-compact language-trigger"
                onClick={() => toggleDropdown('language')}
              >
                <span className="flag-icon">{getCurrentLanguage().flag}</span>
                <span className="language-text">{selectedLanguage}</span>
                <ChevronDown size={14} />
              </button>
              {isLanguageDropdownOpen && (
                <div className="select-content language-dropdown">
                  {languages.map((language) => (
                    <div 
                      key={language.code} 
                      className={`select-item ${selectedLanguage === language.name ? 'selected' : ''}`}
                      onClick={() => handleLanguageChange(language)}
                    >
                      <span className="flag-icon">{language.flag}</span>
                      {language.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* User Profile */}
          <div className="select">
            <button 
              className="profile-trigger"
              onClick={() => toggleDropdown('profile')}
            >
              <div className="profile-info">
                <div className="avatar">
                  <img 
                    src={teacherProfile.avatar} 
                    alt={teacherProfile.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="avatar-fallback" style={{ display: 'none' }}>
                    <User size={20} />
                  </div>
                </div>
                <div className="profile-text">
                  <div className="profile-name">{teacherProfile.name}</div>
                  <div className="profile-role">{teacherProfile.role}</div>
                </div>
              </div>
              <ChevronDown size={16} />
            </button>
            {isProfileDropdownOpen && (
              <div className="select-content profile-dropdown">
                <div className="profile-dropdown-header">
                  <div className="avatar avatar-lg">
                    <img 
                      src={teacherProfile.avatar} 
                      alt={teacherProfile.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="avatar-fallback" style={{ display: 'none' }}>
                      <User size={24} />
                    </div>
                  </div>
                  <div>
                    <div className="profile-name">{teacherProfile.name}</div>
                    <div className="profile-role">{teacherProfile.role}</div>
                  </div>
                </div>
                <div className="profile-dropdown-menu">
                  <div className="select-item">Profile Settings</div>
                  <div className="select-item">My Classes</div>
                  <div className="select-item">Help & Support</div>
                  <div className="select-item text-error" onClick={handleLogout}>
                    <LogOut size={16} />
                    Sign Out
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;