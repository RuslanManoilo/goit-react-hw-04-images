import Modal from 'react-modal';
import { ImgModal } from './Modal.styled';
Modal.setAppElement('#root');

const customStyles = {
  content: {
    maxWidth: '64%',
    maxHeight: '86%',
    margin: 'auto',
    inset: '1px',
    padding: '0',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    zIndex: '1200',
  },
};

export const ItemModal = ({isModalOpen, closeModal, largeImage}) => {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <ImgModal src={largeImage} alt="" width={480} />
        </Modal>
    );
};