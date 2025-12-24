import { createContext, useContext, useState } from 'react';
import Modal from 'components/Modal';
import LoginFlow from 'modals/LoginModalFlow/LoginFlow';

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const [modalType, setModalType] = useState(null);
  const [step, setStep] = useState(1);
  const [modalData, setModalData] = useState({});

  const openModal = (type) => {
    setModalType(type);
    setStep(1);
    setModalData({});
  }

  const closeModal = () => {
    setModalType(null);
    setStep(1);
    setModalData({});
  }

  const prevStep = () => {
    setStep(prev => Math.max(prev- 1, 1));
    console.log("다음 단계");
  }

  const nextStep = (data = {}) => {
    setStep(prev => prev + 1);
    setModalData(prev => ({...prev, ...data}));
  }

  return (
    <ModalContext.Provider value={{ modalType, step, modalData, openModal, closeModal, prevStep, nextStep }}>
      {children}
      <Modal 
        isModalOpen={modalType}
        openModal={openModal}
        closeModal={closeModal}
        prevStep={prevStep}
        nextStep={nextStep}
        showBack={step > 1}
      >
        <ModalContent/>
      </Modal>
    </ModalContext.Provider> 
  );
}

const ModalContent = () => {
  const { modalType } = useModal();
  switch(modalType) {
    case 'Login':
      return <LoginFlow/>
    default:
      return null;
  }
}

export const useModal = () => useContext(ModalContext);