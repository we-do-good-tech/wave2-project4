import React from 'react';
import Modal from 'react-modal';

const StyledModal = ({ ...props }) => {
  const { isOpen } = props;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>Just a modal!</div>
      </Modal>
    </div>
  );
};

export default StyledModal;
