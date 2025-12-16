import '@/styles/Modal.css';
import XLogo from '@/assets/x.svg';

const Modal = ({isOpen, isClose, children}) => {
  if(!isOpen)
    return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
      <button onClick={isClose}>
        {XLogo}
      </button>
    </div>
  );
}

export default Modal;