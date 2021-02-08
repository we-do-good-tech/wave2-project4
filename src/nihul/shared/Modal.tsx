import React from 'react';
import styled from 'styled-components';
import Modal, { Styles } from 'react-modal';
import check from '../../assets/images/check.svg';
import errorX from '../../assets/images/errorX.svg';

const styles: Styles = {
  overlay: {
    position: 'fixed',
    zIndex: 1000,
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    width: '21%',
    height: '42%',
    background: '#AFD9E3',
    border: '2px solid #FFFFFF',
    boxSizing: 'border-box',
    borderRadius: '30px',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    padding: '20px',
  },
};

const StyledCloseBtn = styled.button`
  position: absolute;
  left: calc(100% - 33px);
  top: -33px;
  border-radius: 50%;
  background: #7d0396;
  border: 4px solid #ffffff;
  box-sizing: border-box;
  width: 66px;
  height: 66px;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #4f015f;
    transition: all 0.2s;
  }
`;

const Styledh3 = styled.h3`
  font-family: Assistant;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 33px;
  text-align: center;
  color: #021b5b;
`;

const StyledImg = styled.img`
  margin: auto;
  display: block;
`;

const StyledModal = ({ ...props }) => {
  const { isOpen, setIsOpen, isError } = props;
  const contents = () => {
    if (!isError) {
      return (
        <div>
          <Styledh3>השינויים נשמרו בהצלחה</Styledh3>
          <StyledImg src={check} alt="success" />
        </div>
      );
    }
    return (
      <div>
        <Styledh3>תקלה בשמירת השינויים</Styledh3>
        <StyledImg src={errorX} alt="success" />
        <Styledh3>אנא נסו שוב</Styledh3>
      </div>
    );
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  Modal.setAppElement('#root');
  return (
    <Modal
      style={styles}
      isOpen={isOpen}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
      shouldCloseOnOverlayClick
      onRequestClose={handleCloseModal}
    >
      <div>
        <StyledCloseBtn onClick={handleCloseModal}>X</StyledCloseBtn>
        {contents()}
      </div>
    </Modal>
  );
};

export default StyledModal;
