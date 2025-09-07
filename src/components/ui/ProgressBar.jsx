import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ 
  value = 0, 
  max = 100, 
  size = 'md', // 'sm', 'md', 'lg'
  variant = 'primary', // 'primary', 'success', 'warning', 'error', 'info'
  showLabel = false,
  label,
  animated = false,
  className = ''
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'progress-sm';
      case 'lg': return 'progress-lg';
      default: return 'progress-md';
    }
  };
  
  const getVariantClass = () => {
    switch (variant) {
      case 'success': return 'progress-success';
      case 'warning': return 'progress-warning';
      case 'error': return 'progress-error';
      case 'info': return 'progress-info';
      default: return 'progress-primary';
    }
  };
  
  return (
    <div className={`progress-container ${className}`}>
      {showLabel && (
        <div className="progress-label">
          <span>{label || `${Math.round(percentage)}%`}</span>
          <span className="progress-value">{value}/{max}</span>
        </div>
      )}
      <div className={`progress-bar ${getSizeClass()}`}>
        <div 
          className={`progress-fill ${getVariantClass()} ${animated ? 'animated' : ''}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        >
          {!showLabel && (
            <span className="progress-text">{Math.round(percentage)}%</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;