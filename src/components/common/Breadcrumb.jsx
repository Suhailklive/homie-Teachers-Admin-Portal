/**
 * Breadcrumb Component - Dynamic Navigation Breadcrumbs
 * 
 * Automatically generates breadcrumb navigation based on current route using React Router.
 * Responsive design with mobile optimization and touch-friendly interactions.
 * 
 * @component
 * @example
 * <Breadcrumb />
 * 
 * Features:
 * - Automatic route detection using useLocation
 * - Customizable icons for different routes
 * - Home icon for dashboard
 * - Responsive design with mobile truncation
 * - Accessibility with proper ARIA labels
 */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumb.css';

const Breadcrumb = ({ customPaths = {} }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Define route names mapping
  const routeNames = {
    dashboard: 'Dashboard',
    assessment: 'Assessment & Results',
    'ai-tools': 'AI Tools',
    talent: 'Student Talent',
    training: 'Teacher Training',
    community: 'Community',
    reports: 'Reports',
    'parent-updates': 'Parent Updates',
    ...customPaths
  };

  // Define route icons mapping
  const routeIcons = {
    dashboard: '📊',
    assessment: '📝',
    'ai-tools': '🤖',
    talent: '⭐',
    training: '🎓',
    community: '👥',
    reports: '📊',
    'parent-updates': '✉️'
  };

  const breadcrumbItems = [
    {
      label: 'Home',
      path: '/dashboard',
      icon: <Home size={14} />
    }
  ];

  // Build breadcrumb path
  let accumulatedPath = '';
  pathnames.forEach((pathname, index) => {
    accumulatedPath += `/${pathname}`;
    const isLast = index === pathnames.length - 1;
    
    breadcrumbItems.push({
      label: routeNames[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' '),
      path: accumulatedPath,
      icon: routeIcons[pathname],
      isLast
    });
  });

  // Don't show breadcrumb if only on dashboard
  if (pathnames.length === 0 || (pathnames.length === 1 && pathnames[0] === 'dashboard')) {
    return null;
  }

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb navigation">
      <ol className="breadcrumb-list">
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="breadcrumb-item">
            {index > 0 && (
              <ChevronRight size={12} className="breadcrumb-separator" aria-hidden="true" />
            )}
            {item.isLast ? (
              <span className="breadcrumb-current" aria-current="page">
                {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="breadcrumb-link">
                {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;