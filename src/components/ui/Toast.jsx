import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import './Toast.css';

const Toast = ({ 
  id,
  type = 'info', // 'success', 'error', 'warning', 'info'
  title,
  message,
  duration = 5000,
  onClose
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} />;
      case 'error':
        return <AlertCircle size={20} />;
      case 'warning':
        return <AlertTriangle size={20} />;
      case 'info':
      default:
        return <Info size={20} />;
    }
  };

  return (
    <div className={`toast toast-${type}`}>
      <div className=\"toast-icon\">
        {getIcon()}
      </div>
      <div className=\"toast-content\">
        {title && <div className=\"toast-title\">{title}</div>}
        {message && <div className=\"toast-message\">{message}</div>}
      </div>
      <button 
        className=\"toast-close\"
        onClick={() => onClose(id)}
        aria-label=\"Close notification\"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;
"