import React from 'react';
import { AlertTriangle, CheckCircle, Info, AlertCircle } from 'lucide-react';
import Modal from './Modal';
import './ConfirmModal.css';

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  type = 'default', // 'default', 'danger', 'success', 'warning', 'info'
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  loading = false
}) => {
  const getIcon = () => {
    switch (type) {
      case 'danger':
        return <AlertTriangle size={48} className=\"icon-danger\" />;
      case 'success':
        return <CheckCircle size={48} className=\"icon-success\" />;
      case 'warning':
        return <AlertCircle size={48} className=\"icon-warning\" />;
      case 'info':
        return <Info size={48} className=\"icon-info\" />;
      default:
        return null;
    }
  };

  const getModalClass = () => {
    switch (type) {
      case 'danger':
        return 'modal-danger';
      case 'success':
        return 'modal-success';
      case 'warning':
        return 'modal-warning';
      case 'info':
        return 'modal-info';
      default:
        return '';
    }
  };

  const footer = (
    <div className=\"confirm-modal-actions\">
      <button 
        className=\"btn btn-secondary\"
        onClick={onClose}
        disabled={loading}
      >
        {cancelText}
      </button>
      <button 
        className={`btn ${type === 'danger' ? 'btn-danger' : 'btn-primary'}`}
        onClick={onConfirm}
        disabled={loading}
      >
        {loading ? 'Processing...' : confirmText}
      </button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size=\"sm\"
      className={`confirm-modal ${getModalClass()}`}
      footer={footer}
      closeOnBackdropClick={!loading}
    >
      <div className=\"confirm-modal-content\">
        {getIcon()}
        <p className=\"confirm-message\">{message}</p>
      </div>
    </Modal>
  );
};

export default ConfirmModal;