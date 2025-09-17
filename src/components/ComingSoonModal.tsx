import React from 'react';
import { FaTimes, FaRocket } from 'react-icons/fa';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature?: string;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ 
  isOpen, 
  onClose, 
  feature = "This feature" 
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-body">
          <div className="modal-icon">
            <FaRocket />
          </div>
          
          <h2 className="modal-title">Coming Soon!</h2>
          
          <p className="modal-description">
            {feature} is currently under development. 
            We're working hard to bring you amazing new features!
          </p>
          <button className="modal-notify-btn" onClick={onClose}>
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;