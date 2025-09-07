import React from 'react';
import './Input.css';

const Input = ({ 
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  error,
  helperText,
  required = false,
  icon,
  iconPosition = 'left',
  size = 'md',
  variant = 'default',
  className = '',
  ...props 
}) => {
  const inputClasses = `
    input 
    input-${size}
    input-${variant}
    ${error ? 'input-error' : ''}
    ${disabled ? 'input-disabled' : ''}
    ${icon ? `input-with-icon input-icon-${iconPosition}` : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      
      <div className="input-container">
        {icon && iconPosition === 'left' && (
          <div className="input-icon input-icon-left">
            {icon}
          </div>
        )}
        
        <input
          id={inputId}
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="input-icon input-icon-right">
            {icon}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <div className={`input-message ${error ? 'input-message-error' : 'input-message-helper'}`}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};

export default Input;