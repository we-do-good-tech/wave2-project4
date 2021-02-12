import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import check from '../../assets/images/check.svg';
import errorX from '../../assets/images/errorX.svg';

/* const styles: Styles = {

,
}; */

const ModelContant = styled.div`
  position: relative;
  width: 21%;
  height: 42%;
  background: #afd9e3;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 30px;
  outline: none;
  padding: 20px;
  margin: 0 auto;
  top: 20%;
`;

/* const overlay = ` 
  position: fixed,
  zIndex: 1000,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: rgba(0, 0, 0, 0.6),
  display: flex,
  alignItems: center,
  justifyContent: center,
`; */

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
  outline: 0 !important;
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
  margin: 0 auto;
  display: block;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

const StyledModal = ({ ...props }) => {
  const { isOpen, setIsOpen, isError } = props;
  const contents = () => {
    if (!isError) {
      return (
        <StyledBody>
          <Styledh3>השינויים נשמרו בהצלחה</Styledh3>
          <StyledImg src={check} alt="success" />
        </StyledBody>
      );
    }
    return (
      <StyledBody>
        <Styledh3>תקלה בשמירת השינויים</Styledh3>
        <StyledImg src={errorX} alt="success" />
        <Styledh3>אנא נסו שוב</Styledh3>
      </StyledBody>
    );
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal show={isOpen} onHide={handleCloseModal} dialogAs={ModelContant} centered>
      <StyledCloseBtn onClick={handleCloseModal}>X</StyledCloseBtn>
      {contents()}
    </Modal>
  );
};

export default StyledModal;
