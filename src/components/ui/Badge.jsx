import React from 'react';
import { X } from 'lucide-react';
import './Badge.css';

const Badge = ({ 
  children, 
  variant = 'default', // 'default', 'primary', 'success', 'warning', 'error', 'info'
  size = 'md', // 'sm', 'md', 'lg'
  outline = false,
  removable = false,
  onRemove,
  icon,
  className = '',
  ...props
}) => {
  const getVariantClass = () => {
    if (outline) {
      switch (variant) {
        case 'primary': return 'badge-outline-primary';
        case 'success': return 'badge-outline-success';
        case 'warning': return 'badge-outline-warning';
        case 'error': return 'badge-outline-error';
        case 'info': return 'badge-outline-info';
        default: return 'badge-outline-default';
      }
    } else {
      switch (variant) {
        case 'primary': return 'badge-primary';
        case 'success': return 'badge-success';
        case 'warning': return 'badge-warning';
        case 'error': return 'badge-error';
        case 'info': return 'badge-info';
        default: return 'badge-default';
      }
    }
  };
  
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'badge-sm';
      case 'lg': return 'badge-lg';
      default: return 'badge-md';
    }
  };
  
  return (
    <span 
      className={`badge ${getVariantClass()} ${getSizeClass()} ${className}`}
      {...props}
    >
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-text">{children}</span>
      {removable && (
        <button 
          className="badge-remove"
          onClick={onRemove}
          aria-label="Remove badge"
        >
          <X size={12} />
        </button>
      )}
    </span>
  );
};

export default Badge;
