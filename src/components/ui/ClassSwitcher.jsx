import React, { useState } from 'react';
import { ChevronDown, Grid3X3, BookOpen, Users, ArrowLeft } from 'lucide-react';
import { useClass } from '../../contexts/ClassContext';
import { scrollToTop } from '../../utils/scrollUtils';
import './ClassSwitcher.css';

const ClassSwitcher = () => {
  const { currentClass, viewMode, classes, selectClass, goToOverview } = useClass();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClassSelect = (classItem) => {
    selectClass(classItem.id);
    setIsDropdownOpen(false);
    // Scroll to top when switching classes
    scrollToTop({ delay: 100 });
  };

  const handleOverviewSelect = () => {
    goToOverview();
    setIsDropdownOpen(false);
    // Scroll to top when switching to overview
    scrollToTop({ delay: 100 });
  };

  const getSubjectIcon = (subject) => {
    switch (subject.toLowerCase()) {
      case 'physics': return '⚛️';
      case 'mathematics': return '📐';
      case 'chemistry': return '🧪';
      case 'biology': return '🔬';
      default: return '📚';
    }
  };

  const getClassStatusColor = (classItem) => {
    if (classItem.averageScore >= 85) return 'excellent';
    if (classItem.averageScore >= 75) return 'good';
    if (classItem.averageScore >= 65) return 'average';
    return 'needs-help';
  };

  return (
    <div className="class-switcher">
      <div className="class-switcher-trigger" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <div className="current-selection">
          {viewMode === 'overview' ? (
            <>
              <div className="selection-icon">
                <Grid3X3 size={18} />
              </div>
              <div className="selection-info">
                <span className="selection-title">All Classes Overview</span>
                <span className="selection-subtitle">{classes.length} classes</span>
              </div>
            </>
          ) : (
            <>
              <div className="selection-icon subject-icon">
                {getSubjectIcon(currentClass.subject)}
              </div>
              <div className="selection-info">
                <span className="selection-title">{currentClass.fullName}</span>
                <span className="selection-subtitle">{currentClass.students} students</span>
              </div>
            </>
          )}
        </div>
        <ChevronDown size={16} className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} />
      </div>

      {isDropdownOpen && (
        <div className="class-switcher-dropdown">
          {/* Overview Option */}
          <div 
            className={`dropdown-item overview-item ${viewMode === 'overview' ? 'active' : ''}`}
            onClick={handleOverviewSelect}
          >
            <div className="item-icon">
              <Grid3X3 size={16} />
            </div>
            <div className="item-info">
              <div className="item-title">All Classes Overview</div>
              <div className="item-subtitle">View summary of all {classes.length} classes</div>
            </div>
            {viewMode === 'overview' && (
              <div className="active-indicator">•</div>
            )}
          </div>

          <div className="dropdown-divider"></div>

          {/* Individual Classes */}
          <div className="dropdown-section">
            <div className="section-header">Individual Classes</div>
            {classes.map((classItem) => (
              <div 
                key={classItem.id}
                className={`dropdown-item class-item ${currentClass?.id === classItem.id ? 'active' : ''}`}
                onClick={() => handleClassSelect(classItem)}
              >
                <div className="item-icon subject-icon">
                  {getSubjectIcon(classItem.subject)}
                </div>
                <div className="item-info">
                  <div className="item-title">{classItem.fullName}</div>
                  <div className="item-subtitle">
                    {classItem.students} students • {classItem.averageScore}% avg
                  </div>
                </div>
                <div className="item-meta">
                  <div className={`status-indicator ${getClassStatusColor(classItem)}`}></div>
                  {currentClass?.id === classItem.id && (
                    <div className="active-indicator">•</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="dropdown-divider"></div>
          <div className="dropdown-actions">
            <button className="btn btn-sm btn-ghost">
              <BookOpen size={14} />
              Create New Class
            </button>
            <button className="btn btn-sm btn-ghost">
              <Users size={14} />
              Manage Students
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isDropdownOpen && (
        <div 
          className="class-switcher-backdrop"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ClassSwitcher;