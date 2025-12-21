import { useEffect } from 'react';
import 'styles/Modal.css';
import XIcon from 'assets/x.svg';
import BackIcon from 'assets/back.svg';

const Modal = ({children, isModalOpen, closeModal, prevStep, showBack}) => {

  useEffect(() => {
    if(isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

  }, [isModalOpen]);

  const handleBackClick = () => {
    
  }

  const handleCloseClick = () => {
    
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
          <div className="modal-header">
          <div className="modal-header-start">
            <img src={BackIcon} alt="back btn" onClick={handleBackClick}/>
          </div>
          <div className="modal-header-center">

          </div>
          <div className="modal-header-end">
            <img src={XIcon} alt="X btn" onClick={handleCloseClick}/>
          </div>
        </div>
        <div className="modal-step">

        </div>
        <div className="modal-content">
          {children}
        </div>
        <div className="modal-footer">

        </div>
      </div>
    </div>
  );
}

export default Modal;