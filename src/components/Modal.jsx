import { useEffect } from 'react';
import 'styles/Modal.css';
import { ReactComponent as XIcon } from 'assets/x.svg';
import { ReactComponent as BackIcon } from 'assets/back.svg';

const Modal = ({children, isModalOpen, closeModal, prevStep, showBack, theme = 'black'}) => {

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
    closeModal();
  }

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box" data-theme={theme}>
          <div className="modal-header">
          <div className="modal-header-start">
            {showBack && <BackIcon className="modal-icon" onClick={handleBackClick}/>}
          </div>
          <div className="modal-header-center">

          </div>
          <div className="modal-header-end">
            <XIcon className="modal-icon" onClick={handleCloseClick}/>
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