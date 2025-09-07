import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '',
  header,
  title,
  actions,
  footer,
  variant = 'default',
  padding = 'default',
  ...props 
}) => {
  const cardClasses = `
    card 
    card-${variant}
    card-padding-${padding}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={cardClasses} {...props}>
      {(header || title || actions) && (
        <div className="card-header">
          {header && header}
          {title && <h3 className="card-title">{title}</h3>}
          {actions && <div className="card-actions">{actions}</div>}
        </div>
      )}
      
      <div className="card-content">
        {children}
      </div>
      
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;