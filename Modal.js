import React from 'react';
import './Modal.css'; // Make sure to create this CSS file for modal styling

const Modal = ({ isVisible, onClose, message, onConfirm }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Fermer</button>
        {/* {onConfirm && <button onClick={onConfirm}>Confirmer</button>} */}
      </div>
    </div>
  );
};

export default Modal;
